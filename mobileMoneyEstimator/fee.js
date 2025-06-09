function estimateTransactionFee(amountToSend){
    const feePercentage = 0.015; //1.5%
    const minFee =10; // KES
    const maxfee =70; //KES

    //calculate the raw fee
    let calculatedFee =amountToSend * feePercentage;

    //Apply min and max fee limits
    if (calculatedFee<minFee){
        calculatedFee =minFee;
    }else if (calculatedFee>maxFee){
        calculatedFee=maxFee;
    }

    const totalDebited=amountToSend +calculatedFee;

    console.log('Sending KES ${amountToSend}:');
    console.log('calculated Transaction Fee: KES ${calculatedFee.toFixed(2)}');
    console.log('Total amount to be debited: KES ${totalDebited.toFixed(2)}\n');
    console.log("Send Money Securely!")
}
const amountInput = prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(amountInput);
if (!isNaN(amountToSend) && amountToSend>0){
    estimateTransactionFee(amountToSend);
}else{
    console.log("PLease enter a valid positive amount.");
}