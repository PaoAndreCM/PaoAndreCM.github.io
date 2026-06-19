---
title: "3D Snake Game"
summary: "A fully 3D Snake game built with Three.js as a university Computer Graphics assignment — complete with textures, lighting, skybox, shadows, and a snake's-eye-view camera mounted at the head."
status: published
order: 4
context: "University assignment — Computer Graphics, HAW Hamburg"
cover: "/images/snake.png" 
links:
  github: "https://github.com/PaoAndreCM/Lab4-better-snake-game"
  demo: "https://paoandrecm.github.io/Lab4-better-snake-game/"
tech:
  - JavaScript
  - Three.js
hard_skills:
  - 3D scene construction
  - Texture and normal mapping
  - Lighting (spot light, ambient light)
  - Shadow casting
  - Render targets (picture-in-picture camera)
  - Game loop logic
  - Collision detection
soft_skills:
  - Independent problem solving
  - Learning a new framework from documentation
---

This was a Computer Graphics course assignment, and a fun game to build.

The assignment started out by creating a 3D snake game with simple shapes: a grid as the field, a cube as the snake segments, a ball as the snake food. Then wit was extended to add textures, a skybox, camera perspectives, shadows cast across the entire schene, and even a picture-in-picture display board showing a live feed from a camera mounted at the snake's head, looking in the direction of motion.

The game logic itself was the first challenge: figuring out how to move a snake, grow it, detect wall collisions and self-intersections, and manage timing. Three.js gave me the 3D primitives: vectors, geometries, materials, lights. I translated game logic into 3D space by working out the coordinate system and understanding how object positions relate to each other in world space.

Realizing that I could build a game, with its graphics and its rules was a very satisfying moment.

This was also the semester ChatGPT launched. A lot of people used it to complete the assignment. I chose to do it myself, in part out of stubbornness, but mostly because I wanted to actually understand what I was building. While I don't remember now every Three.js function I used, I remember figuring them out.
