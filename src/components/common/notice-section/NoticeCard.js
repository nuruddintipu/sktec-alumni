import {Card} from "react-bootstrap";

const NoticeCard = ( {noticeData, ...rest} ) => {
    return (
        <>
            <Card style={{width: '80%'}} className={"mb-4"} {...rest}>
                <Card.Body>
                    <Card.Title>{noticeData.title}</Card.Title>
                    <Card.Subtitle>
                        {noticeData.subtitle}
                    </Card.Subtitle>
                    <Card.Text>{noticeData.text}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default NoticeCard;