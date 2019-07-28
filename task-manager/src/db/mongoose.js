const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://test_user01:test_user01@cluster0-depgf.mongodb.net/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})


    