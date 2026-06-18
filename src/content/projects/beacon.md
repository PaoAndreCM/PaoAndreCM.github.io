---
title: "Beacon Detection & Localization"
summary: "Contributed to a ROS-based system for real-time detection and GPS localization of construction site beacons, demonstrated live at a Hamburg city infrastructure agency."
status: published
order: 3
context: "University project — HAW Urban Mobility Lab / EDDY"
cover: "/images/beacon-lsbg-demo.jpeg"
links:
  github: "https://github.com/PaoAndreCM/eddy_beacon_locator"
tech:
  - Python
  - ROS Noetic
  - YOLO
  - Docker
  - Git
hard_skills:
  - Object detection
  - Camera-based distance estimation
  - GPS coordinate calculation
  - 360° camera geometry
  - Docker on Apple Silicon (M2)
  - Dataset collection & image annotation
soft_skills:
  - Self-directed problem solving
  - Taking initiative in a team
  - Translating ambiguous requirements into technical work
  - Learning under uncertainty
---

This project was part of the HAW Urban Mobility Lab's Hamburg city mapping initiative, in collaboration with EDDY (European Digital Dynamic Mapping). The goal: take a pre-trained YOLO model capable of detecting construction site beacons, extend it with a new beacon class, and use its predictions to output each beacon's GPS coordinates in real time — feeding into a larger ROS-based system that displayed them on a live map.

## The setup challenge

My three teammates had access to Linux machines or VMs running ROS Noetic. I had just acquired an M2 Mac — and Apple Silicon chips were new enough that the usual free VM options were either incompatible or impractical. After hitting dead ends, I learned about Docker through a tip from the professor, whose other students were using it for a separate project. I taught myself Docker, set up a ROS Noetic container with display forwarding so I could visualize the ladybug camera footage, and got a working development environment — without paying for a locked-down proprietary VM.

## From model output to GPS coordinates

The trickier problem was making the model's predictions *useful*. YOLO outputs bounding boxes — pixel coordinates of detected objects in an image. What we needed was the real-world GPS location of each beacon. I studied the output format, analyzed prior student work on the same system, and worked out how to extract the bounding box data and feed it into our coordinate calculation pipeline. The pipeline accounted for the 360° geometry of the ladybug camera and the vehicle's GPS heading to translate image-space detections into map coordinates.

## Team and process

The team of four worked relatively flat — everyone owned their piece and trusted the others. I set up the GitHub repository early on and ran a quick session teaching the team how to use Git, fork, and merge, since not everyone was comfortable with it. Requirement gathering from the professor was genuinely open-ended: none of us — including the research team — had deep YOLO or ML experience, so translating "extend the model and get coordinates" into a concrete technical plan was something we had to figure out as we went.

## The demo

The final system was demonstrated live at LSBG (Landesbetrieb Straßen, Brücken und Gewässer — Hamburg's infrastructure agency). The professor's team integrated our beacon output array into their ROS node and web application. A car equipped with the ladybug camera drove past construction beacons while the audience watched a live map: markers appearing at each detected beacon's location, with its ID and GPS coordinates listed below the map.

*The photo below was taken at the LSBG presentation — it shows the live demo display, with beacon markers on the map and the list of identified beacons beneath it.*

![LSBG demo presentation](/images/beacon-lsbg-demo.jpeg)  