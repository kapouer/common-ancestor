# common-ancestor

[![dependency status][3]][4]

[![browser support][5]][6]

Find the common ancestor of multiple DOM nodes

## Example

```js
var commonAncestors = require("common-ancestor")
var document = require("global/document")

var head = document.head
var body = document.body

var ancestor = commonAncestors(head, body)

console.log("ancestor?", ancestor)
```

## Installation

`npm install common-ancestor`

## Contributors

 - Raynos

## MIT Licenced

  [3]: http://david-dm.org/Colingo/common-ancestor/status.png
  [4]: http://david-dm.org/Colingo/common-ancestor
  [5]: http://ci.testling.com/Colingo/common-ancestor.png
  [6]: http://ci.testling.com/Colingo/common-ancestor
