---
title: "Google Sign-In"
description: "Build any small app with at least one page that shows user-specific content."
id: task1
---


# Collaborative Coding Session — Vibe Build + Google Sign-In

## Part 1 — Vibe Build 

Let students quickly build any small app or page.  
The goal is momentum and creativity — not perfection.

### Example ideas
- Task manager
- Mini dashboard
- Habit tracker
- Student profile page
- Notes app
- Random “AI tool”

### Prompt
Build any small app with **at least one page that shows user-specific content**.

Examples:
- “My tasks”
- “My notes”
- “My profile”
- “My dashboard”

No authentication yet. Just build something fun and working first.

---

## Part 2 — Add Google Sign-In 

Now turn the app into something “real” by adding authentication.
Goal: only signed-in users can access the page.

### Documentation
https://developers.google.com/identity/sign-in/web/sign-in

### Steps
1. Install authentication library
2. Add Google provider
3. Add “Sign in with Google” button
4. Display session info (name / email / photo)
5. Protect the route (redirect if not signed in)
6. Add sign out

### Final step
Apply authentication to **the page they already built**, not a new demo page.

Their original app should now:
- require login
- show the user’s info
- be accessible only when signed in
