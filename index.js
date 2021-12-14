function findMatching(drivers, string){
    let matchingDrivers = drivers.filter(function (driver) {
        return driver.toLowerCase() === string.toLowerCase()
    })
    return matchingDrivers
}

function fuzzyMatch(drivers, string){
    let result = drivers.filter(function (driver) {
        return driver.startsWith(string)
      });
      
    return result
}

function matchName(drivers,nameFound){
    let driversNames = drivers.filter(function(object){
        return object.name === nameFound
    })
    return driversNames
}
