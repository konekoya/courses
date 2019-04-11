import React from "react";
import styled from "styled-components";
import DOMPurify from "dompurify";
import * as moment from "moment";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  color: #616473;

  .day {
    font-size: 38px;
  }

  .date {
    display: flex;
  }

  .month-year-wrap {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    font-size: 13px;
    justify-content: center;
  }

  .month {
    font-weight: bold;
  }

  .week-day {
    font-weight: bold;
    margin-left: auto;
    text-transform: uppercase;
    font-size: 13px;
  }
`;

const Header = () => {
  const date = moment().format(
    `[<span class="day">]D[</span>][<div class="month-year-wrap"><span class="month">]MMMM[</span><span class="year">]YYYY[</span></div>]`
  );

  return (
    <StyledHeader>
      <span
        className="date"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(date) }}
      />
      <span className="week-day">{moment().format("dddd")}</span>
    </StyledHeader>
  );
};

export default Header;
