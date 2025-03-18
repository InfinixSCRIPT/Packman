// Pac-Man oyunu simülasyonu başlıyor...
console.log("Pac-Man oyunu başlıyor...");

// Oyuncu ölünce yapılacak işlemler
function gameOver() {
    // Oyuncu öldüğünde ekrana mesaj yaz
    document.getElementById('message').innerText = "You win 100 Bobax!";

    // 3 saniye sonra Windows XP tarzında hata mesajlarını göster
    setTimeout(function() {
        simulateErrors();
    }, 3000);  // 3 saniye sonra hataları simüle et
}

// Windows XP tarzında hata mesajları simülasyonu
function simulateErrors() {
    let errors = [
        "Error: Program has stopped working.",
        "Error: System failure.",
        "Error: Memory access violation.",
        "Error: Application not responding.",
        "Error: Blue Screen of Death encountered."
    ];

    errors.forEach((error, index) => {
        setTimeout(function() {
            let errorMessage = document.createElement("div");
            errorMessage.innerText = error;
            errorMessage.style.color = "red";
            errorMessage.style.fontSize = "20px";
            errorMessage.style.fontFamily = "monospace";
            document.body.appendChild(errorMessage);
        }, index * 1000);  // Her hata mesajı arasında 1 saniye bekle
    });

    // 5 saniye sonra jumpscare görüntüsünü ekle
    setTimeout(function() {
        showJumpscare();
    }, 5000);  // 5 saniye sonra jumpscare
}

// Jumpscare'ı ve sesini göster
function showJumpscare() {
    // Jumpscare görselini ekle
    var jumpscareImage = document.createElement("img");
    jumpscareImage.src = "jumpscare.jpg";  // jumpscare görselinin yolu
    jumpscareImage.style.position = "absolute";
    jumpscareImage.style.top = "0";
    jumpscareImage.style.left = "0";
    jumpscareImage.style.width = "100%";
    jumpscareImage.style.height = "100%";
    document.body.appendChild(jumpscareImage);

    // Bağırma sesini çal
    var screamAudio = new Audio("scream.mp3");  // scream.mp3 ses dosyasını yükle
    screamAudio.play();

    // 1 saniye sonra sekmeyi kapat
    setTimeout(function() {
        window.close();  // Sekmeyi kapat
    }, 1000);
}

// Oyunun sonunda gameOver fonksiyonunu çağıracağız
setTimeout(gameOver, 3000);  // 3 saniye sonra gameOver fonksiyonunu tetikle
