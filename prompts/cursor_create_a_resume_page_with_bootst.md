# Create a resume page with Bootstrap
_Exported on 9/11/2025 at 18:17:16 MDT from Cursor (1.5.11)_

---

**User**

create a resume page:

Use the Bootstrap documentation as reference to do the following:

Create a Navigation Bar add links to the Home, Hobbies, and Projects pages.

On the extreme right of the Navigation Bar add an icon, this can be an icon of your choice.

Add your resume in your desired format. It could possbly be an HTML table or a series of divs.

Add a footer with all social media links you would like to provide. Include at least one.

Reed Colloton  415.914.5311 | reedcolloton@gmail.com | linkedin.com/in/reed-colloton | Mill Valley, California    PROFESSIONAL SUMMARY  Backend-leaning applied AI/software engineer and CS student (GPA 3.7, May 2026) with 3+ years building APIs and distributed, LLM-powered services. At Deloitte’s Innovation Hub, delivered a ReAct Jira agent with MCP tool-calling and an interview-prep chatbot; at a startup, reduced cost while improving accuracy in an LLM data-extraction pipeline. Excited to help Hive scale secure, high-availability REST APIs.    WORK EXPERIENCE  AI/ML Intern, Deloitte Innovation Hub – Cairo, Egypt                                                                        May–Aug 2025  • Built ReAct agent for Jira to generate sprint reports and update boards/issues using MCP tools.  • Implemented interview-prep LangGraph chatbot that conducts a mock interview and gives targeted feedback.  • Deployed AI solutions using GCP Vertex AI and AWS Bedrock.  • Certified as GCP Associate Cloud Engineer (ACE) during the internship.  • Participated in all steps of the software development lifecycle (SDLC) on Scrum/Kanban projects.    Software Engineer Intern, Joinable (startup) – Mill Valley, CA                                                          June–Aug 2024  • Improved LLM-based event scraper through prompt engineering.  • Moved scraper to lower-cost LLM while increasing accuracy.  • Added support for recurring events in event scraper.  • Fixed bugs in backend code and wrote unit tests.    EDUCATION  University of Colorado, College of Engineering – Boulder, CO                                 Expected Graduation May 2026  • BA in computer science with a minor in business  • GPA: 3.7  • Relevant coursework: machine learning, artificial intelligence, data science, algorithms  • Projects: Mancala AI    Grinnell College – Grinnell, IA                                                                                                                     2022–2023  • Pursued BA in computer science  • GPA: 3.7, ACT: 34  • Relevant coursework: data structures, object-oriented programming (OOP)  • Projects: simple blockchain  • Activities: Intramural basketball team captain     SKILLS  Languages: Python, Java, C/C++, JavaScript/TypeScript, SQL, assembly   AI/ML: AI/LLM agents, LangGraph, Model Context Protocol (MCP), prompt engineering, OpenAI/Anthropic, NumPy/Pandas, scikit-learn   Technical: FastAPI/Flask, REST, Docker, Git, unit testing, React.js, React Native, Agile development  Cloud: Google Cloud Platform (GCP), App Engine, Cloud Logging, Amazon Web Services (AWS), Lambda, S3, Textract, IAM  Certifications: Associate Cloud Engineer (ACE)    PROJECTS    MyClipboard.io – Universal clipboard with 2,000+ verified users.  • React web app + React Native (iOS/Android) + Chrome extension. Backend on Google App Engine.  • Implemented authentication, usage analytics, and sync. Link: myclipboard.io/download.    Outside air quality alerts – Wildfire-season monitoring.  • Displays air quality warnings based on hyper-local PurpleAir community air quality sensor network.  • PyQt app running on Raspberry Pi display.    INTERESTS  • Photography (see reedcolloton.com), backpacking, basketball, Wilderness First Responder (WFR) certified



Use an used an appopriate tabular syntax to build the resume

---

**Cursor**

I'll create a todo list for the resume page tasks, then implement the `resume.html` with Bootstrap, a navbar with links and a right-aligned icon, a tabular resume, and a footer with social links. After the edit, I'll update the todos accordingly.

I'll quickly open the existing HTML and CSS to mirror the project's Bootstrap usage and nav/footer patterns before creating `resume.html`.

I'll open `resume.html` to confirm its current contents, then create the full Bootstrap-based resume page with a navbar, right-aligned icon, tabular resume content based on your text, and a footer.

I'll create the Bootstrap-based `resume.html` with navbar (links + right-aligned icon), a tabular resume layout using a Bootstrap table, favicon and styles, and a footer with social links. Then I'll mark the corresponding tasks complete.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Resume - Reed Colloton</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="icon" type="image/x-icon" href="img/favicon.ico">
  
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

- I’m creating `submission/resources/resume.html` now, matching your existing Bootstrap/Navbar/Footer patterns from the other pages.

I created a Bootstrap resume page with:
- Navigation bar linking Home, Hobbies, Projects; right-aligned icon.
- Resume content built with a responsive Bootstrap table using your provided text.
- Footer with GitHub and LinkedIn links.
- Favicon and your local stylesheet linked.

You can open:
```1:200:/Users/reedcolloton/Documents/Colorado/software dev/lab-3-gui-development-reed-colloton/submission/resources/resume.html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Resume - Reed Colloton</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="icon" type="image/x-icon" href="img/favicon.ico">
  
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
  ...
</body>
</html>
```

- All tasks are complete and linted clean. Preview `resume.html` in your browser; the “View Resume” button on `home.html` already links here.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Resume - Reed Colloton</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="icon" type="image/x-icon" href="img/favicon.ico">
  
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
  ...
</body>
</html>
```

---

**User**

add a download button with a nice FA icon at the top of the resume page:
<a href="path/to/your/filename.pdf" target="_blank" download="filename.pdf">
  <button>Download PDF</button>
</a>

---

**Cursor**

I'll add a Bootstrap-styled download button with a Font Awesome icon under your name at the top of `resume.html`, linking to your PDF. Then I'll lint the file.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Resume - Reed Colloton</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="icon" type="image/x-icon" href="img/favicon.ico">
  
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
                    <a class="btn btn-primary" href="Reed%20Colloton%20Resume.pdf" target="_blank" download="Reed Colloton Resume.pdf" rel="noopener">
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

- Added a Bootstrap download button with a Font Awesome icon below your name on `resume.html`.

You can click it to download/open:
```160:172:/Users/reedcolloton/Documents/Colorado/software dev/lab-3-gui-development-reed-colloton/submission/resources/resume.html
                  <div class="mt-3">
                    <a class="btn btn-primary" href="Reed%20Colloton%20Resume.pdf" target="_blank" download="Reed Colloton Resume.pdf" rel="noopener">
                      <i class="fa-solid fa-file-arrow-down me-2"></i>Download PDF
                    </a>
                  </div>
```

- It points to `submission/resources/Reed Colloton Resume.pdf`, which exists in your workspace.

```html
                  <div class="mt-3">
                    <a class="btn btn-primary" href="Reed%20Colloton%20Resume.pdf" target="_blank" download="Reed Colloton Resume.pdf" rel="noopener">
                      <i class="fa-solid fa-file-arrow-down me-2"></i>Download PDF
                    </a>
                  </div>
```

