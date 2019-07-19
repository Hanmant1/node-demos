// const squre = function(x) {
//     return x * x;
// }

// const squre = (x) => {
//     return x * x;
// }

// const squre = (x) => x * x;

// console.log(squre(3));


// don't use arrow function into following code bez variable is not accessible
const event = {
    name : 'Birthday Party',
    guestList: ['Andrew','Jen','Mike'],
    printGuestList : function () {
        const that = this;
        console.log('Guest list for', this.name);
        
        this.guestList.forEach((guest) => {
            console.log(guest + 'attending '+ that.name);
        });
}

}

event.printGuestList();