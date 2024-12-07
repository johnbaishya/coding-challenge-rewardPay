

// function to convert any number to currency format
// for example converting a number 4532564 into $4,532,564

export const toCurrencyFigure = (num:number):string=>{
    return "$"+num.toLocaleString();
}
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________





// function to convert decimal into percentage
// for example 0.56 to 56%
export const toPercentage = (num:number):string=>{
    let percentageNumber = (num*100).toString();
    return percentageNumber+"%";
}