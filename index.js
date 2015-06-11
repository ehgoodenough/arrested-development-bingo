Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)]
}

Array.prototype.shuffle = function() {
    for(var i = this.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var swap = this[i]
        this[i] = this[j]
        this[j] = swap
    }
    return this
}

var jokes = {}

for(var id in recdev.labels) {
    var label = recdev.labels[id]
    var flows = recdev.flows[id].flows
    if(id.match(/joke/)) {
        var joke = {
            "id": id,
            "label": label,
            "flows": flows
        }
        //for(var episode in flows) {
            //?!
        //}
        jokes[id] = joke
    }
}

for(var label in recdev.labels) {
    if(label.match(/episode/)) {
        //var season = parseInt(label.match(/S([0-9]+)/)[1])
    }
}
