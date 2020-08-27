function vitalsAreOk(bpm, spo2, respRate) {
    return (isBpmOk(bpm)[0] && isSpo2Ok(spo2)[0] && isRespRateOk(respRate)[0]);
}

function isBpmOk(bpm)
{
    return (bpm < 70 ? [false, "Low"] : (bpm > 150 ? [false, "High"] : [true, "Normal"]));  
}

function isSpo2Ok(spo2)
{
    return spo2 < 90 ? [false, "Low"] : [true, "Normal"]; 
}

function isRespRateOk(respRate)
{
    return (respRate < 30 ? [false, "Low"] : (respRate > 95 ? [false, "High"] : [true, "Normal"]));
}

module.exports = {
    vitalsAreOk : vitalsAreOk,
    isBpmOk : isBpmOk,
    isSpo2Ok : isSpo2Ok,
    isRespRateOk : isRespRateOk
};