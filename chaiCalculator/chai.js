function calculateChaiIngredients(numberOfCups){
    //prompt the user for the number of cups
    let numberOfCupsInput = prompt("How many cups of Chai Bora would you like to make?");

    //Convert the input to a number
    let numberOfCups = parseFloat(numberOfCupsInput);

    //Check if the input is a valid number 
    if (isNaN(numberOfCups) || numberOfCups<=0){
        console.log("Please enter a valid number of cups.");
        return;//Exit the function if the input is invalid
    }
    
    //Standard recipe for 1 cup
    const waterPerCup=200; //ml
    const milkPerCup=50; //ml
    const teaLeavesPerCup=2; //tablespoon
    const sugarPerCup= 2; //teaspoons

    //calculate total ingredients
    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;

    //print results to the console
    console.log('To make ${numberOfCups} cups of Kenyan Chai,you will need:');
    console.log('water: ${totalWater}ml');
    console.log('Milk:${totalMilk}ml');
    console.log('Tea Leaves (majani): ${totalTeaLeaves} tablespoons');
    console.log('Sugar (sukari): ${totalSugar}teaspoons');
    console.log("Enjoy your Chai Bora!");
}
//call the function
calculateChaiIngredients();