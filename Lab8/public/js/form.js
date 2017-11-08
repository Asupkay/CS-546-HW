(function () {
    let checkPalindrome = (phrase) => {
        //If there is no phrase error
        if(!phrase) throw "Must provide a phrase";

        //Lower case the whole thing remove spaces and any symbols
        phrase = phrase.toLowerCase().replace(/[^A-Za-z0-9]/g, '');

        //If there is no phrase after that error
        if(phrase === "") throw "Must provide letters and numbers";

        //Compare the first half of the phrase to the second half of the phrase
        for(let i = 0; i < (phrase.length)/2; i++) {
            if(phrase[i] != phrase[phrase.length - i - 1]) {
                return false;
            }
        }
        return true;
    }

    //The whole form used to add the event listener
    let palindromeForm = document.getElementById("palindrome-input-form");
    //The text so the value can be grabbed
    let palindromeText = document.getElementById("palindrome-text");
    //The error container so I can add and remove classes from it
    let errorContainer = document.getElementById("error-box");
    //The error text so I can change it
    let errorText = document.getElementById("error-text"); 
    //The list so I can add items to it
    let palindromeListElement = document.getElementById("palindrome-list");

    //Add an event listener to the form listening for the submit event
    palindromeForm.addEventListener("submit", function(event) {
        //Prevent it from reloading on submit
        event.preventDefault();
        
        //Listen for errors and if one occures display it to the user
        try {
            //Hide the error container if it was displayed
            errorContainer.classList.add("hidden");
            errorContainer.classList.remove("fit-content");
          
            //Grab the phrase that the user inputed and check to see if it is a palindrom 
            let phraseValue = palindromeText.value;
            let result = checkPalindrome(phraseValue);        

            //Create a list element for the phrase and append it in
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(phraseValue));

            //Depending if the result was a palindrome or not add a class
            if(result) {
                li.setAttribute("class", "is-palindrome");
            } else {
                li.setAttribute("class", "not-palindrome");
            }

            //Put the palindrome into the list
            palindromeListElement.appendChild(li);
            
        } catch (e) {
            if(typeof e !== "string") {
                e = e.message;
            }
            //Put the error into the error text
            errorText.innerHTML = e;
            errorContainer.classList.remove("hidden");
            errorContainer.classList.add("fit-content");
        }
    });
})();
