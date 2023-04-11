//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	getWidthAndHeight(){
		return this.width+" "+this.height;
	}
	getArea(){
		return width*height;
	}
}

class Square extends Rectangle {
	super(width,height);
	getPerimeter(){
		return 2*(width + height);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
