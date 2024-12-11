const RecentActivities = () => {
    const activities = [
        "John Doe registered on 10 Dec 2024",
        "New event 'Tech Reunion' added",
        "Jane Smith updated her profile",
    ];

    return (
        <div className="recent-activities">
            <h3>Recent Activities</h3>
            <ul>
                {activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecentActivities;
