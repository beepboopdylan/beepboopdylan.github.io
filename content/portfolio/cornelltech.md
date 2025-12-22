---
title: Cornell Tech
subtitle: ML Research Intern
category: Experience
tags:
  - software engineering
  - machine learning
  - research
  - data science
dateOverride: Summer 2025 - Present
highlightSubtitle: true
weight: 1
draft: false
---

Since the summer of 2025, I have been working as a Machine Learning Research Intern at [Cornell Tech](https://tech.cornell.edu/). I'm grateful to be a part of [Dr. Nikhil Garg's AI Lab](gargnikhil.com) as the only undergraduate researcher, working with two PhD student researchers.

Though the work is continuously evolving and exploratory, the overall concept is to train sparse autoencoders (SAEs) on [Bluesky](https://bsky.app/) posts to generate interpretable, concept-level features to inform new applications and social science research down the line.

One direction my team explored was using the interpretable features to generate paths of information flow on over 2 million Bluesky posts. The idea is to allow users to browse and navigate through Bluesky intuitively and expansively. 

<video controls width="100%">
  <source src="/videos/portfolio/browsing.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

Meanwhile, I was leading my own project creating a continual-learning framework for a new SAE. The goal is to train the SAE on new data incrementally without retraining from scratch. This is important because Bluesky's content is constantly evolving, and we need to keep our model up-to-date with minimal computational cost. With this new SAE, we want to be able to capture emerging trends and patterns in social media.

Combining research and development and using **PyTorch** and **Jupyter Notebook**, I built a prototype trained on academic ArXiv papers over time that gave promising results.

<style>
.carousel {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 1.5rem auto;
  overflow: hidden;
}
.carousel-inner {
  display: flex;
  transition: transform 0.3s ease-in-out;
}
.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}
.carousel-item img {
  width: 100%;
  display: block;
}
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 10;
}
.carousel-btn:hover {
  background: rgba(0,0,0,0.8);
}
.carousel-prev { left: 0; }
.carousel-next { right: 0; }
.carousel-dots {
  text-align: center;
  padding: 1rem 0;
}
.carousel-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 4px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
}
.carousel-dot.active {
  background: #333;
}
</style>

<div class="carousel" id="cornellCarousel">
  <div class="carousel-inner">
    <div class="carousel-item"><img src="/images/portfolio/cornelltech/activations_over_time.png" alt="Activations over time"></div>
    <div class="carousel-item"><img src="/images/portfolio/cornelltech/topics_evolution.png" alt="Topics evolution"></div>
    <div class="carousel-item"><img src="/images/portfolio/cornelltech/concept_drift.png" alt="Concept drift"></div>
  </div>
  <button class="carousel-btn carousel-prev" onclick="moveSlide(-1)">&#10094;</button>
  <button class="carousel-btn carousel-next" onclick="moveSlide(1)">&#10095;</button>
  <div class="carousel-dots">
    <span class="carousel-dot active" onclick="goToSlide(0)"></span>
    <span class="carousel-dot" onclick="goToSlide(1)"></span>
    <span class="carousel-dot" onclick="goToSlide(2)"></span>
  </div>
</div>

<script>
let currentSlide = 0;
const totalSlides = 3;

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function updateCarousel() {
  const inner = document.querySelector('#cornellCarousel .carousel-inner');
  inner.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('#cornellCarousel .carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}
</script>

I tracked the evolution of neuron 747, the neuron for blockchain, over time and observed its concept drift. Its sudden spike in mentions around 2015 lines up with the development of the rise in blockchain technology, and its slight decline after 2020 aligns with a decrease in popularity of blockchain in academic research after the pandemic. Tracking the topic evolution of the neuron, it shifted from very low-level, foundational technology concepts to more high-level applications. Finally, through freezing old neurons, I was able to achieve a signficantly lower concept drift in all neurons, which is crucial for maintaining the interpretability of our SAE over time.

This project is still very much ongoing, and any updates on progress will be posted here.