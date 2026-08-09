---
title: Hermit
subtitle: Creator
category: Personal Projects
hidePreviewImage: false
tags:
  - software engineering
  - security
dateOverride: "2026"
highlightSubtitle: true
weight: 1
draft: false
---

What happens when an extremely high-level technology like AI accesses a low-level system like a computer's kernel? What are the implications of an autonomous agent having full control over a computer?

Several years ago, it might have been a harbinger of a doomsday future of robot overlords controlling human agency, but today, AI agents like OpenClaw MoltBot and Claude CoWork are heavily used in personal workflows, and have full access to our codebases. However, with [recent news coming out detailing the safety of these agents](https://securityscorecard.com/blog/beyond-the-hype-moltbots-real-risk-is-exposed-infrastructure-not-ai-superintelligence/), I wondered about the state of security in these systems. Although there's no denying how incredibly useful agentic AI is in improving our desktop workflows, like dealing with messy data or automating repetitive tasks, user privacy and security, from my experience speaking with a few AI companies at career fairs, is not necessarily a priority. Is there a way to, incorporating modern research in AI safety and operating system principles, build a reliable and secure personal agent on our device?

Which led me to build [**Hermit**](https://github.com/beepboopdylan/hermit), a personal AI agent that runs locally with offline capabilities. It employs several layers of security to ensure command generation and execution is safe and contained, as well as latest research from Google DeepMind to defend against prompt injection attacks with [CaMeL](https://arxiv.org/abs/2503.18813). 

Check it out here: https://github.com/beepboopdylan/hermit