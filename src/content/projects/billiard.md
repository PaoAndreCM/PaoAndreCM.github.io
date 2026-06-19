---
title: "Billiard Physics Simulation"
summary: "A physically accurate billiard simulation with elastic collisions, rolling without slip, friction, cushion reflections, and real-time shadows — built with Three.js as a Computer Graphics assignment."
status: published
order: 5
context: "University assignment — Computer Graphics, HAW Hamburg"
cover: "/images/billiard.png" 
links:
  github: "https://github.com/PaoAndreCM/Lab3-billiard"
  demo: "https://paoandrecm.github.io/Lab3-billiard/"
tech:
  - JavaScript
  - Three.js
hard_skills:
  - Physics simulation
  - Elastic collision
  - Specular reflection
  - Friction modelling
  - Rolling without slip
  - Texture mapping
  - Shadow casting
  - 3D scene construction
soft_skills:
  - Translating physical laws into code
  - Reading and applying mathematical formulas
---

A billiard simulation built as a Computer Graphics assignment. Eight balls are placed at random non-overlapping positions on a realistically proportioned table and assigned random initial velocity vectors. From there, the physics runs on its own.

The simulation implements:

- **Friction:** each ball loses 20% of its speed per second, slowing to a stop naturally
- **Cushion reflection:** specular reflection off the table boundaries, with a 20% speed reduction per bounce
- **Elastic collisions:** mathematically correct ball-to-ball collisions using the elastic collision formula, with a 30% speed reduction per impact
- **Rolling without slip:** each frame, a rotation matrix is built with `makeRotationAxis` — the axis is the cross product of the plane normal and the velocity vector, and the rotation angle is derived from angular velocity `ω = v/r`
- **Textures and lighting:** each ball has its own pool ball texture; a spot light above the table (marked by a yellow bulb on a cord from the ceiling) casts shadows of the balls onto the table surface

The scene resets on every page load, so no two runs look the same.

One deliberate engineering decision in the assignment: rather than copy-pasting ball setup code eight times, a loop was used to instantiate all balls, keeping the code maintainable and trivially extensible to any number of balls.
