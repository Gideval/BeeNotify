import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { metrics } from '../styles';

const CustomText = styled(Text)`
  color: ${(props) => props.textColor || '#fff'};
  font-size: ${(props) => metrics.px(props.fontSize) || 16}px;
  text-align: ${(props) => props.textAling || 'center' };
  line-height: ${(props) => props.buttonHeight || '30px'};
  
`;

export { CustomText };
