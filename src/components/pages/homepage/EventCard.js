import NoticeCard from "../../cards/NoticeCard";

export default function EventCard() {

    const eventConfig = [
        {
            title: "Alumni Election",
            date: "January 15, 2050",
            text: "Alumni Committee election will be held by the interim committee."
        },
        {
            title: "Sample Event",
            date: "January 15, 2050",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ];

    return (
        <>
            {eventConfig.map((noticeData, index) => (
                <NoticeCard
                    key={index}
                    noticeData={noticeData}
                />
            ))}
        </>
    );
}