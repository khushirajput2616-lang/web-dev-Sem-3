import http from 'http'

const port =3000

const server = http.createServer((req,res) =>{
    if(req.url ==='/'){
        res.end('<h1>welocme to backend server</h1>')

    } else if (req.url ==='/about'){
        res.end('<h1>this is  About page</h1>')

    }else if (req.url ==='/countact/mobile'){
        res.end('<h1>this is countact  </h1>')

    }else if (req.url ==='/home'){
        res.end('<h1>this is home page </h1>')
    }
})

server.listen(port,()=>{
    console.log('server is listen in port:',port)
})

