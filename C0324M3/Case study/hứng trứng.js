const catcher = document.getElementById("catcher");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const gameOverDisplay = document.getElementById("gameOver");
const finalScoreDisplay = document.getElementById("finalScore"); // Thêm phần tử HTML mới
let score = 0;
let catcherX = window.innerWidth / 2 - 50;
let missed = 0;
let lives = 3; // Khởi tạo số mạng
let eggSpeed;
let gameLoop;
let gameOver = false;

function startGame(speed) {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("score").style.display = "block";
  eggSpeed = speed;
  missed = 0;
  score = 0;
  lives = 3; // Đặt lại số mạng
  updateScore();
  updateLives(); // Cập nhật số mạng hiển thị
  gameLoop = setInterval(createEgg, eggSpeed);
  gameOver = false;
}

function restartGame() {
  clearInterval(gameLoop);
  document.querySelectorAll(".egg").forEach((egg) => egg.remove());
  gameOverDisplay.style.display = "none";
  document.getElementById("startScreen").style.display = "block";
  gameOver = false;
}

function exitGame() {
  window.location.href = "about:blank";
}

document.addEventListener("keydown", function (event) {
  if (!gameOver) {
    if (event.key === "ArrowLeft" && catcherX > 0) {
      catcherX -= 20;
    } else if (
      event.key === "ArrowRight" &&
      catcherX < window.innerWidth - 120
    ) {
      catcherX += 20;
    }
    catcher.style.left = catcherX + "px";
  }
});

function createEgg() {
  if (!gameOver) {
    const egg = document.createElement("div");
    egg.classList.add("egg");
    egg.style.left = Math.random() * (window.innerWidth - 200) + "px";
    document.body.appendChild(egg);

    const fallInterval = setInterval(function () {
      const eggRect = egg.getBoundingClientRect();
      const catcherRect = catcher.getBoundingClientRect();

      if (
        eggRect.bottom >= catcherRect.top &&
        eggRect.right >= catcherRect.left &&
        eggRect.left <= catcherRect.right
      ) {
        clearInterval(fallInterval);
        egg.remove();
        score++;
        updateScore();
      } else if (eggRect.bottom >= window.innerHeight) {
        clearInterval(fallInterval);
        egg.remove();
        lives--; // Giảm số mạng khi bỏ lỡ trứng
        updateLives(); // Cập nhật hiển thị số mạng
        missed++;
        if (missed >= 3) {
          endGame();
        }
      } else {
        egg.style.top = egg.offsetTop + 1 + "px";
      }
    }, 10);
  }
}

function updateScore() {
  scoreDisplay.textContent = "Score: " + score;
}
function updateLives() {
  livesDisplay.textContent = "Lives: " + lives;
}

function endGame() {
  clearInterval(gameLoop);
  gameOverDisplay.style.display = "block";
  finalScoreDisplay.textContent = "Final Score: " + score; // Cập nhật điểm số cuối cùng
  gameOver = true;
}
