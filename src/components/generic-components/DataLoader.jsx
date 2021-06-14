import React from 'react';
import styled from 'styled-components';

const BlueDiv = styled.div`
  color: #216298;
  font-weight: bold
`;

function DataLoader({ textValue }) {
  return (
    <div className="data-loader">
      <img src="/images/data-loader.gif" alt="Loading" />
      <BlueDiv>{textValue}</BlueDiv>
    </div>
  );
}
export default DataLoader;
