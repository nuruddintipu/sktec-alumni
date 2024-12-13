import React from "react";
import NoticeSection from "../../common/notice-section/NoticeSection";

export default function EventSection() {

    const eventConfig = [
        {
            title: "Alumni Election",
            subtitle: "January 15, 2050",
            text: "Alumni Committee election will be held by the interim committee."
        },
        {
            title: "Sample Event",
            subtitle: "January 15, 2050",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ];

    return (
        <NoticeSection heading={"Upcoming Events"} notices={eventConfig}/>
    );
};