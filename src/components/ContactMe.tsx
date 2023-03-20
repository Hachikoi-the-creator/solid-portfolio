import "../styles/contactMe.scss";
import { Component, createSignal } from "solid-js";
import AboutSocials from "./mols/AboutSocials";
import emailjs from "emailjs-com";

type FormSubmit = Event & {
  submitter: HTMLElement;
} & {
  currentTarget: HTMLFormElement;
  target: Element;
};

const ContactMe: Component = () => {
  const [name, setName] = createSignal("");
  const [msg, setMsg] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [sending, setSending] = createSignal(false);

  const resetInputs = () => {
    setName("");
    setEmail("");
    setMsg("");
  };

  const verifyInputs = (): boolean => {
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const validName = name().length > 3;
    const validEmail = emailRegex.test(email());
    const validMsg = msg().length > 10;

    return validName && validEmail && validMsg;
  };

  // check in local storage the counter of how many messages have been sent
  // todo: update it to  take into account the time
  const checkForTrouble = () => {
    const prevValue = +(window.localStorage.getItem("sent-times") || "1");
    window.localStorage.setItem("sent-times", (prevValue + 1).toString());
    return prevValue >= 3;
  };

  const handleSubmit = (event: FormSubmit) => {
    event.preventDefault();
    if (!verifyInputs()) return window.alert("Not valid inputs");
    if (checkForTrouble()) return window.alert("Please dont send spam :c");

    setSending(true);
    const templateParams = {
      from_email: email(),
      subject: `check me out :D - by: ${name()}`,
      message: msg(),
    };
    console.log(templateParams);

    // emailjs.send(serviceID, templateID, templateParams, publicKey);
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        templateParams,
        import.meta.env.VITE_EMAIL_KEY
      )
      .then((res) => {
        resetInputs();
        setSending(false);
      })
      .catch((e) => console.error("mistakes have ben made", e));
  };

  return (
    <section id="contact-me" class="contact-me p-top">
      <h2 class="gradient-subtitle">Contact Me</h2>
      <article>
        <h3 class="blue-gradient">Socials</h3>
        <AboutSocials />
      </article>

      <article>
        <h3 class="blue-gradient">Email me</h3>
        <form onsubmit={handleSubmit} class="contact-form">
          <div class="input-container">
            <input
              id="name"
              type="text"
              onchange={(e) => setName(e.currentTarget.value)}
              value={name()}
              placeholder=" "
            />
            <label for="name">Name:</label>
          </div>

          <div class="input-container">
            <input
              id="email"
              type="text"
              onchange={(e) => setEmail(e.currentTarget.value)}
              value={email()}
              placeholder=" "
            />
            <label for="email">Email:</label>
          </div>

          <div class="input-container">
            <textarea
              id="msg"
              onchange={(e) => setMsg(e.currentTarget.value)}
              value={msg()}
              placeholder=" "
            />
            <label for="msg">Message:</label>
          </div>

          <button class="neon-button" disabled={sending()}>
            Send
          </button>
        </form>
      </article>
    </section>
  );
};

export default ContactMe;
