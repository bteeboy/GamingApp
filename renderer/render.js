//ACC CALCULATOR
//selecting elements
const raceDuration = document.getElementById('raceDuration')
const fuelPerLap = document.getElementById('fuelPerLap')
const averageLapTimeMin = document.getElementById('averageLapTimeMin')
const averageLapTimeSec = document.getElementById('averageLapTimeSec')

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

//WRC RANDOM STAGE

//When the buttons to select the different apps are clicked the css is changed to display the right div change the body background and dim the button
document.getElementById('ACCAppSelector').addEventListener('click', () => {
    document.querySelector('.ACCFuelCalculator').style.display = 'block'
    document.querySelector('.WRCRandomStage').style.display = 'none'
    document.body.style.backgroundImage = "url('../accbackground.jpg')"
    document.getElementById('ACCAppSelector').style.opacity = '50%'
    document.getElementById('WRCAppSelector').style.opacity = '100%'
})
document.getElementById('WRCAppSelector').addEventListener('click', () => {
    document.querySelector('.ACCFuelCalculator').style.display = 'none'
    document.querySelector('.WRCRandomStage').style.display = 'block'
    document.body.style.backgroundImage = "url('../wrcbackground.jpg')"
    document.getElementById('WRCAppSelector').style.opacity = '50%'
    document.getElementById('ACCAppSelector').style.opacity = '100%'
})

