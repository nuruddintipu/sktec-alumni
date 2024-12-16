import SectionHeading from "../SectionHeading";
import NoticeCard from "./NoticeCard";
import React from "react";


const NoticeSection = ({heading, notices, ...rest}) => {

    return (
        <>
            <SectionHeading heading={heading} className={"text-start"} {...rest}/>
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