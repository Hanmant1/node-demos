const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb+srv://test_user01:test_user01@cluster0-depgf.mongodb.net/test?retryWrites=true&w=majority';
const databaseName = 'task-manager';

mongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect', error);
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Sam',
    //     age: 25
    // }, (error, result) => {
    //     if(error) {
    //         console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    // });

    db.collection('users').insertMany([{
        name:'Jen',
        age: 29
    },
    {
        name:'len',
        age: 20
    }], (error, result) => {
        if(error) {
            console.log('Unable to insert many', error);
        }

        console.log(result.ops);
    })
});