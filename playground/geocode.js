const request = require('superagent')
const {DRKSKYKEY,GOO_GEO} = require('./config')


const geocodeAddress = (address) => {
    
    return new Promise((resolve,reject) => {
        request
            .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOO_GEO}`)
            .then(res => {
                /**
                 * Note the different options in stringify they are used to prettify our stringified JSON
                 * 
                 * If you were to print out `res.body` without `JSON.stringify` then you would see
                 * `[Object]` on the body. `JSON.stringify` reveals everything to us though
                 * 
                 * The 2nd argument is used to filter out properties but we will use `undefined`
                 * so that we can specify the number of indentations (2 or 4) in the third argument
                 */
                let seelocation = JSON.stringify(res.body, undefined, 2)
                if (res.body.status === 'OK') {
                    let lat = res.body.results[0].geometry.location.lat
                    let lng = res.body.results[0].geometry.location.lng
                   resolve({
                        address:res.body.results[0].formatted_address,
                        lat,
                        lng
                    })
                    console.log(res.body.results[0].formatted_address)
                    getConditions(lat, lng)
                }
                else if(res.body.status === 'ZERO_RESULTS') {
                    throw new Error('Unable to find that address')
                }
            })
            .catch(err => reject(err))
    })
}


const getConditions = (lat,lon) => {

    return request
        .get(`https://api.darksky.net/forecast/${DRKSKYKEY}/${lat},${lon}`)
        .then(res => {
            if(res.status === 200) {
                let tempInfo = {
                    currentTemp:res.body.currently.temperature,
                    apparentTemp:res.body.currently.apparentTemperature
                }

                console.log(`Currently it's ${tempInfo.currentTemp} but it feels like ${tempInfo.apparentTemp}`)
            }
           
        })
        .catch(err => {
                console.log('error getting conditions',JSON.stringify(err))
        })
}
module.exports = {
    geocodeAddress,
    getConditions
}
