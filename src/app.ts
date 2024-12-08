import { getExpenses, getGrossProfitMargin, getNetProfitMargin, getRevenue, getWorkingCapitalRatio } from "./services/accountMetricServices"
import { toCurrencyFigure } from "./utils/formatUtils";

const runProject = ():void=>{
    let totalRevenue:number = getRevenue();
    let totalExpense:number  = getExpenses();
    let grossProfitMargin:string = getGrossProfitMargin(totalRevenue);
    let netProfitMargin:string = getNetProfitMargin(totalExpense,totalRevenue);
    let workingCapitalRatio:string = getWorkingCapitalRatio()
    let revenueInCurrencyFigure:string = toCurrencyFigure(totalRevenue);
    let expenseInCurrencyFigure:string = toCurrencyFigure(totalExpense);

    console.log("Revenue: ", revenueInCurrencyFigure)
    console.log("Expenses: ", expenseInCurrencyFigure)
    console.log("Gross Profit Margin: ", grossProfitMargin)
    console.log("Net Profit Margin: ", netProfitMargin)
    console.log("Working Capital Ratio: ", workingCapitalRatio)
}

export default runProject;