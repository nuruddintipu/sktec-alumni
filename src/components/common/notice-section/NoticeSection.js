import SectionHeading from "../SectionHeading";
import NoticeCard from "./NoticeCard";
import React from "react";


const NoticeSection = ({heading, notices}) => {

    return (
        <>
            <SectionHeading heading={heading}/>
            {notices.map((noticeData, index) => (
                <NoticeCard
                    key={index}
                    noticeData={noticeData}
                />
            ))}
        </>
    );
};

export default NoticeSection;