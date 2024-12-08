import { AccountArrayFilter, AccountCategoryEnum, Account, AccountTypeEnum, ValueTypeEnum } from "../types";
import MainData from "../../data.json";




// function to add total values of items inside the array provided in data.json with the specific filter provided.
// this function takes two parameter, the array provided in data.json file and the filter which is of AccountArrayFilter type.
// this functions only add the total_values of the item that matches the condition of the filter provided in the second parameter.
export const CalculateTotalValue  = (condition:AccountArrayFilter):number=>{
    let data:Account[] = MainData.data;
    let totalValue:number  = 0;
    let filteredData:Account[]=data;
    let keys = Object.keys(condition)
    for (let key of keys){
        let partialFilteredData = filteredData.filter(item=>{
            const conditionValue = condition[key as keyof AccountArrayFilter];
            const itemValue = item[key as keyof Account];
            if(Array.isArray(conditionValue)){
                return conditionValue.includes(itemValue as typeof conditionValue[number]);
            }else{
                return conditionValue === itemValue
            }
        })
        filteredData = partialFilteredData;
    }

    // now after ggetting the filtered array . (array that matches the condition of the filter). its add all the total value of that filtered array.
    for (let item of filteredData){
        totalValue  = totalValue+item.total_value;
    }

    return totalValue;
}



// ====================================================================================================================
// ====================================================================================================================







// this function calculates the gross profit margin.
export const calculateGrossProfitMargin = (revenue:number):number=>{
    // first adding all the total_value fields where the account_type is set to sales and the value_type is set to debit
    let totalValueOfSalesAndDebit:number  = CalculateTotalValue({account_type:AccountTypeEnum.Sales,value_type:ValueTypeEnum.Debit});
    let profitMargin:number = totalValueOfSalesAndDebit/revenue; 
    return profitMargin;
}


// ====================================================================================================================
// ====================================================================================================================









export const calculateNetProfitMargin = (expenses:number, revenue:number ):number=>{
    let remainder:number = revenue-expenses;
    let netProfit:number = remainder/revenue;
    return netProfit;
}


// ====================================================================================================================
// ====================================================================================================================







// function to calculate the total asset. which value later will be used in the function calculateWokingCapitalRatio.
export const calculateTotalAsset = ():number =>{
    let totalAsset:number = 0;
    // at first adding the total_value from all records where the account_category is set to assets, the value_type is set to debit, and the account_type is one of current, bank, or current_accounts_receivable
    let debitAssetFilter:AccountArrayFilter ={
        account_category:AccountCategoryEnum.Assets,
        value_type:ValueTypeEnum.Debit,
        account_type:[AccountTypeEnum.Current,AccountTypeEnum.Bank,AccountTypeEnum.CurrentAccountsReceivable]
    } 
    let TotalDebitAsset:number  = CalculateTotalValue(debitAssetFilter);
    totalAsset  = totalAsset+TotalDebitAsset;
    

    // second subtracting the total_value from all records where the account_category is set to assets, the value_type is set to credit, and the account_type is one of current, bank, or current_accounts_receivable
    let creditAssetFilter:AccountArrayFilter={
        account_category:AccountCategoryEnum.Assets,
        value_type:ValueTypeEnum.Credit,
        // account_type:AccountTypeEnum.Current||AccountTypeEnum.Bank||AccountTypeEnum.CurrentAccountsReceivable
    }
    let TotalCreditAsset:number = CalculateTotalValue(creditAssetFilter)
    totalAsset  = totalAsset-TotalCreditAsset;
    return totalAsset;
}


// ====================================================================================================================
// ====================================================================================================================








// function to calculate the total Liability. which value later will be used in the function calculateWokingCapitalRatio.
export const calculateTotalLiability = ():number=>{
    let totalLiability:number = 0
    // first adding the total_value of from records where the account_category is set to liability, the value_type is set to credit, and the account_type is one of current or current_accounts_payable
    let creditLiabilityFilter:AccountArrayFilter ={
        account_category:AccountCategoryEnum.Liability,
        value_type:ValueTypeEnum.Credit,
        account_type:AccountTypeEnum.Current||AccountTypeEnum.CurrentAccountsPayable
    } 
    let totalCreditLiability:number  = CalculateTotalValue(creditLiabilityFilter);
    totalLiability  = totalLiability+totalCreditLiability;

    // second subtracting total value from all records where the account_category is set to liability, the value_type is set to debit, and the account_type is one of current or current_accounts_payable 
    let debitLiabilityFilter:AccountArrayFilter ={
        account_category:AccountCategoryEnum.Liability,
        value_type:ValueTypeEnum.Debit,
        account_type:AccountTypeEnum.Current||AccountTypeEnum.CurrentAccountsPayable
    } 
    let totalDebitLiability:number  = CalculateTotalValue(debitLiabilityFilter);
    totalLiability = totalLiability-totalDebitLiability;

    return totalLiability;
}


// ====================================================================================================================
// ====================================================================================================================










// this function calculates the workingCapital ratio dividing the assets by liabilities
export const calculateWorkingCapitalRatio = ():number=>{
    // first getting the asset
    let totalAsset:number= calculateTotalAsset();
    // second getting the liability
    let totalLiability:number = calculateTotalLiability();

    // finally calculating the working capital ratio dividing the asset by liabilities.
    let workingCapitalRatio:number = totalAsset/totalLiability;
    return workingCapitalRatio;
}


// ====================================================================================================================
// ====================================================================================================================










