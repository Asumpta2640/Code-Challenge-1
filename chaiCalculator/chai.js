function calculateChaiIngredients(numberOfCups){
    const waterPerCup=200; //ml
    const milkPerCup=50; //ml
    const teaLeavesPerCup=2; //tablespoon
    const sugarPerCup= 2; //teaspoons

    //calculate total ingredients
    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;

    //print results
    console.log('To make ${numberOfCups} cups of Kenyan Chai,you will need:');
    console.log('water: ${totalWater}ml');
    console.log('Milk:${totalMilk}ml');
    console.log('Tea Leaves (majani): ${totalTeaLeaves} tablespoons');
    console.log('Sugar (sukari): ${totalSugar}teaspoons');
    console.log('Enjoy your Chai Bora!');
}
//prompt user and call the function
const cupsInput = prompt("Karibu!How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(cupsInput);

if (!isNaN(numberOfCups) && numberOfCups>0){
    calculateChaiIngredients(numberOfCups);
}else{
    console.log("please enter a valid positive number of cups.");
}