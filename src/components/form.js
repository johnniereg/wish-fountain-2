import React, { useState, useEffect, useRef } from "react";
import { Filter } from "bad-words";

import "../styles/components/form.scss";

const Form = ({ isVisible, toggleForm, toggleWish }) => {
  const [state, setState] = useState({});
  const [submitting, setSubmitting] = useState(false); // Track submission state
  const filter = new Filter();
  const formRef = useRef(null);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const hide = () => {
    toggleForm(false);
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitting) return; // Prevent multiple submissions

    setSubmitting(true); // Disable the button
    const form = e.target;

    const formData = new FormData(form);
    const textarea = formData.get("textarea");

    if (!state.textarea) {
      hide();
      toggleWish(true);
      setSubmitting(false); // Re-enable the button
    } else {
      if (filter.isProfane(textarea)) {
        console.warn("Please, no profanity."); // Not submitting the wish
        hide();
        toggleWish(true);
        setSubmitting(false); // Re-enable the button
        return;
      }
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...state,
        }),
      })
        .then(() => {
          hide();
          toggleWish(true);
          setState({}); // Reset the state
          form.reset(); // Clear the form inputs
        })
        .catch((error) => alert(error))
        .finally(() => {
          setSubmitting(false); // Re-enable the button
        });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        hide();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        hide();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible]);

  const classes = isVisible ? "form visible" : "form hidden";

  return (
    <div className={classes}>
      <div className="form__wrapper" ref={formRef}>
        <form
          className="wish-form"
          name="art-city-wish"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="wish-form" value="wish" />
          <label htmlFor="text">Toss your wish into the fountain</label>
          <textarea name="textarea" onChange={handleChange} />
          <button className="submit" type="submit" disabled={submitting}>
            {submitting ? "" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
