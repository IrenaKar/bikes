import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 250px;
  margin: 20px;
  .card {
    cursor: pointer;
    border: 2px solid #e7e7e7;
    transition: border 0.2s ease;
    border-radius: 4px;
    display: block;
  }

  .img-wrapper {
    padding: 20px;
    width: 220px;
    height: 180px;
  }
  .content-cont {
    background-color: orange;
    padding: 15px;
    color: black;
  }

  .content-cont h3 {
    margin-top: 0;
    font-size: 16px;
    font-weight: bold;
  }
  a {
    text-decoration: none;
  }
  .card:hover {
    border-color: orange;
    text-decoration: none;
  }

  .card:hover .image {
    transform: scale(1.06);
  }
  .image {
    width: 100%;
    display: block;
    transition: transform 0.2s ease;
  }
`;
export default function Card({ name, image, price, brand, gender }) {

  return (
    <Wrapper>
      <a href="/" className="card">
        <div className="img-wrapper">
          <img src={`./img/${image}.png`} alt={name} className="image" />
        </div>
        <div div className="content-cont">
          <h3>{name}</h3>
          <p>{price} $</p>
        </div>
      </a>
    </Wrapper>
  );
}
