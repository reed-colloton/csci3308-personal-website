# Move HTML files and update paths
_Exported on 9/11/2025 at 18:17:28 MDT from Cursor (1.5.11)_

---

**User**

move html files to the views folder and update relative paths

---

**Cursor**

I'll first read the HTML files to see current asset/link paths, then move them to `submission/views` and update the paths accordingly.

I'll move the four HTML files into `submission/views` and update their asset links (CSS, images, favicon, PDF) to point to `../resources/...`. Then I’ll save the edits.

I'll open the moved HTML files to update their asset paths to point to `../resources/...`, then save the edits.

I'll update the asset paths in the moved HTML files to reference `../resources/...` and the image/PDF paths accordingly.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Personal Website</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="../resources/css/style.css">
  
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
        <img class="img-fluid rounded-circle profile-img" src="../resources/img/me.jpeg" alt="My profile photo" onerror="this.onerror=null;this.src='https://via.placeholder.com/300x300.png?text=Your+Photo';">
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
  <title>Hobbies – Reed Colloton</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="css/style.css">
  
</head>
<body>
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
  <link rel="stylesheet" href="../resources/css/style.css">
  
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
    <h1 class="h3 mb-4">Projects</h1>

    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 project-card">
          <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200&auto=format&fit=crop" class="card-img-top" alt="Project 1 placeholder image">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Photo Portfolio Site</h5>
            <p class="card-text">A responsive gallery built with Bootstrap grid and lazy-loaded images to showcase landscape photography.</p>
            <div class="mt-auto">
              <a href="#" class="btn btn-sm btn-primary"><i class="fa-solid fa-arrow-up-right-from-square me-1"></i>Live</a>
              <a href="#" class="btn btn-sm btn-outline-secondary ms-2"><i class="fab fa-github me-1"></i>Code</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 project-card">
          <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop" class="card-img-top" alt="Project 2 placeholder image">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Task Tracker App</h5>
            <p class="card-text">A simple CRUD web app tracking tasks with categories and due dates; built using vanilla JS and Bootstrap components.</p>
            <div class="mt-auto">
              <a href="#" class="btn btn-sm btn-primary"><i class="fa-solid fa-arrow-up-right-from-square me-1"></i>Live</a>
              <a href="#" class="btn btn-sm btn-outline-secondary ms-2"><i class="fab fa-github me-1"></i>Code</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 project-card">
          <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop" class="card-img-top" alt="Project 3 placeholder image">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Data Viz Dashboard</h5>
            <p class="card-text">Interactive charts and KPIs with responsive cards using the Bootstrap grid and utilities for spacing and layout.</p>
            <div class="mt-auto">
              <a href="#" class="btn btn-sm btn-primary"><i class="fa-solid fa-arrow-up-right-from-square me-1"></i>Live</a>
              <a href="#" class="btn btn-sm btn-outline-secondary ms-2"><i class="fab fa-github me-1"></i>Code</a>
            </div>
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
  <title>Resume - Reed Colloton</title>
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
            <a class="nav-link" href="hobbies.html">Hobbies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="projects.html">Projects</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" aria-label="Resume">
              <i class="fa-solid fa-file-lines"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="container py-5">
    <div class="row">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-borderless align-middle">
            <tbody>
              <tr>
                <td colspan="2" class="pb-3">
                  <h1 class="h4 mb-1">Reed Colloton</h1>
                  <div class="text-muted small">
                    415.914.5311 |
                    <a href="mailto:reedcolloton@gmail.com">reedcolloton@gmail.com</a> |
                    <a href="https://www.linkedin.com/in/reed-colloton">linkedin.com/in/reed-colloton</a> |
                    Mill Valley, California
                  </div>
                  <div class="mt-3">
                    <a class="btn btn-primary" href="../resources/Reed%20Colloton%20Resume.pdf" target="_blank" download="Reed Colloton Resume.pdf" rel="noopener">
                      <i class="fa-solid fa-file-arrow-down me-2"></i>Download PDF
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row" style="width: 220px;">Professional Summary</th>
                <td>
                  Backend-leaning applied AI/software engineer and CS student (GPA 3.7, May 2026) with 3+ years building APIs and distributed, LLM-powered services. At Deloitte’s Innovation Hub, delivered a ReAct Jira agent with MCP tool-calling and an interview-prep chatbot; at a startup, reduced cost while improving accuracy in an LLM data-extraction pipeline. Excited to help Hive scale secure, high-availability REST APIs.
                </td>
              </tr>

              <tr>
                <th scope="row">Work Experience</th>
                <td>
                  <div class="fw-semibold">AI/ML Intern, Deloitte Innovation Hub – Cairo, Egypt <span class="text-muted">May–Aug 2025</span></div>
                  <ul class="mb-3">
                    <li>Built ReAct agent for Jira to generate sprint reports and update boards/issues using MCP tools.</li>
                    <li>Implemented interview-prep LangGraph chatbot that conducts a mock interview and gives targeted feedback.</li>
                    <li>Deployed AI solutions using GCP Vertex AI and AWS Bedrock.</li>
                    <li>Certified as GCP Associate Cloud Engineer (ACE) during the internship.</li>
                    <li>Participated in all steps of the software development lifecycle (SDLC) on Scrum/Kanban projects.</li>
                  </ul>

                  <div class="fw-semibold">Software Engineer Intern, Joinable (startup) – Mill Valley, CA <span class="text-muted">June–Aug 2024</span></div>
                  <ul class="mb-0">
                    <li>Improved LLM-based event scraper through prompt engineering.</li>
                    <li>Moved scraper to lower-cost LLM while increasing accuracy.</li>
                    <li>Added support for recurring events in event scraper.</li>
                    <li>Fixed bugs in backend code and wrote unit tests.</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th scope="row">Education</th>
                <td>
                  <div class="fw-semibold">University of Colorado, College of Engineering – Boulder, CO <span class="text-muted">Expected Graduation May 2026</span></div>
                  <ul class="mb-3">
                    <li>BA in computer science with a minor in business</li>
                    <li>GPA: 3.7</li>
                    <li>Relevant coursework: machine learning, artificial intelligence, data science, algorithms</li>
                    <li>Projects: Mancala AI</li>
                  </ul>

                  <div class="fw-semibold">Grinnell College – Grinnell, IA <span class="text-muted">2022–2023</span></div>
                  <ul class="mb-0">
                    <li>Pursued BA in computer science</li>
                    <li>GPA: 3.7, ACT: 34</li>
                    <li>Relevant coursework: data structures, object-oriented programming (OOP)</li>
                    <li>Projects: simple blockchain</li>
                    <li>Activities: Intramural basketball team captain</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th scope="row">Skills</th>
                <td>
                  <div><strong>Languages:</strong> Python, Java, C/C++, JavaScript/TypeScript, SQL, assembly</div>
                  <div><strong>AI/ML:</strong> AI/LLM agents, LangGraph, Model Context Protocol (MCP), prompt engineering, OpenAI/Anthropic, NumPy/Pandas, scikit-learn</div>
                  <div><strong>Technical:</strong> FastAPI/Flask, REST, Docker, Git, unit testing, React.js, React Native, Agile development</div>
                  <div><strong>Cloud:</strong> Google Cloud Platform (GCP), App Engine, Cloud Logging, Amazon Web Services (AWS), Lambda, S3, Textract, IAM</div>
                  <div><strong>Certifications:</strong> Associate Cloud Engineer (ACE)</div>
                </td>
              </tr>

              <tr>
                <th scope="row">Projects</th>
                <td>
                  <div class="fw-semibold">MyClipboard.io – Universal clipboard with 2,000+ verified users.</div>
                  <ul class="mb-3">
                    <li>React web app + React Native (iOS/Android) + Chrome extension. Backend on Google App Engine.</li>
                    <li>Implemented authentication, usage analytics, and sync. Link: <a href="https://myclipboard.io/download">myclipboard.io/download</a>.</li>
                  </ul>

                  <div class="fw-semibold">Outside air quality alerts – Wildfire-season monitoring.</div>
                  <ul class="mb-0">
                    <li>Displays air quality warnings based on hyper-local PurpleAir community air quality sensor network.</li>
                    <li>PyQt app running on Raspberry Pi display.</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th scope="row">Interests</th>
                <td>
                  Photography (see <a href="https://reedcolloton.com">reedcolloton.com</a>), backpacking, basketball, Wilderness First Responder (WFR) certified
                </td>
              </tr>
            </tbody>
          </table>
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

I moved the HTML files into `submission/views` and updated their relative paths.

- Updated paths:
  - CSS: `../resources/css/style.css` in all pages
  - Image: `../resources/img/me.jpeg` in `home.html`
  - Favicon: `../resources/img/favicon.ico` in `resume.html`
  - Resume PDF: `../resources/Reed Colloton Resume.pdf` in `resume.html`
- Nav links stay the same (`home.html`, `hobbies.html`, `projects.html`, `resume.html`) since all are now in the same `views` folder.

- If you had `submission/resources/home.html` open, reopen it from `submission/views/home.html`.

- Let me know if you want me to stage and commit these changes.

