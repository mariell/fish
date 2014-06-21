var ListofLevels;
var fileloadingcounter=0;
function MapDataBase(preloader)
{
	fileloadingcounter=0;

	this.boxwitdh=48;
	this.boxheight=34.4;
	this.mapx=20;
	this.mapy=20;
	this.doneloading = false;
	ListofLevels = new Array();
	this.queue= new Array();
	var lvllayout1= new Array(this.mapx);
	var i=0;
	for(i=0;i<this.mapx;i++)
	{
	 lvllayout1[i]=new Array(this.mapy);
	}
	this.creatingArray = function(x,y)
	{
	var i=0;
	var b=0;
	var something= new Array(x);
	for(i=0;i<x;i++)
	{
	 for(b=0;b<y;b++)
	 {
	  something[i]  = new Array(y);
	 }
	}
	
	return something;
	}
	//Exam100(this.ListofLevels,preloader);
	this.getLevel = function(num)
	{
	return ListofLevels[num];
	}
	this.getLength = function()
	{
	return ListofLevels.length;
	}
	
	
	
	this.init = function(){
		this.queue = new Array();	
		//this.queue.push("js/MapDatabase/Level10000.js");
		this.queue.push("js/MapDatabase/Level10009.js");
		this.queue.push("js/MapDatabase/MapTest.js");
		this.queue.push("js/MapDatabase/Exam100.js");
		
		this.queue.push("js/MapDatabase/Default.js");
		this.queue.push("js/MapDatabase/Level0.js");
		this.queue.push("js/MapDatabase/Level1.js");
		this.queue.push("js/MapDatabase/Level2.js");
		this.queue.push("js/MapDatabase/Level4.js");
		this.queue.push("js/MapDatabase/Level10016.js");
		this.queue.push("js/MapDatabase/Level14.js");	
		this.queue.push("js/MapDatabase/Level10003.js");
		this.queue.push("js/MapDatabase/Exam107.js");
		this.queue.push("js/MapDatabase/Level10004.js");
		this.queue.push("js/MapDatabase/Level10002.js");
		this.queue.push("js/MapDatabase/Level10000.js");
		this.queue.push("js/MapDatabase/Level9.js");
		this.queue.push("js/MapDatabase/Level10.js");
	
		this.loadqueue();
		this.checkIfDoneLoading();
	}
	this.loadqueue= function(){
		for(var i=0;i<this.queue.length;i++){
			this.addScript(this.queue[i]);
		}
	}
	this.checkIfDoneLoading= function(){
		if(this.queue.length==fileloadingcounter){
			this.doneloading=true;
			for(var i=0;i<fileloadingcounter;i++){
				this.LoadScript(this.queue[i]);
			}

		}
		
	}
	this.LoadScript = function(src){
		var classname = src.split("/");
		classname=classname[classname.length-1];
		classname=classname.split(".");
		classname=classname[0];
		//classname+="(this.ListofLevels,preloader);";
		console.log(classname);
		eval(classname)(ListofLevels,preloader);
	}
	this.addScript = function(src){
	 var node = document.getElementsByTagName("head")[0]||document.body;
	 var script = document.createElement("script");
	 script.type="text/javascript";
	 script.src=src;
	 script.onload =  function(){
	 // 	var classname = src.split("/");
		// classname=classname[classname.length-1];
		// classname=classname.split(".");
		// classname=classname[0];
		// //classname+="(this.ListofLevels,preloader);";
		// console.log(classname);
		// eval(classname)(ListofLevels,preloader);
		fileloadingcounter++;
	 }
	 node.appendChild(script);
	}

}

