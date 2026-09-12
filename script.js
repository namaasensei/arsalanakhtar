// Change this to the inbox where you want website enquiries delivered.
const BUSINESS_EMAIL="hello@arsalanakhtar.com";

const menu=document.querySelector(".menu"), nav=document.querySelector(".nav nav");
if(menu&&nav){
  menu.addEventListener("click",()=>nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
}
const form=document.getElementById("contact-form");
if(form) form.addEventListener("submit",e=>{
  e.preventDefault();
  const d=new FormData(form);
  const subject=`Growth Audit Request — ${d.get("name")||"New Prospect"}`;
  const body=[
    `Name: ${d.get("name")||""}`,
    `Work email: ${d.get("email")||""}`,
    `Brand website: ${d.get("website")||""}`,
    `Monthly Meta Ads spend: ${d.get("spend")||""}`,
    "",
    "What they want to improve:",
    d.get("message")||""
  ].join("\n");
  location.href=`mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
