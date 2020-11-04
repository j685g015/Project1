const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const col = canvas.width / scale;
const row = canvas.height / scale;
var snake;
(function setUp()
{
  snack = new Snack();
  snake = new Snake();
  snack.location();
  window.setInterval(() =>
  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snack.setUp();
    snake.update();
    snake.setUp();
    if (snake.eat(snack))
    {
      snack.location();
    }
    snake.check();
    document.querySelector('.score').innerText = snake.total;
  }, 250);
}());
window.addEventListener('keydown', ((evt) =>
{
  const direct = evt.key.replace('Arrow', '');
  snake.changeDirect(direct);
}));
