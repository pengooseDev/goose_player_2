import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  background: '#111',
  backgroundTransparent: 'rgb(17, 17, 17, 0.65)',
  color: '#FADEDD',
  colorTransparent: 'rgba(250, 222, 221, 0.65)',
  blurBackground: 'rgba(0, 0, 0, 0.5)',
  transitionOption: 'ease-in-out 0.15s',
  imgFilter: 'pink',
};

export const lightTheme: DefaultTheme = {
  background: '#FADEDD',
  backgroundTransparent: 'rgba(250, 222, 221, 0.65)',
  color: '#111',
  colorTransparent: 'rgb(17, 17, 17, 0.65)',
  blurBackground: 'rgba(255, 255, 255, 0.45)',
  transitionOption: 'ease-in-out 0.15s',
  imgFilter: '#111',
};
