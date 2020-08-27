const expect = require('chai').expect;
const vitalsAreOk = require('./vitalsStatus.js').vitalsAreOk;
const generateReport = require('./report.js');

console.log(generateReport(100, 95, 70));

expect(vitalsAreOk(100, 95, 70)).to.be.true; // All parameters are normal
expect(vitalsAreOk(50, 95, 70)).to.be.false; // BPM is Low
expect(vitalsAreOk(100, 50, 70)).to.be.false; // SPO2 is Low
expect(vitalsAreOk(100, 95, 25)).to.be.false; // RespiratoryRate is Low
expect(vitalsAreOk(160, 95, 70)).to.be.false; // BPM is High
expect(vitalsAreOk(100, 95, 125)).to.be.false; // RespiratoryRate is High
expect(vitalsAreOk(160, 95, 170)).to.be.false; // BPM and RespiratoryRate are High
expect(vitalsAreOk(20, 20, 70)).to.be.false; // BPM and SPO2 are Low
expect(vitalsAreOk(20, 20, 25)).to.be.false; // BPM, SPO2 and RespiratoryRate are Low
expect(vitalsAreOk(170, 20, 70)).to.be.false; // BPM is high and SPO2 is Low
expect(vitalsAreOk(170, 20, 125)).to.be.false; // BPM is high, SPO2 is Low and RespiratoryRate is High
expect(vitalsAreOk(170, 95, 125)).to.be.false; // BPM is high and RespiratoryRate is High
expect(vitalsAreOk(100, 25, 125)).to.be.false; // SPO2 is Low and RespiratoryRate is High
expect(vitalsAreOk(25, 20, 125)).to.be.false; // BPM is Low, SPO2 is Low and RespiratoryRate is High
expect(vitalsAreOk(25, 95, 125)).to.be.false; // BPM is Low and RespiratoryRate is High
expect(vitalsAreOk(170, 25, 25)).to.be.false; // BPM is High, SPO2 is Low and RespiratoryRate is Low
expect(vitalsAreOk(170, 95, 25)).to.be.false; // BPM is High and RespiratoryRate is Low
expect(vitalsAreOk(100, 25, 25)).to.be.false; // SPO2 and RespiratoryRate are Low

console.log('checker is done');