import { calculateGrossProfitMargin, calculateNetProfitMargin, CalculateTotalValue, calculateWorkingCapitalRatio } from "../libs/accountMetricCalculations"
import data from '../../data.json';
import { AccountArrayFilter, AccountCategoryEnum, Account } from "../types";
import { toCurrencyFigure, toPercentage } from "../utils/formatUtils";

const accountDataArray:Account[] =data.data;

// service to get the revenue __________________________________________________________________________________________
export const getRevenue = ():number=>{
    let arrayFilter:AccountArrayFilter = {
        account_category:AccountCategoryEnum.Revenue,
    }

    // getting total revenue
    let totalRevenue:number = CalculateTotalValue(arrayFilter);
    return totalRevenue;
} 
// ________________________________________________________________________________________________________________________







// service to get the expense ___________________________________________________________________________________________
export const getExpenses  = ():number=>{
    let arrayFilter:AccountArrayFilter = {
        account_category:AccountCategoryEnum.Expense,
    }
    // getting the total expense
    let totalExpense:number = CalculateTotalValue(arrayFilter);
    return totalExpense;
}
// ________________________________________________________________________________________________________________________
// ________________________________________________________________________________________________________________________







// service to get gross profit margin ________________________________________________________________________________
export const getGrossProfitMargin = (revenue:number):string=>{
    // getting the gross profit margin
    let grossProfitMargin:number = calculateGrossProfitMargin(revenue)
    // converting the gross profit margin into percentage value.
    let grossProfitMarginPercentage:string = toPercentage(grossProfitMargin);
    return grossProfitMarginPercentage;
}
// ________________________________________________________________________________________________________________________
// ________________________________________________________________________________________________________________________






// service to ger the net profit margin______________________________________________________________________________
export const  getNetProfitMargin = (expense:number,revenue:number):string=>{
    // getting the net profit margin
    let netProfitMargin:number = calculateNetProfitMargin(expense,revenue);
    // converting the net profit margin into percentage.
    let netProfitmarginPercentage:string = toPercentage(netProfitMargin);
    return netProfitmarginPercentage;
}
// ________________________________________________________________________________________________________________________
// ________________________________________________________________________________________________________________________





// service to get Working Capital Ratio
export const getWorkingCapitalRatio = ():string =>{
    let workingCapitalRatio:number = calculateWorkingCapitalRatio();
    let workingCapitalRatioPercentage:string = toPercentage(workingCapitalRatio); 
    return workingCapitalRatioPercentage;
}





