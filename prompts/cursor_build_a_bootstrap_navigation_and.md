# Build a Bootstrap navigation and hobby cards
_Exported on 9/11/2025 at 18:16:10 MDT from Cursor (1.5.11)_
GPT-5-thinking
---

**User**

Use the Bootstrap documentation as reference to do the following:

Create a Navigation Bar add links to the Home, Hobbies, and Projects pages.

On the extreme right of the Navigation Bar add an icon, this can be an icon of your choice.

Create a div that will contain all the cards for your hobbies.

Create a horizontal list of min 3 Cards, each representing one of your top interests. In each card, include an image that represents the interest, a title of the interest, and why you like the interest.

tip
Apply the concept of Grids to get the cards in a row.

Add a Footer with all social media links you would like to provide. Include at least one.
Stylize the page using the approaches stated above.

---

**Cursor**

I'll load the existing `home.html`, `hobbies.html`, and `style.css` to see the current structure before adding Bootstrap navbar, cards grid, and footer.

I'll set up a few implementation tasks and start by updating the navbar links in `home.html`, then create `hobbies.html` with a Bootstrap cards grid and footer, and add a stub `projects.html`.

I'll update `home.html` to link to `hobbies.html` and `projects.html`.

I'll update the navbar links in `home.html`, then create `hobbies.html` with a Bootstrap cards grid and footer, add small CSS for card images, and finally create `projects.html`.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Personal Website</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="css/style.css">
  
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="home.html">Reed Colloton</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="home.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="hobbies.html">Hobbies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="projects.html">Projects</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" aria-label="Profile">
              <i class="fa-solid fa-user"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="container py-5">
    <div class="row align-items-center g-4">
      <div class="col-12 col-md-4 text-center">
        <img class="img-fluid rounded-circle profile-img" src="img/me.jpeg" alt="My profile photo" onerror="this.onerror=null;this.src='https://via.placeholder.com/300x300.png?text=Your+Photo';">
      </div>
      <div class="col-12 col-md-8">
        <h1 class="h3 mb-3">Hi, I'm Reed</h1>
        <p class="mb-3">I am a senior CS major with an intrest in photography..</p>
        <a class="btn btn-primary" href="resume.html">View Resume</a>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-dark text-white py-4 mt-auto">
    <div class="container d-flex justify-content-between align-items-center flex-column flex-md-row">
      <div class="mb-2 mb-md-0">© <span id="year"></span> Reed Colloton</div>
      <div class="d-flex gap-3">
        <a class="text-white social-link" href="https://github.com/reed-colloton" aria-label="GitHub"><i class="fab fa-github fa-lg"></i></a>
        <a class="text-white social-link" href="https://www.linkedin.com/in/reed-colloton" aria-label="LinkedIn"><i class="fab fa-linkedin fa-lg"></i></a>
      </div>
    </div>
  </footer>

  <!-- Bootstrap JS (with Popper) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // Update footer year
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>

</body>
</html>

<!-- AI citation
 Model: GPT-5-thinking
 Prompt: Give me a barebones HTML structure for my personal website without adding any additional sections
 Response:<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Personal Website</title>
  <link rel="stylesheet" href="css/style.css">
  
</head>
<body>

</body>
</html>


Model: GPT-5-thinking
Prompt: Use the Bootstrap documentation as reference to do the following:

Create a Navigation Bar add links to the Home, Hobbies, and Projects pages.

On the extreme right of the Navigation Bar add an icon, this can be an icon of your choice.

Add an image of yourself on the page.

Write a short description on the right of the image as shown.

Add a link to the Resume page below the description (this should take you to resume.html).

Add a footer with all social media links you would like to provide. Include at least one. Here's a website that is generally used to download any kind of icons: https://www.flaticon.com/. You can also import icons directly into your HTML using the fontawesome toolkit.

