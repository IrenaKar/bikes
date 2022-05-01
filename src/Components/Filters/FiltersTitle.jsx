import React, { useState } from "react";
import Filters from "./Filters";
import styled from "styled-components";

const SideMenuWrapper = styled.div`
  h3 {
    margin: 0 30px;
    font-weight: 600;
  }

  h4 {
    font-weight: 600;
    margin: 0 30px;
  }
  ul {
    padding-left: 0;
  }
`;
export default function FiltersTitle({
  filterBrands,
  filters,
  showAll,
  handleClick,
  bikes,
  
}) {

  return (
    <SideMenuWrapper>
      <h3>Filter by:</h3>
      <ul className="sub-menu">
        <Filters
          filters={filters}
          filterBrands={filterBrands}
          filterType="all"
          selectedData="Show all"
          showAll={showAll}
          bikes={bikes}
     
        />
      </ul>
      <hr />
      <h4>Gender</h4>
      <ul className="sub-menu">
        <Filters
          filters={filters}
          filterBrands={filterBrands}
          filterType="gender"
          selectedData="Male"
          showAll={showAll}
          handleClick={handleClick}
          bikes={bikes}
                       />
        <Filters
          filters={filters}
          filterBrands={filterBrands}
          filterType="gender"
          selectedData="Female"
          showAll={showAll}
          handleClick={handleClick}
          bikes={bikes}
   
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
            />
          );
        })}
      </ul>
    </SideMenuWrapper>
  );
}
