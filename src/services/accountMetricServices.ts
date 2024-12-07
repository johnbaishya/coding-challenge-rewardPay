import { calculateGrossProfitMargin, calculateNetProfitMargin, CalculateTotalValue } from "../libs/accountMetricCalculations"
import data from '../../data.json';
import { AccountArrayFilter, AccountCategoryEnum, Account } from "../types";
import { toCurrencyFigure, toPercentage } from "../utils/formatUtils";

const accountDataArray:Account[] =data.data;

// service to get the revenue __________________________________________________________________________________________
export const getRevenue = ():string=>{
    let arrayFilter:AccountArrayFilter = {
        account_category:AccountCategoryEnum.Revenue,
    }

    // getting total revenue
    let totalRevenue:number = CalculateTotalValue(arrayFilter);
    // converting the total revenue into currency figure.
    return toCurrencyFigure(totalRevenue);
} 
// ________________________________________________________________________________________________________________________







// service to get the expense ___________________________________________________________________________________________
export const getExpenses  = ():string=>{
    let arrayFilter:AccountArrayFilter = {
        account_category:AccountCategoryEnum.Expense,
    }
    // getting the total expense
    let totalExpense:number = CalculateTotalValue(arrayFilter);
    // converting total expense into currency figures.
    return toCurrencyFigure(totalExpense);
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







export const  getNetProfitMargin = (expense:number,revenue:number):string=>{
    // getting the net profit margin
    let netProfitMargin:number = calculateNetProfitMargin(expense,revenue);
    // converting the net profit margin into percentage.
    let netProfitmarginPercentage:string = toPercentage(netProfitMargin);
    return netProfitmarginPercentage;
}