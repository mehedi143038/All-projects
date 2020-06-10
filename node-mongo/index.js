const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = ['mehedi', 'mama', 'sabbir', 'delowar', 'ferdous','hasan'];


//database connection 

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:WHzUdfkz2c0UAm0o@cluster0-64ttu.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("onlineStore").collection("products");
  // perform actions on the collection object
  collection.insertOne({
      name: 'Laptop',
      price: 400,
      stock: 10
  },(err,res)=>{
      console.log('successfully inserted');
  })
  console.log('database connected');
  client.close();
});



const dbUser = 'dbUser';
const password = 'WHzUdfkz2c0UAm0o';


app.get('/', (req,res)=>{
    const fruit = {
        name: "apple",
        price: 100,
        country: "Bangladesh"
    }
    res.send(fruit);
})

app.get('/fruit/banana', (req,res)=>{
    res.send({fruit: "banana", quantity: 1000, price: 10000})
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});
})

app.post('/addUser', (req,res)=>{
    const user = req.body;
    user.id = 44;
    res.send(user);
})

app.listen(3000, ()=> console.log('Listening to port 3000'));