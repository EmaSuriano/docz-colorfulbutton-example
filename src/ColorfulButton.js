import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// const style = ({ color }) => ({
//   backgroundColor: color,
//   border: 'none',
//   color: 'white',
//   padding: '15px 32px',
//   textAlign: 'center',
//   textDecoration: 'none',
//   display: 'inline-block',
//   fontSize: '16px',
//   margin: '4px 2px',
//   cursor: 'pointer',
// });

// const ColorfulButton = ({ color, ...props }) => (
//   <button {...props} style={style({ color })} />
// );

const ColorfulButton = styled.button`
  background-color: ${props => props.color};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export default ColorfulButton;
