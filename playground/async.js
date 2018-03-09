/*

    TO INSPECT/DEBUG NODE IN CHROME 

    `$ node --inspect-brk <filename>`

    in browser chrome://inspect
    then choose file

    THE CONSOLE.LOGs AND SETTIMEOUTs BELOW:
        those illustrate how the callstack, nodeApi,
        callback queue, and event loop work 
        the shutting things down console.log will 
        fire before the settimeouts

*/ 

// console.log('working')

// setTimeout(() => console.log('first callback'), 2000)
// setTimeout(() => console.log('second callback'), 0)

// console.log('shutting things down')

const request = require('superagent')
const yargs = require('yargs')
const {geocodeAddress} = require('./geocode')

/*
    yargs will be used to handle command line arguments and
    to give our app options and help menus


    use `encodeURIComponent('your string here')` to make a normal string URL ready 
    use `decodeURIComponent('713%20sampson%20st%20clinton')` to get back a normal string without URI encoding

*/


const argv = yargs
    .options({
        a: {
            demand:true,
            alias: 'address',
            describe: 'Address to fetch weather for'
        }
    })
    .help()
    .alias('help','h')
    .argv
let address = encodeURIComponent(argv.a)
// console.log(argv)
geocodeAddress(address).then(location => {
    console.log(location)
},err => {
    if (err.code === "ENOTFOUND"){
        console.log('Could Not connect to API Servers')
    }
    else console.log(err.message)
})

