class SpriteComp extends GameObject {

  constructor(spriteComp){
    super();

    this.id = spriteComp.id;
    this.context = spriteComp.context;
    this.x = spriteComp.x;
    this.y = spriteComp.y;
    this.vx = spriteComp.vx;
    this.vy = spriteComp.vy;
    this.width = spriteComp.width;
    this.height = spriteComp.height;
    this.spriteTemplates = spriteComp.spriteTemplates;
    this.sT = [];
    this.keyEvents = spriteComp.keyEvents;
    for (const template in  this.spriteTemplates) {
      this.sT.push(this.spriteTemplates[template]);
    }
    return this;
  }


  render = ()=>{

    //this.context.clearRect(0,0, window.global.gameWidth, window.global.gameHeight);
    for (let i = 0; i <  this.sT.length; i++) {

      if (this.sT[i].active === true) {

        if (this.sT[i].spriteSheet === true) {
          if (this.sT[i].repeatY) {

          } else {
            this.context.drawImage(
              this.sT[i].image,
              0, this.sT[i].currentFrame * this.sT[i].stride,
              this.sT[i].stride, this.sT[i].stride,
              this.x + this.sT[i].dx, this.y + this.sT[i].dy,
              this.sT[i].width, this.sT[i].height
            );
            if (this.sT[i].currentFrame < this.sT[i].frames) {
              this.sT[i].currentFrame++
            } else {
              if (this.sT[i].loop === true) {
                this.sT[i].currentFrame = 0;
              } else {
                this.sT[i].active = false;
                this.sT[i].currentFrame = 0;
              }
            }
          }
        } else {

          this.context.fillStyle = "white";
          this.context.fillRect(this.x,this.y,   this.width,this.height);
          this.context.drawImage(
            this.sT[i].image,
            this.x + this.sT[i].dx, this.y + this.sT[i].dy,
            this.sT[i].width, this.sT[i].height
          )
        }
      }
    }

  }
}