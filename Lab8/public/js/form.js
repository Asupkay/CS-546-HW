(function () {
    let checkPalindrome = (phrase) => {
        if(!phrase) throw "Must provide a phrase";

        phrase = phrase.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
        if(phrase === "") throw "Must provide letters and numbers";

        for(let i = 0; i < (phrase.length)/2; i++) {
            if(phrase[i] != phrase[phrase.length - i - 1]) {
                return false;
            }
        }
        return true;
    }

    let palindromeForm = document.getElementById("palindrome-input-form");
    let palindromeText = document.getElementById("palindrome-text");
    let errorContainer = document.getElementById("error-box");
    let errorText = document.getElementById("error-text"); 
    let palindromeListElement = document.getElementById("palindrome-list");

    palindromeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        try {
            errorContainer.classList.add("hidden");
            errorContainer.classList.remove("fit-content");

            let phraseValue = palindromeText.value;
            let result = checkPalindrome(phraseValue);        
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(phraseValue));

            if(result) {
                li.setAttribute("class", "is-palindrome");
            } else {
                li.setAttribute("class", "not-palindrome");
            }
            palindromeListElement.appendChild(li);
            
        } catch (e) {
            if(typeof e !== "string") {
                e = e.message;
            }
            errorText.innerHTML = e;
            errorContainer.classList.remove("hidden");
            errorContainer.classList.add("fit-content");
        }
    });
})();