Stylize the page using the approaches stated above.
Response:
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Personal Website</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="css/style.css">
  
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="home.html">Reed Colloton</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="home.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Hobbies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" aria-label="Profile">
              <i class="fa-solid fa-user"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="container py-5">
    <div class="row align-items-center g-4">
      <div class="col-12 col-md-4 text-center">
        <img class="img-fluid rounded-circle profile-img" src="img/me.jpeg" alt="My profile photo" onerror="this.onerror=null;this.src='https://via.placeholder.com/300x300.png?text=Your+Photo';">
      </div>
      <div class="col-12 col-md-8">
        <h1 class="h3 mb-3">Hi, I'm Reed</h1>
        <p class="mb-3">I am a senior CS major with an intrest in photography..</p>
        <a class="btn btn-primary" href="resume.html">View Resume</a>
      </div>
    </div>
  </main>

  <footer class="bg-dark text-white py-4 mt-auto">
    <div class="container d-flex justify-content-between align-items-center flex-column flex-md-row">
      <div class="mb-2 mb-md-0">© <span id="year"></span> Reed Colloton</div>
      <div class="d-flex gap-3">
        <a class="text-white social-link" href="https://github.com/reed-colloton" aria-label="GitHub"><i class="fab fa-github fa-lg"></i></a>
        <a class="text-white social-link" href="https://www.linkedin.com/in/reed-colloton" aria-label="LinkedIn"><i class="fab fa-linkedin fa-lg"></i></a>
      </div>
    </div>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // Update footer year
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>

</body>
</html>
 -->
```

I'll create `hobbies.html` with a Bootstrap navbar (links to Home, Hobbies, Projects and a right-aligned icon), a responsive grid row with three cards inside a container, and a footer with at least one social link. Then I'll add small CSS for card image sizing if needed and create a simple `projects.html`.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hobbies - Reed Colloton</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="css/style.css">
  
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="home.html">Reed Colloton</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="home.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="hobbies.html">Hobbies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="projects.html">Projects</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" aria-label="Camera">
              <i class="fa-solid fa-camera"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="container py-5">
    <h1 class="h3 mb-4">My Top Hobbies</h1>

    <!-- Cards container -->
    <div class="row g-4" id="hobby-cards">
      <!-- Card 1 -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100">
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop" class="card-img-top" alt="Photography camera" loading="lazy">
          <div class="card-body">
            <h5 class="card-title">Photography</h5>
            <p class="card-text">I love capturing candid moments and playing with light and composition.</p>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" class="card-img-top" alt="Coding on a laptop" loading="lazy">
          <div class="card-body">
            <h5 class="card-title">Building Software</h5>
            <p class="card-text">I enjoy designing clean UIs and solving challenging problems in code.</p>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop" class="card-img-top" alt="Hiking trail" loading="lazy">
          <div class="card-body">
            <h5 class="card-title">Hiking</h5>
            <p class="card-text">Being outdoors helps me reset and brings new creative energy.</p>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="bg-dark text-white py-4 mt-auto">
    <div class="container d-flex justify-content-between align-items-center flex-column flex-md-row">
      <div class="mb-2 mb-md-0">© <span id="year"></span> Reed Colloton</div>
      <div class="d-flex gap-3">
        <a class="text-white social-link" href="https://github.com/reed-colloton" aria-label="GitHub"><i class="fab fa-github fa-lg"></i></a>
        <a class="text-white social-link" href="https://www.linkedin.com/in/reed-colloton" aria-label="LinkedIn"><i class="fab fa-linkedin fa-lg"></i></a>
      </div>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>

</body>
</html>


```

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Projects - Reed Colloton</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="css/style.css">
  
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="home.html">Reed Colloton</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="home.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="hobbies.html">Hobbies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="projects.html">Projects</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" aria-label="Code">
              <i class="fa-solid fa-code"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="container py-5">
    <h1 class="h3 mb-3">Projects</h1>
    <p class="text-muted">More to come soon.</p>
  </main>

  <footer class="bg-dark text-white py-4 mt-auto">
    <div class="container d-flex justify-content-between align-items-center flex-column flex-md-row">
      <div class="mb-2 mb-md-0">© <span id="year"></span> Reed Colloton</div>
      <div class="d-flex gap-3">
        <a class="text-white social-link" href="https://github.com/reed-colloton" aria-label="GitHub"><i class="fab fa-github fa-lg"></i></a>
        <a class="text-white social-link" href="https://www.linkedin.com/in/reed-colloton" aria-label="LinkedIn"><i class="fab fa-linkedin fa-lg"></i></a>
      </div>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>

</body>
</html>


```

- I created a responsive Bootstrap navbar with links to Home, Hobbies, and Projects and added right-aligned icons on all pages.
- I built `hobbies.html` with a Bootstrap grid holding three cards (image, title, reason) in a single row on large screens, stacking responsively on small screens, and added a footer with social links.
- I updated `home.html` navbar links to point to `hobbies.html` and `projects.html`.
- I created `projects.html` with the same navbar/footer and placeholder content.

You can open `submission/resources/hobbies.html` to view the cards and styling.

