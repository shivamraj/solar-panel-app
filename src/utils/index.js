export function random(min, max) {
    return (Math.random() * (max - min + 1) + min).toFixed(2);
}

export function calculateSolarPanelGridData(panelsData) {
    let totalEnergy = 0;
    let healthyCount = 0;
    let weakCount = 0;

    panelsData.forEach(panel => {
        totalEnergy += parseFloat(panel.energy.replace('kWh', '').replace(',', '')); // Convert energy to kWh and sum
        if (parseInt(panel.voltage) < 10 && parseInt(panel.wattage) < 200) {
            weakCount++;
        } else {
            healthyCount++;
        }

    })
    return { totalEnergy, healthyCount, weakCount }
}