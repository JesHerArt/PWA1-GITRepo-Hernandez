

// self-executing function
(function(){        //Creating a self-executing function

    console.log("FIGHT!!!");        //Log to the console the chant of "FIGHT!!" when the program initiates.

    //player name
    var playerOneName = "Spiderman";        //Declare and define the player 1 name.
    var playerTwoName = "Batman";           //Declare and define the player 2 name.

    //player damage
    var player1Damage = 20;         //Declare and define the amount of damage player 1 inflicts.
    var player2Damage = 20;         //Declare and define the amount of damage player 2 inflicts.

    //player health
    var playerOneHealth = 100;          //Declare and define player 1's max health.
    var playerTwoHealth = 100;          //Declare and define player 2's max health.

    //initiate round
    var round=0;            //Declare and deinfe the initial value of round to zero.

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
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

          };
    };

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