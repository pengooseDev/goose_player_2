import styled from 'styled-components';

declare module 'styled-components' {
  export default interface Theme {
    background: string;
    color: string;
  }
}
