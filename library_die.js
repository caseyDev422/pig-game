var Die = function() {};
Die.prototype.rollDie = function() {
	console.log("rollDie called");
    var random = Math.random();
    random = Math.floor(random * 6);
    return random + 1;
};