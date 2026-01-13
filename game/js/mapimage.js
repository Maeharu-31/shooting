const canvasImage = new Image();
canvasImage.src = "https://img.freepik.com/premium-photo/sky-with-abstract-star-clusters_1085611-20182.jpg?semt=ais_hybrid&w=740&q=80";

const mapimage1 = {
    x: 0,
    y: 0,
    vy: 1
}

const mapimage2 = {
    x: 0,
    y: 0
}

export function updateMapImage(canvas) {
    mapimage1.y += mapimage1.vy;
    mapimage2.y = mapimage1.y - canvas.height;
    if (mapimage1.y >= canvas.height) {
        mapimage1.y = 0;
    }
    if (mapimage2.y >= canvas.height) {
        mapimage2.y = 0;
    }
}

export function drawMapImage(ctx,canvas) {
    ctx.fillStyle = "black";
    ctx.drawImage(canvasImage, mapimage1.x, mapimage1.y, canvas.width, canvas.height);
    ctx.drawImage(canvasImage, mapimage2.x, mapimage2.y, canvas.width, canvas.height);
}