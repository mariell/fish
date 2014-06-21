var boxwidth = 32;
var boxheight = 32;
var imagesize=56;
var offsetleft= 12;
var offsettop=12;
var leftpadding=192;
var toppadding=64;
function Map(maplayout, preloader)
{
    this.maplayout = maplayout;
    this.player;
    this.enemies = new Array();
    this.timer=0;
    this.endgoals = new Array();
    this.name;

    this.mapimages = new Array(mapy);
    for (var i = 0; i < mapy; i++) {
        this.mapimages[i] = new Array(mapx);
    }
    for (var y = 0; y < mapy; y++) {
        for (var x = 0; x < mapx; x++) {
            var hitbox = new Rectangle(((x * boxwidth)-offsetleft)+leftpadding, ((y * boxheight)-offsettop)+toppadding, imagesize, imagesize, "Pink");

            if (this.maplayout[x][y] == 0) {
                this.mapimages[x][y] = new ImageBox(hitbox, preloader.getResult("opentile", true));
            } else if (this.maplayout[x][y] == 3) {
                this.mapimages[x][y] = new ImageBox(hitbox, preloader.getResult("walltile", true));
            } else if(this.maplayout[x][y]==5){
            	this.mapimages[x][y] = new ImageBox(hitbox, preloader.getResult("endtile", true));
                 this.endgoals.push(new Point(x,y));
            }
            else
            {
            	if(this.maplayout[x][y]==1){
            		    this.player = new Player(x, y,maplayout, preloader);
            	}
                this.mapimages[x][y] = new ImageBox(hitbox, preloader.getResult("opentile", true));
            }

        }
    }
    this.checkWhatCollided = function(mousehitbox){
          var flag=false;
          var closespoint;
          var closedistance=9999999;
          var temp;
          for (var y = 0; y < mapy; y++) {
            for (var x = 0; x < mapx; x++) {
              
                    temp = new Point(mousehitbox.getX(),mousehitbox.getY());
                    if(this.mapimages[x][y].hitbox.getDistance(temp)<closedistance){
                        closedistance=this.mapimages[x][y].hitbox.getDistance(temp);
                        closespoint= new Point(x,y);
                    }
                
            }
        }
           return closespoint;
    }


    this.reImage= function(){

    }
    this.Draw = function(context) {
        for (var x = 0; x < mapx; x++) {
            for (var y = 0; y < mapy; y++) {
                
                this.mapimages[y][x].Draw(context);
                
            }
        }
        for (var i = 0; i < this.enemies.length; i++)
        {
            this.enemies[i].Draw(context);
        }
        this.player.Draw(context);
    }
    this.Update = function() {
        if(this.timer>=4){
      		for(var i=0;i<this.enemies.length;i++){
      			this.enemies[i].Update();
      		}
            this.timer=0;
        }else{
            this.timer++;
        }
        playerScript.thinkAI(this.getPlayer(), this.getEnemies(), this.getMapLayout(), this.getEndPoint());
        this.player.Update();


        if(this.checkIfDetected()){
           isPause=true;
           playerScript.spottedAI();
        }
        if(this.checkIfReachDestination()){
            return true;
        }

        return false;
    }


    this.checkIfReachDestination= function(){
        if(this.maplayout[this.player.x][this.player.y]==5)
        {
            return true;
        }
        return false;
    }
    this.addEnemy = function(enemy) {
        this.enemies.push(enemy);
    }
    this.Restart = function(){
        this.timer=0;
        for(var i=0;i<this.enemies.length;i++){
            this.enemies[i].restart();
        }
        this.player.Restart();


    }

    this.checkIfDetected = function()
    {
        for(i=0;i<this.enemies.length;i++)
        {
            if(this.enemies[i].LightboxHit(this.player))
            {
                return true;
            }
        }
        return false;
    }
    this.getPlayer= function(){
        return this.player;
    }
    this.getEnemies = function(){
        return this.enemies;
    }
    this.getMapLayout = function(){
        return this.maplayout;
    }
    this.getEndPoint = function(){
        return this.endgoals;
    }

    
}