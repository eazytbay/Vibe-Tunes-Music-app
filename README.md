VibeTunes – Music Streaming UI (HTML, CSS, JavaScript)

VibeTunes is a modern, responsive music player web application built using pure HTML, CSS, and vanilla JavaScript. The project integrates real music data using the Deezer API, allowing users to browse tracks, view album covers, and interact with basic playback controls.

This project was developed following an AI-assisted workflow, leveraging tools like Lovable for UI generation and DeepSeek for JavaScript logic refinement.

Features
 Modern, Gradient-Styled UI

Clean, minimal, dark-themed design

Glowing blue/pink accent buttons

Fully responsive for mobile and desktop

 Core Music Player

Displays album cover, song title, and artist

Play, pause, and next buttons

Smooth animated progress bar

Supports real audio previews using Deezer’s API

 Search-ready Interface

Search bar included in the header

Designed for future integration with realtime API search

 Top Tracks Section

Horizontal scrollable list of album covers

Fully interactive with unique IDs for later JS bindings

 Built with AI-Assisted Workflow

Lovable.dev → UI generation

Deepseek → playback logic, event handlers

ChatGPT → layout organization and documentation

 Tech Stack

HTML5

CSS3 (Flexbox, gradients, shadows, responsive design)

JavaScript (ES6)

Deezer API for fetching track previews

GitHub Pages for deployment

 Project Structure
/vibetunes
│── index.html
│── styles.css
│── script.js
└── README.md

 API Integration

The app fetches real music data using:

https://api.deezer.com/search?q=lofi


Returned data includes:

title

artist

album cover

audio preview URL

This is mapped into a custom JavaScript array to power the audio player.

How to Run This Project Locally

Clone the repository:

git clone https://github.com/eazytbay/vibetunes.git


Open the project folder.

Run it locally using any simple static server or just open index.html in your browser.

Deployment

This project is deployed via GitHub Pages.

To deploy:

Push project to GitHub

Go to Settings → Pages

Select main branch / root folder

Save and wait for deployment

Your live app will appear at:

https://your-username.github.io/vibetunes/
##  Live Demo

 Click here to view the live - https://eazytbay.github.io/Vibe-Tunes-Music-app


