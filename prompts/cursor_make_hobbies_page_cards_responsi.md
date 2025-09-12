# Make hobbies page cards responsive
_Exported on 9/11/2025 at 18:24:18 MDT from Cursor (1.5.11)_

---

**User**

make the hobbies page cards responsive to hover like the projects page is

---

**Cursor**

I'll check how the projects page implements the hover effect and update the hobbies page to match it.

I'm going to update `hobbies.html` so the cards use the same hover effect as the projects page by adding the `project-card` class to each card and fixing the stylesheet path so the hover CSS is applied.

I'll add the `project-card` class to each hobby card so they inherit the same hover transform and shadow as the projects page.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hobbies - Reed Colloton</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="../resources/css/style.css">
  <link rel="icon" type="image/x-icon" href="../resources/img/favicon.ico">
  
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
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hobbies - Reed Colloton</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="icon" type="image/x-icon" href="../resources/img/favicon.ico">
</head>
<body>
  <main class="container py-5">
    <h1 class="h3 mb-4">Hobbies</h1>

    <!-- Cards container -->
    <div class="row g-4" id="hobby-cards">
      <!-- Card 1 -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 project-card">
          <img src="../resources/img/rocks.webp" class="card-img-top" alt="rocks" loading="lazy">
          <div class="card-body">
            <h5 class="card-title">Photography</h5>
            <p class="card-text">I love creating images with my camera that look good and tell a story.</p>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 project-card">
          <img src="../resources/img/food.webp" class="card-img-top" alt="food" loading="lazy">
          <div class="card-body">
            <h5 class="card-title">Cooking</h5>
            <p class="card-text">I enjoy being creative with ingredients and creating something that tastes good.</p>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 project-card">
          <img src="../resources/img/field.webp" class="card-img-top" alt="field" loading="lazy">
          <div class="card-body">
            <h5 class="card-title">Running outdoors</h5>
            <p class="card-text">I enjoy taking a break in nature and getting some exercise.</p>
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

I found the hover effect defined as `.project-card` in `style.css` and added that class to each hobby card.

- Done: Updated `submission/views/hobbies.html` so each `.card` uses `project-card` to inherit the same hover lift and shadow as Projects.

You can refresh the Hobbies page and hover over the cards to see the same effect.

