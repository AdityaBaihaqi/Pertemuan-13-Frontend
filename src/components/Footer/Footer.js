import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <footer className="footer">
          <h2 className="footer__title">Netflix Indonesia</h2>
          <p className="footer__author">Created by PeTIK Jombang</p>
        </footer>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  .container {
    background-color: #000000;
    color: #fff;
    padding: 1rem;
    text-align: center;
  }

  .footer__title {
    margin-bottom: 1rem;
  }

  .footer__author {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }
`;

export default Footer;
