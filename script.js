// Rotierende Scheibe
let currentFrame = 0;
const totalFrames = 24; 
let autoRotate = false;
let rotateInterval;

// Funktion, um das Bild zu aktualisieren
function updateImage() {
    const img = document.getElementById('image');
    img.src = `images/frame_${currentFrame}.png`;
}

// Links drehen
function rotateLeft() {
    currentFrame = (currentFrame - 1 + totalFrames) % totalFrames;
    updateImage();
}

// Rechts drehen
function rotateRight() {
    currentFrame = (currentFrame + 1) % totalFrames;
    updateImage();
}

// Automatisches Drehen starten und stoppen
function toggleAutoRotate() {
    if (autoRotate) {
        clearInterval(rotateInterval);
        autoRotate = false;
    } else {
        autoRotate = true;
        rotateInterval = setInterval(rotateRight, 500); // alle 500ms eine Drehung nach rechts
    }
}

// Eventlistener für Scheiben-Buttons
document.getElementById('leftBtn').addEventListener('click', rotateLeft);
document.getElementById('rightBtn').addEventListener('click', rotateRight);
document.getElementById('autoBtn').addEventListener('click', toggleAutoRotate);

// Eventlistener für Scheiben-Tastendruck
document.addEventListener('keydown', (event) => {
    if (event.key === 'l') {
        rotateLeft();
    } else if (event.key === 'r') {
        rotateRight();
    } else if (event.key === 'a') {
        toggleAutoRotate();
    }
});

// Sprite-Sheet Animation
let spriteCurrentFrame = 0;
const spriteTotalFrames = 33; // 3 Spalten x 11 Reihen = 33 Frames
const spriteFrameWidth = 640;  // Breite eines einzelnen Frames
const spriteFrameHeight = 360; // Höhe eines einzelnen Frames
const spriteColumns = 3;  // Anzahl der Spalten
let spriteAutoRotate = false;
let spriteRotateInterval;

// Funktion, um das Sprite zu aktualisieren
function updateSprite() {
    const sprite = document.getElementById('sprite');
    const col = spriteCurrentFrame % spriteColumns;  // Berechnet die aktuelle Spalte
    const row = Math.floor(spriteCurrentFrame / spriteColumns);  // Berechnet die aktuelle Reihe

    // Setzt die background-position basierend auf der aktuellen Spalte und Reihe
    const xPos = -col * spriteFrameWidth;
    const yPos = -row * spriteFrameHeight;
    
    sprite.style.backgroundPosition = `${xPos}px ${yPos}px`;
}

// Rückwärts (Sprite)
function spriteRotateLeft() {
    spriteCurrentFrame = (spriteCurrentFrame - 1 + spriteTotalFrames) % spriteTotalFrames;
    updateSprite();
}

// Vorwärts (Sprite)
function spriteRotateRight() {
    spriteCurrentFrame = (spriteCurrentFrame + 1) % spriteTotalFrames;
    updateSprite();
}

// Automatisches Drehen starten und stoppen (Sprite)
function spriteToggleAutoRotate() {
    if (spriteAutoRotate) {
        clearInterval(spriteRotateInterval);
        spriteAutoRotate = false;
    } else {
        spriteAutoRotate = true;
        spriteRotateInterval = setInterval(spriteRotateRight, 200); 
    }
}

// Eventlistener für Sprite-Buttons
document.getElementById('spriteLeftBtn').addEventListener('click', spriteRotateLeft);
document.getElementById('spriteRightBtn').addEventListener('click', spriteRotateRight);
document.getElementById('spriteAutoBtn').addEventListener('click', spriteToggleAutoRotate);

// Eventlistener für Sprite-Tastendruck
document.addEventListener('keydown', (event) => {
    if (event.key === 'b') {
        spriteRotateLeft();
    } else if (event.key === 'g') {
        spriteRotateRight();
    } else if (event.key === 'x') {
        spriteToggleAutoRotate();
    }
});
