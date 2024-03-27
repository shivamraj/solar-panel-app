
export function PanelGrid({ panels }) {
    return (
        <div className="panel-grid">
            {panels.map(panel => (
                <div
                    key={panel.id}
                    className={`panel ${parseInt(panel.voltage) < 10 && parseInt(panel.wattage) < 200 ? 'weak-panel' : 'healthy-panel'}`}
                >
                    <div>Panel {panel.id}</div>
                    <div>Voltage: {panel.voltage} V</div>
                    <div>Wattage: {panel.wattage} W</div>
                </div>
            ))}
        </div>
    )
}