import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import FiltersTitle from "./Components/Filters/FiltersTitle";

const Container = styled.div`
  background-color: white;
  width: 70%;
  margin: auto;
  hr {
    border: 1px solid #e7e7e7;
    margin: 0 20px;
  }
  .title {
    margin: 20px;
    font-size: 50px;
  }
  .side-menu {
    display: flex;
  }
  .side-bar {
    line-height: 2.2;
    margin-top: 20px;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
function App() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("https://json-project3.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setBikes(data);
      });
  }, []);

  const [filterBrands] = useState([
    { brand: "LE GRAND BIKES" },
    { brand: "KROSS" },
    { brand: "EXPLORER" },
    { brand: "VISITOR" },
    { brand: "PONY" },
    { brand: "FORCE" },
    { brand: "E-BIKES" },
    { brand: "IDEAL" },
  ]);

  const [filteredData, setFilteredData] = useState([]);

  function handleClick(selectedData, type) {
    selectedData = bikes.filter((item) => item[type] === selectedData);
    return selectedData;
  }

  function filters(e) {
    let currentFilterName = e.currentTarget.children[0].innerText.toUpperCase();
    let currentFilterType = e.currentTarget.getAttribute("filter");
    setFilteredData([...handleClick(currentFilterName, currentFilterType)]);
  }

  function showAll() {
    setFilteredData([...bikes]);
  }

  const [active, setActive] = useState("Show all" === true);

  function activeFilter(selectedData) {
    setActive([...selectedData, true]);
  }

  return (
    <Container>
      <div className="header-container">
        <Header />
        <hr />
        <div>
          <h1 className="title">Bikes</h1>
        </div>
        <hr />
      </div>
      <div className="side-menu">
        <div className="side-bar">
          <FiltersTitle
            filterBrands={filterBrands}
            filters={filters}
            setBikes={setBikes}
            showAll={showAll}
            bikes={bikes}
            handleClick={handleClick}
            activeFilter={activeFilter}
            active={active}
          />
        </div>

        <div className="card-container">
          {filteredData.length === 0
            ? bikes.map((el, idx) => {
              const { name, price, gender, brand, image } = el;
              return (
                <Card
                  key={idx}
                  name={name}
                  price={price}
                  gender={gender}
                  brand={brand}
                  image={image}
                />
              );
            })
            : filteredData.map((el, idx) => {
              const { name, price, gender, brand, image } = el;
              return (
                <Card
                  key={idx}
                  name={name}
                  price={price}
                  gender={gender}
                  brand={brand}
                  image={image}
                />
              );
            })}
        </div>
      </div>
    </Container>
  );
}

export default App;
