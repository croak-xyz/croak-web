import styled from 'styled-components';
import Image from 'next/image';
import frog from '../../assets/images/green-frog.svg';
import CroakButton from '../CroakButton';

const Wrapper = styled.div`
    border-radius: 8px;
    padding: 42px 22px;
    padding-bottom: 28px;
    background: rgba(22, 248, 154, 0.08);
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`;


const Title = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 99.1%;
    letter-spacing: -0.05em;
    color: #181818;
    margin-top: 29px;
    margin-bottom: 36px;
    text-align: center;
`;


const GreenBanner: any = () => {
  return (
    <Wrapper>

        <Image alt='green-frog-with-ethereum' src={frog} />

        <Title>Build with Croak</Title>

        <div
            style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}
        >
            <CroakButton style={{marginLeft: 28}} type={'white'} onClick={() => {}} title='Sign In' />
            <CroakButton style={{marginLeft: 28,}} type={'green'} onClick={() => {}} title='Get free API key' />
        </div>
        
    </Wrapper>  
  );
}

export default GreenBanner;
