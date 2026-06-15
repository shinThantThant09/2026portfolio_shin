import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../stylingpages/ContactMe.css";

function ContactMe() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setSending(false);
        setSent(true);
        form.current.reset();
      })
      .catch(() => {
        setSending(false);
        setError(true);
      });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-content">
        {/* Left side */}
        <div className="contact-left">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-sub">
            Feel free to reach out for any opportunities, project
            collaborations, or just to connect. Whether you're a recruiter, a
            fellow creator, or a beginner finding your way in IAT, I would love
            to hear from you.
          </p>
          <div className="contact-info">
            <p className="contact-info-label">Email</p>

            <a href="mailto:stt5@sfu.ca" className="contact-email-text">
              stt5@sfu.ca
            </a>

            <a
              href="mailto:wendythant7654@gmail.com"
              className="contact-email-text"
            >
              wendythant7654@gmail.com
            </a>
          </div>
          <div className="contact-socials">
            <p className="contact-info-label">Let's Connect</p>
            <div className="social-icons">
              <a
                href="https://github.com/shinThantThant09"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/shinn-thant-b17850196/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Right side - form */}
        <div className="contact-right">
          {sent ? (
            <div className="contact-success">
              ✉ Message sent! I'll get back to you soon 🌸
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              {/* Name and Email in same row */}
              <div className="contact-row">
                <div className="contact-field">
                  <label className="contact-label">
                    Your Name <span className="required-star">✦</span>
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your full name"
                    className="contact-input"
                    required
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-label">
                    Email Address <span className="required-star">✦</span>
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your email address"
                    className="contact-input"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="contact-field">
                <label className="contact-label">
                  Subject <span className="required-star">✦</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="contact-input"
                  required
                />
              </div>

              {/* Message */}
              <div className="contact-field">
                <label className="contact-label">
                  Message <span className="required-star">✦</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Write something..."
                  className="contact-textarea"
                  required
                />
              </div>

              {error && (
                <p className="contact-error">
                  Something went wrong. Please try again!
                </p>
              )}

              <button
                type="submit"
                className="contact-submit"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message ✉"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
