// ============================================================
// CONTACT FORM
// ============================================================
// This version sends the form through FormSubmit instead of
// using "mailto:". A mail client on the visitor's computer is
// therefore NOT required.
//
// IMPORTANT:
// 1. Change BUSINESS_EMAIL to the inbox where you want enquiries.
// 2. On the first successful submission, FormSubmit may send a
//    confirmation email to that address. Click the confirmation.
// 3. Keep this file in the same folder as index.html.
//
// FormSubmit: https://formsubmit.co/
// ============================================================

const BUSINESS_EMAIL = "hello@arsalanakhtar.com";

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-header nav");

if (menu && nav) {
  menu.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
}

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const button = form.querySelector("button[type='submit']");
    const originalText = button ? button.innerHTML : "";

    if (button) {
      button.disabled = true;
      button.innerHTML = "Sending…";
    }

    const data = new FormData(form);

    // Convert the form into a clean email for your inbox.
    const payload = {
      name: data.get("name") || "",
      email: data.get("email") || "",
      website: data.get("website") || "",
      running: data.get("running") || "",
      spend: data.get("spend") || "",
      message: data.get("message") || "",
      _subject: `Growth Audit Request — ${data.get("name") || "New Prospect"}`,
      _template: "table",
      _captcha: "false",
      _replyto: data.get("email") || ""
    };

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(BUSINESS_EMAIL)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        form.reset();
        alert("Thank you! Your enquiry has been sent successfully.");
      } else {
        throw new Error(result.message || "Form submission failed.");
      }
    } catch (error) {
      console.error(error);
      alert(
        "Sorry, the form could not be sent right now. Please email me directly."
      );
    } finally {
      if (button) {
        button.disabled = false;
        button.innerHTML = originalText;
      }
    }
  });
}
