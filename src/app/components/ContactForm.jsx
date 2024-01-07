"use client";
import React, { useState } from "react";
import styles from "../contact/contact.module.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });

      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("Success");
      } else {
        setStatus("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Name
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your Name"
            className={mulish.className}
            value={user.username}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={mulish.className}
            value={user.email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Phone
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter your Phone no."
            className={mulish.className}
            value={user.phone}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            className={mulish.className}
            rows={5}
            value={user.message}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>
      </div>
      <div>
        {status === "Success" && (
          <p className={styles.success_msg}>Thank you for your message !</p>
        )}
        {status === "Error" && (
          <p className={styles.error_msg}>
            There was an error submitting your message!
          </p>
        )}
        <button className={mulish.className} type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
