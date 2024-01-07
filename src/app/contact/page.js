import React from "react";
import ContactCard from "../components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <ContactCard />
      <section className={styles.contact_section}>
        <h2>
          We'd love to hear <span>from you</span>
        </h2>
        <ContactForm />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27404.676454658907!2d76.94122875165552!3d30.842305019990036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f8ee2a212ec43%3A0xe3750dc65ce9da0e!2sParwanoo%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1686370349866!5m2!1sen!2sin"
          width={100}
          height={450}
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className={styles.mapping}
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
