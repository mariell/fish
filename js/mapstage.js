var canvas;
var manifest = new Object();
var preloader;
var maplayout;
var font;
var context;
var mapx = 20;
var mapy = 20;
var maplayout;
var currentmap;
var currentmapcounter=0;
var isPause=false;
var mousehitbox;
var tickspeed=33;
var tiletypes = new Object();
var playerScript  = new Object();
var loadcount=0;
var endgame =false;
var playing = false;
var mapdatabase;

function setTiteTypeDefination(){
    tiletypes.OpenTile =0;
    tiletypes.Wall = 3;
    tiletypes.Spawn = 1;
    tiletypes.End = 5; 
}
function loadingSound(){
if (!createjs.Sound.initializeDefaultPlugins()) {return;}
 
    var audioPath = "sound/";
    var manifest = [
        {id:"Music", src:"GSG.mp3"}
    ];
 
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.addEventListener("fileload", doneSoundLoad);
    createjs.Sound.registerManifest(manifest, audioPath);
}
function Stop(){
    if(playing){
        playing=false;
    createjs.Sound.stop("Music");
    }else{
        playing=true;
        createjs.Sound.play("Music",{loop:-1});
    }
} 
function doneSoundLoad(event){
    //playing=true;
  //  createjs.Sound.play("Music",{loop:-1});
}
function loadAssets()
{
    loadingSound();
    setTiteTypeDefination();
    //Place bot that will be loaded
    loadPlayerScript("js/PlayerAI/TestBot.js");
    //End of bot loading
    maplayout = new Array(mapy);
    for (var i = 0; i < 20; i++) {
        maplayout[i] = new Array(mapx);
    }


    canvas = document.getElementById("GSG");
    canvas.addEventListener("mousedown",doMouseDown,false);
    font=new textfactory("60px","Consolas","White");
    context = canvas.getContext("2d");

    manifest = [
        {src: "img/enemy1.fw.png", id: "enemyfront"},
        {src: "img/enemy.fw.png", id: "enemyright"},
        {src: "img/enemy3.fw.png", id: "enemybot"},
        {src: "img/enemy2.fw.png", id: "enemyleft"},
        {src: "img/player.fw.png", id: "playerright"},
        {src: "img/player1.fw.png", id: "playerfront"},
        {src: "img/player2.fw.png", id: "playerleft"},
        {src: "img/player3.fw.png", id: "playerbot"},
        {src: "img/vision.fw.png", id: "light1"},
        {src: "img/visionhalf.fw.png", id: "light4"},
        {src: "img/visionhalf1.fw.png", id: "light5"},
        {src: "img/visionhalf2.fw.png", id: "light2"},
        {src: "img/visionhalf3.fw.png", id: "light3"},
        {src: "img/goal.fw.png", id: "endtile"},
        {src: "img/opentile.fw.png", id: "opentile"},
        {src: "img/wall.fw.png", id: "walltile"},
        {src:"img/bg.fw.png",id:"background"}
    ];
    preloader = new createjs.LoadQueue(false);
    preloader.on("fileload", onFileLoad, this);
    preloader.on("complete", handleComplete, this);
    preloader.addEventListener("progress", handleProgress);
    for (var i = 0; i < manifest.length; i++) {
        preloader.loadFile(manifest[i]);
    }
    loadingBar();

}
function loadPlayerScript(src){

     var node = document.getElementsByTagName("head")[0]||document.body;
     var script = document.createElement("script");
     script.type="text/javascript";
     script.src=src;
     script.onload =  function(){
        var classname = src.split("/");
        classname=classname[classname.length-1];

        classname=classname.split(".");
        classname=classname[0];
        //classname+="(this.ListofLevels,preloader);";
        // eval(classname)(ListofLevels,preloader);
        
        // fileloadingcounter++;
    
     classname="playerScript= new "+classname+"();"
       eval(""+classname);

     }
     node.appendChild(script);
    
}
function handleProgress(event)
{

}

function handleComplete(event)
{
        start();
    
}
function onFileLoad(event)
{
loadcount++;
loadingBar();
}

