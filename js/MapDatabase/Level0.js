function Level1(ListofLevels,preloader) {
	this.lvllayout1=[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0],
[0,0,3,5,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0],
[0,0,3,0,0,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0],
[0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,0,0],
[0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,1,3,0,0,0],
[0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

];
this.map1 = new Map(this.lvllayout1,preloader);


 var waypoint10036 = new Array();
 waypoint10036.push(new Point(6,6));
 waypoint10036.push(new Point(6,12));
 var enemy10036 = new ENEMY(6,6,waypoint10036,this.lvllayout1,preloader);
 map1.addEnemy(enemy10036);
 var waypoint10037 = new Array();
 waypoint10037.push(new Point(11,6));
 waypoint10037.push(new Point(11,12));
 var enemy10037 = new ENEMY(11,6,waypoint10037,this.lvllayout1,preloader);
 map1.addEnemy(enemy10037);
 var waypoint10038 = new Array();
 waypoint10038.push(new Point(4,9));
 waypoint10038.push(new Point(14,9));
 var enemy10038 = new ENEMY(4,9,waypoint10038,this.lvllayout1,preloader);
 this.map1.addEnemy(enemy10038);
 ListofLevels.push(map1);
 }