import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BlueDiv = styled.div`
  color: #216298;
  font-weight: bold
`;

// eslint-disable-next-line react/prop-types
function DataLoader({ textValue }) {
  return (
    <div>
      <img src="/images/data-loader.gif" alt="Loading" />
      <BlueDiv>{textValue}</BlueDiv>
    </div>
  );
}

DataLoader.prototype = {
  text: PropTypes.string
};

export default DataLoader;
