import React from "react";
import FormStyle from "./form.style";

const Form = () => {
  return (
    <>
      <FormStyle>
        <fieldset>
          <legend>RSVP</legend>
          <form
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Email
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Number of Guests
              <input type="number" name="name" id="name" />
            </label>
          </form>
        </fieldset>
      </FormStyle>
    </>
  );
};

export default Form;
