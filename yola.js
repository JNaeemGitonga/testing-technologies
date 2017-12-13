const artist = {
    rap: 'titty boi',
    'rock-n-roll':'Chuck Berry',
    'r-an-b':'isley brothers'
}

const cars = {
    sports:['ferrari','lamborghini','amg'],
    sedan:['528i','e350']
}
module.exports = {
    artist:artist,
    cars:cars
}

module.exports.loop = () => {
    console.log(Object.keys(cars))
 }

// console.log('LOOK FROM LINE 10 yola.js',obj)