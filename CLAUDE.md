# Project notes for Claude

Mandarin study app for Vladimir's classes with Michelle Hsu (Taiwanese teacher, classes taught in Spanish).
Static site on GitHub Pages; no build step. Only dependency: assets/supabase.min.js (supabase-js, pinned copy). Must also work when index.html is opened
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
- assets/extras.js adds search, the Tones & sounds page (content in its TONES object, all three languages) and the per-topic listening quiz; it wraps show/applyUI/renderTiles from app.js. The number drill lives in app.js.
- New topic = new file in data/ calling window.TOPICS.push({...}) + a <script> tag in index.html.
  A topic with `soon:true` and no cards shows as "coming soon".
- Terminology from class: simplified characters shown first, traditional next to them.

## Accounts and progress (Supabase)
- Project URL and publishable key are in assets/app.js. Never put the secret / service_role key in this repo.
- Username + password only. A username `x` becomes the internal email `x@chinoconmichelle.app`; "Confirm email" is off.
- Table `public.progress` (user_id uuid PK -> auth.users, data jsonb, updated_at). RLS: each user can select/insert/update only their own row; only the `authenticated` role has grants.
- `data` = {settings:{..., u}, topics:{<topicId>:{known:[cardIds], cur, u}}}. `u` = last-change timestamp; when a device syncs, each topic keeps the newer copy.
- A local copy per user is kept in localStorage (`mzhApp.v2.<userId>`); saves go to Supabase ~1 s after a change and when the page is hidden.
- Free tier pauses the project after ~1 week without activity (restore from the dashboard).
- Password reset (beta, deliberately simple): SQL function `public.reset_password(p_username, p_new_password)`,
  security definer, callable by anon. Anyone who knows a username can reset that password. The user accepted this
  for the beta; revisit (e.g. a recovery word, or email) before inviting other students.
- Sign-up asks for the password twice and has a show/hide button.
