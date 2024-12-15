import TextAreaField from "../../../common/TextAreaField";
import FormRowWrapper from "../../../common/FormRowWrapper";
import React from "react";

export const MessageField = ({ onChange,state }) => {
  return(
      <FormRowWrapper md={12} className="mt-3">
          <TextAreaField
              controlId="message"
              label="Message"
              name="message"
              placeholder="Message"
              rows={8}
              state={state}
              onChange={onChange}
          />
          {state.errors.message && <p className={"text-danger"}>{state.errors.message}</p>}
      </FormRowWrapper>
  );
};