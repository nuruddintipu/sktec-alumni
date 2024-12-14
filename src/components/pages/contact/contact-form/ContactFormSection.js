import {Col, Form, Row} from "react-bootstrap";
import React from "react";
import {SendMessageButton} from "./SendMessageButton";
import {ContactInputFields} from "./ContactInputFields";

const ContactFormSection = () => {
  return (
      <Col md={7} style={{background: '#e8edf0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'}}>
          <div className={"w-100 p-md-5 p-4"}>
              <Form method="POST" id="contactForm" name="contactForm" className="contactForm">
                  <Row>

                      <ContactInputFields />
                      <SendMessageButton />

                  </Row>
              </Form>
          </div>
      </Col>
  );
};

export default ContactFormSection;