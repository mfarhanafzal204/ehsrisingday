
// Countdown Timer Functionality
function countdownTimer() {
    const eventDate = new Date("May 21, 2024 00:00:00").getTime();
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("countdown-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown-timer").innerHTML = "Event has started!";
        }
    }, 1000);
}

window.onload = countdownTimer;
document.getElementById('messageButton').addEventListener('click', function() {
    var message = document.getElementById('specialMessage');
    if (message.style.display === 'none') {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
});
