# Project notes for Claude

Mandarin study app for Vladimir's classes with Michelle Hsu (Taiwanese teacher, classes taught in Spanish).
Static site on GitHub Pages; no build step, no dependencies. Must also work when index.html is opened
directly from disk (file://), so data is loaded with <script> tags, not fetch().

## Conventions
- Interface text lives in `UI` in assets/app.js, in three languages: es, en, zh. Every new string needs all three.
- Card content never gets translated by the interface switch.
- Card fields: id, s (simplified), t (traditional, only when different), py, es, en, x (explanation), say (optional TTS text).
- Card ids are permanent (progress is keyed by them). Prefix per topic, e.g. `num-12`. Never renumber; append new ids.
- `x` explanations are in Spanish and go as deep as possible: break each character into components, and those
  into their pictographic origins. Say plainly when a component is only phonetic, and flag disputed etymologies
  instead of inventing a story.
- Audio: Chinese only (browser speechSynthesis, zh-CN).
- New topic = new file in data/ calling window.TOPICS.push({...}) + a <script> tag in index.html.
  A topic with `soon:true` and no cards shows as "coming soon".
- Terminology from class: simplified characters shown first, traditional next to them.
