import express from 'express'

const app = express()

const port = 4000

app.use(express.json())

//app.get() operation

app.get('/', (req, res) => {
    res.send("<h1>hello form express server</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>this is a about page</h1>")
})


app.get('/page/job', (req, res) => {
    res.send("<h1>welcome to the job page</h1>")
})


app.get('/page/constact', (req, res) => {
    res.send("<h1>this is a contact page</h1>")
})

let students = ['mohit', 'khushi', 'sneha', 'priyanka']

app.get('/getuser', (req, res) => {
    res.json({
        data: students,
        success: true,
        message: "data fetched successfully"
    })
})
//app.post operation

app.post('/createstudent', (req, res) => {
    const name = req.body.name

    students.push(name)
    res.json({
        data: students,
        success: true,
        message: "data created successfully"
    })
})


//app.put() operation

app.put('/updateuser', (req, res) => {


    const { name, newName } = req.body

    console.log(name, newName)

    let index = students.indexOf(name)

    students[index] = newName


    res.json({
        data: students,
        success: true,
        message: "user updated successfully"
    })
})

//app.delete() operation

app.delete('/deleteuser', (req, res) => {
    const { name } = req.body

    const index = students.indexOf(name)

    students.splice(index, 1)

    res.json({
        data: students,
        success: true,
        message: "user deleted successfully"
    })


})

let arr = [1, 2, 3, 4]
arr.splice(2, 1)
console.log(arr)


app.listen(port, () => {
    console.log('server is running on port:', port)
})