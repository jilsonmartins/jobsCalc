// criação das rotas

const express = require('express');
const routes = express.Router()

/**  
 * const  = __dirname + "/views"
 * EJS : ejs ja ler a pasta views, ou seja, o  está implicito.
 * caminho do arquivo na rota - não precisa da / e nem o .html
 */ 

const views = __dirname + "/views/" // foi necessario pq ejs entende que views esta na raiz, e não na pasta src(source)

const profile = {
    name: "Jilson Martins Júnior",
    avatar: "https://avatars.githubusercontent.com/u/66040353?v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 8,
    "vacation-per-year": 4
}

const jobs = [
    {
        id: 1,
        name: "Pizzaria Guloso",
        "daily-hours": 2,
        "total-hours": 60,
        created_at: Date.now()
    },
    {
        id: 2,
        name: "OneTwo Prroject",
        "daily-hours": 3,
        "total-hours": 47,
        created_at: Date.now()
    }
]

routes.get('/', (req, res) => res.render(views + "index", { jobs: jobs}))
routes.get('/job', (req, res) => res.render(views + "job"))

routes.post('/job', (req, res) => {
  
    const lastId = jobs[jobs.length - 1]?.id || 1; // (? -> senão tiver o número segue em frente) | (||-> ou pega esse valor)  

    jobs.push({
        id: lastId + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_at: Date.now() // atribuindo data atual
    })
    return res.redirect('/')
})

routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", {profile: profile}))

module.exports = routes;