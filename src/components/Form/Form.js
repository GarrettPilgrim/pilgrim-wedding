import React from "react";
import FormStyle from "./form.style";

const Form = () => {
  return (
    <>
      <FormStyle>
        <fieldset>
          <legend>RSVP</legend>
          <form
            name="wedding-rsvp"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label>
              First Name
              <input type="text" name="first-name" id="first-name" required />
            </label>
            <label>
              Last Name
              <input type="text" name="last-name" id="last-name" required />
            </label>
            <label>
              Email
              <input type="text" name="email" id="email" />
            </label>
            <label>
              Number of Guests
              <input
                type="number"
                name="guest-count"
                id="guest-count"
                min="1"
                required
              />
            </label>
            <button>Submit</button>
          </form>
        </fieldset>
      </FormStyle>
    </>
  );
};

export default Form;
