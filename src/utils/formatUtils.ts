

// function to convert any number to currency format
// for example converting a number 4532564 into $4,532,564

export const toCurrencyFigure = (num:number):string=>{
    return "$"+Math.floor(num).toLocaleString();
}
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________





// function to convert decimal into percentage
// for example 0.56 to 56%
export const toPercentage = (num:number):string=>{
    let percentageNumber:string = (num*100).toFixed(1);
    return percentageNumber+"%";
}