// Pac-Man oyun kodları burada yer alacak
console.log("Pac-Man oyunu başlıyor...");

// Oyuncu ölünce yapılacak işlemler
function gameOver() {
    // Oyuncu öldüğünde ekrana mesaj yaz
    document.getElementById('message').innerText = "You win 100 Bobax!";

    // 5 saniye sonra jumpscare görüntüsünü aç
    setTimeout(function() {
        // Burada jumpscare görselini göstereceğiz
        var jumpscareImage = document.createElement("img");
        jumpscareImage.src = "jumpscare.png";  // jumpscare görselinin yolu
        jumpscareImage.style.position = "absolute";
        jumpscareImage.style.top = "0";
        jumpscareImage.style.left = "0";
        jumpscareImage.style.width = "100%";
        jumpscareImage.style.height = "100%";
        document.body.appendChild(jumpscareImage);

        // Sekmeyi 1 saniye sonra kapat
        setTimeout(function() {
            window.close();  // Sekmeyi kapat
        }, 1000);
    }, 5000);  // 5 saniye sonra jumpscare
}

// Oyunun sonunda gameOver fonksiyonunu çağıracağız
setTimeout(gameOver, 3000);  // 3 saniye sonra gameOver fonksiyonunu tetikle
