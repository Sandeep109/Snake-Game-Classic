class Snake{
    constructor(){
        this.body = [];
        this.body[0] = createVector(floor(w/2),floor(h/2));
        this.xdirect = 0;
        this.ydirect = 0;
        this.lenth = 0;
        
    }
    setDirect(x,y){
        this.xdirect = x;
        this.ydirect = y;

    }
    update(){
        var headP  = this.body[this.body.length-1].copy();
        this.body.shift();
        headP.x += this.xdirect;
        headP.y += this.ydirect;
        this.body.push(headP);
    }
    grow(){
        var headP  = this.body[this.body.length-1].copy();
        this.lenth++;
        this.body.push(headP);
    }
    endGame() {
        var x = this.body[this.body.length-1].x;
      var y = this.body[this.body.length-1].y;
      if(x > w-1 || x < 0 || y > h-1 || y < 0) {
         return true;
      }
      for(var i = 0; i < this.body.length-1; i++) {
          var part = this.body[i];
        if(part.x == x && part.y == y) {
            return true;
        }
      }
      return false;
    }

    eat(pos) {
        var x = this.body[this.body.length-1].x;
      var y = this.body[this.body.length-1].y;
      if(x == pos.x && y == pos.y) {
        this.grow();
        return true;
      }
      return false;
    }

    display() {
        for(var i = 0; i < this.body.length; i++) {
          fill(0,255,0);
        noStroke();
        rect(this.body[i].x, this.body[i].y, 1, 1)
      }
    }





}