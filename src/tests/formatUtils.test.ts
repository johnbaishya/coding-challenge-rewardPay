import { toCurrencyFigure, toPercentage } from "../utils/formatUtils";


describe('toCurrencyFigure function test',()=>{
    it('should add $ sign at the begining and commas should be added in the interval of every 3 digits',()=>{
        expect(toCurrencyFigure(456346765)).toBe("$456,346,765")
    })

    it('should also remove any cents value. that means remove the decimal numbers.',()=>{
        expect(toCurrencyFigure(35643.65)).toBe("$35,643");
    })
})


// _____________________________________________________________________________________________________________________________
// _____________________________________________________________________________________________________________________________




describe('toPercentage util function test',()=>{
    it('should multiply by 100 and then add % value and the end',()=>{
        expect(toPercentage(0.23)).toBe("23.0%");
    })

    it('shouold be formatted to one decimal digit',()=>{
        expect(toPercentage(0.45632)).toBe("45.6%")
    })
})