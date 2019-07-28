require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('5d3c978139f0e61574cd512e').then((task) => {
//     console.log(task)
//     return Task.find({ completed: true })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const findIDAndRemove = async (id) => { 
    const deleteTask = await Task.findByIdAndRemove(id)
    const completedTask = await Task.find({ completed: false })
    return completedTask
}

findIDAndRemove('5d3c978139f0e61574cd512e').then((completedTask) => {
    console.log(completedTask)
}).catch((e) => {
    console.log(e)
})