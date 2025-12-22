---
title: Seek Marine
subtitle: Creator
category: Personal Projects
tags:
  - software engineering
  - fullstack
  - app development
dateOverride: Summer 2025
highlightSubtitle: true
weight: 1
draft: false
---

![SeekMarine interface demo](/images/portfolio/seekmarine.png)

The ocean covers over 70% of our planet, yet so much of it remains a mystery.

The most ancient lifeforms originated from the sea. Some of the most venomous creatures evolved in the ocean through eons of natural selection. The ocean is the origin of life, but we so often strive to look up into space that we neglect the cradle of all living beings on Earth.

We still know so little about our oceans, and with limited education and awareness, we are at risk of losing them forever. It is our duty as humans to protect this ancient and vital ecosystem and all its creatures.

My goal with **Seek Marine** is to educate and raise awareness about the incredible biodiversity of marine life. Inspired by *Seek by iNaturalist*, which empowers citizen scientists to document and learn about biodiversity, I sought to create a similar application focused specifically on marine life—particularly deep-sea creatures. These species remain relatively undocumented due to the extreme conditions of the deep ocean. Seek Marine allows users to upload or take photos of marine life and receive instant species identification. I believe that seeing and knowing foster appreciation, and appreciation leads to conservation.

Seek Marine combines computer vision with a full-stack application architecture to make marine biodiversity accessible to all. I trained a TensorFlow CNN classifier using a publicly available Kaggle dataset consisting of 23 different types of sea creatures. The backend is built with FastAPI, and the frontend is developed using React + TypeScript with Tailwind CSS, including camera and gallery functionality for image uploads.

Although the project is still a work in progress, my next goal is to specialize the model for identifying deep-sea creatures. Deep-sea imaging presents unique challenges such as low light, pressure-based color distortion, and motion blur from water movement, all of which can impact model accuracy. To address this, I plan to improve robustness by augmenting the training data to simulate deep-sea conditions. Using PyTorch and Albumentations, I will apply transformations such as brightness reduction, noise injection, rotation, and blur.

Another challenge is the limited availability of labeled images for deep-sea species. To mitigate this, I plan to explore few-shot learning techniques inspired by recent work in which archaeologists leveraged AI to detect rare Nazca geoglyphs in Peru using satellite imagery (https://www.pnas.org/doi/10.1073/pnas.2407652121). Few-shot learning enables models to generalize to new classes with very limited data, making it well suited for this application.

**GitHub Repository:**  
https://github.com/beepboopdylan/seek-marine
