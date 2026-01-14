import { space } from "./main.js";
import { player } from "./player.js";

export let gamestate = "start";
console.log("GAMESTATE:", gamestate);

export function gameState() {
    switch (gamestate) {
        case "start":
            if ((player.score == 0) != true);
            break;
        case "over":
            if ((player.life <= 0) != true);
            break;
    }
}

export function gameScreen(ctx, canvas) {
    switch (gamestate) {
        case "start":
            ctx.filStyle = "yellow";
            ctx.font = "50px fantasy";
            ctx.textAlign = "center";
            ctx.fillText("GAME START!", canvas.width / 2, canvas.height / 2);
            if (space == true) {
                gamestate = "play";
                console.log("GAMESTATE:", gamestate);
            }
            break;
        case "over":
            ctx.fillStyle = "red";
            ctx.font = "50px fantasy";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER!", canvas.width / 2, canvas.height / 2);
            if (space == true) {
            }
            break;
    }
}