const CookieButton = document.getElementById("CookieButton"); 
const CookieContainer = document.getElementById("CookieContainer"); 
setTimeout(() => {
    if(!localStorage.getItem("CookieBannerDisplayed"))//if CookieBannerDisplayed is not in the local storage then
    { //local storage can be checked via browser "inspect">"Application">"Local storage">"http...."> "Key" area
        CookieContainer.classList.add("d-block"); //cookie container shows up after 2s of loading the page
    } 
}, 2000);
CookieButton.onclick = function () //when clicking the "apstiprinat" cookies button
{
    if (CookieContainer.classList.contains("d-block")) 
    {
        CookieContainer.classList.remove("d-block"); 
        localStorage.setItem("CookieBannerDisplayed", "true")

    }
};

var form = document.querySelector('.needs-validation'); //gives access to form
    form.addEventListener('submit', function(event) //when the "Sūtīt" button is clicked then
    {
        if (form.checkValidity() === false) //if validity is false
        {
            event.preventDefault(); //no request is sent
            event.stopPropagation(); //form submission is stopped
        }
        //makes sure boostrap asigns the right styles to the elements and inputs inside the form:
        form.classList.add('was-validated'); 
    });
//otherwise if the form is filled out correctly, then the data gets "submitted" (i.e. it doesn't get saved anywhere) and
//the page reloads.

// const targetDiv = document.getElementById("third");
// const btn = document.getElementById("toggle");
// btn.onclick = function () 
// {
//     targetDiv.classList.remove("d-md-block");
    
// };

// function reset() 
//         {
//             $('#first-result').hide();
//         }
