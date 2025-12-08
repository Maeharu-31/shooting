const playerImage = new Image();
playerImage.src = "https://www.irasapofree.com/wp-content/uploads/2020/05/e1d834b97602d4a6609c07011a036746-1024x910.png";

export const player = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    color: "transparent",
    life: 10,
    score: 0,
};

export function initPlayer(canvas) {
    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height - 60;
    console.log("Player:", player);
}

export function drawPlayer(ctx) {
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);

    ctx.strokeStyle = "white";
    ctx.strokeRect(player.x, player.y, player.width, player.height);
}