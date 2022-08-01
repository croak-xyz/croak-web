import styled from 'styled-components';
import SpaceBetween from '../FlexComponents/SpaceBetween';
import Image from 'next/image';
import arrow from '../../assets/arrow.svg';

const Wrapper = styled.div`
    /* border: 1px solid rgba(180, 180, 255, 1); */
    background: #F4F4FF;
    border-radius: 8px;
    padding: 45px 22px;
    padding-bottom: 28px;
    margin: 13px;
`;


const Title = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 99.1%;
    letter-spacing: -0.03em;
    color: #323293;
    padding-bottom: 25px;
    /* border-bottom: 1px solid rgba(180, 180, 255, 0.2); */
`;

const Description = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 154%;
    letter-spacing: -0.02em;
    color: #323293;
    margin-bottom: 90px;
    margin-top: 24px;
`;



const PurpleCard: any = ({title, description, image}: any) => {
  return (
    <Wrapper>
        <SpaceBetween style={{borderBottom: '1px solid rgba(180, 180, 255, 0.2)'}}>
            <Title>{title}</Title>
            <Title> <Image src={arrow} alt='arrow' /> </Title>
        </SpaceBetween>

        <Description>{description}</Description>

        <Image alt='image' src={image} />
    </Wrapper>  
  );
}

export default PurpleCard;
