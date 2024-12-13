
import React from "react";
import NoticeSection from "../../common/notice-section/NoticeSection";

export default function NewsSection() {

    const newsConfig = [
        {
            title: "Announcement of the Supporting Wings",
            subtitle: "January 15, 2050",
            text: "We are excited to introduce the individuals who will be assisting the Interim Committee of SAA."
        },
        {
            title: "Sample News",
            subtitle: "January 15, 2050",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ];

    return (
        <NoticeSection heading={"News"} notices={newsConfig}/>
    );
};