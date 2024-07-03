const express = require("express")

const app = express()

app.use(express.static("public"))

const path = require("path")

const port = 2000

app.get("/", (req, res) => {
    res.sendFIle(path.resolve(__dirname, "home.html"))
})

app.get("/about", (req, res) => {
    res.sendFIle(path.resolve(__dirname, "about.html"))
})

app.get("/about", (req, res) => {
    res.sendFIle(path.resolve(__dirname, "contact.html"))
})

app.get("/about", (req, res) => {
    res.sendFIle(path.resolve(__dirname, "blog.html"))
})

app.get("/about", (req, res) => {
    res.sendFIle(path.resolve(__dirname, "blog_single.html"))
})

app.get("/about", (req, res) => {
    res.sendFIle(path.resolve(__dirname, "project.html"))
})

app.get("/about", (req, res) => {
    res.sendFIle(path.resolve(__dirname, "service.html"))
})

app.get("/about", (req, res) => {
    res.sendFIle(path.resolve(__dirname, "team.html"))
})

app.listen(port, () => {
    
})






var server = https.createServer(function (req, res){

    if (req.url === "/") {
        res.end("welcome to home page")
    }else if (req.url === "/about") {
        res.end("welcome to about page")
    }else if (req.url === "/contact") {
        res.end("welcome to contact page")
    }else {
        res.writehead(404)
        res.end("the page could not be found")
    }
});

server.listen(1234)
