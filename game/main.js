document.getElementById("txt").innerText = "これはゲームです";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


// fillRECT(x座標(横), y座標(縦), 横幅, 縦幅)

//自分のキャラクターに見立てた四角形をとりあえず作ってみてください。

// width="480" height="640"
let x = 225;
let tama = 0;

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        x -= 10;
    } else if (e.key === "ArrowRight") {
        x += 10;
    } else if (e.key === "space") {
        tama += 1;
    }
});

let y1 = 0;
let y2 = -100;

function gameLoop() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "cyan";
    ctx.fillRect(x, 480, 30, 30);
    ctx.fillStyle = "red";
    ctx.fillRect(225, y1, 30, 30);
    y1 += 1;
    ctx.fillStyle = "red";
    ctx.fillRect(300, y2, 30, 30);
    y2 += 1;
    if (tama > 0) {
        ctx.fillStyle = "white";
        ctx.fillRect(x + 10, 480, 10,10);
    }
    requestAnimationFrame(gameLoop);
}

gameLoop();