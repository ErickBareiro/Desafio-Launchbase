const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const pages = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get("/", function (req, res) {
  const about = {
    avatar: "images/frent.jpg",
    name: "Bareiro WebDeveloper",
    description: "Web Designer focado em gerar mais visibilidade para seu negócio adotando estratégias de Marketing Digital e criação de sites com foco na Experiência do Usuário.",
    link: [
      {
        name: "Github",
        url: "https://github.com/ErickBareiro/"
      },
      {
        name: "Instagram",
        url: "https://instagram.com/bareiro.webdeveloper/"
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/erick-bareiro/"
      }
    ]
  }
  return res.render("about", {about})
})

server.get("/courses", function (req, res) {

  return res.render("courses", {
    items: pages
  })
})

server.use(function (req, res) {
  res.status(404).render("not-found");
});

server.listen("5000", function () {
  console.log('Server is runing')
})