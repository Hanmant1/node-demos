const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb+srv://test_user01:test_user01@cluster0-depgf.mongodb.net/test?retryWrites=true&w=majority';
const databaseName = 'task-manager';

mongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect', error);
    }

    console.log('connected');
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

    // db.collection('users').insertMany([{
    //     name:'Jen',
    //     age: 29
    // },
    // {
    //     name:'len',
    //     age: 20
    // }], (error, result) => {
    //     if(error) {
    //         console.log('Unable to insert many', error);
    //     }

    //     console.log(result.ops);
    // });

    // const updatePromise = db.collection('users').updateOne({
    //     _id: "5d3853b6a9c5e432c06e6f14"
    // },{
    //         $set: {
    //             name: "Mike"
    //         }
    //     });

    // updatePromise.then((result) => {
    //     console.log("Updated", result);
    // }).catch((error) => {
    //     console.log("Error!", error);
    // });

    db.collection('users').deleteOne({
        age: 27
    }).then((result) => {
        console.log('deleted', result);
    }).catch((error) => {
        console.log('error!', error);
    })
});