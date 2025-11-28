import { player } from "./player.js";
import { enemies } from "./enemies.js";
import { enemiesBoss } from "./enemiesBoss.js";
import { bullets } from "./main.js";

export function handleCollisions() {
  // 弾 × 敵
  for (let ei = enemies.length - 1; ei >= 0; ei--) {
    const e = enemies[ei];
    let hit = false;

    for (let bi = bullets.length - 1; bi >= 0; bi--) {
      const b = bullets[bi];
      if (rectsIntersect(
        { x: b.x, y: b.y, width: b.width, height: b.height },
        { x: e.x, y: e.y, width: e.width, height: e.height }
      )) {
        // 命中：弾と敵を削除、スコア加算
        bullets.splice(bi, 1);
        enemies.splice(ei, 1);
        player.score += 1;
        console.log("Score:", player.score);
        hit = true;
        break; // この敵は消えたので次の敵へ
      }
    }

    if (hit) continue;
  }

  // 自機 × 敵（ゲームオーバー）
  for (let ei = enemies.length - 1; ei >= 0; ei--) {
    const e = enemies[ei];
    if (rectsIntersect(
      { x: player.x, y: player.y, width: player.width, height: player.height },
      { x: e.x, y: e.y, width: e.width, height: e.height }
    )) {
      player.life -= 1;
      if (player.life <= 0) {
        document.location.reload();
      }
      enemies.splice(ei, 1);
      console.log("Player Life:", player.life);
      // isGameOver = true;
      break;
    }
  }
}

export function handleCollisionsBoss() {
  // 弾 × 敵Boss
  for (let fi = enemiesBoss.length - 1; fi >= 0; fi--) {
    const f = enemiesBoss[fi];
    let hit = false;

    for (let ci = bullets.length - 1; ci >= 0; ci--) {
      const c = bullets[ci];
      if (rectsIntersect(
        { x: c.x, y: c.y, width: c.width, height: c.height },
        { x: f.x, y: f.y, width: f.width, height: f.height }
      )) {
        // 命中：弾と敵を削除、スコア加算
        bullets.splice(ci, 1);
        enemiesBoss.splice(fi, 1);
        player.score += 5;
        console.log("Score:", player.score);
        hit = true;
        break; // この敵は消えたので次の敵へ
      }
    }

    if (hit) continue;
  }

  // 自機 × 敵（ゲームオーバー）Boss
  for (let fi = enemiesBoss.length - 1; fi >= 0; fi--) {
    const f = enemiesBoss[fi];
    if (rectsIntersect(
      { x: player.x, y: player.y, width: player.width, height: player.height },
      { x: f.x, y: f.y, width: f.width, height: f.height }
    )) {
      player.life -= 1;
      if (player.life <= 0) {
        document.location.reload();
      }
      enemiesBoss.splice(fi, 1);
      console.log("Player Life:", player.life);
      // isGameOver = true;
      break;
    }
  }
}

function rectsIntersect(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
} 