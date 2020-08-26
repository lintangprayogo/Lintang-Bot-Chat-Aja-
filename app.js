const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const server = express()
server.use(bodyParser.urlencoded({
    extended:true
}))
server.use(bodyParser.json());

let token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0MTQzMjAsInRpbWVzdGFtcCI6IjIwMjAtMDgtMjZUMTE6NTg6MDYuNzY5KzA3OjAwIn0.vVbR5nJBtQSdUXXvFyhPOea3uAOPq_M1-lssB8AgKRw"
let url = 'https://api.chataja.co.id/api/v1/chat/conversations/'

server.post('/',(req,res)=>{
    room_id = res.req.body.chat_room.qiscus_room_id
    let msg = res.req.body.message.text
    let nama = res.req.body.from.fullname
    if(msg === "/halo"){
        pesasn = "Halo, "+nama+"Hail Hydra"
        axios.post(url+'post_comment',{
            access_token: token,
            topic_id:room_id,
            comment:'Hai juga '+nama
        }).then((hsl)=>{
            console.log(hsl.data.data.username)
        }).catch((err)=>{
            //error
        })
    }
})
server.listen((process.env.PORT || 3000), () => {
    console.log("Server is up and running...");
});