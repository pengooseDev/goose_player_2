import Image from 'next/image';
import mainImage from '@/assets/mainImage.png';
import styled from 'styled-components';

const MainImg = () => {
  return (
    <Wrapper>
      <Image src={mainImage} alt="mainImage" />
    </Wrapper>
  );
};

export default MainImg;

const Wrapper = styled.div`
  position: absolute;
  z-index: -10;
  right: 0;
  bottom: 0;
  img {
    transition: 0.15s ease-in-out;
    filter: saturate(3) sepia(70%) grayscale(90%)
      drop-shadow(0px 0px 2px ${({ theme }) => theme.imgFilter});
  }
`;
