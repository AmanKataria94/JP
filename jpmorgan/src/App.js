import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import sampleData from './sampleData';
import ReportGenerator from './reportGenerator';

class App extends Component {
  constructor(props) {
    super(props);
    this.sampleData = sampleData();
    this.generator = new ReportGenerator();
    this.outgoing = this.generator.orderInRankOfOutgoing(this.sampleData);
    this.totalOutgoing = this.generator.calculateTotalOutgoing(this.sampleData);
    this.incoming = this.generator.orderInRankOfIncoming(this.sampleData);
    this.totalIncoming = this.generator.calculateTotalIncoming(this.sampleData);
  }

  render() {
    return (
      <div className="App">
      <br/>
        <span>
        Submission by Aman Kataria
        </span>
      <br/>
      <br/>
      <br/>
      <br/>
      <header>
        The total outgoing amount is: {this.totalOutgoing}
      </header>
      <br/>
        <header>
        Entities from highest outgoing to lowest outgoing
        </header>
        <Table>
          <TableHead>
          <TableRow>
            <TableCell>EntryName</TableCell>
            <TableCell>Outgoing Amount</TableCell>
            <TableCell>Settlement Date</TableCell>
            <TableCell>Currency</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            {this.outgoing.map(row => {
              return (
              <TableRow key={row.units}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.outgoingAmount()}</TableCell>
                <TableCell>{row.settlementDate.toDateString()}</TableCell>
                <TableCell>{row.currency}</TableCell>
              </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <br/>
        <br/>
      <header>
        The total incoming amount is: {this.totalIncoming}
      </header>
      <br/>
        <header>
        Entities from highest incoming to lowest outgoing
        </header>
        <Table>
          <TableHead>
          <TableRow>
            <TableCell>EntryName</TableCell>
            <TableCell>Incoming Amount</TableCell>
            <TableCell>Settlement Date</TableCell>
            <TableCell>Currency</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            {this.incoming.map(row => {
              return (
              <TableRow key={row.units}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.incomingAmount()}</TableCell>
                <TableCell>{row.settlementDate.toDateString()}</TableCell>
                <TableCell>{row.currency}</TableCell>
              </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;
