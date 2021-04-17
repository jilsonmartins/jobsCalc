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

routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", {profile: profile}))

module.exports = routes;