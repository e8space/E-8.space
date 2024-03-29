class EnemyExplosion extends Sprite{
  constructor(sprite, spriteHandler){
    super(sprite);
    this.spriteHandler = spriteHandler;
  }

  update = (dt)=>{
    this.x = this.x+this.vx;
    this.y = this.y+this.vy;
  }

  destroy = ()=>{
    this.currentFrame =  0;
    this.currentStep = 0;
    this.spriteHandler.removeSpriteFromGame(SpriteHandler.spriteTypes.explosions,this.id);
  }
}