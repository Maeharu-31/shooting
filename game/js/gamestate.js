import { space } from "./main.js";
import { player } from "./player.js";

export let gamestate = "start";
console.log("GAMESTATE:", gamestate);

export function gameState(ctx, canvas) {
    switch (gamestate) {
        case "start":
            if (player.score == 0) {
                gameScreen(ctx, canvas);
                if (space == true) {
                    gamestate = "playing1";
                    console.log("GAMESTATE:", gamestate);
                }
            }
            break;
    }
    
}

function gameScreen(ctx, canvas) {
    ctx.fillStyle = "black";
    ctx.font = "50px fantasy";
    ctx.textAlign = "center";
    ctx.fillText("GAME START!", canvas.width / 2, canvas.height / 2);
}