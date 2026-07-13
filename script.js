const homeBtn = document.getElementById("home");
const aboutBtn = document.getElementById("about");
const servicesBtn = document.getElementById("services");
const contactBtn = document.getElementById("contact");



homeBtn.style.color = "red";
homeBtn.style.borderBottom = "1px solid red";


homeBtn.onclick = function() {
  homeBtn.style.color = "red";
  homeBtn.style.borderBottom = "1px solid red";
  aboutBtn.style.color = "white";
  aboutBtn.style.borderBottom = "none";
  servicesBtnBtn.style.color = "white";
  servicesBtn.style.borderBottom = "none";
  contactBtn.style.color = "white";
  contactBtn.style.borderBottom = "none";
}

aboutBtn.onclick = function() {
  homeBtn.style.color = "white";
  homeBtn.style.borderBottom = "none";
  aboutBtn.style.color = "red";
  aboutBtn.style.borderBottom = "1px solid red";
  servicesBtnBtn.style.color = "white";
  servicesBtn.style.borderBottom = "none";
  contactBtn.style.color = "white";
  contactBtn.style.borderBottom = "none";
}

servicesBtn.onclick = function() {
  homeBtn.style.color = "white";
  homeBtn.style.borderBottom = "none";
  aboutBtn.style.color = "white";
  aboutBtn.style.borderBottom = "none";
  servicesBtn.style.color = "red";
  servicesBtn.style.borderBottom = "1px solid red";
  contactBtn.style.color = "white";
  contactBtn.style.borderBottom = "none";
}

contactBtn.onclick = function() {
  homeBtn.style.color = "white";
  homeBtn.style.borderBottom = "none";
  aboutBtn.style.color = "white";
  aboutBtn.style.borderBottom = "none";
  servicesBtn.style.color = "white";
  servicesBtn.style.borderBottom = "none";
  contactBtn.style.color = "red";
  contactBtn.style.borderBottom = "1px solid red";
}


document.getElementById("home").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.getElementById("about").addEventListener("click", function() {
  window.scrollTo({
    top: 430,
    behavior: "smooth"
  });
});

document.getElementById("services").addEventListener("click", function() {
  window.scrollTo({
    top: 720,
    behavior: "smooth"
  });
});

document.getElementById("contact").addEventListener("click", function() {
  window.scrollTo({
    top: 900,
    behavior: "smooth"
  });
});


const openDiscord = document.getElementById("openDiscord");
const openGithub = document.getElementById("openGithub");

openDiscord.onclick = function() {
  alert("Discrod username - LikszxOwnerNexxi");
}

openGithub.onclick = function() {
  window.location.href = "https://github.com/Likszx-web";
}




const copyEmail = document.getElementById("copy-email");
const copyPhone = document.getElementById("copy-phone");

copyEmail.addEventListener("click", () => {
  navigator.clipboard.writeText("likszxit1@gmail.com")
    .then(() => console.log("Email copied!"))
    .catch(err => console.error("Failed to copy email:", err));
});

copyPhone.addEventListener("click", () => {
  navigator.clipboard.writeText("+62 831-0109-9019")
    .then(() => console.log("Phone number copied!"))
    .catch(err => console.error("Failed to copy phone number:", err));
});