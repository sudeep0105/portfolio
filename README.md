# K Venkata Sudeep — Portfolio

A personal portfolio website built with plain HTML, CSS, and JavaScript — featuring a dark "cyber/neon" theme with an interactive, mouse-reactive particle network background.

**Live site:** [sudeep0105.github.io/portfolio](https://sudeep0105.github.io/portfolio/)

![Deployed with GitHub Pages](https://img.shields.io/badge/deployed-GitHub%20Pages-2ea44f?logo=github)
![HTML](https://img.shields.io/badge/HTML-30.3%25-e34c26)
![CSS](https://img.shields.io/badge/CSS-48.2%25-264de4)
![JavaScript](https://img.shields.io/badge/JavaScript-21.5%25-f0db4f)

---

## ✨ Features

- **Interactive network background** — a canvas-based particle field that drifts across the page and lights up as you move your cursor
- **Typewriter hero animation** cycling through role titles
- **Scroll-reveal sections** with smooth fade/slide-in transitions
- **3D tilt + glow effect** on skill, project, and certification cards
- **Sticky nav with active-section highlighting** and a scroll-progress bar
- **Copy-to-clipboard** email button and a **back-to-top** control
- Fully **responsive** layout with a mobile nav toggle
- Respects `prefers-reduced-motion` for accessibility

## 🛠 Built With

- **HTML5** — semantic structure
- **CSS3** — custom properties, flexbox/grid, gradients, backdrop blur
- **Vanilla JavaScript** — no frameworks or build step, including a hand-rolled Canvas 2D particle system

## 📁 Project Structure

```
portfolio/
├── index.html                  # Main page markup
├── style.css                   # All styling (theme, layout, animations)
├── script.js                   # Interactivity (nav, reveal, particles, etc.)
├── favicon.svg                 # Site icon
└── Venkata_Sudeep_Resume.pdf   # Downloadable resume
```

## 🚀 Running Locally

No build tools or dependencies required.

```bash
git clone https://github.com/sudeep0105/portfolio.git
cd portfolio
```

Then just open `index.html` in your browser — or serve it locally:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

## 📄 Sections

| Section         | What it covers                                       |
|-----------------|------------------------------------------------------|
| Home            | Intro, role, and quick call-to-action buttons        |
| About           | Background and summary                               |
| Technical Stack | Technologies, programming languages, and dev tools   |
| Education       | Academic history                                     |
| Certifications  | Licenses and completed credentials                   |
| Projects        | Featured work                                        |
| Contact         | Ways to get in touch                                 |

## 👤 About Me

**K Venkata Sudeep** — Full Stack Java Developer (Spring Boot, Hibernate, REST APIs, MySQL, React.js), also experienced with Python/ML tooling (Scikit-Learn, YOLO/Darknet). B.Tech graduate in AI & Data Science, currently open to entry-level Software Engineering roles.

- 📄 [Resume](./Venkata_Sudeep_Resume.pdf)
- 🌐 [Portfolio](https://sudeep0105.github.io/portfolio/)

## 📜 License

This project is open source and available for reference. Please don't copy the content/resume as your own — feel free to fork the code/structure for your own portfolio.
