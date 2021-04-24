let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(const obj in statistics){
    //comparing if the property starts with the letter r or the property value is odd
    if(`${obj}`.charAt(0) == 'r' || `${statistics[obj]}` % 2 != 0)
    {
        console.log(`${obj} ${statistics[obj]}`);
    }
};