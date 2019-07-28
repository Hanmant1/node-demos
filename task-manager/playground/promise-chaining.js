require('../src/db/mongoose')
const User = require('../src/models/user')

// 5d3c542326d4204b84a82a5d
// User.findByIdAndUpdate('5d3c7f9fa80a5d2b7c346ed2',{age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })
  
const updateUser = async (id, age) => {
    const user = await User.findByIdAndUpdate(id,{age: age})
    const count = await User.countDocuments({age: 2})
    return count
}

updateUser('5d3c542326d4204b84a82a5d',1).then((count) => {
    console.log(count)
}).catch((e) =>{
    console.log(e)
})