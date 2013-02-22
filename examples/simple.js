var commonAncestors = require("../index")
var document = require("global/document")

var head = document.head
var body = document.body

var ancestor = commonAncestors(head, body)

console.log("ancestor?", ancestor)
