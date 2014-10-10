/*
 Name: Jessica Hernandez
 Date: October 10, 2014
 Class & Section:  PWA1 - 2014-01
 Assignment: Homework - Analyze Buggy Search v2
 */

// Create privatized scope using a self-executing function
(function(){        //Self-executing function.

    console.log ("Program begins.");          //Logging to the console that the program has begun.

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),        //Define and declare variable by the elements that have the "results" id assigned to it.
		searchInput = document.forms[0].search,                 //Define and declare variable by search input that the user enters.
		currentSearch = '';                                     //Define and declare variable as a blank string.

	// Validates search query
	var validate = function(query){                             //Declare and define the variable as a function.

        console.log ("Inside the validate function.");          //Logging to the console that we're inside the validate function.
        console.log ("Query: ", query);                         //Logging to the console the current query being passed to the function.

		// Trim whitespace from start and end of search query
		while (query.charAt(0) === " "){                          //While having a blank character in the first index of the query string is true, the while loop iterates.
            query = query.substring(1, query.length);           //Query is now defined as the trimmed string to remove the whitespace; the new substring begins at index 1 and ends at the last index (length) of the string.
		}                                                       //End of first while loop.

		while (query.charAt(query.length-1) === "") {           //While having a blank character in the last index of the query string is true, the while loop iterates.
            query = query.substring(0, query.length - 1);       //Query is now defined as the trimmed string to remove the whitespace; the new substring begins at the first index and ends at the index before the last index ( or length) of the string.
        }                                                       //End of second while loop.

		// Check search length, must have 3 characters
		if (query.length < 3){                                      //Conditional statement to check if the search query string is less that 3 in length.
			alert("Your search query is too small, try again.");    //Alerting the use that their search query is too small.

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();                                    //Adds a focus box element to the searchInput.
			return;                                                 //Sends a return to the document.
		}                                                           //End of if statement.

		search(query);                                              //Invoke the search function, passing it the query argument.

	};                                                              //End of validate function.


	// Finds search matches
	var search = function(query){                                           //Declare and define the variable as a function.

        console.log ("Inside the search function.");                        //Logging to the console that we're inside the search function.
        console.log ("Query: ", query);                                     //Logging to the console the current query being passed to the function.

		// split the user's search query string into an array
		var queryArray = query.split(" ");                                   //Declare and define the variable as splitting the query string and place individual text into an array.

		// array to store matched results from database.js
		var results = [];                                                   //Declare and define the variable as an array.

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {                               //For loop (outer) used to iterate through the length of the db array in the database.js file.

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');                            //Declare and define the variable as the index before the | symbol in the string located in the current index of the db array.
            var dbItem = db[i].toLowerCase().substring(0, dbTitleEnd);      //Declare and define the variable as a substring in lowercase format from the first index to the index saved in dbTitleEnd, of the current index in the db array.

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {       //For loop (inner) used to iterate through the queryArray array.
                var qItem = queryArray[ii].toLowerCase();                   //Declare and define the variable as the string in lowercase format that's located in the current index of the queryArray array.

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbItem.indexOf(qItem);                        //Declare and define the variable as the result of comparing index lengths between the dbItem and the qItem.

                if (compare !== -1) {                                       //Conditional statement to check if the compare result is strictly not equal to -1.
                    results.push(db[i]);                                    //Add the string of the current db array index to the results array.
                }                                                           //End of if statement.

            }                                                               //End of inner for loop.

        }                                                                   //End of outer for loop.
		
		results.sort();                                                     //The data stored in the results array gets sorted.
		
		// Check that matches were found, and run output functions
		if(results.length = 0){                                             //Conditional statement to check if the length of the results array is equal to 0.
            results.length = 0;                                                      //Invoke the noMatch function.

		} else{                                                             //End of if statement. Begin else statement.
			showMatches(results);                                           //Invoke the showMatches function passing results as an argument.
		}                                                                   //End of else statement.

	};                                                                      //End of the search function.


	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){                                   //Declare and define the variable as a function.

        console.log ("Inside the noMatch function.");          //Logging to the console that we're inside the noMatch function.

		var html = ''+                                          //Declare and define the variable as strings. which are elements of html.
			'<p>No Results found.</p>'+                         //Cont. of html definition.
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>';     //Cont. of html definition.

		resultsDIV.innerHTML = html;                            //Set the innerHTML content of the resultsDIV element to the content of the html variable.
	};                                                          //End of the noMatch function.


	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){                            //Declare and define the variable as a function.

        console.log ("Inside the showMatches function.");          //Logging to the console that we're inside the showMatches function.

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',                                //Declare and define the variable as a string of html elements.
			title,                                                  //Declare the title variable.
			url;                                                    //Declare the url variable.
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){                   //For loop that iterates through the length of the results array.
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			var titleEnd = results[i].indexOf('|');                 //Declare and define the variable as the index before the | symbol in the string located in the current index of the results array.
			title = results[i].substring(0, titleEnd);              //Define the variable as a substring from the first index to the index saved in titleEnd, of the current index in the results array.
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);       //Define the variable as a substring starting as the index of the | symbol in the string located in the current index of the results array, up to the last index of the string.
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';     //Add on to the html variable with a string of the html elements.
		}                                                           //End of for loop.

		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.        //Set the innerHTML content of the resultsDIV element to the content of the html variable.

	};                                                              //End of the showMatches function.


	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){        //Declare and define the variable as a function.

        console.log ("Inside the document.forms[0] function.");          //Logging to the console that we're inside the document.forms[0] function.

        var query = searchInput.value;              //Declare and define the variable as the value of the searchInput variable.
        validate(query);                            //Invoke the validate function passing query as an argument.

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;                               //return false.
    };                                               //End of the document.forms[0] function.

})();        //End of self-executing function.