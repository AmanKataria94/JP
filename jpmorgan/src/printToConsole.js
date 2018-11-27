import chalk from 'chalk';
import ReportGenerator from './reportGenerator';
import sampleData  from './sampleData';

const generator = new ReportGenerator();
let data = sampleData();
const outgoing = generator.orderInRankOfOutgoing(data);
const totalOutgoing = generator.calculateTotalOutgoing(data);

console.log(chalk.blue(`The total outgoing amount is: ${totalOutgoing}`));
console.log(chalk.blue('Entries from highest to lowest outgoing are: '));
outgoing.forEach(entry => {
    const date = entry.settlementDate;
    console.log(chalk.red(`${entry.name} || Outgoing amount : ${entry.outgoingAmount()} || Settlement date: ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`));
});

console.log();

const incoming = generator.orderInRankOfIncoming(data);
const totalIncoming = generator.calculateTotalIncoming(data);

console.log(chalk.blue(`The total incoming amount is: ${totalIncoming}`));
console.log(chalk.blue('Entries from highest to lowest incoming are: '));
incoming.forEach(entry => {
    const date = entry.settlementDate;
    console.log(chalk.red(`${entry.name} || Incoming amount : ${entry.incomingAmount()} || Settlement date: ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`));
});