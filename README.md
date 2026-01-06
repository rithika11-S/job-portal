<h1 style="font-family: 'Arial Black', sans-serif; color:#1F618D;">
Project: Echohire
</h1>

<p style="font-family: 'Verdana', sans-serif; font-size:16px;">
This project is an AI-enabled **Job Portal built specifically for visually impaired users**.  
It integrates **screen reader accessibility** and **voice-to-text recognition** so that users can navigate, search, and apply for jobs using **speech commands and audio feedback**, making job seeking more inclusive and independent.
</p>
<img width="9000" height="500" alt="Screenshot (56)" src="https://github.com/user-attachments/assets/e0d8def0-27cf-47c0-bf54-3663c25e0e66" />


<p style="font-family: 'Verdana', sans-serif; font-size:16px;">
A visually impaired user can interact with the platform using voice and audio, where they can:
</p>

<ul style="font-family: 'Verdana', sans-serif; font-size:16px;">
<li>Listen to job descriptions and navigation labels via screen reader-friendly output</li>
<li>Speak to search/filter jobs using voice commands</li>
<li>Navigate the job portal with audio guidance and keyboard controls</li>
<li>Submit applications without needing visual input</li>
</ul>

<h2 style="font-family: 'Arial Black', sans-serif; color:#1F618D;">
Technical Architecture
</h2>

<ol style="font-family: 'Verdana', sans-serif; font-size:16px;">
<li><b>Voice to Text & Recognition</b>
<ul>
<li>User speaks commands to search or apply</li>
<li>Speech-to-text system captures and converts user voice into text inputs</li>
<li>Text recognised and interpreted for job portal navigation</li>
</ul>
</li>

<li><b>Screen Reader Integration</b>
<ul>
<li>All UI elements are accessible via a built-in screen reader</li>
<li>Readable announcements are provided as users navigate</li>
<li>Compatibility with common assistive tools (NVDA, JAWS, etc.) ensures broader accessibility support:contentReference[oaicite:0]{index=0}</li>
</ul>
</li>

<li><b>Job Search & Application Flow</b>
<ul>
<li>User initiates search via spoken input</li>
<li>Search results are read out loud</li>
<li>User can apply by voice or keyboard</li>
</ul>
</li>
</ol>

<h2 style="font-family: 'Arial Black', sans-serif; color:#1F618D;">
Setup Instructions
</h2>

<ul style="font-family: 'Verdana', sans-serif; font-size:16px;">
<li><b>Clone the Repository:</b>
<pre>git clone https://github.com/rithika11-S/job-portal.git</pre>
</li>

<li><b>Install Dependencies:</b>
<pre>npm install
# or
yarn install
</pre>
</li>

<li><b>Run Development Server:</b>
<pre>npm run dev
# or
yarn dev
</pre>
</li>

<li><b>Voice Recognition Setup:</b>
<p>Ensure your browser supports the Web Speech API for voice recognition.</p>
</li>

<li><b>Screen Reader Compatibility:</b>
<p>Use screen readers like NVDA, JAWS, or browser-integrated screen reading for testing accessibility support:contentReference[oaicite:1]{index=1}.</p>
</li>
</ul>

<h2 style="font-family: 'Arial Black', sans-serif; color:#1F618D;">
Features
</h2>

<ul style="font-family: 'Verdana', sans-serif; font-size:16px;">
<li>Voice-to-text job search</li>
<li>Screen reader enabled navigation</li>
<li>Interactive and accessible UI</li>
<li>Keyboard navigation and focus control</li>
<li>Audio output for all major interactions</li>
</ul>

<h2 style="font-family: 'Arial Black', sans-serif; color:#1F618D;">
Accessibility Benefits
</h2>

<p style="font-family: 'Verdana', sans-serif; font-size:16px;">
This portal is designed in accordance with key accessibility principles, including screen reader support, semantic structure, and voice control. These features help visually impaired users independently explore and apply for jobs without facing barriers that are common on traditional job portals:contentReference[oaicite:2]{index=2}.
</p>

<h2 style="font-family: 'Arial Black', sans-serif; color:#1F618D;">
License & Terms
</h2>

<p style="font-family: 'Verdana', sans-serif; font-size:16px;">
Copyright (C) — Your Name / Organization<br>
Licensed under the <b>MIT License</b>.<br>
This project is intended for educational and community-driven accessibility enhancement purposes.
</p>

