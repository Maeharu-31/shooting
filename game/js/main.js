import { player, initPlayer, drawPlayer, checkPlayer} from "./player.js";
import { spawnEnemy, updateEnemies, drawEnemies } from "./enemies.js";
import { spawnEnemyBoss, updateEnemiesBoss, drawEnemiesBoss } from "./enemiesBoss.js";
import { handleCollisions } from "./collision.js";
import { updateMapImage, drawMapImage } from "./mapimage.js";
import { gamestate, gameState } from "./gamestate.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

initPlayer(canvas);

export const bullets = [];
const BULLET_SPEED = -5;

function tryShoot(){
    bullets.push({
        x: player.x + player.width / 2 - 5,
        y: player.y - 10,
        width: 10,
        height: 10,
        vx: 0,
        vy: BULLET_SPEED,
    },{
        x: player.x + player.width / 2 - 5,
        y: player.y - 10,
        width: 10,
        height: 10,
        vx: 1,
        vy: BULLET_SPEED,
    },{
        x: player.x + player.width / 2 - 5,
        y: player.y - 10,
        width: 10,
        height: 10,
        vx: -1,
        vy: BULLET_SPEED,
    })
}

function updateScore() {
    const scoreBoard = document.getElementById("scoreBoard");
    scoreBoard.innerText = `Score: ${player.score}`;
    const lifeBoard = document.getElementById("lifeBoard");
    lifeBoard.innerText = `Life: ${player.life}`;
}

// fillRECT(x座標(横), y座標(縦), 横幅, 縦幅)

//自分のキャラクターに見立てた四角形をとりあえず作ってみてください。

// width="480" height="640"

export const key = {
    left: false,
    right: false,
    up: false,
    down: false,
};

export let space = false;

window.addEventListener("keydown", (e) => {
    if (((gamestate == "start" || gamestate == "play1") && player.score == 0) == false) {
        if (e.key === "ArrowLeft") key.left = true;
        else if (e.key === "ArrowRight") key.right = true;
        else if (e.key === "ArrowUp") key.up = true;
        else if (e.key === "ArrowDown") key.down = true;
    }
    if (e.code === "Space") {
        if (((gamestate == "start" || gamestate == "play1") && player.score == 0) == false) {
            if ((gamestate == "over") == false) {
                tryShoot();
            } else {
                space = true;
            }
        } else {
            space = true;
        }
    }
});

window.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft") key.left = false;
    else if (e.key === "ArrowRight") key.right = false;
    else if (e.key === "ArrowUp") key.up = false;
    else if (e.key === "ArrowDown") key.down = false;
    else if (e.code === "Space") key.space = false;
});

function update(){
    if (((gamestate == "start" || gamestate == "play1") && player.score == 0) == false) {
        handleCollisions();
        updateScore();
        if ((gamestate == "over") == false) {
            for (let i = 0; i < bullets.length; i++) {
                const bullet = bullets[i];
                bullet.y += bullet.vy;
                bullet.x += bullet.vx;
                
                if (bullet.y < 0) {
                    bullets.splice(i, 1);
                }
            }
            checkPlayer(canvas);
            updateMapImage(canvas);
            spawnEnemy(canvas);
            spawnEnemyBoss(canvas);
            updateEnemies(canvas);
            updateEnemiesBoss(canvas);
        }
    }
}

function draw(){
    drawMapImage(ctx, canvas);
    drawPlayer(ctx);

    if (((gamestate == "start" || gamestate == "play1") && player.score == 0) == false) {
        drawEnemies(ctx);
        drawEnemiesBoss(ctx);
        if ((gamestate == "over") == false) {
            ctx.fillStyle = "white";
            for (let i = 0; i < bullets.length; i++) {
                const bullet = bullets[i];
                ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
            }
        }
    }
    gameState(ctx, canvas);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();