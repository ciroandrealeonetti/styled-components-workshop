import React from "react";
import toastLogo from "../assets/toast-logo.png";

/* Import Your Files Below This Line*/
import {StyledSection} from "../components/styled/Section.styled"
import {StyledButton} from "../components/styled/Button.style"
function AboutToastify() {
  return (
    <StyledSection>
      <div>
        <img src={toastLogo} alt="Toastify Logo" />
        <article>
          <h2>
            React-Toastify allows you to add notifications to your app with
            ease. No more nonsense! Easy to set up for real, you can make it
            work in less than 10sec! Super easy to customize! Swipe to close 🤘
          </h2>
          <a
            href="https://fkhadra.github.io/react-toastify/introduction"
            target="_blank"
            rel="noreferrer"
          >
            <StyledButton>
              <h3>Learn more about Toastify</h3>
            </StyledButton>
          </a>
        </article>
      </div>
    </StyledSection>
  );
}

export default AboutToastify;
