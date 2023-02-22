import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    backgroundTransparent: string;
    color: string;
    colorTransparent: string;
    blurBackground: string;
    transitionOption: string;
    imgFilter: string;
  }
}
