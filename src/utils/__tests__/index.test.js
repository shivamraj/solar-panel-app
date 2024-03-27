import { calculateSolarPanelGridData } from '../index'; // Replace 'your-file-name' with the actual file name containing the function

describe('calculateSolarPanelGridData', () => {
    test('should calculate total energy, healthy count, and weak count correctly', () => {
        const panelsData = [
            { energy: '3000kWh', voltage: '7895', wattage: '985' },
            { energy: '2000kWh', voltage: '4324', wattage: '578' },
        ];

        const result = calculateSolarPanelGridData(panelsData);
        expect(result).toEqual({
            totalEnergy : 5000,
            healthyCount :  2,
            weakCount : 0
        });
    });
});