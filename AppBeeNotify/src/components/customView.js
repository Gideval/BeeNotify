import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const CustomView = styled(View)`
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 1) 100%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: ${(props) => props.height || 'auto'};
`;

export default CustomView;
