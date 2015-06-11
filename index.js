var Jokes = {}
for(var id in recdev.labels) {
    var label = recdev.labels[id]
    var flows = recdev.flows[id].flows
    if(id.match(/joke/)) {
        var joke = {
            "id": id,
            "label": label,
            "flows": flows
        }
        for(var episode in flows) {
           var season = parseInt(episode.match(/S([0-9]+)/)[1])
           if(Jokes[season] == undefined) {
               Jokes[season] = new Array()
           }
           if(Jokes[season].indexOf(joke) == -1) {
               Jokes[season].push(joke)
           }
        }
    }
}
for(var season in Jokes) {
    for(var i = Jokes[season].length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var swap_variable = Jokes[season][i]
        Jokes[season][i] = Jokes[season][j]
        Jokes[season][j] = swap_variable
    }
}

function getRandomJokesFromSeason(season, amount) {
    var jokes = []
    season = season || 1
    amount = amount || 25
    for(var index = 0; index < amount; index++) {
        if(index == Math.floor(amount / 2)) {
            jokes.push({
                "id": "joke-0",
                "label": "<b>\"This is Arrested Development\"</b>"
            })
        } else {
            var joke = Jokes[season].shift()
            Jokes[season].push(joke)
            jokes.push(joke)
        }
    }
    return jokes
}

function randomizeSeed() {
    if(window.location.hash) {
        var seed = window.location.hash.substr(1)
        Math.seedrandom(seed)
    } else {
        var seed = Math.floor(Math.random() * 99999)
        location.hash = seed
        Math.seedrandom(seed)
    }
}

function populateBingoBoard() {
    var jokes = getRandomJokesFromSeason(1, 25)
    for(var index = 0; index < jokes.length; index++) {
        $("#" + (index + 1)).find("a").html(jokes[index].label)
        $("#" + (index + 1)).find("a").attr("href", "http://recurringdevelopments.com/#" + jokes[index].id)
    }
}

$(document).ready(function() {
    $("button").click(function() {
        populateBingoBoard()
    })
    $("body").ready(function() {
        populateBingoBoard()
    })
})
