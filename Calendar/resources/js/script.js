"use strict";

var events = [];
var nextEventId = 1;
var editingEventId = null;
var editingEventCardEl = null;

function updateLocationOptions(modality) {
  var locationGroup = document.getElementById("group_location");
  var remoteGroup = document.getElementById("group_remote_url");
  var locationInput = document.getElementById("event_location");
  var remoteInput = document.getElementById("event_remote_url");
  var modalitySelect = document.getElementById("event_modality");

  var modalityValue = typeof modality === "string" && modality.length ? modality : (modalitySelect ? modalitySelect.value : "in-person");

  if (!locationGroup || !remoteGroup || !locationInput || !remoteInput) {
    return;
  }

  if (modalityValue === "remote") {
    remoteGroup.classList.remove("d-none");
    remoteGroup.style.display = "block";
    remoteInput.required = true;
    locationGroup.classList.add("d-none");
    locationGroup.style.display = "none";
    locationInput.required = false;
    locationInput.value = "";
  } else {
    locationGroup.classList.remove("d-none");
    locationGroup.style.display = "block";
    locationInput.required = true;
    remoteGroup.classList.add("d-none");
    remoteGroup.style.display = "none";
    remoteInput.required = false;
    remoteInput.value = "";
  }
}

function resetEventForm() {
  var form = document.getElementById("event_form");
  if (!form) return;

  form.reset();

  // Ensure weekday placeholder is selected after reset
  var weekdaySelect = document.getElementById("event_weekday");
  if (weekdaySelect) {
    weekdaySelect.selectedIndex = 0;
  }

  // Ensure category placeholder is selected after reset
  var categorySelect = document.getElementById("event_category");
  if (categorySelect) {
    categorySelect.selectedIndex = 0;
  }

  // Default modality to in-person on create
  var modalitySelect = document.getElementById("event_modality");
  if (modalitySelect) {
    modalitySelect.value = "in-person";
    updateLocationOptions(modalitySelect.value);
  } else {
    updateLocationOptions("in-person");
  }

  // Clear any text inputs explicitly
  ["event_name", "event_time", "event_location", "event_remote_url", "event_attendees"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.value = "";
  });
}

function saveEvent() {
  var form = document.getElementById("event_form");
  if (!form) return;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  var name = (document.getElementById("event_name") || {}).value || "";
  var weekday = (document.getElementById("event_weekday") || {}).value || "";
  var time = (document.getElementById("event_time") || {}).value || "";
  var category = (document.getElementById("event_category") || {}).value || "";
  var modality = (document.getElementById("event_modality") || {}).value || "";
  var location = (document.getElementById("event_location") || {}).value || "";
  var remoteUrl = (document.getElementById("event_remote_url") || {}).value || "";
  var attendees = (document.getElementById("event_attendees") || {}).value || "";

  var normalized = {
    name: name,
    weekday: weekday,
    time: time,
    category: category,
    modality: modality,
    location: modality === "in-person" ? location : null,
    remote_url: modality === "remote" ? remoteUrl : null,
    attendees: attendees
  };

  if (editingEventId != null) {
    var idx = events.findIndex(function (e) { return e.id === editingEventId; });
    if (idx !== -1) {
      var updated = Object.assign({ id: editingEventId }, normalized);
      var wasWeekday = events[idx].weekday;
      events[idx] = updated;
      if (editingEventCardEl) {
        updateEventCardDOM(editingEventCardEl, updated);
        if (wasWeekday !== updated.weekday) {
          var newContainer = document.getElementById(updated.weekday);
          if (newContainer) newContainer.appendChild(editingEventCardEl);
        }
      }
    }
    editingEventId = null;
    editingEventCardEl = null;
  } else {
    var eventDetails = Object.assign({ id: nextEventId++ }, normalized);
    events.push(eventDetails);
    addEventToCalendarUI(eventDetails);
  }

  // Reset the form and close the modal after save
  resetEventForm();
  var modalEl = document.getElementById("event_modal");
  if (modalEl && window.bootstrap && bootstrap.Modal) {
    var modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
    modal.hide();
  }
}

function createEventCard(eventDetails) {
  var event_element = document.createElement("div");
  var categoryClass = getCategoryClass(eventDetails.category);
  event_element.className = "event event-card row rounded m-1 " + categoryClass;
  if (eventDetails.id != null) {
    event_element.dataset.eventId = String(eventDetails.id);
  }

  var info = document.createElement("div");
  info.classList = "col";

  var name = eventDetails.name;
  var time = eventDetails.time;
  var modality = eventDetails.modality;
  var location = eventDetails.location;
  var remoteUrl = eventDetails.remote_url;
  var attendees = eventDetails.attendees;

  info.innerHTML = "\n    <div class=\"fw-semibold\">" + name + "</div>\n    <div class=\"small opacity-75\">" + time + " · " + (modality === "remote" ? "Remote" : "In-Person") + "</div>\n    <div class=\"small\">" + (modality === "remote" ? (remoteUrl || "") : (location || "")) + "</div>\n    <div class=\"small opacity-75\"><span>Attendees:</span> " + attendees + "</div>\n  ";

  event_element.appendChild(info);
  event_element.addEventListener("click", handleEventCardClick);
  return event_element;
}

