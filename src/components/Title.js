import React from "react";
import styled from "styled-components";
export default function Title({ title, center }) {
  return (
    <TitleWrapper className="row mb-4" center={center}>
      <div className="col">
        <h4 className="text-title">{title}</h4>
        <div className="title-underline" />
      </div>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  text-align: ${props => (props.center ? "center" : "left")};
  h4 {
    font-weight : 600;
    text-transform: uppercase;
  }
  .title-underline {
    height: 0.1rem;
    width: 7rem;
    background: var(--redColor);
    margin: ${props => (props.center ? "0 auto" : "0")};
  }
`;
