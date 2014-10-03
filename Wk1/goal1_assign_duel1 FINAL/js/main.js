/*
 Name: Jessica Hernandez
 Date: October 02, 2014
 Class & Section:  PWA1 - 2014-01
 Assignment: Homework - Analyze Duel #1
 */

// self-executing function
(function(){        //Creating a self-executing function.

    console.log("FIGHT!!!");        //Log to the console the chant of "FIGHT!!" when the program initiates.

    //player name
    var playerOneName = "Spiderman";        //Declare and define the player 1 name. Global variable.
    var playerTwoName = "Batman";           //Declare and define the player 2 name. Global variable.

    //player damage
    var player1Damage = 20;         //Declare and define the amount of damage player 1 inflicts. Global variable.
    var player2Damage = 20;         //Declare and define the amount of damage player 2 inflicts. Global variable.

    //player health
    var playerOneHealth = 100;          //Declare and define player 1's max health. Global variable.
    var playerTwoHealth = 100;          //Declare and define player 2's max health. Global variable.

    //initiate round
    var round=0;            //Declare and define the initial value of round to zero. Global variable.

    function fight(){
        console.log ("Inside the fight function");
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++)
        {
            console.log(i);

            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1;        //Reduce and update player 1's health (global variable) by the value of the f1 variable result.
            playerTwoHealth-=f2;        //Reduce and update player 2's health (global variable) by the value of the f2 variable result.

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check for victor
            var result = winnerCheck();
            console.log(result);            //Logging the current result to the console output.
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{                 //End of the if statement and begin of the else statement.
                alert(result);      //Alerting the user of the current result.
                break;              //Force the loop to break/stop when the condition results in else.
            };                      //End of the else statement.

        };                          //End of the for loop.
    };                              //End of the fight function.

    function winnerCheck(){
        console.log ("Inside the winnerCheck function");
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
        return result;
    };

    /*******  The program gets started below *******/
    console.log ("Program begins");
    fight();

})();