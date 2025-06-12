function calculateBodaFare(){
    //promp the user to enter the distance in kilometers.
    let distanceInKmInput = prompt("Where are you headed?how far is it in kilometers?");

    let distanceInKm = parseFloat(distanceInKmInput);

    if(isNaN(distanceInKm) || distanceInKm <=0){
        console.log("Please enter a valid distance.");
        return;
    }

    const basefare = 50;
    const chargePerkm = 15;

    const totalchargePerkm = chargePerkm * distanceInKm;

    const totalFare = basefare + (distanceInKm * chargePerkm);

    console.log(`Distance will be ${distanceInKm} km`)

    console.log(`Base fare is KES ${basefare}`);

    console.log(`Your trip distance will be KES ${totalchargePerkm}`);

    console.log(`Your trip bill will be KES ${totalFare}`);

    console.log("Get on board!");
}

calculateBodaFare();
    