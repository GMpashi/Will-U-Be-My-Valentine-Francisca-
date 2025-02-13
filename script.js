document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const message = document.getElementById('message');

    // Hide message initially
    message.classList.add('hidden');

    // Yes Button Handler
    yesBtn.addEventListener('click', () => {
        message.classList.remove('hidden');
        createHearts();
        // Add romantic fade-in effect
        message.style.animation = 'fadeIn 2s ease-in';
        // Scroll smoothly to message
        message.scrollIntoView({ behavior: 'smooth' });
    });

    // No Button Escape Handler
    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveButton();
        showPlayfulAlert();
    });

    // Move button to random position
    function moveButton() {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    // Create floating hearts animation
    function createHearts() {
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.fontSize = Math.random() * 30 + 20 + 'px';
            heart.style.animation = `floatUp ${Math.random() * 3 + 2}s ease-out`;
            document.body.appendChild(heart);

            // Remove heart after animation
            setTimeout(() => heart.remove(), 3000);
        }
    }

    // Playful alert if someone manages to click "No"
    function showPlayfulAlert() {
        const messages = [
            "Nice try, but my heart is already yours!",
            "This button is just for decoration!",
            "You can't say no to destiny!",
            "Our love is not optional! 💖",
            "Error 404: 'No' response not found!"
        ];
        alert(messages[Math.floor(Math.random() * messages.length)]);
    }
});

// Add keyframe animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes floatUp {
        to { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);