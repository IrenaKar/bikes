import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f8;
  padding: 60px 20px;
  .box {
    width: 30%;
  }
  .box h2 {
    margin-left: 10px;
    margin-bottom: 20px;
    margin-top: 0;
    font-size: 22px;
    font-weight: bold;
  }
  .fab {
    color: white;
  }
  .social-share a {
    margin-left: 10px;
    padding: 10px 15px;
    background-color: orange;
    transition: all 0.15s ease;
    display: inline-block;
  }
  .social-share a:not(:last-child) {
    margin-right: 10px;
  }
  .social-share a:hover {
    background-color: grey;
  }
  .box:not(:first-child) {
    border-left: 1px solid lightgrey;
  }
  .box ul {
    padding: 0;
    margin-left: 20px;
    list-style-type: none;
  }
  .box ul li {
    margin-bottom: 10px;
  }
  .box ul li a {
    color: black;
    transition: all 0.15s ease;
    font-size: 16px;
    text-decoration: none;
  }
  .box ul li a:hover {
    color: orange;
    text-decoration: none;
  }
`;
export default function Footer() {
  return (
    <FooterWrapper>
      <div className="social-share box">
        <h2>Social share</h2>
        <a href="https://www.facebook.com/">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/?hl=en">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div className="event-info box">
        <h2>Event info</h2>
        <ul>
          <li>
            <a href="/">Enter Now</a>
          </li>
          <li>
            <a href="/">Event Info</a>
          </li>
          <li>
            <a href="/">Course Maps</a>
          </li>
          <li>
            <a href="/">Race Pack</a>
          </li>
          <li>
            <a href="/">Results</a>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
          <li>
            <a href="/">Am I Registered?</a>
          </li>
        </ul>
      </div>
      <div className="registration box">
        <h2>Registration</h2>
        <ul>
          <li>
            <a href="/">Volunteers</a>
          </li>
          <li>
            <a href="/">Gallery</a>
          </li>
          <li>
            <a href="/">Press</a>
          </li>
          <li>
            <a href="/">Results</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Service Plus</a>
          </li>
          <li>
            <a href="/">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="schedule box">
        <h2>Schedule</h2>
        <ul>
          <li>
            <a href="/">Gallery</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Videos</a>
          </li>
          <li>
            <a href="/">Results</a>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
          <li>
            <a href="/">Results</a>
          </li>
          <li>
            <a href="/">Volunteers</a>
          </li>
        </ul>
      </div>
    </FooterWrapper>
  );
}
