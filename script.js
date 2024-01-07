{/* <div id="joke" class="joke"> Joke is loading...</div>
<div class="btn-parent">
    <button id="btn" class="btn"> Next JOKE</button>
</div> */}

// PROMISES
// GET https://icanhazdadjoke.com/


const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#btn');

// **********using PROMISES
// const generateJokes = () => {

//     const setHeader = {
//         headers: {
//             Accept : "application/json"
//         }
//     } 

//     fetch('https://icanhazdadjoke.com/', setHeader) //setHeader is a function in place of argument...this particular funciton tells the endpoint i.e. the jokes api website that we want to recieve the data in json format
//     .then( (res) => res.json() ) //make sure to not write curly braces or return statement when there is only single line code inside fat arrow function...or else it doesn't work
//     .then( (data) => {
//         jokes.innerHTML = data.joke;
//     } ) 
//     .catch((error) => {
//         console.log(error);
//     })
// }


// *********using async-await
// for normal function sytax will be 'async function generateJokes(){}'
// for fat arrow functions: 
const generateJokes = async () => {
    try {
        const setHeader = {
            headers: {
                Accept : "application/json"
            }
        }  
        const res = await fetch('https://icanhazdadjoke.com/', setHeader); //setHeader is a function in place of argument...this particular funciton tells the endpoint i.e. the jokes api website that we want to recieve the data in json format
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }catch(err) {
        console.log(err);
    }
}


// calling of function:
jokeBtn.addEventListener('click', generateJokes);
generateJokes(); //this line ensures that by-default even before the button is clicked first time, this function executes
