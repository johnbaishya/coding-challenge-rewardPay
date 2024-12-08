import { calculateGrossProfitMargin, calculateNetProfitMargin, CalculateTotalValue, calculateWorkingCapitalRatio } from "../libs/accountMetricCalculations"
import { Account, AccountArrayFilter, AccountCategoryEnum, AccountTypeEnum, ValueTypeEnum } from "../types"



describe('calculateTotalValue libs function test',()=>{
    it("should add the total_value of elements of provided array data in data.json according to the provided filter",()=>{
        let filterObj:AccountArrayFilter = {
            account_category:AccountCategoryEnum.Assets,
            value_type:ValueTypeEnum.Debit,
            account_type:AccountTypeEnum.Bank
        };
        expect( CalculateTotalValue(filterObj)).toBe(16147.08)
    })


    it("should also accept the each filter key with value of both string and array of string",()=>{
        let filterObj:AccountArrayFilter = {
            account_category:AccountCategoryEnum.Assets,
            value_type:ValueTypeEnum.Debit,
            // noe the filter value as the array of string. which means the element of array will be considered if account type is bank or fixed. also while considering the above filter values.
            account_type:[AccountTypeEnum.Bank,AccountTypeEnum.Fixed]
        };
        expect( CalculateTotalValue(filterObj)).toBe(16897.08)
    })
})


//_________________________________________________________________________________________________________________________




describe('calculating other functions of accountMetricCalculation Libs',()=>{
    it("is the testing of calculateGrossProfitMargin function",()=>{
        expect(calculateGrossProfitMargin(32413)).toBe(0);
    })

    it("is the testing of calculateNetProfitMargin function",()=>{
        expect(calculateNetProfitMargin(40,50)).toBe(0.2);
    })

    it("is the testing of calculateWorkingCapitalRatio function",()=>{
        expect(calculateWorkingCapitalRatio()).toBe(1.3570318042536493);
    })
})