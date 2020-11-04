function Snack()
{
  this.vert;
  this.horiz;
  this.location = function()
  {
    this.vert = (Math.floor(Math.random() * row - 1) + 1) * scale;
    this.horiz = (Math.floor(Math.random() * col - 1) + 1) * scale;
  }
  this.setUp = function()
  {
    ctx.fillStyle = "pink";
    ctx.fillRect(this.horiz, this.vert, scale, scale)
  }
}
