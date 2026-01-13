export const gameState = "start";

export function gameStart(space) {
    if (gameState == "start" && space == true) {
        gameScreen();
    }
}

export function gameScreen(ctx, canvas) {
    ctx.fillStyle = "black";
}