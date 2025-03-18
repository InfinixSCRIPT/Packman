function playerDies() {
    alert("You win 100 Bobax!");
    setTimeout(() => {
        showJumpscare();
    }, 5000);
}

function showJumpscare() {
    let jumpscareWindow = window.open("", "_self"); 
    jumpscareWindow.document.write(`
        <style>
            body { background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
            img { width: 100%; height: 100%; object-fit: cover; }
        </style>
        <img src="jumpscare.jpg" />
        <script>
            setTimeout(() => { window.close(); }, 2000);
        </script>
    `);
}
