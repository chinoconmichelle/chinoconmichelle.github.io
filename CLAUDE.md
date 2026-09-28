# Project notes for Claude

Mandarin study app for Vladimir's classes with Michelle Hsu (Taiwanese teacher, classes taught in Spanish).
Static site on GitHub Pages; no build step. Only dependency: assets/supabase.min.js (supabase-js, pinned copy). Must also work when index.html is opened
directly from disk (file://), so data is loaded with <script> tags, not fetch().

## Conventions
- Interface text lives in `UI` in assets/app.js, in three languages: es, en, zh. Every new string needs all three.
- Card content never gets translated by the interface switch.
- Card fields: id, s (simplified), t (traditional, only when different), py, es, en, cl (class tag, optional override of the topic's cl), say (optional TTS text), w (optional writing tip {es,en,zh}, shown on the stroke page), x = {es, en, zh}.
- Class tags (CLASSES in assets/app.js): c1 = 31 Aug, c2 = 7 Sep, c3 = 14 Sep, fc = Michelle's flashcards, ex = extra. Add c4, c5… for new classes.
- Home has a "Por tema / Por clase" switch (setting `homeBy`). A class deck (classDeck(k)) is a virtual topic with every card tagged k, in topic order. "Known" is always stored in the card's own topic (isKnown/setKnown via homeOf), so both views share progress; a new class only needs its CLASSES entry (+ CLASS_GLYPH) and tagged cards.
- Card ids are permanent (progress is keyed by them). Prefix per topic, e.g. `num-12`. Never renumber; append new ids.
- `x` holds all three languages in the card itself. Vladimir learns orally with no textbook, so every explanation must be
  self-contained: what each character means and how it is built, why the word or sentence is formed that way, the grammar
  rule it illustrates (as Michelle explained it), a contrast or common mistake, and pronunciation traps. Never just "A + B". They go as deep as possible: break each character into components, and those
  into their pictographic origins. Say plainly when a component is only phonetic, and flag disputed etymologies
  instead of inventing a story.
- tools/check.py validates fields, ids, traditional forms and counts short explanations; it runs on every push (.github/workflows/check.yml).
- tools/rewrite.py can regenerate data/<topic>.js from JSON.
- Class recaps: data/classes.js (window.CLASS_NOTES[classTag] = intro, source, parts[{h,p,ex}], tips, homework, check), rendered by assets/recap.js. A class tile opens its recap when one exists; the recap links to the class cards. Text in es/en/zh; example rows [zh, py, es, en]. Write them from the class transcript/PDF: what Michelle taught, in order, with her tips and the homework; say in `source` what it was built from. c1 and c2 come from transcripts + PDFs; c3 from the cards (no transcript yet).
- Stroke order ("✍️ Trazos" button on every card): assets/strokes.js + assets/hanzi-writer.min.js (Hanzi Writer, MIT). Stroke data lives in data/strokes/<hex codepoint>.js (Make Me a Hanzi, Arphic PL; license in that folder), loaded on demand with <script> tags. After adding cards with new characters, run `python3 tools/strokes.py <node_modules/hanzi-writer-data>` (npm i hanzi-writer-data in a temp folder). Evolution pictures (oracle bone → regular) are in data/glyphs/<hex>.js, taken from Michelle's 漢字閃卡 file; list the characters in GLYPH_CHARS in strokes.js.
- Topic `hanzi` (tag fc): the 40 characters of Michelle's 漢字閃卡 file + 道 and 息 from her writing-practice file (漢字書寫練習卡). Her files had a few mistakes (现在几点时间, 问题 with 提, 可以能, 学上, 停 containing 止); the cards correct them and say so.
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
