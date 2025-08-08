const {MongoClient} = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017/?appName=MongoDB+Compass&directConnection=true&serverSelectionTimeoutMS=2000')
const axios = require('axios');
// var url;
async function start(){
    try{
    await client.connect();
    const db = client.db('taskdb');
    const collection = db.collection('catimages');
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    console.log(response.data);
    // url = response.data[0].url;
    // console.log(url);
    // document.getElementById('catImg').src= url;
    await collection.insertOne(response.data[0]);
    console.log("Inserted into taskdb");
    }
    catch(error)
    {
    console.log("error");
    console.log(error);
    }
    finally{
        await client.close();
    }

// .then(function(response)
// {
    

// })
// .catch(function(error)
// {

// })
// .finally(
//     client.close()
// )
}
start();
//spotify and bhagvadgita api with query.
//https://cat-fact.herokuapp.com/facts