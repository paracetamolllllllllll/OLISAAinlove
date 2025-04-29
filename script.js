let sureCount = 1;

function handleNoClick() {
    // Navigate to yes_page.html when "No" is clicked
    window.location.href = "yes_page.html";
}

function handleYesClick() {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');
    
    // Change text on the Yes button to "Sure?", "Suree?", "Sureee?"
    const base = "Sur";
    const question = "?";
    yesButton.textContent = base + "e".repeat(sureCount) + question;
    sureCount++;

    // Expand the No button (increase its font size)
    const currentSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    noButton.style.fontSize = `${currentSize * 1.2}px`;
}
