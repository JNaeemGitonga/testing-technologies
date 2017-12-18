// const yola = require('./yola');
const fs = require('fs');
const request = require('request');
const inquirer = require('inquirer');
const NodeGeocoder = require('node-geocoder');
const chk = require('chalk')


const findLocation = location => {
    const geocoder = NodeGeocoder(options);
    var options = {
        provider: 'google',
        httpAdapter: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyCSYybDKFHB3PIVtYQ7YvFH9Sww9Bx8eIY`, // Default
    };
    geocoder.geocode(location)
    .then(res => {
      console.log(res);
    })
    .catch( err => {
      console.log(chk.red(err));
    });
}
inquirer
    .prompt([{
        type:'list',
        name: 'option',
        choices:['Twiter', 'Movies', 'Spotify', 'Maps', 'Sort'],
        message:'Where do you want to search?',
    },{
        type:'input',
        name:'searchTerm',
        message:'Tell me what you are looking for my dear.',
         }])
        .then(data => {
              if (data.option === 'Movies') {
                 
                getMovie(data.searchTerm)
            }
            
            else if (data.option === 'Sort') {
                let newArr = [];
               for(let i = 3; i < process.argv.length; i++) {
                   newArr.push(process.argv[i])
                
               }
                let sortedArr = newArr.sort((a,b) => {
                    return a-b
                })
                console.log(typeof sortedArr, sortedArr)
            }

            else if (data.option === 'Maps'){
                findLocation(data.searchTerm)
            }
        })


/*
const multiply = function (a, b) {
    if ( typeof a === 'number' && typeof b === 'number') {
        return a * b
    }
    
    else{return 'Please enter valid numbers' }
}
  
const getMiddle = function (word) {
    let length = word.length
    if (length % 2 === 1) {
        
        return word.charAt(Math.floor(length/2)) 
    }
    else if (length % 2 === 0) { 
        // console.log(length)
        let middleOne = (length/2) -1;
        let middleTwo = length/2;
        // console.log(middleOne, middleTwo)
        return word.substr(middleOne,2)
    }
}

*/

/*
    [CALLBACK FUN]
    
    function functionThatDoesNothin(cat, dog) {
        //I do nothing!
        dog(cat)

    }

    function cb(data){
        console.log(data)
    }

*/
console.log('line 39',getMiddle('asssasasasasTTasasasasas'))
console.log('line 40',process.argv[0] + process.argv[1]);
console.log('It does nothing')
console.log(process.argv)
console.log('line 43',parseFloat(process.argv[0]) + parseFloat(process.argv[1]));
yola.loop()
console.log(yola.artist)

const movies = fs.readFile('./movies.txt', 'utf8', (error,data) => {
    if(error) console.log(error)
    else{ 
        console.log( data.split(" ") );
        let dataArr = data.split(' ');
        dataArr.forEach(word => console.log('these words: ', word) )
    }
})

fs.writeFile('food.txt', 'I made a food file', err => {
    if (err) console.log(err)
    else {fs.readFile('food.txt', 'utf8', (err,data) => {
        if (err) console.log(err)
        else {console.log(data)}
    })}
})
let argThree = process.argv[2]
let searchTerm = process.argv[3];

console.log('LOOK EXPONENTIATION: ', 3 ** 5)

const getMovie = (data) => {
    request(`http://www.omdbapi.com/?t=${data}&apikey=trilogy`, (err,response,body) => {
        if (err) console.log(err);
        else if( !err & response.statusCode === 200) {
            console.log(JSON.parse(body))  
        }
    })
}

if (argThree === 'movie') {
    let newString = '';
    for(let i = 3; i < process.argv.length; i++) {
        
        newString = `${newString} ${process.argv[i]}`
    }
    getMovie(newString)
    console.log(newString)
}

else if (argThree === 'sort') {
    let newArr = [];
   for(let i = 3; i < process.argv.length; i++) {
       newArr.push(process.argv[i])
    
   }
    let sortedArr = newArr.sort((a,b) => {
        return a-b
    })
    console.log(typeof sortedArr, sortedArr)
}


/*
    [PLAYING WITH CONSTRUCTORS AND PROTOTYPES]
    function Car(make, model, year, driver) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.driver = driver;
        this.running = false;
        this.checkEngine = false;
    }

        let jag = new Car('Jaguar','s-type',2000,'barry bonds')

        Car.prototype.start = function() {
            this.running = true;
            console.log('VROOM')
        }
        console.log('jag off: ', jag)
        jag.start()
        console.log(jag)

        Car.prototype.accident = function(){
            console.log('ERRR BOOOOM')
            this.checkEngine = true
            this.driver = undefined;
        }


*/


// module.exports = getMiddle;
// module.exports = multiply;