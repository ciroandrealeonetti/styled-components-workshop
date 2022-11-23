import React from "react";
import scLogo from "../assets/sc-logo.png";

/* Import Your Files Below This Line*/
import {StyledSection} from "../components/styled/Section.styled"
import {StyledButton} from "../components/styled/Button.style"
function AboutStyled() {
  return (
    <StyledSection>
      <div>
        <img src={scLogo} alt="Styled Components Logo" />
        <article>
          <h2>
            Styled-components allows you to write actual CSS code to style your
            components. It also removes the mapping between components and
            styles. Using components as a low-level styling construct could not
            be easier 👌
          </h2>
          <a
            href="https://styled-components.com/docs"
            target="_blank"
            rel="noreferrer"
          >
            <StyledButton>
              <h3>Learn more about Styled Components</h3>
            </StyledButton>
          </a>
        </article>
      </div>
    </StyledSection>
  );
}

export default AboutStyled;
