let playerName = "Light Yagami";
let gameInProgress = true;
let suspicionLevel = 0;

document.addEventListener("DOMContentLoaded", function() {
    const eliminateBtn = document.getElementById('eliminateBtn');
    const investigateBtn = document.getElementById('investigateBtn');
    const message = document.getElementById('message');

    function showMessage(text) {
        message.textContent = text;
    }

    function endGame(messageText) {
        showMessage(messageText);
        gameInProgress = false;
        eliminateBtn.disabled = true;
        investigateBtn.disabled = true;
    }

    eliminateBtn.addEventListener('click', function() {
        if (!gameInProgress) return;
        
        showMessage("Entrez le nom de la cible :");
        
        const cible = prompt("Entrez le nom de la cible :");
        if (cible) {
            if (cible === "L") {
                endGame("Vous avez éliminé L. Le monde est maintenant à vous !");
            } else {
                suspicionLevel += 10;
                showMessage(`Vous avez éliminé ${cible}. Le niveau de suspicion est maintenant à ${suspicionLevel}%.`);
            }
        }
    });

    investigateBtn.addEventListener('click', function() {
        if (!gameInProgress) return;

        showMessage("Vous enquêtez sur une affaire...");
        
        const result = Math.random();
        if (result < 0.3) {
            showMessage("Vous n'avez rien découvert de significatif.");
        } else if (result < 0.7) {
            showMessage("Vous avez découvert des indices incriminants. Le niveau de suspicion augmente.");
            suspicionLevel += 20;
        } else {
            endGame("L vous a découvert ! Vous avez été arrêté et le monde est sauvé.");
        }
    });
});
