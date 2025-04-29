const messages = ["Sure?", "Suree?", "Sureee?", "Sureeee?"];
let msgIndex = 0;

function handleYesClick() {
  const yesButton = document.querySelector('.yes-button');
  const noButton = document.querySelector('.no-button');

  // Change Yes button text
  yesButton.textContent = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;

  // Expand No button
  const currentSize = parseFloat(window.getComputedStyle(noButton).fontSize);
  noButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleNoClick() {
  window.location.href = "yes_page.html";
}
