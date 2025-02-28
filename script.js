document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const floatingHearts = document.getElementById("floating-hearts");

    let yesSize = 16;
    let noSize = 16;
    let noTexts = ["Are you really sure? 🥺", "Baby please? 🥺", "Think again! 💖", "Last chance! 😘"];
    let noClickCount = 0;

    noBtn.addEventListener("click", function() {
        if (noClickCount < noTexts.length) {
            noBtn.textContent = noTexts[noClickCount];
            noSize -= 2;
            yesSize += 5;
            noClickCount++;
        } else {
            yesSize = 100;
            noBtn.style.display = "none";
        }

        yesBtn.style.fontSize = yesSize + "px";
        noBtn.style.fontSize = noSize + "px";
    });

    yesBtn.addEventListener("click", function() {
        document.body.innerHTML = `
            <h1 class="final-message">Can't wait to see you baby 😘</h1>
            <button id="loveYouBtn">I love you</button>
            <div id="floating-hearts"></div>
        `;
    
        document.getElementById("loveYouBtn").addEventListener("click", function() {
            document.body.innerHTML = `
                <h1 class="final-message">I love you more ❤️</h1>
                <img src="your-couple-photo.jpg" alt="Us Together" class="couple-photo">
                <h2 class="bottom-message">Also, can't wait to eat you 🤤</h2>
            `;
        });
    
        startFloatingHearts();
    });
    

    function startFloatingHearts() {
        setInterval(() => {
            let heart = document.createElement("div");
            heart.className = "floating-heart";
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * window.innerWidth + "px";
            floatingHearts.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, 500);
    }
});