function getCategoryClass(category) {
  switch (category) {
    case "academic":
      return "category-academic";
    case "work":
      return "category-work";
    case "personal":
      return "category-personal";
    case "health":
      return "category-health";
    case "social":
      return "category-social";
    default:
      return "category-default";
  }
}

function addEventToCalendarUI(eventInfo) {
  if (!eventInfo || !eventInfo.weekday) return;
  var dayContainer = document.getElementById(eventInfo.weekday);
  if (!dayContainer) return;

  var event_card = createEventCard(eventInfo);
  dayContainer.appendChild(event_card);
}

function updateEventCardDOM(cardEl, eventData) {
  // Update category class
  var classesToRemove = [];
  cardEl.classList.forEach(function (cls) { if (cls.indexOf("category-") === 0) classesToRemove.push(cls); });
  classesToRemove.forEach(function (cls) { cardEl.classList.remove(cls); });
  cardEl.classList.add(getCategoryClass(eventData.category));
  cardEl.dataset.eventId = String(eventData.id || "");

  var info = cardEl.querySelector(".col");
  if (!info) {
    info = document.createElement("div");
    info.classList = "col";
    cardEl.appendChild(info);
  }
  var modality = eventData.modality;
  var location = eventData.location;
  var remoteUrl = eventData.remote_url;
  info.innerHTML = "\n    <div class=\"fw-semibold\">" + (eventData.name || "") + "</div>\n    <div class=\"small opacity-75\">" + (eventData.time || "") + " · " + (modality === "remote" ? "Remote" : "In-Person") + "</div>\n    <div class=\"small\">" + (modality === "remote" ? (remoteUrl || "") : (location || "")) + "</div>\n    <div class=\"small opacity-75\"><span>Attendees:</span> " + (eventData.attendees || "") + "</div>\n  ";
}

function handleEventCardClick(evt) {
  var cardEl = evt.currentTarget;
  var id = Number(cardEl && cardEl.dataset ? cardEl.dataset.eventId : "");
  if (!id) return;
  var found = events.find(function (e) { return e.id === id; });
  if (!found) return;

  editingEventId = id;
  editingEventCardEl = cardEl;

  prefillEventForm(found);

  var titleEl = document.getElementById("event_modal_label");
  if (titleEl) titleEl.textContent = "Update Event";

  var modalEl = document.getElementById("event_modal");
  if (modalEl && window.bootstrap && bootstrap.Modal) {
    var modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
    modal.show();
  }
}

function prefillEventForm(eventData) {
  var nameEl = document.getElementById("event_name");
  if (nameEl) nameEl.value = eventData.name || "";
  var weekdayEl = document.getElementById("event_weekday");
  if (weekdayEl) weekdayEl.value = eventData.weekday || "";
  var timeEl = document.getElementById("event_time");
  if (timeEl) timeEl.value = eventData.time || "";
  var categoryEl = document.getElementById("event_category");
  if (categoryEl) categoryEl.value = eventData.category || "";
  var modalityEl = document.getElementById("event_modality");
  if (modalityEl) modalityEl.value = eventData.modality || "in-person";
  updateLocationOptions(eventData.modality || "in-person");
  var locationEl = document.getElementById("event_location");
  var remoteUrlEl = document.getElementById("event_remote_url");
  if ((eventData.modality || "in-person") === "in-person") {
    if (locationEl) locationEl.value = eventData.location || "";
    if (remoteUrlEl) remoteUrlEl.value = "";
  } else {
    if (remoteUrlEl) remoteUrlEl.value = eventData.remote_url || "";
    if (locationEl) locationEl.value = "";
  }
  var attendeesEl = document.getElementById("event_attendees");
  if (attendeesEl) attendeesEl.value = eventData.attendees || "";
}

// Initialize default state and clear form when the modal opens
document.addEventListener("DOMContentLoaded", function () {
  var modalitySelect = document.getElementById("event_modality");
  updateLocationOptions(modalitySelect ? modalitySelect.value : "in-person");

  var modalEl = document.getElementById("event_modal");
  if (modalEl) {
    modalEl.addEventListener("show.bs.modal", function () {
      if (editingEventId == null) {
        resetEventForm();
      }
    });
    modalEl.addEventListener("hidden.bs.modal", function () {
      editingEventId = null;
      editingEventCardEl = null;
      var titleEl = document.getElementById("event_modal_label");
      if (titleEl) titleEl.textContent = "Create / Update Event";
    });
  }
});
