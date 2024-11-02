const beforeImage = document.querySelector('.before-image');
const afterImage = document.querySelector('.after-image');
const divider = document.getElementById('divider');

let isDragging = false;

// Fonction pour ajuster la largeur de l'image "après"
function moveDivider(x) {
    const sliderWidth = beforeImage.offsetWidth;
    let offset = Math.max(0, Math.min(x, sliderWidth));
    
    afterImage.style.clip = `rect(0, ${offset}px, auto, 0)`;
    divider.style.left = `${offset}px`;
}

// Positionner le curseur au milieu au chargement
moveDivider(beforeImage.offsetWidth / 2);

// Écouter les événements pour faire glisser le curseur
divider.addEventListener("mousedown", () => {
    isDragging = true;
});

window.addEventListener("mouseup", () => {
    isDragging = false;
});

window.addEventListener("mousemove", (event) => {
    if (isDragging) {
        moveDivider(event.clientX - beforeImage.getBoundingClientRect().left);
    }
});

// Support pour les écrans tactiles
divider.addEventListener("touchstart", () => {
    isDragging = true;
});

window.addEventListener("touchend", () => {
    isDragging = false;
});

window.addEventListener("touchmove", (event) => {
    if (isDragging) {
        moveDivider(event.touches[0].clientX - beforeImage.getBoundingClientRect().left);
    }
});
