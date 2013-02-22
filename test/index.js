var test = require("tape")
var document = require("global/document")

var commonAncestors = require("../index")

test("is correct", function (assert) {
    var one = elem()
    var two = elem()
    var three = elem()

    one.appendChild(two)
    one.appendChild(three)

    var ancestor = commonAncestors(two, three)

    assert.equal(ancestor, one)
    assert.end()
})

test("doesn't return false positives", function (assert) {
    var one = elem()
    var two = elem()
    var three = elem()
    var four = elem()

    one.appendChild(two)
    three.appendChild(four)

    var ancestor = commonAncestors(two, four)

    assert.equal(ancestor, null)
    assert.end()
})

function elem(tagName) {
    return document.createElement(tagName || "div")
}
