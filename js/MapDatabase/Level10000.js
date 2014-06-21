function Level10000(ListofLevels,preloader) {var lvllayout10000=[
[3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[3,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0],
[3,0,1,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0],
[3,0,0,0,3,0,0,0,3,0,0,0,3,3,3,3,3,0,0,0],
[3,3,3,3,3,0,0,0,0,0,0,0,3,0,0,0,3,0,0,0],
[0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,3,0,0,0],
[0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,0,3,0,0,0],
[3,3,3,3,0,0,0,0,0,0,0,0,3,0,0,0,3,0,0,0],
[0,0,3,3,3,3,0,0,0,0,0,0,3,0,0,0,3,0,0,0],
[0,0,3,0,0,0,3,3,0,0,0,0,3,0,0,0,3,0,0,0],
[0,0,3,0,0,0,3,3,0,0,0,0,3,0,0,0,3,0,0,0],
[0,0,3,3,3,3,0,0,0,0,0,0,3,0,0,0,3,0,0,0],
[3,3,3,3,0,0,0,0,0,0,0,0,3,0,0,0,3,0,0,0],
[0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,0,3,0,0,0],
[0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,3,0,0,0],
[3,3,3,3,3,0,0,0,0,0,0,0,3,0,0,0,3,0,0,0],
[3,0,0,0,3,0,0,0,3,0,0,0,3,3,3,3,3,0,0,0],
[3,0,5,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0],
[3,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0],
[3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

];
var Map10000 = new Map(lvllayout10000,preloader);
ListofLevels.push(Map10000);

 var waypoint10002 = new Array();
 waypoint10002.push(new Point(3,6));
 waypoint10002.push(new Point(4,10));
 waypoint10002.push(new Point(5,14));
 var enemy10002 = new ENEMY(3,6,waypoint10002,lvllayout10000,preloader);
 Map10000.addEnemy(enemy10002);
 var waypoint10003 = new Array();
 waypoint10003.push(new Point(7,14));
 waypoint10003.push(new Point(12,14));
 var enemy10003 = new ENEMY(7,14,waypoint10003,lvllayout10000,preloader);
 Map10000.addEnemy(enemy10003);
 var waypoint10004 = new Array();
 waypoint10004.push(new Point(16,6));
 waypoint10004.push(new Point(15,10));
 waypoint10004.push(new Point(14,14));
 var enemy10004 = new ENEMY(16,6,waypoint10004,lvllayout10000,preloader);
 Map10000.addEnemy(enemy10004);
 var waypoint10005 = new Array();
 waypoint10005.push(new Point(9,3));
 waypoint10005.push(new Point(10,3));
 waypoint10005.push(new Point(9,5));
 waypoint10005.push(new Point(10,5));
 var enemy10005 = new ENEMY(9,3,waypoint10005,lvllayout10000,preloader);
 Map10000.addEnemy(enemy10005);
 }