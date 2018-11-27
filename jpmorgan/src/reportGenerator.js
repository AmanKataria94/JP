export default class ReportGenerator {
    
    calculateTotalOutgoing(entries) {
        let total = 0;
        entries.forEach(entry => {
            total += entry.outgoingAmount();
        });

        return total;
    }

    calculateTotalIncoming(entries) {
        let total = 0;
        entries.forEach(entry => {
            total += entry.incomingAmount();
        })

        return total;
    }

    orderInRankOfOutgoing(entries) {
        let result = [];
        entries.sort((first, second) => {return second.outgoingAmount() - first.outgoingAmount();});
        entries.forEach(entry => {
            result.push(entry);
        });
        return result;
    }

    orderInRankOfIncoming(entries) {
        let result = [];
        entries.sort((first, second) => {return second.incomingAmount() - first.incomingAmount();});
        entries.forEach(entry => {
            result.push(entry);
        });
        return result;
    }
}