import ReportGenerator from './reportGenerator';
import sampleData from './sampleData';

describe('ReportGenerator', () => {
    let testData;
    let reportGenerator;

     beforeEach(() => {
         testData = sampleData();
         reportGenerator = new ReportGenerator();
     })

     it('OrderInRankOfOutgoing should return an array with highest outgoing amount first', () => {
         let result = reportGenerator.orderInRankOfOutgoing(testData);
         
         expect(result[0].name).toEqual('foo');
         expect(result[1].name).toEqual('Shell');
     });

     it('OrderInRankOfIncoming should return an array with highest incoming amount first', () => {
        let result = reportGenerator.orderInRankOfIncoming(testData);
       
        expect(result[0].name).toEqual('Total');
        expect(result[1].name).toEqual('bar');
    });

    it('Should calculate the total incoming amount accurately', () => {
        let result = reportGenerator.calculateTotalIncoming(testData);
        expect(result).toEqual(39340.7);
    });

    it('Should calculate the total outgoing amount accurately', () => {
        let result = reportGenerator.calculateTotalOutgoing(testData);
        expect(result).toEqual(13235);
    });
});