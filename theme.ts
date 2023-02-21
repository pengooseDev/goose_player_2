import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  background: '#111',
  color: '#FADEDD',
  blurBackground: 'rgba(0, 0, 0, 0.5)',
  transitionOption: 'ease-in-out 0.15s',
  imgFilter: 'pink',
};

export const lightTheme: DefaultTheme = {
  background: '#FADEDD',
  color: '#111',
  blurBackground: 'rgba(255, 255, 255, 0.45)',
  transitionOption: 'ease-in-out 0.15s',
  imgFilter: '#111',
};
