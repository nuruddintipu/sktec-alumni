import {Card} from "react-bootstrap";

const NoticeCard = ( {noticeData, index} ) => {
    return (
        <Card style={{width: '80%'}} key={index} className={"mb-4"}>
            <Card.Body>
                <Card.Title>{noticeData.title}</Card.Title>
                <Card.Subtitle>
                    {noticeData.date}
                </Card.Subtitle>
                <Card.Text>{noticeData.text}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default NoticeCard;