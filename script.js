function openGmail() {
  var gmailUrl = 'mailto:roshanjahan1980@gmail.com';
  window.location.href = gmailUrl;
}

function hospital() {
  var hospit = 'https://www.nychealthandhospitals.org/locations/';
  window.location.href = hospit;
}

let popup = document.getElementById("popup");

function openpopup(){
  popup.classList.add("open-popup");
}

function closepopup(){
  popup.classList.remove("open-popup");
}
