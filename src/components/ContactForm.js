import React, { useEffect, useState } from "react";
import "../styles/ContactForm.css";
import Textfield from "@material-ui/core/TextField";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "@material-ui/core/Button";

const initial = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(initial);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const change = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    setForm(initial)
  };

  return (
    <div>
      <div data-aos="fade" className="section__form">
        <h2>Contact Us</h2>
        <p>Fields marked with an asterisk (*) are required.</p>
        <form onSubmit={submit}>
            <Textfield
              name="name"
              value={form.name}
              required
              id="standard-basic"
              label="Name"
              onChange={change}
            />
            <Textfield
              name="email"
              value={form.email}
              required
              id="standard-basic"
              label="Email"
              onChange={change}
            />
            <Textfield
              name="message"
              value={form.message}
              multiline
              rows={3}
              id="standard-basic"
              label="Message"
              onChange={change}
            />
            <Button
              style={{
                backgroundColor: "#426744",
                height: 60,
                width: "65%",
                fontWeight: 400,
                fontSize: "1.2rem",
                margin: "0 auto",
                marginTop: 50,
                marginBottom: 30,
                color: "white",
              }}
              type='submit'
            >
              Submit
            </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
