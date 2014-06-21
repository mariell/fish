function Move (player, direction){
	switch(direction){
		case 0: player.MoveRight();
		case 1: player.MoveLeft();
		case 2: player.MoveUp();
		case 3: player.MoveDown();
	}
}

function TestBot(){
	this.Name="PlayerAI";
	this.loaded = true;
	this.movementqueue = new Array();
	this.movementqueue.push(1);
	this.movementqueue.push(1);
	this.movementqueue.push(1);
	this.movementqueue.push(1);
	this.movementqueue.push(1);
	this.movementqueue.push(1);
	this.movementqueue.push(1);
	this.movementqueue.push(1);
	this.movementqueue.push(1);
	this.counter=0;

	var priority = new Array ();

	var newmap = new Array();
	for (var i = 0; i< 20; i++){
		newmap[i] = new Array();
	}


	this.thinkAI= function(player, enemies, maplayout, end) {

		var x = player.getX();
		var y = player.getY();

		var endX = end[0].getX(); // FIND A WAY TO RETRIEVE THIS
		var endY = end[0].getY(); // FIND A WAY TO RETRIEVE THIS
		alert ("X = " + x + '\n' + "Y = " + y + '\n' +"end X = " + endX + '\n' +"end Y = " + endY);
		if (x < endX){
			priority [0] = 0;  //right = 0, left = 1, up = 2, down =3
			priority [2] = 1;
		}

		else{
			priority [2] = 0;
			priority [0] = 1;
		}

		if (y > endY){
			priority [1] = 2;
			priority [3] = 3;
		}

		else{
			priority [1] = 2;
			priority [3] = 3;
		}

		var surroundings = new Array();
		var max = -1;
		var maxcnt = 0;

		if (x < 19)
			surroundings[0] = newmap[x+1][y];
		else
			surroundings[0] = -100;

		if (x > 0)
			surroundings[1] = newmap[x-1][y];
		else
			surroundings[1] = -100;


		if (y < 19)
			surroundings[2] = newmap[x][y-1];
		else
			surroundings[2] = -100;


		if (y > 0)
			surroundings[3] = newmap[x][y+1];
		else
			surroundings[3] = -100;

		alert (surroundings);
		for (var i = 0; i < 4; i++){
			if (surroundings[i] > max){
					max = surroundings[i];
			}

			else if (surroundings[i] == max){
				maxcnt++;
			}
		}

		if (maxcnt > 1){
			for (i=0; i<4; i++){
				if (surroundings[i] == max){
					Move (player, i);
					break;
				}
			}
		}

		else
			for (i = 0; i<4; i++){
				if (surroundings[priority[i]] == max){
					Move (player, priority[i]);
					break;
				}
			}
		
		calcmap(end, player, maplayout);
	}

	function calcmap (end, player, maplayout){
	var text = "";

	//get variables of end
	var x1 = player.x;
	var y1 = player.y;

		for (var i=0; i<20; i++){
			for (var j=0; j<20; j++){
				switch (maplayout[j][i]){
					case 3: newmap [j][i] = -100; break;
					case 5: newmap[j][i] = 200; break;
					case 1: newmap[j][i] = 0; break;
					case 0 : 
					/*FIX THIS TEST CODE SOON*/
						var xdiff = x1 - j;
						var ydiff = y1 - i;

						if (xdiff<0){
							xdiff *= -1;
						}

						if (ydiff<0){
							ydiff *= -1;
						}


					newmap[j][i] = (xdiff + ydiff); break;
				}

				text += '(' + newmap[j][i] + ')';
			}

			text += '\n';
		}

		console.log(text);
	}

	this.initAI = function(player, enemies, maplayout, end) {
	calcmap(end,player, maplayout);

	}
	this.endAI = function(){

	}
	this.spottedAI = function(){
		
	}
}