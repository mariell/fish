
function Exam107(ListofLevels,preloader) {var lvllayout107=[
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,5],

];
var map107 = new Map(lvllayout107,preloader);
ListofLevels.push(map107);

 var waypoint2429 = new Array();
 waypoint2429.push(new Point(10,1));
 waypoint2429.push(new Point(0,13));
 waypoint2429.push(new Point(12,19));
 waypoint2429.push(new Point(19,0));
 var enemy2429 = new ENEMY(10,1,waypoint2429,lvllayout107,preloader);
 map107.addEnemy(enemy2429);
 var waypoint2430 = new Array();
 waypoint2430.push(new Point(8,19));
 waypoint2430.push(new Point(4,17));
 waypoint2430.push(new Point(17,0));
 waypoint2430.push(new Point(8,19));
 var enemy2430 = new ENEMY(8,19,waypoint2430,lvllayout107,preloader);
 map107.addEnemy(enemy2430);
 var waypoint2431 = new Array();
 waypoint2431.push(new Point(11,2));
 waypoint2431.push(new Point(4,7));
 waypoint2431.push(new Point(16,1));
 waypoint2431.push(new Point(11,2));
 var enemy2431 = new ENEMY(11,2,waypoint2431,lvllayout107,preloader);
 map107.addEnemy(enemy2431);
 var waypoint2432 = new Array();
 waypoint2432.push(new Point(0,10));
 waypoint2432.push(new Point(14,16));
 waypoint2432.push(new Point(3,8));
 waypoint2432.push(new Point(0,9));
 var enemy2432 = new ENEMY(0,10,waypoint2432,lvllayout107,preloader);
 map107.addEnemy(enemy2432);
 var waypoint2433 = new Array();
 waypoint2433.push(new Point(18,12));
 waypoint2433.push(new Point(8,14));
 waypoint2433.push(new Point(13,4));
 waypoint2433.push(new Point(18,14));
 var enemy2433 = new ENEMY(18,12,waypoint2433,lvllayout107,preloader);
 map107.addEnemy(enemy2433);
 var waypoint2434 = new Array();
 waypoint2434.push(new Point(8,9));
 waypoint2434.push(new Point(12,18));
 waypoint2434.push(new Point(3,18));
 waypoint2434.push(new Point(8,10));
 var enemy2434 = new ENEMY(8,9,waypoint2434,lvllayout107,preloader);
 map107.addEnemy(enemy2434);
 var waypoint2435 = new Array();
 waypoint2435.push(new Point(4,12));
 waypoint2435.push(new Point(6,5));
 waypoint2435.push(new Point(18,12));
 waypoint2435.push(new Point(4,12));
 var enemy2435 = new ENEMY(4,12,waypoint2435,lvllayout107,preloader);
 map107.addEnemy(enemy2435);
 var waypoint2436 = new Array();
 waypoint2436.push(new Point(10,10));
 waypoint2436.push(new Point(3,2));
 waypoint2436.push(new Point(13,8));
 waypoint2436.push(new Point(10,10));
 var enemy2436 = new ENEMY(10,10,waypoint2436,lvllayout107,preloader);
 map107.addEnemy(enemy2436);}