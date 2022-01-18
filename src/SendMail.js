import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {closeSendMessage} from "./features/mailSlice";

function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="SendMail">
      <div className="sendMail-header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail-close" onClick={() => dispatch(closeSendMessage())} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input type="text" name="to" ref={register({required: true})} placeholder="To" /> */}
        <input type="email" {...register("to", {required: true})} placeholder="To" />
        {/* If errors.to exist then go ahead and render a p tag */}
        {errors.to && <p className="sendMail-error">To is required</p>}

        <input type="text" {...register("subject", {required: true})} placeholder="Subject" />
        {errors.subject && <p className="sendMail-error">Subject is required</p>}

        <input
          type="text"
          {...register("message", {required: true})}
          placeholder="Message...."
          className="sendMail-message"
        />
        {errors.message && <p className="sendMail-error">Message is required</p>}

        <div className="sendMail-options">
          {/* Variant, color, type - it's within the form, should have control over the form when we hit the keyboard */}
          <Button className="sendMail-send" variant="contained" color="primary" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;

// using the useForm hook from react-hook-form
// In order to use this form library each form part has to have a name
// Go into each of the forms and  add ref, use the register function and pass in validation tools
// on the form add onSubmit=handleSubmit(). Create an onSubmit function that basically wraps it
// We get the data of the form back at onSubmit
// They also give us an errors object, you can add a p-tag undeneath every input

// Have it so that when I click compose it changes the piece of state in redux store which shows this form. Does otherwise on clicking the CloseIcon
