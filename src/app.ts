import { getExpenses, getRevenue } from "./services/accountMetricServices"

const runProject = ()=>{
    let totalRevenue = getRevenue();
    let totalExpense  = getExpenses();

    console.log("revenue ", totalRevenue)
    console.log("expenses ", totalExpense)
}

export default runProject;