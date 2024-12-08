import { getExpenses, getGrossProfitMargin, getNetProfitMargin, getRevenue, getWorkingCapitalRatio } from "./services/accountMetricServices"
import { toCurrencyFigure } from "./utils/formatUtils";

const runProject = ()=>{
    let totalRevenue = getRevenue();
    let totalExpense  = getExpenses();
    let grossProfitMargin = getGrossProfitMargin(totalRevenue);
    let netProfitMargin = getNetProfitMargin(totalExpense,totalRevenue);
    let workingCapitalRatio = getWorkingCapitalRatio()
    let revenueInCurrencyFigure = toCurrencyFigure(totalRevenue);
    let expenseInCurrencyFigure = toCurrencyFigure(totalExpense);

    console.log("Revenue: ", revenueInCurrencyFigure)
    console.log("Expenses: ", expenseInCurrencyFigure)
    console.log("Gross Profit Margin: ", grossProfitMargin)
    console.log("Net Profit Margin: ", netProfitMargin)
    console.log("Working Capital Ratio: ", workingCapitalRatio)
}

export default runProject;