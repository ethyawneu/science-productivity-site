# Science‑Based Productivity Framework

This project is a static, interactive website that teaches a research‑backed process for getting things done. The framework follows five stages—Inspiration, Motivation, Intention, Habits and Discipline—and draws on peer‑reviewed literature in psychology and behavioural science.

## Features

* Sequential framework with concise summaries, deeper dives and best‑practice tips for each stage.
* Downloadable worksheets and templates (plain text and CSV) to put the concepts into practice.
* Lightweight interactive elements: collapsible explanations, simple quizzes with instant feedback, a sticky sidebar with progress indication and active‑section highlighting.
* Responsive layout that works on desktop, tablet and mobile. Colour palette and contrast follow WCAG 2.2 AA guidelines.
* All content is static—no server‑side code. The site loads quickly and can be hosted via GitHub Pages.
* A simple unit test demonstrates how to test pure logic in `scripts.js`.

## Getting Started

1. **Clone the repository** (once it has been created on GitHub) and navigate into the project directory:

   ```bash
   git clone https://github.com/<your-username>/productivity-site.git
   cd productivity-site
   ```

2. **View the site locally.** You can open `index.html` directly in your browser or serve the directory with a static server such as Python’s built‑in HTTP server:

   ```bash
   python3 -m http.server
   ```

   Then navigate to `http://localhost:8000` in your browser.

3. **Run the unit test.** The test script uses Node.js’s built‑in `assert` module to verify the `calculateProgress` helper function. To run it:

   ```bash
   node test/test.js
   ```

4. **Contributing.** Contributions are welcome! Please open an issue or pull request. When editing content, update the corresponding section in `index.html` and add any new citations to `content/references.json` in APA format.

## Deployment via GitHub Pages

This repository is configured to deploy the site automatically to GitHub Pages using a workflow in `.github/workflows/deploy.yml`. Once the repository exists on GitHub, pushes to the `main` branch will trigger the workflow, which commits the contents of the `productivity-site` folder to the `gh-pages` branch and publishes it at `https://<username>.github.io`.

## Acknowledgements

Research in this site cites peer‑reviewed sources on inspiration【706007025187768†L245-L256】, motivation【414999437146836†L253-L260】【414999437146836†L273-L288】, implementation intentions【254798157386042†L228-L243】, habit formation【371555136634746†L228-L241】 and self‑control/grit【664687497731561†L187-L203】【664687497731561†L223-L256】. Full bibliographic details are provided in [`content/references.json`](content/references.json).