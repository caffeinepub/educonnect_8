# EduConnect - Teacher Section

## Current State
EduConnect app exists with Profile, Teachers, Notes, and About sections in a glassmorphism dark design with blue/purple gradients.

## Requested Changes (Diff)

### Add
- Full teacher list screen with 34 real teachers, search bar, and subject filter
- Teacher profile screen with gradient header, avatar, role, phone, email, experience
- Intro video placeholder on profile screen
- Notes section with sample files (View/Download buttons)
- Chat UI with student-teacher message bubbles
- Performance dashboard (attendance %, marks, assignment progress)
- Notifications panel (assignment, exam alert, announcement)
- Dark mode toggle

### Modify
- Replace any placeholder teacher data with the 34 real teachers provided
- Ensure all screens are mobile-first responsive

### Remove
- Any stub/placeholder teacher entries inconsistent with the real data

## Implementation Plan
1. Define teacher data array with all 34 teachers, auto-generated avatars (DiceBear/UI-Avatars), random ratings (4-5), random experience (3-15 yrs), dummy phone/email, random role
2. TeacherList component: card grid, search, subject filter dropdown
3. TeacherProfile component: gradient header, avatar, details, video placeholder, tabbed sections (Notes, Chat, Performance, Notifications)
4. Notes tab: file cards with View/Download
5. Chat tab: message bubble UI
6. Performance tab: attendance circle, marks bar, assignment progress
7. Notifications tab: notification cards
8. Dark mode via CSS class toggle
