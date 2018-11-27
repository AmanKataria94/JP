import Entity from './entity';

describe('Entity', () => {
    
    it('should correctly calculate the outgoing amount', () => {
        const name = 'test';
        const buyOrSell = 'b';
        const agreedFX = 0.5;
        const currency = 'AED';
        const instructionDate = '01 Jan 2016';
        const settlementDate =  '07 Jan 2016';
        const units = 500;
        const pricePerUnit = 125;

        const testEntity = new Entity(name, buyOrSell, agreedFX, currency, instructionDate, settlementDate, units, pricePerUnit);

        expect(testEntity.outgoingAmount()).toEqual(pricePerUnit * units * agreedFX);
        expect(testEntity.incomingAmount()).toEqual(0);
    });

    it('should correctly calculate the incoming amount', () => {
        const name = 'test';
        const buyOrSell = 's';
        const agreedFX = 0.43;
        const currency = 'SGP';
        const instructionDate = '17 Mar 2016';
        const settlementDate =  '22 Mar 2016';
        const units = 345;
        const pricePerUnit = 44;

        const testEntity = new Entity(name, buyOrSell, agreedFX, currency, instructionDate, settlementDate, units, pricePerUnit);

        expect(testEntity.incomingAmount()).toEqual(pricePerUnit * units * agreedFX);
        expect(testEntity.outgoingAmount()).toEqual(0);
    });

    it('should shift the settlement day for exception currencies to Sunday if it falls on Friday or Saturday', () => {
        const name = 'exceptionCurrency';
        const buyOrSell = 's';
        const agreedFX = 0.43;
        const currency = 'AED';
        const instructionDate = '30 Nov 2018';
        const settlementDate =  '30 Nov 2018'; //Friday
        const units = 345;
        const pricePerUnit = 44;

        const testEntity = new Entity(name, buyOrSell, agreedFX, currency, instructionDate, settlementDate, units, pricePerUnit);
        const sunday = 0 //For javascript date

        expect(testEntity.settlementDate.getDay()).toEqual(sunday);
    });

    it('should shift the settlement day for all other currencies to Monday if it falls on Saturday or Sunday', () => {
        const name = 'normalCurrency';
        const buyOrSell = 's';
        const agreedFX = 0.43;
        const currency = 'SGP';
        const instructionDate = '01 Dec 2018';
        const settlementDate =  '01 Dec 2018'; //Saturday
        const units = 345;
        const pricePerUnit = 44;

        const testEntity = new Entity(name, buyOrSell, agreedFX, currency, instructionDate, settlementDate, units, pricePerUnit);
        const monday = 1 //For javascript date class

        expect(testEntity.settlementDate.getDay()).toEqual(monday);
    });
});