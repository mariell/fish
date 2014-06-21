function Exam100(ListofLevels, preloader) { this.lvllayoutExam100=[
	[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0]
	];
this.mapExam100 = new Map(this.lvllayoutExam100,preloader);
this.mapExam100.maplayout=this.lvllayoutExam100;
this.waypointsBot1= new Array();
this.waypointsBot1.push(new Point(1,0));
this.waypointsBot1.push(new Point(19,1));
this.Bot3= new ENEMY(this.waypointsBot1[0].x,this.waypointsBot1[0].y,this.waypointsBot1,this.lvllayoutExam100,preloader);
this.mapExam100.addEnemy(this.Bot3);
this.waypointsBot2= new Array();
this.waypointsBot2.push(new Point(3,17));
this.waypointsBot2.push(new Point(16,17));
this.Bot4= new ENEMY(this.waypointsBot2[0].x,this.waypointsBot2[0].y,this.waypointsBot2,this.lvllayoutExam100,preloader);
this.mapExam100.addEnemy(this.Bot4);
this.mapExam100.name="mapExam100";
ListofLevels.push(this.mapExam100);
console.log(this.mapExam100.enemies);
}