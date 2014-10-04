/*
 Name: Jessica Hernandez
 Date: October 02, 2014
 Class & Section:  PWA1 - 2014-01
 Assignment: Homework - Analyze Duel #1
 */

// self-executing function
(function(){                            //Initialize as a self-executing function.

    console.log("FIGHT!!!");            //Log to the console the chant of "FIGHT!!" when the program initiates.

    //player name
    var playerOneName = "Kabal";        //Declare and define the player 1 name. Global variable.
    var playerTwoName = "Kratos";       //Declare and define the player 2 name. Global variable.

    //player damage
    var player1Damage = 20;             //Declare and define the amount of damage player 1 inflicts. Global variable.
    var player2Damage = 20;             //Declare and define the amount of damage player 2 inflicts. Global variable.

    //player health
    var playerOneHealth = 100;          //Declare and define player 1's max health. Global variable.
    var playerTwoHealth = 100;          //Declare and define player 2's max health. Global variable.

    //initiate round
    var round=0;                        //Declare and define the initial value of round to zero. Global variable.


    function fight(){                   //Initialize the fight function.

        console.log ("Inside the fight function");      //Logging to the console that we are inside of the fight function.

        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);       //Alerting the user of the initial health power each player has at the beginning of the duel and indicates that it's at the starting point.

        for (var i = 0; i < 10; i++)        //For loop used to iterate through the rounds no more than 10 times.
        {
            console.log(i);     //Logging to the console the count to know which number loop is currently being displayed.

            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;        //Declare and define the player 1 minimum damage.
            var minDamage2 = player2Damage * .5;        //Declare and define the player 2 minimum damage.
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);       //Declare and define the variable as the player 1's damage minus their minimum damage, times a random number, minus their minimum damage, and rounded down to the nearest low integer.
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);       //Declare and define the variable as the player 2's damage minus their minimum damage, times a random number, minus their minimum damage, and rounded down to the nearest low integer.

            //inflict damage
            playerOneHealth-=f1;        //Reduce and update player 1's health (global variable) by the value of the f1 variable result.
            playerTwoHealth-=f2;        //Reduce and update player 2's health (global variable) by the value of the f2 variable result.

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);      //Display each player's name and health in the console.

            //check for a winner
            var result = winnerCheck();     //Declaring the result (local variable) and defining it as the winnerCheck function, which therefore, invokes the function.

            console.log(result);            //Logging the current result to the console output.


            if (result==="no winner"){      //Conditional to check if the result is strictly equal to "no winner".
                round++;            //Increment the round (global variable) by 1.
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{                 //End of the if statement and begin of the else statement.
                alert(result);      //Alerting the user of the current result.
                break;              //Force the loop to break/stop when the condition results in else.

            }                       //End of the else statement.

        }                           //End of the for loop.

    }                               //End of the fight function.


    function winnerCheck(){         //Initialize the winnerCheck function

        console.log ("Inside the winnerCheck function");

        var result="no winner";


        if (playerOneHealth<1 && playerTwoHealth<1){
            result = "You Both Die";

        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"

        } else if (playerTwoHealth<1){
            result = playerOneName+" WINS!!!"

        }

        return result;

    }       //End of the winnerCheck function.


    /*******  The program gets started below *******/

    console.log ("Program begins");     //Logging to the console that the program is beginning.

    fight();        //Invoking the fight function.

})();