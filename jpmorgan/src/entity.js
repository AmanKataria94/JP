export default class Entity {
    constructor(name, buyOrSell, agreedFX, currency, instructionDate, settlementDate, units, pricePerUnit) {
        this.name = name;
        this.buyOrSell = buyOrSell;
        this.agreedFX = agreedFX;
        this.currency = currency;
        this.instructionDate = instructionDate;
        this._settlementDate = settlementDate;
        this.units = units;
        this.pricePerUnit = pricePerUnit;
    }

    incomingAmount() {
        if(this.buyOrSell.toLowerCase() === 'b') {
            return 0;
        }
        else {
            return this.units * this.pricePerUnit * this.agreedFX;
        }
    }

    outgoingAmount() {
        if(this.buyOrSell.toLowerCase() === 's') {
            return 0;
        }
        else {
            return this.units * this.pricePerUnit * this.agreedFX;
        }
    }

    get settlementDate() {
       let date = new Date(this._settlementDate);
       if(this.currency === 'AED' || this.currency === 'SAR') {
        if(date.getDay() === 5) {
            date.setDate(date.getDate() + 2);
        }
        else if(date.getDay() ===6) {
            date.setDate(date.getDate() + 1);
        }
       }
       else {
           if(date.getDay() === 6) {
               date.setDate(date.getDate() + 2)
           }
           else if(date.getDay() === 0) {
            date.setDate(date.getDate() + 1)
           }
       }
       
       return date;
    }
}