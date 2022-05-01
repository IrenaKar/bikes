import React, { useState } from "react";
import styled from "styled-components";

const FilterWrapper = styled.li`
  width: 170px;
  margin-left: 20px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  :hover,
  .active {
    color: orange;
  }
  :hover .badge,
  .active .badge {
    background: orange;
  }
  .active {
    font-weight: 600;
  }
  .badge {
    background-color: #d3d3d3;
    color: #5c5c5c;
    border-radius: 15px;
    padding: 0 10px;
    font-size: 12px;
    font-weight: bold;
  }
`;

export default function Filters({
  showAll,
  filterType,
  filters,
  selectedData,
  bikes,
  handleClick,
}) {

  return (
    <>
      <FilterWrapper
 
        filter={filterType}
        onClick={(e) => {
          filterType === "all" ? showAll(e) : filters(e);
        

        }}
      >
        <span     >{selectedData}</span>
        <span className="badge">
          {" "}
          {filterType === "all"
            ? bikes.length
            : handleClick(selectedData.toUpperCase(), filterType).length}
        </span>
      </FilterWrapper>
    </>
  );
}
