const fastify = require("fastify");
const fetch = require("node-fetch");
const cors = require("fastify-cors");
const app = fastify({ logger : true });
require("dotenv").config()

app.register(cors, {
    credentials: true,
    origin: "*"
})

app.get("/",(request, response) => {
    fetch(`https://api.data.gov.in/resource/15d12d61-d71c-4b4d-aba0-eafe640ddd07?api-key=${process.env.APIKEY}&format=json&offset=0&limit=10`,{
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response=> response.json())
    .then(data => {
        response.send(data.records)
    })
    
})

app.listen(5000, (err, address) => {
    if (err) {
        console.log(err)
    } else {
        console.log("running on port "+ address)
    }
})