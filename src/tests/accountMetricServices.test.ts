import { getExpenses, getRevenue } from "../services/accountMetricServices"

describe("testing the functions of accountMetricServices.ts file",()=>{
    it("testing the function getRevenuewhich should return the total revenue from json data",()=>{
        expect(getRevenue()).toBe(32431);
    })

    it("testing the function getExpenses which should return the total expenses from json data",()=>{
        expect(getExpenses()).toBe(36529.68);
    })
})