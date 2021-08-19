// import express
const express = require('express')

// create server
const app = express()

// 3000 is common
const port = 3000

// confirmation function
function onListen () {
  console.log(`Listening on :${port}`)
}

// start listening
app.listen(
  port, // TCP port where the server listens
  onListen // callback runs when server starts
)
//Print response endpoints to screen: try with localhost/hello
function render (favorite) {
    const document = `<html>
      <head>
        <title>My favorite movie</title>
      </head>
  
      <body>
        <h1>${favorite}</h1>
      </body>
    </html>`
  
    return document
  }
  
  // register GET /page endpoint
  app.get(
    '/:title', // route
    (request, response) => { // handler callback
      const favorite = `My favorite movie is ${request.params.title}`
  
      const page = render(favorite)
  
      response.send(page)
    }
  )