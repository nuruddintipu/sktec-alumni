import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SectionHeading from '../../common/SectionHeading';

const FoundingStoryContent = ({ paragraphs }) => {
    return (
        <Card.Text className="text-justify" style={{ lineHeight: '1.8' }}>
            {paragraphs.map((paragraph, index) => (
                <p key={index} style={{ marginBottom: '1rem' }}>
                    {paragraph}
                </p>
            ))}
        </Card.Text>
    );
};

const Constitution = () => {
    const pageHeading = 'Constitution';
    const constitutionParagraphs = [
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
    ];

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col lg={12}>
                    <Card className="p-4">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">
                                <SectionHeading heading={pageHeading} />
                            </Card.Title>
                            <FoundingStoryContent paragraphs={constitutionParagraphs} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Constitution;
