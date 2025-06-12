function estimateTransactionFee(amountToSend){
    // Prompt the user to enter the amount they wish to send.
    let amountToSendInp = prompt("What amount do you wish to spend");

    //Convert the input string to a floating-point number.
    let amountToSend = parseFloat(amountToSendInp);

    //Validate the input:Check if it's a valid number and greater than zero.
    if(isNaN(amountToSend)|| amountToSend <=0){
        //log an error message if the input is invalid.
        console.log("Please enter a valid amount.");
        return;//Exit the function to prevent further execution with invalid data.
    } 
    //Define a constant for the basic transaction fee rate(1.5%).
    const basicTransactionRate = 0.015;

    //Determine the transaction fee based on the amount to send using conditional logic.
    if (amountToSend<= 500){
        //For amounts less than or equal to KES 500.
        console.log(`Sending KES ${amountToSend}`);
        console.log("Your transaction cost is KES 10");//Fixed fee for this range.
        console.log(`Total amount to be debited is KES ${amountToSend + 10}`);
    }else if(amountToSend > 500 && amountToSend <= 10000){
        //For amounts greater than KES and less than or equal to KES 10,000.
        console.log(`Sending KES ${amountToSend}`);
        // Calculate the transaction cost as 1.5% of the amount,but ensure it's at least KES 10.
        let transactionCost = Math.max(basicTransactionRate * amountToSend,10);
        console.log(`Transaction cost is KES ${transactionCost}`);
        console.log(`Total amount to be debited is KES ${transactionCost + amountToSend}`);

    }else if (amountToSend> 10000){
        //For amounts greater than KES 10,000.
        console.log(`Sending KES ${amountToSend}`);
        console.log(`Transaction cost is KES 70`); //Fixed fee for this range.
        console.log(`Total amount to be debited is KES ${amountToSend}`);
    }
    //Concluding message for the user.
    console.log(`Send Money Securely!`);
}

//call the function to initiate the transaction fee estimation process.
estimateTransactionFee();