// VERSION 1

// 1.
// Write a function that:
// - Logs to the console numbers 1 to 100.
// - However, if the number is a multiple of 3 it should log to the console "This is a multiple of 3"
// - If it's a multiple of 5 it should log "This is a multiple of 5"
// - If it's a multiple of both 3 and 5 it should log "Jackpot!"
// - Otherwise, it should just log the number
// Hint: use the modulo operator (%) to figure out if it's a multiple of 3/5. Make sure the remainder is 0, in order to pass the condition.
// Hint: the order of conditional statements is important!

function getNumbers () {
    for (let i = 0; i <= 100; i++) {
        if(i % 15 == 0) {
            console.log('Jackpot!')
        } else if (i % 3 == 0) {
            console.log('This is a multiple of 3')
        } else if (i % 5 == 0) {
            console.log('This is a multiple of 5')
        } else {
            console.log(i);
        }
    }
}
getNumbers();


// 2.
// Using JavaScript only (adding HTML to index.html is NOT allowed), write a function that:
// - Creates a button element (with text "click me!")
// - Creates an empty image element and add it to the document.
// - Inserts an image URL into the <img> tag, when the button is clicked
// - Removes the button after the click
// - Use the following image URL: https://thehub.dk/files/5ad4b4a9f9ac4aa13c3d2d58/logo_upload-6d537cf7e5de664db275b32b3c6ae12d.png


// function getImage () {
//     let button = document.createElement('button');
//     button.textContent = 'Click Me!';
//     document.body.appendChild(button);
//     button.addEventListener('click', () => {
//         let image = document.createElement('img')
//         // Because of the url which was given us did not work I used another url which I found in google
//         image.setAttribute('src', 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
//         document.body.appendChild(image);
//         button.remove();
//     })
// }
// getImage();


// 3.
// Write a function that:
// - Makes an API call using the Fetch API or the regular XMLHttpRequest
// - Use the following API: https://randomuser.me/api?results=3
// - Parse the response and then display the "first" and "last" names of the first three users within the DOM (inside an unordered list)


// const ApiURL = 'https://randomuser.me/api?results=3';
// function fetchData (url) {
//     fetch(url)
//         .then(response => response.json().then(data => {
//             let userArray = data.results;
//             let output = '';
//             userArray.forEach(user => {
//                 output += `<ul>
//                 <li><strong>Name:</strong> ${user.name.first}</li>
//                 <li><strong>Surname:</strong> ${user.name.last}</li>    
//                 </ul>`
//             });
//             document.body.innerHTML = output;
//         }))
//         .catch(err => console.log('Something went wrong', err))
// }

// fetchData(ApiURL);