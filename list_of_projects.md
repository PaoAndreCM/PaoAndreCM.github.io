# Portfolio Projects — PaoAndreCM

## General remarks

### On older projects (Snake, Billiard, Pendulum, Boggle)
Several projects are 3–4 years old and the implementation details are no longer fresh. The dedicated project pages should therefore focus on **what the project was, what you set out to learn, and what the outcome was** — not low-level code explanations. This is honest and also reads better than vague technical claims. Where skills or concepts are mentioned, only include ones you can actually speak to if asked in an interview.

### On hard skills vs. soft skills categorization
The current skill tags are a first draft and some items are miscategorized. To be corrected per project in a later task.

---

## Inclusion decisions and remarks

### Regarding professional work (Hapag-Lloyd, NumberFour)
No public demos or code exist for either role (internal systems; NumberFour no longer exists). Both will be presented as **written case studies**: problem → approach → outcome. "Internal tooling — code not publicly available" is standard and expected by recruiters. The Hapag-Lloyd entry in particular has strong quantified outcomes and should be included. NumberFour can be included with a QA/testing focus.

### Regarding the EEG project
Not yet started. Include as **"In Progress"** with a toggle in the content data so it can be set to `published: false` (hidden) or `published: true` (visible) when there is something concrete to show. No placeholder content should be visible to visitors until toggled on.

### Regarding the HuggingFace Spaces thesis app
Pauses after ~48h of inactivity on the free tier. **Fix before portfolio goes live:** set up UptimeRobot (free) to ping the URL every 5 minutes. Thesis app URL: https://huggingface.co/spaces/PaoAndreCM/energy-forecast-app

---

## Project List

### 1. Transformer Network for Energy Consumption Forecasting ⭐ Flagship
- **Type:** Bachelor Thesis / ML
- **Status:** Complete
- **GitHub:** https://github.com/PaoAndreCM/Thesis
- **Live demo:** https://huggingface.co/spaces/PaoAndreCM/energy-forecast-app (Streamlit — keep alive with UptimeRobot)
- **Tech stack:** Python, PyTorch, Streamlit, SMARD API
- **Hard skills:** Transformer architecture (PatchTST), time-series forecasting, model training & evaluation (MAE/MAPE), automated training pipelines
- **Soft skills:** Independent research, academic writing, translating literature into implementation
- **Summary:** Trained 45 transformer-based models to forecast Germany's electricity grid load. Best model predicted within 2.7% of true values; aggregated error 25% lower than the official SMARD benchmark, representing potential economic impact exceeding €445M.
- **Notes:** Updates to the app are backlogged — prioritize before portfolio launch if possible. The iframe/embed of the Streamlit app can live on the dedicated project page.

---

### 2. Beacon Detection & Localization using Computer Vision
- **Type:** University project / Computer Vision / Robotics
- **Status:** Complete (demo in progress — to be added later)
- **GitHub:** https://github.com/PaoAndreCM/eddy_beacon_locator
- **Live demo:** None yet — Pao wants to build one
- **Tech stack:** Python, ROS Noetic, YOLO, Docker, Git
- **Hard skills:** Object detection, camera-based distance estimation, GPS coordinate calculation, 360° camera geometry, Docker on Apple Silicon (M2)
- **Soft skills:** Literature research, cross-disciplinary collaboration (HAW Urban Mobility Lab + EDDY), DevOps setup
- **Summary:** Contributed to a ROS-based system for real-time detection and GPS localization of construction site beacons for the HAW Urban Mobility Lab / EDDY Hamburg city mapping initiative. Set up the Git repo and ROS-Noetic Docker environment, implemented a camera-based distance estimation algorithm from academic literature, and wrote coordinate calculation logic accounting for 360° camera geometry and GPS heading.
- **Notes:** A demo would significantly strengthen this entry. Flag for follow-up. Until then, GitHub link + technical write-up is sufficient.

---

### 3. 3D Snake Game
- **Type:** University assignment / Computer Graphics / Web
- **Status:** Complete
- **GitHub:** https://github.com/PaoAndreCM/Lab4-better-snake-game
- **Live demo:** https://paoandrecm.github.io/Lab4-better-snake-game/
- **Tech stack:** JavaScript, Three.js
- **Hard skills:** 3D rendering, scene graph management, linear algebra (3D transformations), game loop logic
- **Soft skills:** Self-directed learning, translating mathematical concepts into interactive applications
- **Summary:** A 3D Snake game built with Three.js as part of a Computer Graphics course. Developed to build intuition for linear algebra principles — 3D transformations, coordinate systems, and matrix operations — in an interactive context.

---

### 4. Billiard Physics Simulation
- **Type:** University assignment / Computer Graphics / Web
- **Status:** Complete
- **GitHub:** https://github.com/PaoAndreCM/Lab3-billiard
- **Live demo:** https://paoandrecm.github.io/Lab3-billiard/
- **Tech stack:** JavaScript, Three.js
- **Hard skills:** Physics simulation, elastic collision, specular reflection, linear algebra
- **Soft skills:** Translating physical laws into code
- **Summary:** A billiard table simulation where balls are placed with random velocities and directions on each page load, then bounce against each other and the table walls using elastic collision and specular reflection physics. Built to deepen understanding of linear algebra concepts in a visual, interactive context.
- **Notes:** Simple project but the physics angle (elastic collision, specular reflection) is a nice differentiator from the Snake game. Keep both — they tell a "I learn by building" story.

