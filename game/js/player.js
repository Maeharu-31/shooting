import { key } from "./main.js";

const playerImage = new Image();
playerImage.src = "https://www.irasapofree.com/wp-content/uploads/2020/05/e1d834b97602d4a6609c07011a036746-1024x910.png";

export const player = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    life: 10,
    score: 0,
    speed: 5,
};

export function initPlayer(canvas) {
    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height - 60;
    console.log("Player:", player);
}

export function checkPlayer(canvas) {
    if (key.left) {
        if (player.x > 0) player.x -= player.speed;
    } else if (key.right) {
        if (player.x < canvas.width - player.width) player.x += player.speed;
    } else if (key.up) {
        if (player.y > 0) player.y -= player.speed;
    } else if (key.down) {
        if (player.y < canvas.height - player.height) player.y += player.speed;
    }
}

export function drawPlayer(ctx) {
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);

    ctx.strokeStyle = "white";
    ctx.strokeRect(player.x, player.y, player.width, player.height);
}