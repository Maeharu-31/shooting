export const gameState = "start";

export function gameStart() {
    window.addEventListener("keydown", (e) => {
        if (e.code === "space") {
            if (gameState === "start") {
                gameState = "Level1";
                console.log("Game Started");
            }
        }
    });
}

export function StartScreen(canvas, ctx) {
    ctx.fillStyle = "transparent";
    ctx.font = "50px fantasy";
    ctx.textAlign = "center";
    ctx.fillText("Game Start", canvas.width / 2, canvas.height / 2);
}