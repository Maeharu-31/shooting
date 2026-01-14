import { space } from "./main.js";
import { player } from "./player.js";

export let gamestate = "start";
console.log("GAMESTATE:", gamestate);

export function gameState(ctx, canvas) {
    switch (gamestate) {
        case "start":
            gameScreen(ctx, canvas);
            if (space == true) {
                gamestate = "play";
                console.log("GAMESTATE:", gamestate);
            }
            break;
        case "over":
            gameScreen(ctx, canvas);
            if (space == true) {
            //    document.location.reload();
            }
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
        case "over":
            ctx.fillStyle = "red";
            ctx.font = "50px fantasy";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER!", canvas.width / 2, canvas.height / 2);
            break;
    }
}