setTimeout(function () {
    console.log('callback example');
}, 2000);

const geocode = (address, callback) => {
    setTimeout(function () {
        const data = {
            latitude: 0,
            langitude: 0
        }

        callback(data);
    }, 2000);
}

geocode('Philadenphia', (data) => {
    console.log(data)
});


const addition = (num1, num2, callback) => {
    setTimeout(function() {
        const sum = num1 + num2;
        callback(sum);
    }, 2000);
}

addition(1,2,(sum) => {
    console.log(sum);
})