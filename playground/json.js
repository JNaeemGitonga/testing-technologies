const fs = require('fs');

const obj = {
    name: 'Jaha Naeem'
}

let stringObj = JSON.stringify(obj)


/**
 *
 * take salvage value if totaled
 * 
 * tigling in my hand,
 * my sleep is off,
 * right side injury
 * well they say that adrenalin can rise an come down but now I am on the 
 * down slope of my adrinaline high and, josling around like a pinball in my
 * car but my seatbelt got me
 * 
 * 
 */

    const newNote = {
        title:'newness',
        body:'Chanel Heart type'
    }

const create = (() => {
    return new Promise((resolve,reject) => {
        fs.writeFile('notes.json', JSON.stringify(newNote), err => {
            if (err) reject(err)
            else resolve()
            
        })
    })
})();

fs.readFile('notes.json', (err,data) => {
    console.log(JSON.parse(data))
            
})
    

// console.log(fs.readFile('notes.json')) 