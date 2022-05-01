import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px 20px 20px;
  .navbar,
  .icons-menu {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }
  .navbar a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 20px;
    margin-top: 20px;
  }
  .navbar a:not(last-of-type) {
    margin-right: 50px;
  }

  .logo {
    width: 100px;
    margin-top: 20px;
  }
  .logo img {
    width: 100%;
    display: block;
  }
  .icons-menu .fas {
    font-size: 20px;
    cursor: pointer;
  }
  .icons-menu .fas:hover,
  .navbar li a:hover {
    color: orange;
  }
  .icons-menu .fas:first-child {
    padding-right: 10px;
  }
  li {
    align-self: center;
  }
`;
export default function Header() {
  return (
    <HeaderWrapper>
      <a href="/" className="logo">
        <img src="./img/logo.png" alt="logo" />
      </a>
      <ul className="navbar">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Вikes</a>
        </li>
        <li>
          <a href="/">Gear</a>
        </li>
        <li>
          <a href="/">Parts</a>
        </li>
        <li>
          <a href="/">Tires</a>
        </li>
        <li>
          <a href="/">Service-info</a>
        </li>
        <li>
          <a href="/">Catalogues</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <div className="icons-menu">
        <i className="fas fa-search"></i>
        <i className="fas fa-shopping-bag"></i>
      </div>
    </HeaderWrapper>
  );
}
