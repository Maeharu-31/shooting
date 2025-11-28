export const enemiesBoss = [];
const SIZE = 100;
const enemyBossImage = new Image();
enemyBossImage.src = "https://www.kurora-trivia.com/wp-content/uploads/2025/08/d235c5b32aee6e7dadc22b5246f14de9.webp";

function pushEnemiesBoss(canvas) {
    const w = SIZE;
    const h = SIZE;
    const x = Math.random() * (canvas.width - w);
    const y = 0;
    const vy = 1;
    const Life = 5;

    enemiesBoss.push({ x, y, width: w, height: h, vy });
}

export function spawnEnemyBoss(canvas) {
    if (enemiesBoss.length < 1) {
        pushEnemiesBoss(canvas);
    }
}

export function updateEnemiesBoss(canvas) {
    for (let i = enemiesBoss.length - 1; i >= 0; i--) {
        const e = enemiesBoss[i];
        e.y += e.vy;
        if (e.y > canvas.height) {
            enemiesBoss.splice(i, 1);
        }
    }
}

export function drawEnemiesBoss(ctx) {
    ctx.fillStyle = "transparent";
    ctx.border = "5px solid red";
    for (const e of enemiesBoss) {
        ctx.fillRect(e.x, e.y, e.width, e.height);
        ctx.drawImage(enemyBossImage, e.x, e.y, e.width, e.height);
    }
}