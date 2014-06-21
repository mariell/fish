function Exam100(ListofLevels, preloader) {
    var lvllayout100 = [
[3,3,3,3,3,3,3,0,0,0,3,3,3,3,3,3,3,3,0,0],
[3,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,3,0,0],
[3,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,3,0,0],
[3,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0],
[3,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,3,0,0],
[3,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,3,0,0],
[3,3,3,3,3,3,3,0,0,0,3,3,3,3,0,3,3,3,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0],
[3,3,3,3,3,0,0,3,3,3,3,3,3,3,0,3,3,3,0,0],
[3,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,3,0,0],
[3,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,3,0,0],
[3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0],
[3,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,3,0,0],
[3,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,3,0,0],
[3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,3,3,3,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ];
var map110 = new Map(lvllayout100,preloader);
ListofLevels.push(map110);

 var waypoint9999 = new Array();
 waypoint9999.push(new Point(2,12));
 waypoint9999.push(new Point(2,15));
 waypoint9999.push(new Point(4,15));
 var enemy9999 = new ENEMY(2,12,waypoint9999,lvllayout100,preloader);
 map110.addEnemy(enemy9999);
 var waypoint10000 = new Array();
 waypoint10000.push(new Point(14,10));
 waypoint10000.push(new Point(16,10));
 waypoint10000.push(new Point(16,12));
 var enemy10000 = new ENEMY(14,10,waypoint10000,lvllayout100,preloader);
 map110.addEnemy(enemy10000);
 var waypoint10001 = new Array();
 waypoint10001.push(new Point(14,15));
 waypoint10001.push(new Point(16,15));
 var enemy10001 = new ENEMY(14,15,waypoint10001,lvllayout100,preloader);
 map110.addEnemy(enemy10001);

}