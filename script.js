document.getElementById("email-form").addEventListener("submit", function(event)
{
event.preventDefault();

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const email = document.getElementById("email").value;
resultElement = document.getElementById("result")

if (emailRegex.test(email)) 
    {
        resultElement.textContent="Email valid"
        resultElement.className ="valid"
    }
    else
    {
        resultElement.textContent="Email invalid"
        resultElement.className ="invalid"
    }
});
