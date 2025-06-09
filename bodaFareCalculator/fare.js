//fare.js
function calculateBodaFare(distanceInKm){
    const baseFare =50;//KES
    const chargeperKm =15;//KES per km

    //calculate total fare
    const distanceFare= distanceInKm * chargeperKm;
    const totalFare = baseFare + distanceFare;

    //print results
    console.log('Uko Kwote?Io ni ${distanceInKm} Km:');
    console.log('Ukikalia pikipiki:KES ${baseFare}');
    console.log('mpaka Uko:KES ${distanceFare}');
    console.log('Total:KES ${totalFare}');
    console.log("panda pikipiki!");
}
//prompt user and call the function
const distanceInput =prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = Number(distanceInput);
if (!isNaN(distanceInKm) && distanceInKm>0){
    calculateBodaFare(distanceInKm);
}else{
    console.log("please enter a valid positive distance.");
}