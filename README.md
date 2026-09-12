# Arsalan Akhtar — Form Fixed

The contact form no longer uses `mailto:`. It submits through FormSubmit.

## Before publishing

Open `script.js` and make sure this is your real receiving inbox:

```js
const BUSINESS_EMAIL = "hello@arsalanakhtar.com";
```

## First test

1. Publish the updated files.
2. Submit the form using a different email address.
3. Check the receiving inbox and Spam/Junk.
4. If FormSubmit asks you to confirm/activate the receiving address, click its confirmation email once.
5. Test the form again.

The visitor does NOT need Gmail, Outlook, or a configured email app.

## GitHub Pages

Replace the old `index.html` and `script.js` with these files, and keep `style.css` and `assets/arsalan-headshot.png` in the same structure.
