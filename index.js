const events = require('events');
const util = require('util')

const teams = function(name){
    this.name = name
}

util.inherits(teams, events.EventEmitter)

const Arsenal = new teams('Arsenal')
const Juve = new teams('Juve')
const Roma = new teams('Roma')

const teamArray = [Arsenal, Juve, Roma]
teamArray.forEach(team => {
team.on('nation', function(nation) {
    console.log(team.name + ' is ' + nation + ' footbal club')
})
})
Arsenal.emit('nation', 'English')
Juve.emit('nation', 'Italian')
Roma.emit('nation', 'Italien')