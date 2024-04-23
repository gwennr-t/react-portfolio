import React from "react";
import { useState } from "react";

function ContactForm() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form className="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={input}
          name="Name"
          className="name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Enter your email"
          value={input}
          name="Email"
          className="email"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Type your message here"
          value={input}
          name="Messagee"
          className="message"
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
}

export default ContactForm;
