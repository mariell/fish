function Move (player, direction){
	//hi i made a comment
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
	var newmap = [];

	this.findStart = function(maplayout){
		x = 0;
		y = 0;
		for(var i = 0; i < 20; i++){
			for(var j = 0; j < 20; j++){
				if(maplayout[i][j] == 0)
					return maplayout[i][j];
			}
		}
	}
	var start = findStart();
	
	this.calcmap = function (end, player, maplayout){
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

	this.getSurroundings = function(maplayout, player){

	}
	this.Node = function(pos, g, h, pIndex){
		this.x = pos.getX();
		this.y = pos.getY();
		this.g = g;
		this.h = h;
		this.pIndex = pIndex; 
	}

	this.thinkAI= function(player, enemies, maplayout, end) {
		var closed = new Array();
		var open = new Array();
		open.push(start);
		

	}

	this.astarrrrrrrrrrrrrrrr = function(start, destination)
 	{
 		var columns = board.length;
  		var rows = board[0].length;


  		// Create start and destination as true nodes
 		start = new this.Node(start[0], start[1], -1, -1, -1, -1);
  		destination = new this.Node(destination[0], destination[1], -1, -1, -1, -1);
 		
  		var open = []; // List of open nodes (nodes to be inspected)
 		var closed = []; // List of closed nodes (nodes we've already inspected)
  		
  		var g = 0; // Cost from start to current node
  		var h = this.heuristic(start, destination); // Cost from current node to destination
  		// Cost from start to destination going through the current node
 		
  		// Push the start node onto the list of open nodes
  		open.push(start); 
  		
  		//Keep going while there's nodes in our open list
  		while (open.length > 0)
  		{
  			// Find the best open node (lowest f value)
  			
  			// Alternately, you could simply keep the open list sorted by f value lowest to highest,
  			// in which case you always use the first node
  			var best_cost = open[i].g + open[i].h;
 			var best_node = 0; //contains the index of the node with the best cost
  			
  			for (var i = 1; i < open.length; i++)
  			{
  				if (open[i].g + open[i].h< best_cost)
  				{
  					best_cost = open[i].g + open[i].h;
  					best_node = i;
  				}
  			}
  			
  			// Set it as our current node
  			var current_node = open[best_node];
  			
  			// Check if we've reached our destination
  			if (current_node.x == destination.x && current_node.y == destination.y)
 			{
  				var path = [destination]; //Initialize the path with the destination node
  
 				// Go up the chain to recreate the path 
  				while (current_node.parent_index != -1)
 				{
  					current_node = closed[current_node.parent_index];
  					path.unshift(current_node);
  				}
  
  				return path;
  			}
  			
  			// Remove the current node from our open list
  			open.splice(best_node, 1);
  			
  			// Push it onto the closed list
  			closed.push(current_node);
 			
 			// Expand our current node (look in all 8 directions)
 			for (var new_node_x = Math.max(0, current_node.x-1); new_node_x <= Math.min(columns-1, current_node.x+1); new_node_x++)
 				for (var new_node_y = Math.max(0, current_node.y-1); new_node_y <= Math.min(rows-1, current_node.y+1); new_node_y++)
 				{
 					if (board[new_node_x][new_node_y] == 0 // If the new node is open
 						|| (destination.x == new_node_x && destination.y == new_node_y)) //or the new node is our destination
 					{
 						// See if the node is already in our closed list. If so, skip it.
 						var found_in_closed = false;
 						for (var i in closed)
 							if (closed[i].x == new_node_x && closed[i].y == new_node_y)
 							{
 								found_in_closed = true;
 								break;
 							}
				
 						if (found_in_closed)
 							continue;
 						
 						// See if the node is in our open list. If not, use it.
 						var found_in_open = false;
 						for (var i in open)
 							if (open[i].x == new_node_x && open[i].y == new_node_y)
 							{
 								found_in_open = true;
 								break;
 							}
 						
 						if (!found_in_open)
 						{
 							var new_node = new this.Node(new_node_x, new_node_y, closed.length-1, -1, -1, -1);
 
 							new_node.g = current_node.g + Math.floor(Math.sqrt(Math.pow(new_node.x-current_node.x, 2)+Math.pow(new_node.y-current_node.y, 2)));
 							new_node.h = this.heuristic(new_node, destination);
 							new_node.f = new_node.g+new_node.h;
 
 							open.push(new_node);
 						}
 					}
 				}
 		}
 
 		return [];
 	}

	this.initAI = function(player, enemies, maplayout, end) {
		newmap = calcmap(end, player, maplayout);
	}
	this.endAI = function(){

	}
	this.spottedAI = function(){
		
	}
}