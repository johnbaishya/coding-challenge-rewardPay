
export enum AccountCategoryEnum{
    Revenue = "revenue",
    Expense = "expense",
    Assets = "assets",
    Liability ="liability",  
}
// ________________________________________________________________________________________________


export enum AccountTypeEnum{
    Sales="sales",
    Overheads="overheads",
    CurrentAccountsReceivable="current_accounts_receivable",
    Bank="bank",
    Fixed="fixed",
    CurrentAccountsPayable="current_accounts_payable",
    Tax="tax",
    Current="current",
    Payroll="payroll",
}
// ________________________________________________________________________________________________



export enum ValueTypeEnum {
    Credit="credit",
    Debit="debit",
}
// ________________________________________________________________________________________________




// this type is for  each array element in the data field provided in data.json file 
export type Account ={
    account_category: string,
    account_code: string,
    account_currency: string,
    account_identifier: string,
    account_status: string,
    value_type: string,
    account_name: string
    account_type: string,
    account_type_bank: string,
    system_account: string,
    total_value: number
}

// _________________________________________________________________________________________________________
// _________________________________________________________________________________________________________






// this Type (Account Array Filter) is for filter object. which will be passed as a parameter of calculateTotalValue method in "./src/libs/accountMetricCalculation.ts" file. each filter key inside this object will accept string or array of string. the single string value is set when you want to filter only the items that match the single value and the array of string is sent when you want to filter the data that matches the all the values inside that array. for example

// filter = {
//     account_category:"assets",
//     value_type:"credit",
//     account_type:["sales","bank"]
// }
// 
// the above mentioned filter in example will filter the elements where account_category is set to assets, value_type is set to credit, and account_type is set to any one of sales and bank.  
// explaining in expression 
// (account_category==="assets"&&value_type==="credit"&&(account_type==="sales"||account_type==="bank"))

export type AccountArrayFilter = Partial<{
    account_category: string |string[],
    account_code: string |string[],
    account_currency: string |string[],
    account_identifier: string |string[],
    account_status: string |string[],
    value_type: string |string[],
    account_name: string |string[]
    account_type: string |string[],
    account_type_bank: string |string[],
    system_account: string |string[],
}>
// _________________________________________________________________________________________________________
// _________________________________________________________________________________________________________

