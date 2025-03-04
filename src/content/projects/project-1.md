---
title: "Investments Uplift for Rest Super"
description: "Improving the frontend for members and the backend for staff."
image:
  url: "/src/assets/images/inv-graph.png"
  alt: "Rest Investment Option Page"
platform: Full Stack
stack: AWS CDK | NodeJS | React | Playwright
website: https://rest.com.au/investments/options
github: ""
---

This was a project to uplift the member experience on the website related to the investment options that are available to them. It also involved implementing a new backend with a file ingestion process so non-technical staff could update figures and information related to Rest's investment options.

The frontend consists of React components that are embedded into the website CMS.
The backend is an AWS serverless application that has been developed using AWS CDK and NodeJS.

I was part of a small team that completed the full implemention. As part of the team I contributed to both the backend and frontend development.
I am particularly proud of the investment option details page. I worked closely with our UI/UX designer to ensure the mobile, tablet and desktop experience was seemless. [View one of the pages here](https://rest.com.au/investments/options/growth)

<img src="/src/assets/images/rest-inv-op.png" alt="image 1" 
      class="pro-img"
      width="500px"
      height="auto"
/>

I also implemented an end-to-end test suite using Playwright for the frontend. In addition to this I developed a custom test suite for the backend that included comprehensive API tests, validation of the file ingestion process and the calculation of performance figures. This increased the team's velocity as we did not need to do manual regression testing before each release.
