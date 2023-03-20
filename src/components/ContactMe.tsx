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

  const handleSubmit = (event: FormSubmit) => {
    event.preventDefault();
    if (!verifyInputs) return window.alert("Not valid inputs");

    const templateParams = {
      from_email: email(),
      subject: `check me out :D - by: ${name}`,
      message: msg(),
    };

    // emailjs.send(serviceID, templateID, templateParams, publicKey);
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        templateParams,
        import.meta.env.VITE_EMAIL_KEY
      )
      .then((res) => resetInputs())
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
        <form onsubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              placeholder="Enter your name"
              onchange={(e) => setName(e.currentTarget.value)}
              value={name()}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              placeholder="Enter your email"
              onchange={(e) => setEmail(e.currentTarget.value)}
              value={email()}
            />
          </label>
          <label>
            Message:
            <textarea
              placeholder="Enter a message"
              onchange={(e) => setMsg(e.currentTarget.value)}
              value={msg()}
            />
          </label>
          <button>Send</button>
        </form>
      </article>
    </section>
  );
};

export default ContactMe;
