var contains = require("contains")
var parents = require("ancestors")
var slice = Array.prototype.slice

module.exports = getCommonAncestor

function getCommonAncestor(node) {
    if (arguments.length < 2) {
        return node
    }

    var nodes = slice.call(arguments, 1)
    var list = parents(node)
    list.unshift(node)

    return list.filter(function (parent) {
        return nodes.every(function (node) {
            return contains(parent, node)
        })
    })[0] || null
}
