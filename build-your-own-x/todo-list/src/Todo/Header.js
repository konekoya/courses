import React from "react";
import styled from "styled-components";
import * as moment from "moment";

const StyledHeader = styled.div`
  display: flex;

  .day {
    margin-left: auto;
    text-transform: uppercase;
    font-size: 26px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <span className="date">{moment().format("D MMMM YYYY")}</span>
      <span className="day">{moment().format("dddd")}</span>
    </StyledHeader>
  );
};

export default Header;
