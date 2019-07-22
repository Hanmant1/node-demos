console.log('client side javascript file loaded');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
var messageOne = document.querySelector('#message-1');
var messageTwo = document.querySelector('#message-2');

messageOne.textContent = 'loading...';
messageTwo.textContent = '';
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
    
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
         response.json().then((data) => {
             console.log(data.error);
            if (data.error) {
                messageOne.textContent = data;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        });
    });
});