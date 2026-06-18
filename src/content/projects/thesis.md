---
title: "Transformer Network for Energy Consumption Forecasting"
summary: "Trained 45 transformer-based models to forecast Germany's electricity grid load. Best model predicted within 2.7% of true values — 25% lower aggregated error than the official SMARD benchmark."
status: published
order: 1
context: "Bachelor Thesis — HAW Hamburg"
links:
  github: "https://github.com/PaoAndreCM/Thesis"
tech:
  - Python
  - PyTorch
  - Jupyter
hard_skills:
  - Transformer architecture (PatchTST)
  - Time-series forecasting
  - Model training & evaluation
  - MAE / MAPE metrics
soft_skills:
  - Independent research
  - Translating academic literature into implementation
  - Scientific writing
---

Forecasting electricity consumption is critical to grid stability: overestimate demand and energy is wasted; underestimate it and blackouts become a real risk. Traditional statistical methods have long dominated this field, but the rise of neural networks and the widespread availability of data opened the door to machine learning approaches.

The Transformer architecture — the same one behind large language models — showed early promise for time-series forecasting due to its ability to model long-range dependencies. However, the vanilla Transformer underperforms on this task. Several adaptations have been proposed in the literature, with **PatchTST** emerging as the strongest performer.

PatchTST (Patch Time-Series Transformer) treats patches of the input sequence as tokens rather than individual data points, giving the attention mechanism more context per step. It uses only the encoder portion of the Transformer, producing all outputs at once rather than autoregressively.

For this thesis, **45 networks were trained** under different configurations — varying patch size, number of layers, learning rate, and lookback window. The best-performing model achieved predictions within **2.7% of true grid load values** (MAPE), and the aggregated error across all models was **25% lower than the official SMARD benchmark** — a difference that corresponds to a potential economic impact exceeding €445M.

The best-performing model from this research was later deployed as a live web application — see the companion project *Energy Forecast App*.
