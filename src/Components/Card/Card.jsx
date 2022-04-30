import React from 'react'
import styled from 'styled-components';

export default function Card({ name, image, price, brand, gender }) {

    const Wrapper = styled.div`
width: 300px;
margin: 20px;
    .card {
        cursor: pointer;
        border: 2px solid #e7e7e7;
        transition: border .2s ease;
        border-radius: 4px;
        display: block;
      }
      
      .img-wrapper {
        padding: 20px;
        width: 250px;
        height: 180px;
      }
      .content-cont {
        background-color: orange;
        padding: 15px;
        color:black;
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
        transition: transform .2s ease;
      }    
    `;

    return (
        <Wrapper>
            <a href="/" className="card">
                <div className="img-wrapper">
                    <img
                        src={`./img/${image}.png`}
                        alt={name}
                        className="image"
                    />
                </div>
                <div div className="content-cont">
                    <h3>
                        {name}
                    </h3>
                    <p>{price} $</p>

                </div>
            </a>
        </Wrapper>
    )
}
