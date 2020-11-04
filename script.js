function Snake()
{
  this.vert = 0;
  this.horiz = 0;
  this.vertSpeed = 0;
  this.horizSpeed = scale * 1;
  this.back = [];
  this.total = 0;
  this.setUp = function()
  {
    ctx.fillStyle = "purple";
    for (let i = 0; i < this.back.length; i = i + 1)
    {
      ctx.fillRect(this.back[i].horiz, this.back[i].vert, scale, scale);
    }
    ctx.fillRect(this.horiz, this.vert, scale, scale);
  }
  this.update = function()
  {
    for (let i = 0; i < this.back.length - 1; i = i + 1)
    {
      this.back[i] = this.back[i + 1];
    }
    this.back[this.total - 1] = {vert: this.vert, horiz: this.horiz};
    this.vert += this.vertSpeed;
    this.horiz += this.horizSpeed;
    if (this.vert > canvas.height)
    {
      this.vert = 0;
    }
    if (this.vert < 0)
    {
      this.vert = canvas.height;
    }
    if (this.horiz > canvas.width)
    {
      this.horiz = 0;
    }
    if (this.horiz < 0)
    {
      this.horiz = canvas.width;
    }
  }
  this.changeDirect = function(direct)
  {
    switch(direct)
    {
      case 'Up':
        this.vertSpeed = -scale * 1;
        this.horizSpeed = 0;
        break;
      case 'Right':
        this.vertSpeed = 0;
        this.horizSpeed = scale * 1;
        break;
      case 'Down':
        this.vertSpeed = scale * 1;
        this.horizSpeed = 0;
        break;
      case 'Left':
        this.vertSpeed = 0;
        this.horizSpeed = -scale * 1;
        break;
    }
  }
  this.eat = function(snack)
  {
    if (this.vert === snack.vert && this.horiz === snack.horiz)
    {
      this.total = this.total + 1;
      return(true);
    }
    return(false);
  }
  this.check = function()
  {
    for (var i = 0; i < this.back.length; i = i + 1)
    {
      if (this.vert === this.back[i].vert && this.horiz === this.back[i].horiz)
      {
        this.total = 0;
        this.back = [];
      }
    }
  }
}
