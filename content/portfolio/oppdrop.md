---
title: CU OppDrop
subtitle: Creator
category: Personal Projects
hidePreviewImage: false
tags:
  - software engineering
dateOverride: "2026"
highlightSubtitle: true
weight: 2
draft: false
---

![CU OppDrop interface demo](/static/images/portfolio/oppdrop.png)

Before my ventures into professional software engineering internships, I pursued Arabic language studies and cultural exchange, taking full advantage of my school's resources. I am grateful to have won the [Foreign Language and Area Studies (FLAS) Fellowship](https://www.ed.gov/grants-and-programs/grants-higher-education/international-and-foreign-language-education/foreign-language-and-area-studies-program) to study Arabic over Summer 2024 in Fez, Morocco, at the [Arabic Language institute in Fez](https://www.alif-fes.com/), and to have studied abroad in Spring 2025 in Cairo, Egypt, at the [American University in Cairo (AUC)](https://www.aucegypt.edu/). Both experiences were transformative and deepened my appreciation for the Arabic language and culture.

Coming back to Columbia, I realized that my experience--taking advantage of Columbia's rich resources and programs--was an exception among students. Most students don't even know where to look for opportunities, and when they do find them, the deadlines are already over. Columbia has a database of all the right information, but it's so large, unintuitive, and lacking of deadline reminders of applications.

![URF database screenshot](/static/images/portfolio/urfdatabase.png)

And on the administrative side, I get it. It's a pain to go through hundreds of opportunities every year and manually update the database with new deadlines, requirements, and links, in addition to adding new opportunities.

I designed [CU OppDrop](https://cu-oppdrop.github.io/) to solve this two-sided problem. The bottleneck is the inconvenience of maintaining updated deadlines and information for students to access, and also the difficulty for students to find these opportunities in time. Leveraging the existing URF database, I built a scraper that automates the extraction of deadlines and opportunity details every three days, ensuring that information remains current. I made filtering for opportunities easy with tags and categories, being mindful of critical information like citizenship requirements and subject area for inclusivity. To address the issue of missed deadlines, I sorted opportunities by their application deadlines.

The actual implmentation of the regex scraper was tricky. The problem is that the links to the fellowship pages I'm scraping are not standardized--each fellowship page has a different format. Sometimes, fellowship pages might not even have deadlines listed at all! So really, the regex patterns have to be flexible enough to account for various edge cases and formats. After testing and refining patterns, I was able to capture most of the relevant information accurately for almost 200 fellowships. As for the tech stack, I built it with **Python** and **BeautifulSoup** for the backend scraper, a zero-dependency vanilla **JS** frontend, and **GitHub Actions and CI/CD pipelines** for automated updates every three days. The app is hosted statically on GitHub Pages. 

Within 48 hours of launch and promotion on my school's social media app Sidechat, CU OppDrop had over 1,600 users, and many users reached out to express how helpful the app was. It was truly a big problem hiding in plain sight, and I'm grateful to have had the opportunity to build a solution that made a real difference for my peers.

This whole experience taught me that useful technology are not necessarily the most complex or cutting-edge ones, but rather those that solve a hidden but real problem effectively. I'm excited to continue building tools that empower people and improve their lives in meaningful ways!
