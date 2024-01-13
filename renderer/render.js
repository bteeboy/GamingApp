//selecting elements
let raceDuration = document.getElementById('raceDuration')
let fuelPerLap = document.getElementById('fuelPerLap')
let averageLapTimeMin = document.getElementById('averageLapTimeMin')
let averageLapTimeSec = document.getElementById('averageLapTimeSec')

//performing calculation and adding result to output on button click
document.getElementById('calculate').addEventListener('click', () => {
    //making sure people don't add more than 60 seconds to the second input
    let averageLapTimeSecValue = parseInt(averageLapTimeSec.value)
    if (averageLapTimeSecValue >= 60) {
        averageLapTimeSecValue = 60
    }
    let averageLapTime = parseInt(averageLapTimeMin.value)+averageLapTimeSecValue/60

    //calculating the required fuel 
    let requiredFuel = (parseInt(raceDuration.value)/ averageLapTime ) * parseInt(fuelPerLap.value) + 2 * parseInt(fuelPerLap.value)

    if (isNaN(requiredFuel) || requiredFuel === false) {
        document.getElementById('output').innerText = 0
    }else {
        document.getElementById('output').innerText = requiredFuel
    }
});



//Formula notes
// FR = (TR / TL ) x FL + (2 x FL)

//Updated CHATGPT formula 
//FR=(TR/TL​)×FL+(2×FL)

//     FR – Fuel for race 
//     TR – Race duration in minutes
//     FL – Fuel per lap
//     TL – Average Lap Time 
