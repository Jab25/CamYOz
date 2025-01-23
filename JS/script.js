// Set the date we're counting down to
const weddingDate = new Date("Jun 30, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "¡Ya estamos casados!";
    }
}, 1000);

// RSVP form submission
document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const attending = document.getElementById("attending").value;
    
    if (attending === "yes") {
        document.getElementById("rsvp-message").innerText = `¡Gracias ${name}! Esperamos verte en la boda.`;
    } else {
        document.getElementById("rsvp-message").innerText = `Gracias ${name} por informarnos. Lamentamos que no puedas asistir.`;
    }
    
    // Clear form
    document.getElementById("rsvp-form").reset();
});