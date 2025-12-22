---
title: echo3D
subtitle: Software Engineering
category: Work
tags:
  - software engineering
  - frontend
dateOverride: Summer 2025
highlightSubtitle: true
weight: 1
draft: false
---

During the summer of 2025, I worked as a software engineer intern at [echo3D](https://www.echo3d.com/). echo3D is a cloud-based 3D content platform that helps developers store, manage, and stream 3D/AR/VR content. It serves as a “Google Drive” for 3D assets, allowing users and clients to store and stream them in a very lightweight manner. It supports cross-platform development (Unity, Unreal, Web, Mobile, XR), and allows developers to easily integrate 3D assets into their applications.

I contributed to the **Angular** asset control UI of the echo3D platform, and using **TypeScript** and **HTML/CSS**, I took on various projects to enhance the user experience and functionality of the platform. I added a sortable file-type column to the asset table, and worked with senior engineers to standardize styling across the components. I also solved a tricky bug pertaining to a rendering logic of the hover menu that the engineers had been trying to fix for over a year, so that was an exciting accomplishment for me!

I also dabbled in the backend. After analyzing build speed and size of the echo3D server, I noticed in the codebase huge dependencies not being used in the application. The dependencies all traced back to the '@aws-sdk' package, and after identifying only the used dependencies, I itemized them accordingly and removed the monolithic package. I reduced the server build from **6.96 GB** to **647 MB** — a **68%** reduction — and cut build time by roughly **70%**.

Finally, I made a little [demo](https://github.com/beepboopdylan/dylan-tran-echo3D-weather-demo) showing a use case of the echo3D API. It's a weather app that uses the echo3D API to display 3D models of real-time weather conditions in various cities. The app was built using **Flask** and **Google model-viewer**.

This experience was not only an amazing opportunity for me as an aspiring software engineer, getting to work on a huge codebase, writing production-level code, and learning the workflow of software developers in a professional setting, but also a great chance to see what it's like working in a close-knit team at a fast-paced startup. Overall, I had a great time :)