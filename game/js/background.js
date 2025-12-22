const canvasImage = new Image();
canvasImage.src = "https://img.freepik.com/premium-photo/sky-with-abstract-star-clusters_1085611-20182.jpg?semt=ais_hybrid&w=740&q=80";

const background1 = {
    x: 0,
    y: 0,
    vy: 1
}

const background2 = {
    x: 0,
    y: 0
}

export function drawBackground(ctx, canvas) {
    background1.y += background1.vy;
    background2.y = background1.y - canvas.height;
    if (background1.y >= canvas.height) {
        background1.y = 0;
    }
    if (background2.y >= canvas.height) {
        background2.y = 0;
    }
    ctx.fillStyle = "black";
    ctx.drawImage(canvasImage, background1.x, background1.y, canvas.width, canvas.height);
    ctx.drawImage(canvasImage, background2.x, background2.y, canvas.width, canvas.height);
}