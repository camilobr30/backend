const express = require("express")
const app = express();
const {User} = require("./modules")
const {router} = require('./routes')
const cors = require('cors')
const PORT = process.env.PORT || 4000

app.use(express.urlencoded({extended: true})) // para recibir archivos media(audio,video,img)

app.use(express.json()) // devuelve toda la información en formato JSON y me permite usar body de express


// Veifico que este activo
app.get("/", (req, res) => {
    res.send(`server the school on in port ${PORT}`)
})


//Consulta de todos los estudiantes
app.get("/api/v1/", (req, res) => {
    User.find((err, user) => {
        !err ? res.status(200).send(user) : res.status(409).send(err)
    })

})

// Consulta de un solo estudiante
app.use('/api/v1', router)
// app.get("/api/v1/:userid", (req, res) => {
//     const id = req.params.userid
//     User.findById(id, (err, user) => {
//         !err ? res.status(200).send("el id es " + user) : res.status(409).send(err)
//     })
// })

//Post 
// app.post("/api/v1/create/user", (request, response) => {
//     const {name, age, last_name, gender, is_active, enrollment, hostess} = request.body

//     const newUser = User({name, last_name, age, is_active, gender, enrollment, hostess})

//     newUser.save((err, user) => {
//         err ? console.log(err) : response.status(201).send(user)
//     })

//     // response.status(200).send("User has been created")
// })

// Actualización completa de datos
// app.put("/api/v1/update/user/:userid", (req, res) => {
//     const id = req.params.userid
//     const {name, last_name, age, gender, hostess} = req.body
//     const newData = {
//         name,
//         last_name,
//         age,
//         hostess,
//         gender
//     }
//     User.findByIdAndUpdate(id, {
//         $set: newData
//     }, {
//         new: true
//     }, (err, user) => {
//         !err ? res.status(200).send(user) : res.status(404).send(err)
//     })
// })

// Actualización de matricula
// app.patch("/api/v1/enrollment/user/:userid", (req, res) => {
//     const id = req.params.userid

//     User.findByIdAndUpdate(id, {
//         $set: {
//             enrollment: true
//         }
//     }, {
//         new: true
//     }, (err, user) => {
//         !err ? res.status(200).send("the enrollment Update") : res.status(404).send(err)
//     })
// })

// Cancelacion
app.delete("/api/v1/delete/user/:userid", (req, res) => {
    const id = req.params.userid

    User.findByIdAndUpdate(id, {
        $set: {
            is_active: false
        }
    }, {
        new: true
    }, (err, user) => {
        !err ? res.status(200).send("the User has been exterminated") : res.status(404).send(err)
    })
})

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`App runnig on port ${PORT}`)
})