//Making an array containing objects with stage information 
const WRCStages = [
    {
      event: "Monte Carlo",
      route: "La Bollène-Vésubie - Peïra Cava",
      distance: "18.51 km",
      surface: "Asphalt 100%",
    },
    {
      event: "Monte Carlo",
      route: "Peïra Cava - La Bollène-Vésubie",
      distance: "18.18 km",
      surface: "Asphalt 100%",
    },
    {
      event: "Monte Carlo",
      route: "La Bollène-Vésubie - Col de Turini",
      distance: "9.21 km",
      surface: "Asphalt 100%",
    },
    {
      event: "Monte Carlo",
      route: "Pra d'Alart",
      distance: "8.88 km",
      surface: "Asphalt 100%",
    },
    {
      event: "Monte Carlo",
      route: "La Maïris",
      distance: "9.30 km",
      surface: "Asphalt 100%",
    },
    {
      event: "Monte Carlo",
      route: "Baisse de Patronel",
      distance: "9.30 km",
      surface: "Asphalt 100%",
    },
    {
      event: "Monte Carlo",
      route: "Saint-Léger-les-Mélèzes - La Bâtie-Neuve",
      distance: "16.79 km",
      surface: "Asphalt 100%",
    },
    {
      event: "Monte Carlo",
      route: "La Bâtie-Neuve - Saint-Léger-les-Mélèzes",
      distance: "16.64 km",
      surface: "Asphalt 100%",
    },
    {
      event: "Monte Carlo",
      route: "Moissière",
      distance: "8.18 km",
      surface: "Asphalt 100%",
    },
    {
      event: "Monte Carlo",
      route: "Ancelle",
      distance: "8.03 km",
      surface: "Asphalt 100%",
    },
    {
      event: "Monte Carlo",
      route: "Ravin de Coste Belle",
      distance: "8.60 km",
      surface: "Asphalt 100%",
    },
    {
      event: "Monte Carlo",
      route: "Les Borels",
      distance: "8.60 km",
      surface: "Asphalt 100%",
    },
    {
        event: "Sweden",
        route: "Hof-Finnskog",
        distance: "21.47 km",
        surface: "Snow - 100%",
      },
      {
        event: "Sweden",
        route: "Åsnes",
        distance: "21.46 km",
        surface: "Snow - 100%",
      },
      {
        event: "Sweden",
        route: "Spikbrenna",
        distance: "11.07 km",
        surface: "Snow - 100%",
      },
      {
        event: "Sweden",
        route: "Lauksjøen",
        distance: "10.95 km",
        surface: "Snow - 100%",
      },
      {
        event: "Sweden",
        route: "Åslia",
        distance: "10.39 km",
        surface: "Snow - 100%",
      },
      {
        event: "Sweden",
        route: "Knapptjernet",
        distance: "10.51 km",
        surface: "Snow - 100%",
      },
      {
        event: "Sweden",
        route: "Vargasen",
        distance: "8.24 km",
        surface: "Snow - 100%",
      },
      {
        event: "Sweden",
        route: "Lövstaholm",
        distance: "8.24 km",
        surface: "Snow - 100%",
      },
      {
        event: "Sweden",
        route: "Älgsjön",
        distance: "3.37 km",
        surface: "Snow - 100%",
      },
      {
        event: "Sweden",
        route: "Ekshärad",
        distance: "3.37 km",
        surface: "Snow - 100%",
      },
      {
        event: "Sweden",
        route: "Stora Jangen",
        distance: "4.86 km",
        surface: "Snow - 100%",
      },
      {
        event: "Sweden",
        route: "Sunne",
        distance: "4.86 km",
        surface: "Snow - 100%",
      },
      {
        event: "Mexico",
        route: "El Chocolate",
        distance: "26.68 km",
        surface: "Gravel: 92%, Dirt: 5%, Asphalt: 3%",
      },
      {
        event: "Mexico",
        route: "Otates",
        distance: "24.74 km",
        surface: "Gravel: 92%, Dirt: 5%, Asphalt: 3%",
      },
      {
        event: "Mexico",
        route: "Ortega",
        distance: "13.10 km",
        surface: "Gravel: 91%, Dirt: 7%, Asphalt: 2%",
      },
      {
        event: "Mexico",
        route: "Las Minas",
        distance: "11.46 km",
        surface: "Gravel: 92%, Dirt: 6%, Asphalt: 2%",
      },
      {
        event: "Mexico",
        route: "Ibarrilla",
        distance: "12.92 km",
        surface: "Gravel: 94%, Sand: 2%, Asphalt: 4%",
      },
      {
        event: "Mexico",
        route: "Derramadero",
        distance: "7.18 km",
        surface: "Gravel: 88%, Dirt: 9%, Asphalt: 3%",
      },
      {
        event: "Mexico",
        route: "El Brinco",
        distance: "10.51 km",
        surface: "Gravel: 92%, Dirt: 6%, Asphalt: 2%",
      },
      {
        event: "Mexico",
        route: "Guanajuatito",
        distance: "10.62 km",
        surface: "Gravel: 89%, Dirt: 6%, Asphalt: 5%",
      },
      {
        event: "Mexico",
        route: "Alfaro",
        distance: "8.00 km",
        surface: "Gravel: 92%, Sand: 4%, Asphalt: 4%",
      },
      {
        event: "Mexico",
        route: "Mesa Cuata",
        distance: "8.80 km",
        surface: "Gravel: 90%, Sand: 3%, Asphalt: 7%",
      },
      {
        event: "Mexico",
        route: "San Diego",
        distance: "5.78 km",
        surface: "Gravel: 98%, Dirt: 1%, Sand: 1%",
      },
      {
        event: "Mexico",
        route: "El Mosquito",
        distance: "6.84 km",
        surface: "Gravel: 97%, Dirt: 1%, Sand: 2%",
      },
      {
        event: "Croatia",
        route: "Bliznec",
        distance: "25.56 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Croatia",
        route: "Trakošćan",
        distance: "25.56 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Croatia",
        route: "Vrbno",
        distance: "12.70 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Croatia",
        route: "Zagorska Sela",
        distance: "12.70 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Croatia",
        route: "Kumrovec",
        distance: "12.94 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Croatia",
        route: "Grdanjci",
        distance: "12.86 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Croatia",
        route: "Stojdraga",
        distance: "10.24 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Croatia",
        route: "Mali Lipovec",
        distance: "10.24 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Croatia",
        route: "Hartje",
        distance: "7.79 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Croatia",
        route: "Kostanjevac",
        distance: "8.70 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Croatia",
        route: "Krašić",
        distance: "8.77 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Croatia",
        route: "Petruš Vrh",
        distance: "8.77 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Portugal",
        route: "PortugalBaião",
        distance: "30.32 km",
        surface: "Gravel: 82%, Asphalt: 16%, Cobblestone: 2%",
      },
      {
        event: "Portugal",
        route: "Caminha",
        distance: "31.21 km",
        surface: "Gravel: 79%, Asphalt: 19%, Cobblestone: 2%",
      },
      {
        event: "Portugal",
        route: "Fridão",
        distance: "16.72 km",
        surface: "Gravel: 88%, Asphalt: 10%, Cobblestone: 2%",
      },
      {
        event: "Portugal",
        route: "Marão",
        distance: "15.12 km",
        surface: "Gravel: 68%, Asphalt: 30%, Cobblestone: 2%",
      },
      {
        event: "Portugal",
        route: "Ponte de Lima",
        distance: "14.77 km",
        surface: "Gravel: 69%, Asphalt: 29%, Cobblestone: 2%",
      },
      {
        event: "Portugal",
        route: "Viana do Castelo",
        distance: "7.87 km",
        surface: "Gravel: 95%, Asphalt: 2%, Cobblestone: 3%",
      },
      {
        event: "Portugal",
        route: "Ervideiro",
        distance: "7.30 km",
        surface: "Gravel: 96%, Asphalt: 2%, Cobblestone: 2%",
      },
      {
        event: "Portugal",
        route: "Celeiro",
        distance: "8.18 km",
        surface: "Gravel: 96%, Asphalt: 2%, Cobblestone: 2%",
      },
      {
        event: "Portugal",
        route: "Touca",
        distance: "7.51 km",
        surface: "Gravel: 92%, Asphalt: 6%, Cobblestone: 2%",
      },
      {
        event: "Portugal",
        route: "Vila Boa",
        distance: "7.39 km",
        surface: "Gravel: 72%, Asphalt: 26%, Cobblestone: 2%",
      },
      {
        event: "Portugal",
        route: "Carrazedo",
        distance: "7.48 km",
        surface: "Gravel: 75%, Asphalt: 22%, Cobblestone: 3%",
      },
      {
        event: "Portugal",
        route: "Anjos",
        distance: "7.39 km",
        surface: "Gravel: 65%, Asphalt: 35%",
      },
      {
        event: "Italia Sardegna",
        route: "Rena Majore",
        distance: "31.53 km",
        surface: "Gravel: 82%, Sand: 14%, Asphalt: 4%",
      },
      {
        event: "Italia Sardegna",
        route: "Monte Olia",
        distance: "31.62 km",
        surface: "Gravel: 82%, Sand: 14%, Asphalt: 4%",
      },
      {
        event: "Italia Sardegna",
        route: "Littichedda",
        distance: "13.30 km",
        surface: "Gravel: 68%, Sand: 23%, Asphalt: 9%",
      },
      {
        event: "Italia Sardegna",
        route: "Ala del Sardi",
        distance: "18.22 km",
        surface: "Gravel: 92%, Sand: 1%, Asphalt: 7%",
      },
      {
        event: "Italia Sardegna",
        route: "Mamone",
        distance: "16.45 km",
        surface: "Gravel: 96%, Asphalt: 4%",
      },
      {
        event: "Italia Sardegna",
        route: "Li Pinnenti",
        distance: "7.60 km",
        surface: "Gravel: 59%, Sand: 40%, Asphalt: 1%",
      },
      {
        event: "Italia Sardegna",
        route: "Malti",
        distance: "7.73 km",
        surface: "Gravel: 57%, Sand: 39%, Asphalt: 4%",
      },
      {
        event: "Italia Sardegna",
        route: "Bassacutena",
        distance: "7.49 km",
        surface: "Gravel: 71%, Sand: 16%, Asphalt: 13%",
      },
      {
        event: "Italia Sardegna",
        route: "Bortigiadas",
        distance: "9.02 km",
        surface: "Gravel: 94%, Asphalt: 6%",
      },
      {
        event: "Italia Sardegna",
        route: "Sa Mela",
        distance: "9.13 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Italia Sardegna",
        route: "Monte Muvri",
        distance: "7.51 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Italia Sardegna",
        route: "Monte Acuto",
        distance: "7.44 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Kenya",
        route: "Malewa",
        distance: "9.70 km",
        surface: "Gravel: 82%, Rock: 14%, Dirt: 4%",
      },
      {
        event: "Kenya",
        route: "Tarambete",
        distance: "9.63 km",
        surface: "Gravel: 82%, Rock: 14%, Dirt: 4%",
      },
      {
        event: "Kenya",
        route: "Moi North",
        distance: "5.46 km",
        surface: "Gravel: 83%, Rock: 12%, Dirt: 5%",
      },
      {
        event: "Kenya",
        route: "Marula",
        distance: "5.48 km",
        surface: "Gravel: 82%, Rock: 13%, Dirt: 5%",
      },
      {
        event: "Kenya",
        route: "Wileli",
        distance: "4.92 km",
        surface: "Gravel: 85%, Rock: 12%, Dirt: 3%",
      },
      {
        event: "Kenya",
        route: "Kingono",
        distance: "4.41 km",
        surface: "Gravel: 82%, Rock: 12%, Dirt: 3%",
      },
      {
        event: "Kenya",
        route: "Soysambu",
        distance: "20.67 km",
        surface: "Gravel: 51%, Sand: 35%, Dirt: 14%",
      },
      {
        event: "Kenya",
        route: "Mbaruk",
        distance: "20.23 km",
        surface: "Gravel: 50%, Sand: 36%, Dirt: 14%",
      },
      {
        event: "Kenya",
        route: "Sugunoi",
        distance: "9.74 km",
        surface: "Gravel: 32%, Sand: 54%, Dirt: 14%",
      },
      {
        event: "Kenya",
        route: "Nakuru",
        distance: "9.98 km",
        surface: "Gravel: 33%, Sand: 53%, Dirt: 14%",
      },
      {
        event: "Kenya",
        route: "Kanyawa",
        distance: "10.70 km",
        surface: "Gravel: 64%, Sand: 21%, Dirt: 15%",
      },
      {
        event: "Kenya",
        route: "Kanyawa - Nakura",
        distance: "10.69 km",
        surface: "Gravel: 64%, Sand: 20%, Dirt: 16%",
      },
      {
        event: "Estonia",
        route: "Otepää",
        distance: "17.07 km",
        surface: "Gravel: 88%, Dirt: 12%",
      },
      {
        event: "Estonia",
        route: "Rebaste",
        distance: "17.07 km",
        surface: "Gravel: 88%, Dirt: 12%",
      },
      {
        event: "Estonia",
        route: "Nüpli",
        distance: "8.60 km",
        surface: "Gravel: 91%, Dirt: 9%",
      },
      {
        event: "Estonia",
        route: "Truuta",
        distance: "8.60 km",
        surface: "Gravel: 91%, Dirt: 9%",
      },
      {
        event: "Estonia",
        route: "Koigu",
        distance: "8.47 km",
        surface: "Gravel: 82%, Dirt: 18%",
      },
      {
        event: "Estonia",
        route: "Kooraste",
        distance: "8.47 km",
        surface: "Gravel: 82%, Dirt: 18%",
      },
      {
        event: "Estonia",
        route: "Elva",
        distance: "11.82 km",
        surface: "Gravel: 80%, Asphalt: 11%, Dirt: 9%",
      },
      {
        event: "Estonia",
        route: "Metsalaane",
        distance: "11.56 km",
        surface: "Gravel: 80%, Asphalt: 11%, Dirt: 9%",
      },
      {
        event: "Estonia",
        route: "Vahessaare",
        distance: "6.17 km",
        surface: "Gravel: 81%, Asphalt: 8%, Dirt: 11%",
      },
      {
        event: "Estonia",
        route: "Külaaseme",
        distance: "6.17 km",
        surface: "Gravel: 80%, Asphalt: 8%, Dirt: 12%",
      },
      {
        event: "Estonia",
        route: "Vissi",
        distance: "5.63 km",
        surface: "Gravel: 78%, Asphalt: 13%, Dirt: 9%",
      },
      {
        event: "Estonia",
        route: "Vellavere",
        distance: "5.63 km",
        surface: "Gravel: 79%, Asphalt: 13%, Dirt: 8%",
      },{
        event: "Finland",
        route: "Leustu",
        distance: "11.09 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Finland",
        route: "Lahdenkyla",
        distance: "11.00 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Finland",
        route: "Saakoski",
        distance: "4.83 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Finland",
        route: "Maahi",
        distance: "4.73 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Finland",
        route: "Painaa",
        distance: "6.41 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Finland",
        route: "Peltola",
        distance: "6.14 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Finland",
        route: "Paijala",
        distance: "22.92 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Finland",
        route: "Ruokolahti",
        distance: "22.90 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Finland",
        route: "Honkanen",
        distance: "10.41 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Finland",
        route: "Venkajarvi",
        distance: "10.35 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Finland",
        route: "Vehmas",
        distance: "12.57 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Finland",
        route: "Hatanpaa",
        distance: "12.50 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Greece",
        route: "Gravia",
        distance: "24.64 km",
        surface: "Dirt: 80%, Gravel: 20%",
      },
      {
        event: "Greece",
        route: "Prosilio",
        distance: "24.64 km",
        surface: "Dirt: 80%, Gravel: 20%",
      },
      {
        event: "Greece",
        route: "Mariolata",
        distance: "13.51 km",
        surface: "Dirt: 64%, Gravel: 36%",
      },
      {
        event: "Greece",
        route: "Karoutes",
        distance: "13.51 km",
        surface: "Dirt: 64%, Gravel: 36%",
      },
      {
        event: "Greece",
        route: "Viniani",
        distance: "11.12 km",
        surface: "Dirt: 100%",
      },
      {
        event: "Greece",
        route: "Delphi",
        distance: "11.12 km",
        surface: "Dirt: 100%",
      },
      {
        event: "Greece",
        route: "Eptalofos",
        distance: "10.39 km",
        surface: "Dirt: 80%, Gravel: 20%",
      },
      {
        event: "Greece",
        route: "Lilea",
        distance: "10.39 km",
        surface: "Dirt: 80%, Gravel: 20%",
      },
      {
        event: "Greece",
        route: "Parnassós",
        distance: "5.57 km",
        surface: "Dirt: 46%, Gravel: 54%",
      },
      {
        event: "Greece",
        route: "Bauxites",
        distance: "5.57 km",
        surface: "Dirt: 46%, Gravel: 54%",
      },
      {
        event: "Greece",
        route: "Drosochori",
        distance: "8.68 km",
        surface: "Dirt: 100%",
      },
      {
        event: "Greece",
        route: "Amfissa",
        distance: "8.68 km",
        surface: "Dirt: 100%",
      },
      {
        event: "Chile",
        route: "Bio Bío",
        distance: "34.72 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Chile",
        route: "Arauco",
        distance: "34.79 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Chile",
        route: "Coronel",
        distance: "17.97 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Chile",
        route: "Lota",
        distance: "16.73 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Chile",
        route: "Santa Juana",
        distance: "16.87 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Chile",
        route: "Los Angeles",
        distance: "10.79 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Chile",
        route: "San Rosendo",
        distance: "10.08 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Chile",
        route: "Laja",
        distance: "7.87 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Chile",
        route: "Yumbel",
        distance: "7.75 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Chile",
        route: "Florida",
        distance: "8.21 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Chile",
        route: "Hualqui",
        distance: "8.09 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Chile",
        route: "Reputo",
        distance: "8.53 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Central European Rally",
        route: "Rouské",
        distance: "32.36 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Central European Rally",
        route: "Lukoveček",
        distance: "32.34 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Central European Rally",
        route: "Raztoka",
        distance: "15.40 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Central European Rally",
        route: "Žabárna",
        distance: "15.42 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Central European Rally",
        route: "Provodovice",
        distance: "16.99 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Central European Rally",
        route: "Chvalčov",
        distance: "16.94 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Central European Rally",
        route: "Vítová",
        distance: "8.77 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Central European Rally",
        route: "Brusné",
        distance: "8.77 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Central European Rally",
        route: "Libosváry",
        distance: "14.73 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Central European Rally",
        route: "Rusava",
        distance: "14.64 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Central European Rally",
        route: "Osíčko",
        distance: "8.94 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Central European Rally",
        route: "Botarell",
        distance: "8.65 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Japan",
        route: "Lake Mikawa",
        distance: "19.89 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Japan",
        route: "Kudarisawa",
        distance: "19.88 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Japan",
        route: "Oninotaira",
        distance: "11.38 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Japan",
        route: "Okuwacho",
        distance: "11.37 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Japan",
        route: "Habu Dam",
        distance: "10.27 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Japan",
        route: "Habucho",
        distance: "10.28 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Japan",
        route: "Nenoue Plateau",
        distance: "13.74 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Japan",
        route: "Tegano",
        distance: "13.74 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Japan",
        route: "Higashino",
        distance: "6.92 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Japan",
        route: "Hokono Lake",
        distance: "6.92 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Japan",
        route: "Nenoue Highlands",
        distance: "6.81 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Japan",
        route: "Moltifao",
        distance: "6.81 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Mediterraneo",
        route: "Asco",
        distance: "29.20 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Mediterraneo",
        route: "Ponte",
        distance: "28.63 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Mediterraneo",
        route: "Monte Cinto",
        distance: "15.15 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Mediterraneo",
        route: "Albarello",
        distance: "16.16 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Mediterraneo",
        route: "Capannace",
        distance: "20.45 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Mediterraneo",
        route: "Serra Di Cuzzioli",
        distance: "7.66 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Mediterraneo",
        route: "Maririe",
        distance: "8.47 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Mediterraneo",
        route: "Poggiola",
        distance: "8.47 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Mediterraneo",
        route: "Monte Alloradu",
        distance: "10.74 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Mediterraneo",
        route: "Ravin de Finelio",
        distance: "9.46 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Mediterraneo",
        route: "Cabanella",
        distance: "10.09 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Mediterraneo",
        route: "Moltifao",
        distance: "11.17 km",
        surface: "Asphalt - 100%",
      },
      {
        event: "Pacifico",
        route: "Talao",
        distance: "31.44 km",
        surface: "Gravel: 99%, Dirt: 1%",
      },
      {
        event: "Pacifico",
        route: "Talanghilirair",
        distance: "32.40 km",
        surface: "Gravel: 99%, Dirt: 1%",
      },
      {
        event: "Pacifico",
        route: "SungaiKunit",
        distance: "14.58 km",
        surface: "Gravel: 99%, Dirt: 1%",
      },
      {
        event: "Pacifico",
        route: "Sangir Balai Janggo",
        distance: "15.53 km",
        surface: "Gravel: 99%, Dirt: 1%",
      },
      {
        event: "Pacifico",
        route: "South Solok",
        distance: "16.87 km",
        surface: "Gravel: 99%, Dirt: 1%",
      },
      {
        event: "Pacifico",
        route: "Kebun Raya Solok",
        distance: "8.70 km",
        surface: "Gravel: 98%, Dirt: 2%",
      },
      {
        event: "Pacifico",
        route: "Batukangkung",
        distance: "8.76 km",
        surface: "Gravel: 98%, Dirt: 2%",
      },
      {
        event: "Pacifico",
        route: "Abai",
        distance: "5.37 km",
        surface: "Gravel: 98%, Dirt: 2%",
      },
      {
        event: "Pacifico",
        route: "Moearaikoer",
        distance: "6.34 km",
        surface: "Gravel: 99%, Dirt: 1%",
      },
      {
        event: "Pacifico",
        route: "Bidaralam",
        distance: "7.73 km",
        surface: "Gravel: 99%, Dirt: 1%",
      },
      {
        event: "Pacifico",
        route: "Loeboekmalaka",
        distance: "7.73 km",
        surface: "Gravel: 99%, Dirt: 1%",
      },
      {
        event: "Pacifico",
        route: "Gunung Tujuh",
        distance: "9.14 km",
        surface: "Gravel: 99%, Dirt: 1%",
      },
      {
        event: "Oceania",
        route: "Ruakaka",
        distance: "10.98 km",
        surface: "Gravel: 98%, Concrete: 2%",
      },
      {
        event: "Oceania",
        route: "Doctors Hill",
        distance: "10.98 km",
        surface: "Gravel: 98%, Concrete: 2%",
      },
      {
        event: "Oceania",
        route: "Ahuroa",
        distance: "6.60 km",
        surface: "Gravel: 97%, Concrete: 3%",
      },
      {
        event: "Oceania",
        route: "Ahuroa - Waipu",
        distance: "6.60 km",
        surface: "Gravel: 97%, Concrete: 3%",
      },
      {
        event: "Oceania",
        route: "Ruakaka - Maungaturoto",
        distance: "4.37 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Oceania",
        route: "Maungaturoto",
        distance: "4.37 km",
        surface: "Gravel: 100%",
      },
      {
        event: "Oceania",
        route: "Waiwera",
        distance: "18.03 km",
        surface: "Gravel: 97%, Asphalt: 2%, Concrete: 1%",
      },
      {
        event: "Oceania",
        route: "Tahekeroa",
        distance: "18.02 km",
        surface: "Gravel: 97%, Asphalt: 2%, Concrete: 1%",
      },
      {
        event: "Oceania",
        route: "Noakes Hill",
        distance: "9.51 km",
        surface: "Gravel: 98%, Asphalt: 2%",
      },
      {
        event: "Oceania",
        route: "Orewa",
        distance: "9.23 km",
        surface: "Gravel: 98%, Asphalt: 2%",
      },
      {
        event: "Oceania",
        route: "Tahekeroa - Orewa",
        distance: "8.51 km",
        surface: "Gravel: 99%, Asphalt: 1%",
      },
      {
        event: "Oceania",
        route: "Makarau",
        distance: "8.55 km",
        surface: "Gravel: 99%, Asphalt: 1%",
      },
      {
        event: "Scandia",
        route: "Holtjønn",
        distance: "30.93 km",
        surface: "Snow: 99%, Ice: 1%",
      },
      {
        event: "Scandia",
        route: "Hengeltjønn",
        distance: "31.84 km",
        surface: "Snow: 99%, Ice: 1%",
      },
      {
        event: "Scandia",
        route: "Fyresvatn",
        distance: "17.10 km",
        surface: "Snow: 100%",
      },
      {
        event: "Scandia",
        route: "Russvatn",
        distance: "16.79 km",
        surface: "Snow: 100%",
      },
      {
        event: "Scandia",
        route: "Tovsli",
        distance: "13.75 km",
        surface: "Snow: 100%",
      },
      {
        event: "Scandia",
        route: "Kottjønn",
        distance: "6.62 km",
        surface: "Snow: 100%",
      },
      {
        event: "Scandia",
        route: "Fordol",
        distance: "5.43 km",
        surface: "Snow: 100%",
      },
      {
        event: "Scandia",
        route: "Fyresdal",
        distance: "5.43 km",
        surface: "Snow: 100%",
      },
      {
        event: "Scandia",
        route: "Ljosdalstjønn",
        distance: "9.37 km",
        surface: "Snow: 100%",
      },
      {
        event: "Scandia",
        route: "Dagtrolltjønn",
        distance: "9.27 km",
        surface: "Snow: 100%",
      },
      {
        event: "Scandia",
        route: "Tovslioytjorn",
        distance: "7.52 km",
        surface: "Snow: 100%",
      },
      {
        event: "Scandia",
        route: "Bergsøytjønn",
        distance: "7.29 km",
        surface: "Snow: 100%",
      },
      {
        event: "Iberia",
        route: "Santes Creus",
        distance: "18.98 km",
        surface: "Asphalt: 94%, Concrete: 6%",
      },
      {
        event: "Iberia",
        route: "La Llacuna",
        distance: "18.98 km",
        surface: "Asphalt: 94%, Concrete: 6%",
      },
      {
        event: "Iberia",
        route: "Seguer",
        distance: "9.74 km",
        surface: "Asphalt: 94%, Concrete: 6%",
      },
      {
        event: "Iberia",
        route: "Esblada",
        distance: "9.74 km",
        surface: "Asphalt: 94%, Concrete: 6%",
      },
      {
        event: "Iberia",
        route: "Montagut",
        distance: "9.24 km",
        surface: "Asphalt: 95%, Concrete: 5%",
      },
      {
        event: "Iberia",
        route: "Aiguamúrcia",
        distance: "9.24 km",
        surface: "Asphalt: 95%, Concrete: 5%",
      },
      {
        event: "Iberia",
        route: "Alforja",
        distance: "16.28 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Iberia",
        route: "Les Irles",
        distance: "16.28 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Iberia",
        route: "Duesaigües",
        distance: "8.94 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Iberia",
        route: "Les Voltes",
        distance: "8.94 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Iberia",
        route: "Montclar",
        distance: "7.33 km",
        surface: "Asphalt: 100%",
      },
      {
        event: "Iberia",
        route: "Botarell",
        distance: "7.33 km",
        surface: "Asphalt: 100%",
      }
      

    
    // Add more routes as needed
  ];

//function to generate random stage
function getRandomStage() {
    const randomIndex = Math.floor(Math.random() * WRCStages.length);
    return WRCStages[randomIndex];
}

//eventlistener to change WRC output to random stage details
document.getElementById('randomStageButton').addEventListener('click', () => {
    const randomStage = getRandomStage();
    document.getElementById('WRCoutput').innerText = `Event: ${randomStage.event}, Stage: ${randomStage.route}, Distance: ${randomStage.distance}, Surface: ${randomStage.surface}`


})