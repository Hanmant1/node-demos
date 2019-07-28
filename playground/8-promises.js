// promise example
const add = (a, b) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(2,3).then((sum) => {
//     console.log(sum)
//     add(sum, 2).then((result) => {
//         console.log(result)
//     }).catch((e) =>{
//         console.log(e)
//     })
// }).catch((e) =>{
//     console.log(e)
// })

// promise chaining
add(1, 1).then((sum) => {
    console.log(sum)
    return add(sum, 1)
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})