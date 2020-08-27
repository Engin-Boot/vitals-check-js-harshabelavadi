const isBpmOk = require('./vitalsStatus.js').isBpmOk;
const isSpo2Ok = require('./vitalsStatus.js').isSpo2Ok;
const isRespRateOk = require('./vitalsStatus.js').isRespRateOk;

function reportGeneration(bpm, spo2, resprate)
{
    let report = "";
    report += "BPM : " + isBpmOk(bpm)[1] + "\n" +
    "SPO2 : " + isSpo2Ok(spo2)[1] + "\n" +
    "RespiratoryRate : " + isRespRateOk(resprate)[1] + "\n";
    return report;
}

module.exports = reportGeneration;
