---
title: Annarabic
subtitle: Software Engineering
category: Work
tags:
  - software engineering
  - business
dateOverride: Fall 2024
highlightSubtitle: true
weight: 0
draft: false
---

During the fall of 2024, I worked as a software engineer intern at [Annarabic](https://www.annarabic.com/). Annarabic is a Moroccan-based AI startup that produces speech-recognition technology for spoken Arabic dialects, focusing primarily on Moroccan Arabic but now expanding to all Arabic dialects and some African languages like Swahili.

I contributed to the **Angular** asset control UI of the echo3D platform, and using **TypeScript** and **HTML/CSS**, I took on various projects to enhance the user experience and functionality of the platform. I added a sortable file-type column to the asset table, and worked with senior engineers to standardize styling across the components. I also solved a tricky bug pertaining to a rendering logic of the hover menu that the engineers had been trying to fix for over a year, so that was an exciting accomplishment for me!

I also dabbled in the backend. After analyzing build speed and size of the echo3D server, I noticed in the codebase huge dependencies not being used in the application. The dependencies all traced back to the '@aws-sdk' package, and after identifying only the used dependencies, I itemized them accordingly and removed the monolithic package. I reduced the server build from **6.96 GB** to **647 MB** — a **68%** reduction — and cut build time by roughly **70%**.

Finally, I made a little [demo](https://github.com/beepboopdylan/dylan-tran-echo3D-weather-demo) showing a use case of the echo3D API. It's a weather app that uses the echo3D API to display 3D models of real-time weather conditions in various cities. The app was built using **Flask** and **Google model-viewer**.

This experience was not only an amazing opportunity for me as an aspiring software engineer, getting to work on a huge codebase, writing production-level code, and learning the workflow of software developers in a professional setting, but also a great chance to see what it's like working in a close-knit team at a fast-paced startup. Overall, I had a great time :)