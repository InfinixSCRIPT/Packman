document.addEventListener('keydown', function (event) {
    if (event.key === 'q' || event.key === 'Q') {
        // Kullanıcı Q'ya basınca oyun başlatılır
        startGame();
    }
});

function startGame() {
    // "Press Q to Start Game" mesajını kaldır
    document.getElementById('message').style.display = 'none';

    // Hata ekranını göster
    var errorScreen = document.getElementById('errorScreen');
    errorScreen.style.display = 'block';

    // Hata ekranında birkaç saniye bekle ve ardından hata simülasyonu ile "Windows XP" hataları göster
    setTimeout(function () {
        errorScreen.innerHTML = `
            <h1>ERROR</h1>
            <p>System Failure...</p>
            <p>Windows XP is not responding...</p>
            <p>Please restart your computer.</p>
        `;
    }, 1000);

    // Hata ekranı tamamlandıktan sonra ses çalmaya başla ve jumpscare görselini göster
    setTimeout(function () {
        var screamAudio = document.getElementById('screamAudio');
        screamAudio.play();  // Sesi çal

        // Jumpscare görselini göster
        var jumpScreamImage = document.getElementById('jumpScream');
        jumpScreamImage.style.display = 'block';
    }, 3000);  // 3 saniye sonra jumpscare göster
}
