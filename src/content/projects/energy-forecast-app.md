---
title: "Energy Forecast App"
summary: "Deployed the best-performing model from my thesis as a live web application connected to the SMARD API, serving real-time electricity consumption forecasts for the German grid."
status: published
order: 2
context: "Personal project"
cover: "/images/hf-app.png" 
links:
  github: "https://github.com/PaoAndreCM/energy-forecast-app"
  demo: "https://huggingface.co/spaces/PaoAndreCM/energy-forecast-app"
tech:
  - Python
  - Streamlit
  - Hugging Face Spaces
  - SMARD API
hard_skills:
  - Model deployment
  - API integration
  - Web application development
soft_skills:
  - Bridging research and production
  - Product thinking
---

The thesis that preceded this project was a purely academic exercise: train models, compare configurations, analyse results. But a model that lives only in a Jupyter notebook isn't useful to anyone.

This project was about asking a different question: *how do you take a trained model and make it accessible?*

The best-performing PatchTST network from the thesis was packaged into a Streamlit application and deployed on Hugging Face Spaces. The app connects to the **SMARD API** — the official German electricity market data platform — to fetch the latest grid load data and run live inference, so the forecasts are always based on current conditions rather than a static dataset.

Building this taught me what the academic work intentionally leaves out: how to structure code for deployment rather than experimentation, how to manage external API dependencies, and what it means to hand something off to a user rather than a supervisor.
