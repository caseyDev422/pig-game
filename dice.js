"use strict";
var $ = function(id) { return document.getElementById(id); };

var newGame = function() {
	console.log(game.isValid());
    game.setInitialPlayer();
	
	
};
var takeTurn = function() {
    game.takeTurn();
    
};
var holdTurn = function() {
	game.hold();
};
window.onload = function() {
	
    $("new_game").onclick = newGame;
    $("roll").onclick = takeTurn;
    $("hold").onclick = holdTurn;
    $("player1").focus();
    
    // call the load method and pass it the page elements the game object needs
    game.load($("player1"), $("player2"), $("score1"), $("score2"), $("current"), $("die"), $("total"));
};