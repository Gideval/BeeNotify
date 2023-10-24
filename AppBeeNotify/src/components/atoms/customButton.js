import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { metrics } from "../../styles";

const CustomButton = styled(TouchableOpacity)`
  background-color: ${(props) => props.backgroundColor || '#3498db'};
  width: ${(props) => metrics.px(props.w) || 60}px;
  height: ${(props) => metrics.px(props.h) || 50}px;
  padding: 10px;
  border-radius: 5px;
`;

export { CustomButton }