document.getElementById("viewGiftBtn").addEventListener("click", function() {
    // Add impressive functionalities here

    // Example 1: Confetti Effect
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }

    function createConfetti() {
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(confetti);

        setTimeout(function() {
            confetti.remove();
        }, 5000); // Remove confetti after 5 seconds
    }

    // Example 2: Play a sound
    let audio = new Audio("https://www.soundjay.com/button/beep-01a.mp3");
    audio.play();

    // Navigate to the gift page
    window.location.href = "elixir_anniversary.html";
});

document.addEventListener('DOMContentLoaded', function () {
    const profileImage = document.getElementById('profileImage');

    profileImage.addEventListener('mouseover', function () {
        profileImage.style.transform = 'rotateY(180deg)';
    });

    profileImage.addEventListener('mouseout', function () {
        profileImage.style.transform = 'rotateY(0deg)';
    });
});
