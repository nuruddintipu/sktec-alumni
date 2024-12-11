const AnalyticsCards = () => {
    const data = [
        { title: "Total Alumni", value: 250 },
        { title: "Active Events", value: 5 },
        { title: "New Registrations", value: 12 },
    ];

    return (
        <div className="analytics-cards">
            {data.map((card, index) => (
                <div className="card" key={index}>
                    <h3>{card.title}</h3>
                    <p>{card.value}</p>
                </div>
            ))}
        </div>
    );
};
export default AnalyticsCards;