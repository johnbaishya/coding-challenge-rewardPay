import { getExpenses, getGrossProfitMargin, getNetProfitMargin, getRevenue, getWorkingCapitalRatio } from "./services/accountMetricServices"
import { toCurrencyFigure } from "./utils/formatUtils";

const runProject = ():void=>{
    // importing and executing all the services functions and getting the final output.
    let totalRevenue:number = getRevenue();
    let totalExpense:number  = getExpenses();
    let grossProfitMargin:string = getGrossProfitMargin(totalRevenue);
    let netProfitMargin:string = getNetProfitMargin(totalExpense,totalRevenue);
    let workingCapitalRatio:string = getWorkingCapitalRatio()
    let revenueInCurrencyFigure:string = toCurrencyFigure(totalRevenue);
    let expenseInCurrencyFigure:string = toCurrencyFigure(totalExpense);

    // now printing the fiinal output in the console received from services functions.
    let result = `Revenue: ${revenueInCurrencyFigure} \nExpenses: ${expenseInCurrencyFigure} \nGross Profit Margin: ${grossProfitMargin} \nNet Profit Margin: ${netProfitMargin} \nWorking Capital Ratio: ${workingCapitalRatio}`;
    console.log(result)
}

export default runProject;