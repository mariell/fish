function Rectangle(topleftx,toplefty,width,height,color)
{
    this.color=color;
    this.topLeft = new Point(topleftx,toplefty);
    this.bottomRight = new Point(topleftx+width,height+toplefty);
	
	  this.getDistance = function(point){
        var difx=this.getX()+16-point.getX();
        var dify=this.getY()+16-point.getY();
        difx=difx*difx;
        dify=dify*dify;
        var totaldif= difx+dify;
        totaldif=Math.sqrt(totaldif);
        return totaldif;

    }
    this.getbottomRight = function()
    {
        return this.bottomRight;
    }
	
    this.gettopLeft = function()
    {
        return this.topLeft;
    }
	
    this.getColor= function()
    {
        return this.color;
    }
	
    this.isIntersect= function(r1)
    {
        return !(this.getX()>(r1.getX()+r1.getWitdh())||
            (this.getX()+this.getWitdh())<(r1.getX())||
            (this.getY())>(r1.getY()+r1.getHeight())||
            (this.getY()+this.getHeight())<r1.getY());

    }
	
    this.setX = function(X)
    {
        var width=this.getWidth();
        this.topLeft.setX(X);
        this.bottomRight.setX(X+width);
    }
    this.setY = function(Y)
    {
        var height=this.getHeight();
        this.topLeft.y=Y;
        this.bottomRight.y=Y+height;
    }
    this.valueInRange= function(value, min,max)
    {
        return (value>=min) &&(value<=max);
    }
	
    this.getTopLeft = function()
    {
        return this.topLeft;
    }
    this.getBottomRight= function()
    {
        return this.bottomRight;
    }
   
    this.getX = function()
    {
        return this.topLeft.x;
    }
    this.getY = function()
    {
        return this.topLeft.y;
    }
    this.getWitdh = function()
    {
        return this.bottomRight.x-this.topLeft.x;
    }
	
    this.getWidth = function()
    {
        return this.bottomRight.x-this.topLeft.x;
    }
    this.getColor = function()
    {
        return this.color;
    }
	
    this.setColor= function(color)
    {
        this.color=color;
    }
	
    this.setWidth = function(width)
    {
        this.bottomRight.x=(this.topLeft.x+width);
    }
    this.setHeight = function(height)
    {
        this.bottomRight.y=(this.topLeft.y+height);
    }
    
    this.getHeight = function()
    {
        return  this.bottomRight.y-this.topLeft.y;
    }
    this.Draw = function(context,color)
    {
	
        context.fillStyle = this.color;
        context.fillRect(this.getX(), this.getY(), this.getWitdh(), this.getHeight());
    }
    this.Draw = function(context)
    {
	
        context.fillStyle = this.color;
        context.fillRect(this.getX(), this.getY(), this.getWitdh(), this.getHeight());
    }

    this.offSet = function(x,y)
    {
        this.topLeft.x+=x;
        this.bottomRight.x+=x;
        this.topLeft.y+=y;
        this.bottomRight.y+=y;
    }
}