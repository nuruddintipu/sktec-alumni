import {Card} from "react-bootstrap";

export default function EventCard() {
    return (
      <>
          <Card style={{width: '80%'}} >
              <Card.Body>
                  <Card.Title>Alumni Election</Card.Title>
                  <Card.Text>
                      January 15, 2025
                  </Card.Text>
                  <Card.Subtitle>Alumni Committee election will be held by the interim committee.</Card.Subtitle>
              </Card.Body>
          </Card>
          <br/>
          <Card style={{width: '80%'}} >
              <Card.Body>
                  <Card.Title>Sample Event</Card.Title>
                  <Card.Text>
                      January 15, 2025
                  </Card.Text>
                  <Card.Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Subtitle>
              </Card.Body>
          </Card>
          <br/>
      </>
    );
}