function loadBot(src){

}
function doMouseDown(event){
    var x=event.pageX -canvas.offsetLeft;
    var y=event.pageY - canvas.offsetTop;
    
    mousehitbox.setX(x);
    mousehitbox.setY(y);
 mousehitbox.setX(x+5);
    mousehitbox.setY(y+5);


    var point=currentmap.checkWhatCollided(mousehitbox);
    console.log(point);
}
function loadingBar(){
   
    context.fillStyle="Black";
    context.fillRect(0,0,canvas.width,canvas.height);
    font.write("Loading",0,(canvas.height/2)-50,"false",context);
    var loadingbar = new Rectangle(0,canvas.height/2,((canvas.width/manifest.length)*loadcount),50,"Red");
    loadingbar.Draw(context);
}
function start()
{
    
    mousehitbox = new Rectangle(0,0,10,10,"Blue");
    font=new textfactory("32","TimesNewRoman","Red");
    mapdatabase = new MapDataBase(preloader);
    mapdatabase.init();
    document.onkeydown = keydown;
    if(mapdatabase.doneloading){
     currentmap = mapdatabase.getLevel(currentmapcounter);
     playerScript.initAI(currentmap.getPlayer(), currentmap.getEnemies(), currentmap.getMapLayout(), currentmap.getEndPoint());
    }
    loop();
}
function update()
{
    if(!endgame){
    if(!isPause){
       /* if(currentmap.Update()){
            playerScript.endAI();
            currentmapcounter++;
            if(currentmapcounter>=mapdatabase.queue.length){
                endgame=true;
            }else{


            currentmap = new Object();
            currentmap=mapdatabase.getLevel(currentmapcounter);
            playerScript.initAI(currentmap.getPlayer(), currentmap.getEnemies(), currentmap.getMapLayout(), currentmap.getEndPoint());
             }
        }else{
            //playerScript.thinkAI(currentmap.getPlayer(), currentmap.getEnemies(), currentmap.getMapLayout(), currentmap.getEndPoint());
        }*/
    }
    }
}
function loop()
{
    if(playerScript.loaded){
        if(currentmap!=null){
        update();
        draw();
        
        }else
        {
            if(mapdatabase.doneloading){
             currentmap= new Object();
             currentmap = mapdatabase.getLevel(currentmapcounter);
            var scope = angular.element(document.body).scope();
            for(var i=0;i<mapdatabase.queue.length;i++){
            var object = new Object();
            object.mapscript=mapdatabase.queue[i];
            object.id=i;
            scope.listing.push(object);
            }
            

            scope.$apply();
             playerScript.initAI(currentmap.getPlayer(), currentmap.getEnemies(), currentmap.getMapLayout(), currentmap.getEndPoint());
            }else
            {
                mapdatabase.checkIfDoneLoading();
            }
        }
    }
    setTimeout(loop, tickspeed);
}
function refresh()
{
    //context.fillStyle = "#FFFFFF";
    context.fillStyle = "BLACK";

    context.drawImage(preloader.getResult("background"),0, 0, canvas.width, canvas.height);
}
function draw()
{
    refresh();
    if(!endgame){
    currentmap.Draw(context);
    mousehitbox.Draw(context);
    if(isPause){
       // font.write("You Died",0,canvas.height/2,"false",context);
    }
    }else{
         font.write("The ENd",0,(canvas.height/2)-50,"false",context);
    }
}

function keydown(event) {
    /*var i = event.keyCode;
    if(!isPause){
        if (i == 119 || i == 87 || i == 38)

        {
            currentmap.player.MoveUp();
        }
        else if (i == 83 || i == 40)
        {
            currentmap.player.MoveDown();

        }
        else if (i == 65 || i == 37)
        {
            currentmap.player.MoveLeft();
        }
        else if (i == 68 || i == 39) {
            currentmap.player.MoveRight();
        }
    }else
    {
        currentmap.Restart();
        isPause=false;
    }*/
}

function displayMap(){
    for(var x=0;x<20;x++){
        for(var y=0;y<20;y++){
            console.log(currentmap.maplayout[x][y]);
        }
    }
}