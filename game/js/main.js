import { player, initPlayer, drawPlayer} from "./player.js";
import { SpawnEnemy, enemies } from "./enemies.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

initPlayer(canvas);
SpawnEnemy(canvas);

const bullets = [];
const BULLET_SPEED = -10;

function tryShoot(){
    bullets.push({
        x: player.x + player.width / 2 - 2.5,
        y: player.y,
        width: 5,
        height: 5,
        vy: BULLET_SPEED,
    })
}

// fillRECT(x座標(横), y座標(縦), 横幅, 縦幅)

//自分のキャラクターに見立てた四角形をとりあえず作ってみてください。

// width="480" height="640"

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        if (player.x > 10) {
            player.x -= 10;
        }
    } else if (e.key === "ArrowRight") {
        if (player.x < canvas.width - player.width - 10) {
            player.x += 10;
        }
    } else if (e.key === "ArrowUp") {
        if (player.y > 10) {
            player.y -= 10;
        }
    } else if (e.key === "ArrowDown") {
        if (player.y < canvas.height - player.height - 10) {
            player.y += 10;
        }
    } else if (e.code === "Space") {
        tryShoot();
    }
});

function update(){
    for (let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        bullet.y += bullet.vy;

        if (bullet.y < 0) {
            bullets.splice(i, 1);
        }
    }
}

function draw(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawPlayer(ctx);

    ctx.fillStyle = "white";
    for (let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    }

        ctx.fillStyle = "red";
    for (let i = 0; i < enemies.length; i++) {
        const enemy = enemies[i];
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    }
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();