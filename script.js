{/* <div id="joke" class="joke"> Joke is loading...</div>
<div class="btn-parent">
    <button id="btn" class="btn"> Next JOKE</button>
</div> */}

// PROMISES
// GET https://icanhazdadjoke.com/


const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#btn');

const generateJokes = () => {

    const setHeader = {
        headers: {
            Accept : "application/json"
        }
    } 

    fetch('https://icanhazdadjoke.com/', setHeader) //setHeader is a function in place of argument...this particular funciton tells the endpoint i.e. the jokes api website that we want to recieve the data in json format
    .then( (res) => res.json() ) //make sure to not write curly braces or return statement when there is only single line code inside fat arrow function...or else it doesn't work
    .then( (data) => {
        jokes.innerHTML = data.joke;
    } ) 
    .catch((error) => {
        console.log(error);
    })
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes(); //this line ensures that by-default even before the button is clicked first time, this function executes