---

### 5. Cubitos (Boggle variant)
- **Type:** Personal / Web app
- **Status:** Functional (intentionally incomplete — see notes)
- **GitHub:** https://github.com/PaoAndreCM/boggle
- **Live demo:** https://paoandrecm.github.io/boggle/
- **Tech stack:** JavaScript
- **Hard skills:** DOM manipulation, timer logic, board generation
- **Soft skills:** Product thinking, building for real-world use
- **Summary:** A personal version of Boggle named "Cubitos" — the name Pao's dad used for it. Supports configurable timer duration and 4×4 or 5×5 board. Letters are revealed when the timer starts. Words found by the player are displayed and validated in real time. Designed for offline/casual play.
- **Notes:** The word-storage feature is intentionally not implemented — the game was built for analog-style play where players track their own words. This framing turns the "incompleteness" into a design decision, not a bug. The personal naming (after her dad) is a humanizing detail worth mentioning on the project page.

---

### 6. uC UART Pendulum — Persistence of Vision Display
- **Type:** University / Embedded / Microcontroller
- **Status:** Complete (old project — details fuzzy)
- **GitHub:** https://github.com/PaoAndreCM/uC-UART-pendulum
- **Live demo:** None — photo(s) of the skull display if available
- **Tech stack:** C, Microcontroller (UART)
- **Hard skills:** Microcontroller programming, UART communication, persistence of vision (POV) display technique, timing-critical code
- **Soft skills:** Low-level hardware-software integration
- **Summary:** Wrote firmware to display a skull image using the persistence of vision (POV) technique via a pendulum. The display relies on precisely timed LED activation synchronized with the pendulum's motion, creating the illusion of a stable image in mid-air.
- **Notes:** Only embedded/hardware project in the portfolio — directly relevant for medtech, instrumentation, and junior firmware targets. Even if the code details are fuzzy, the concept is striking and visual. A photo is highly valuable here. Refresh your memory of the project before writing the dedicated page.

---

### 7. Hapag-Lloyd — Corporate Audit Analytics (Case Study)
- **Type:** Professional / Data Engineering / BI
- **Status:** Complete
- **Code:** Internal — not publicly available
- **Live demo:** None (internal dashboards)
- **Tech stack:** Qlik Sense, Databricks, SQL, Alteryx (replaced), Tableau (migrated from)
- **Hard skills:** BI migration, data pipeline design, SQL, stakeholder management, UAT
- **Soft skills:** End-to-end ownership, cross-country communication, non-technical training, working with undocumented systems
- **Summary:** Assumed end-to-end ownership of a Tableau→Qlik Sense migration across 7 dashboards. Resolved data accuracy issues by tracing discrepancies to upstream sources. Proposed and implemented a Databricks-native solution replacing two Alteryx workflows. Led data literacy training for 15+ non-technical stakeholders across 4 countries.
- **Notes:** Strong quantified outcomes. Present as a written case study — no demo needed. The "navigating undocumented schema" and "bypassing Alteryx with Databricks" stories are particularly strong for technical audiences.

---

### 8. NumberFour — POS System QA (Case Study)
- **Type:** Professional / Software QA
- **Status:** Complete (company no longer exists)
- **Code:** Internal — not publicly available
- **Live demo:** None
- **Tech stack:** Java (test framework), GitLab CI/CD, TestRail, JIRA
- **Hard skills:** Manual & automated testing, edge-case analysis, system interaction testing, CI/CD pipeline integration
- **Soft skills:** Defect communication, cross-functional collaboration, attention to detail
- **Summary:** Performed manual and exploratory testing of a multi-feature POS system including inventory management, e-commerce integration, and financial reporting. Identified system interaction bugs outside standard test coverage. Wrote and maintained automated test cases in a Java framework within a GitLab CI/CD pipeline.
- **Notes:** Useful for QA/test engineer targets and for demonstrating rigor. Company no longer exists, so there is no confidentiality concern for describing the work.

---

### 9. EEG Sleep/Wake Classifier [IN PROGRESS — HIDDEN]
- **Type:** Personal / Embedded / ML / Biosignal Processing
- **Status:** Not yet started
- **Published:** false ← toggle to true when ready
- **Planned tech stack:** Python, ADS1299 frontend, PhysioNet datasets, TBD classifier
- **Planned hard skills:** Biosignal acquisition, EEG signal processing, sleep stage classification, embedded hardware interface
- **Notes:** Will be a top-3 project for medtech and instrumentation targeting once it exists. Start with PhysioNet datasets before the hardware phase. Add to portfolio as soon as there is something concrete — even preliminary classifier results on benchmark data are worth showing.
