import React, { useState } from "react";
import Filters from "./Filters";
import styled from "styled-components";

const SideMenuWrapper = styled.div`
  width: 280px;
  h3,
  h4 {
    margin: 10px 20px 0 20px;
    font-weight: 600;
    text-transform: uppercase;
  }

  ul {
    padding-left: 0;
    margin-top: 0;
  }
`;
export default function FiltersTitle({
  filterBrands,
  filters,
  showAll,
  handleClick,
  bikes,
}) {
  const [active, setActive] = useState({
    "Show all": true,
  });

  function toggleActive(selectedData) {
    setActive(selectedData);
  }

  return (
    <SideMenuWrapper>
      <h3>Filter by:</h3>
      <ul className="sub-menu">
        <Filters
          filterType="all"
          selectedData="Show all"
          showAll={showAll}
          bikes={bikes}
          active={active}
          toggleActive={toggleActive}
        />
      </ul>
      <hr />
      <h4>Gender</h4>
      <ul className="sub-menu">
        <Filters
          filters={filters}
          filterType="gender"
          selectedData="Male"
          handleClick={handleClick}
          bikes={bikes}
          active={active}
          toggleActive={toggleActive}
        />
        <Filters
          filters={filters}
          filterType="gender"
          selectedData="Female"
          handleClick={handleClick}
          bikes={bikes}
          active={active}
          toggleActive={toggleActive}
        />
      </ul>
      <hr />
      <h4>Brand</h4>
      <ul>
        {filterBrands.map((item, idx) => {
          return (
            <Filters
              key={idx}
              filters={filters}
              filterBrands={filterBrands}
              filterType="brand"
              selectedData={item.brand}
              handleClick={handleClick}
              bikes={bikes}
              active={active}
              toggleActive={toggleActive}
            />
          );
        })}
      </ul>
    </SideMenuWrapper>
  );
}
