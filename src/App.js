import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import styled from 'styled-components'
import Header from './Components/Header/Header';

function App() {
  const Container = styled.div `
  background-color: white;
  margin: 0 100px;
  `

  const CardContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 `
  const HeaderContainer = styled.div`
hr {
  margin: 0 20px;
  color: #e7e7e7;
}
.title {
  margin: 20px;
  font-size: 50px;
}


 `
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("https://json-project3.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <Header />
        <hr />
        <div>
        <h1 className="title">Bikes</h1>
                </div>
        <hr />
      </HeaderContainer>
      <CardContainer>
        {bikes.map((el) => {
          const { name, price, gender, brand, image } = el
          return <Card
            name={name}
            price={price}
            gender={gender}
            brand={brand}
            image={image}
          />
        })}
      </CardContainer>
    </Container>
  );
}

export default App;
