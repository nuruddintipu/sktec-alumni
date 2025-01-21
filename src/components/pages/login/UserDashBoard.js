import {Container, Row, Col} from "react-bootstrap";

function UserDashBoard() {
    return (
        <Container>
            <Row>
                <Col
                    className={`justify-content-center align-items-center `}
                >
                    <h1
                        className={`mt-4`}
                        style={{color: 'var(--primary-color)'}}
                    >
                        Login Successful.
                    </h1>
                </Col>
            </Row>
        </Container>
    );
}

export default UserDashBoard;