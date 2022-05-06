import React from "react";
import styled from "styled-components";

const FilterWrapper = styled.li`
  margin-left: 20px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  &:hover,
  .active {
    color: orange;
  }
  &:hover .badge,
  .active-badge {
    background-color: orange;
    color: #5c5c5c;
    border-radius: 15px;
    padding: 0 10px;
    font-size: 12px;
    font-weight: bold;
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
  active,
  toggleActive,
}) {
  return (
    <>
      <FilterWrapper
        filter={filterType}
        onClick={(e) => {
          filterType === "all" ? showAll(e) : filters(e);
          toggleActive(selectedData);
        }}
      >
        <span className={active !== selectedData ? "" : "active"}>
          {selectedData}
        </span>
        <span className={active !== selectedData ? "badge" : "active-badge"}>
          {" "}
          {filterType === "all"
            ? bikes.length
            : handleClick(selectedData.toUpperCase(), filterType).length}
        </span>
      </FilterWrapper>
    </>
  );
}
