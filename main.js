let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer']
seriesPending.push ('Starwarm')
console.log ("Los elementos del array son:", seriesPending)

for (let i=0; i < seriesPending.length; i++){
    let name = seriesPending[i]
    if (name == 'Boolean 99'){
        console.log ('Lo conseguí')
    }
    
}

let seriesWatching = []
seriesWatching.push (seriesPending.shift(0))
console.log (seriesWatching.length)
console.log (seriesPending.length)

for (let i=seriesPending.length - 1; i>= 0; i--){
    seriesWatching.push (seriesPending.shift())
    console.log (seriesWatching.length)
    console.log (seriesPending.length)
}

for (let i = seriesPending.length; i>0; i--){
    seriesWatching.splice(0, 1)
    console.log (seriesWatching)
}

console.log (seriesWatching.length, seriesPending.length)

 
