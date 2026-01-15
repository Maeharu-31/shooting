import { space } from "./main.js";
import { player } from "./player.js";

export let gamestate = "start";
console.log("GAMESTATE:", gamestate);

export function gameState(ctx, canvas) {
    switch (gamestate) {
        case "start":
            gameScreen(ctx, canvas);
            if (space == true) {
                gamestate = "play1";
                gameScreen(ctx, canvas);
                if (space == true) {
                    console.log("GAMESTATE:", gamestate);
                }
            }
            break;
        case "play1":
            gameScreen(ctx, canvas);
            if (space == true) {
                gamestate = "play2";
                console.log("GAMESTATE:", gamestate);
            }
            break;
        case "over":
            gameScreen(ctx, canvas);
            break;
    }
}

function gameScreen(ctx, canvas) {
    switch (gamestate) {
        case "start":
            ctx.fillStyle = "yellow";
            ctx.font = "50px fantasy";
            ctx.textAlign = "center";
            ctx.fillText("GAME START!", canvas.width / 2, canvas.height / 2);
            break;
        case "play1":
            ctx.fillStyle = "yellow";
            ctx.font = "50px fantasy";
            ctx.textAlign = "center";
            ctx.fillText("LEVEL 1!", canvas.width / 2, canvas.height / 2);
            break;
        case "play2":
            ctx.fillStyle = "yellow";
            ctx.font = "50px fantasy";
            ctx.textAlign = "center";
            ctx.fillText("LEVEL 2!", canvas.width / 2, canvas.height / 2);
            break;
        case "over":
            ctx.fillStyle = "red";
            ctx.font = "50px fantasy";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER!", canvas.width / 2, canvas.height / 2);
            break;
    }
}

export function reloadgameState() {
    player.life = 0;
    gamestate = "over";
    console.log("GAMESTATE:", gamestate);
    if (space == true) {
        document.location.reload();
    }
}