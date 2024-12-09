import {Card} from "react-bootstrap";

export default function NewsCards () {
    return (
        <>
            <Card style={{width: '80%'}} >
                <Card.Body>
                    <Card.Title>Announcement of the Supporting Wings</Card.Title>
                    <Card.Text>
                        <h6>November 27, 2024</h6>
                    </Card.Text>
                    <Card.Subtitle>We are excited to introduce the individuals who will be assisting the Interim Committee of SAA.</Card.Subtitle>
                </Card.Body>
            </Card>
            <br/>
            <Card style={{width: '80%'}} >
                <Card.Body>
                    <Card.Title>Sample News</Card.Title>
                    <Card.Text>
                        <h6>November 20, 2024</h6>
                    </Card.Text>
                    <Card.Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Subtitle>
                </Card.Body>
            </Card>
        </>
    )
}