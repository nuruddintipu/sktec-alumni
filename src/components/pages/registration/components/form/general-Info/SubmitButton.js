import FormRowWrapper from '../../../../../common/FormRowWrapper';
import { Form } from 'react-bootstrap';
import React from 'react';

export const SubmitButton = ({ buttonText = 'Submit', type = 'submit', state }) => {
    return (
        <FormRowWrapper md={6} className="mt-3">
            <Form.Group>
            </Form.Group>
        </FormRowWrapper>
    );
};
