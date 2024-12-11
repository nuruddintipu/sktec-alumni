import NoticeCard from "../cards/NoticeCard";

export default function NewsCards() {

    const newsConfig = [
        {
            title: "Announcement of the Supporting Wings",
            date: "January 15, 2050",
            text: "We are excited to introduce the individuals who will be assisting the Interim Committee of SAA."
        },
        {
            title: "Sample News",
            date: "January 15, 2050",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ];

    return (
        <>
            {newsConfig.map((data, index) => (
                <NoticeCard
                    noticeData={data}
                    index={index}
                />
            ))}
        </>
    )
}