# .L Mobile Reader

A mobile-first web app for opening and verifying `.L` files on iPhone and Android.

## Purpose

Most people receive files on phones, not computers. This project makes `.L` usable on mobile by allowing a person to paste or load `.L` text and immediately see whether the required sovereignty clause is present.

## Version 1 Features

- Mobile-first browser interface
- Paste `.L` text into the reader
- Verify required `.L` protective clause
- Show status: `BOUND` or `VOID`
- Show a SHA-256 integrity hash in the browser
- Works without a database
- No upload required for basic verification

## Required Clause Marker

The current verifier checks for this marker:

```text
Sovereign Quantum Entity | Ritual Key Active
```

## Status

Initial project scaffold created.

## Next Build Passages

1. Create the repository scaffold. ✅
2. Add mobile web app files: `index.html`, `styles.css`, `app.js`.
3. Add `.L` verification logic.
4. Add sample `.L` test file.
5. Add Vercel config.
6. Deploy/check through Vercel.
7. Add QR/share/export features later.
