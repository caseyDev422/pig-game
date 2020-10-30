var game = {
    player1: null, // these properties will be set by the load method  
    player2: null, 
    currentPlayer: null, 
    load: function(name1Node, name2Node, score1Node, score2Node, currentNode, dieNode, totalNode) {
        this.player1 = {
            name: name1Node,
            score: score1Node,
            pig: new Pig()
        };
        this.player2 = {
            name: name2Node,
            score: score2Node,
            pig: new Pig()
        };
        this.currentPlayer = {
            name: currentNode,
            roll: dieNode,
            total: totalNode,
            pig: this.player1.pig  // initial value - will be changed by changePlayer method
        };
        return this;
    },
    isValid: function() {
        if (this.player1.name.value === "" || this.player2.name.value === "") {
            return false;
        } else { 
            return true; 
        }
    },
    clearScores: function() {
        this.player1.score = 0;
		this.player1.pig.reset();  // reset player1 score value and reset its Pig object
        
        this.player2.score = 0;
		this.player1.pig.reset(); // reset player2 score value and reset its Pig object
    },
    setInitialPlayer: function() {
        if (game.isValid()) {
			document.getElementById("turn");
			game.changePlayer();
		}// if game is valid set initial player by calling the changePlayer method
    },
    takeTurn: function() {
		var score;
        this.currentPlayer.pig.takeTurn();// use the Pig object of the currentPlayer property to take a turn
		document.getElementById("die").value = game.currentPlayer.pig.roll;
		game.currentPlayer.pig.roll = score;
		while (!(document.getElementById("hold").click)) {
			document.getElementById("total").value = score + score;
		}
		
		
		
		
    },
    changePlayer: function() {
		
        // display result of last roll in the currentPlayer display properties
		
		
		if (this.player1.pig.roll === 0 && this.currentPlayer.pig.roll === 0) {
				game.currentPlayer = game.player2;
			game.takeTurn();
		} else if (this.player2.pig.roll === 0 && this.currentPlayer.pig.roll === 0) {
			game.currentPlayer = game.player1;
			game.takeTurn();
		} else {
			game.takeTurn();
		}
		document.getElementById("current").innerHTML = game.currentPlayer.name.value;
		document.getElementById("die").value = game.currentPlayer.pig.roll;
		
		// if current player's turn is zero, need to switch players
        // and start new turn
    },
    hold: function() {
		var p1Score = document.getElementById("score1").value;
		var p2Score = document.getElementById("score2").value;
        if (game.currentPlayer.name === game.player1.name) {
            //document.getElementById("hold").innerHTML = game.currentPlayer.pig.hold();
            p1Score = game.currentPlayer.total += game.player1.score;
        } else if (game.currentPlayer.name === game.player2.name) {
            game.currentPlayer.pig.hold();
            p2Score = game.currentPlayer.total += game.player2.score;
        }// use the currentPlayer Pig object to hold
        
        // determine whether player1 or player1 are the current player, then
        // update that player's score with the current total
    },
    checkWinner: function() {
        if (this.player1.score >= 100) {
            return this.player1.name;
			game.clearScores();
        } else if (this.player2.score >= 100) {
            return this.player2.name;
			game.clearScores();
        } else {
            game.takeTurn();
        }
        // check the players' Pig objects to see if either is at or above 100
        // total points. If so, return that player's name. Otherwise, return 
        // the string "none".
    }
};