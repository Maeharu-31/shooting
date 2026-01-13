export let gameState = "start";

export function gameStart(ctx, canvas, space) {
    if (gameState == "start") {
        gameScreen(ctx, canvas);
        if (space == true) {
            gameState = "playing";
            console.log("gameState:", gameState);
        }
    }
}

function gameScreen(ctx, canvas) {
    ctx.font = "100px fantasy";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("GAME START!", canvas.width / 2, canvas.height / 2);
}