var Pig = function() {
    // properties to keep track of the current roll, the current
    // turn, and the game total
    this.total = 0;
    this.turn = 0;
    this.roll = 0;
};
// inherit from Die object
Pig.prototype = new Die(); 

Pig.prototype.takeTurn = function() {
    // use inherited method to roll the die
    this.roll = this.rollDie(); // use inherited method to roll the die
    
    // update or reset the turn property based on result of die roll
    this.turn = (this.roll === 1) ? 0 : this.turn + this.roll;
};
Pig.prototype.hold = function() {
    // update the game total
    this.total = this.total + this.turn; 
    // reset other properties for next turn
    this.roll = 0;
    this.turn = 0; 
};
Pig.prototype.reset = function() {
    // reset all properties
    this.total = 0;
    this.roll = 0;
    this.turn = 0;
};