import styled from 'styled-components';
import CroakButton from '../CroakButton';
import SupportedChain from './SupportedChain';

const Blue = styled.div`
    font-family: 'Graphik bold';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    /* identical to box height */

    letter-spacing: 0.03em;
    text-transform: uppercase;

    color: #5351CC;
    margin-bottom: 22px;
    @media only screen and (max-device-width: 480px) {
        text-align: center;
    }
`;


const Heading = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 900;
    font-size: 92px;
    line-height: 99.1%;
    /* or 91px */

    letter-spacing: -0.03em;

    color: #000000;
    margin-bottom: 28px;
    @media only screen and (max-device-width: 480px) {
        text-align: center;
    }
`;

const NoBullshit: any = ({...props }: any) => {
  
  return (
    <div 
      style={{
       display: 'flex',
       justifyContent: props.justify,
       flexDirection: 'column'
      }}
      >
        <Blue>ONE LINE SET-UP</Blue>
        <Heading>No bullshit <br></br>
            Web3 Infra
        </Heading>
        <div style={{
            display: 'flex',
            justifyContent: props.justify,
            alignContent: 'center',
            width: '100%',
            borderBottom: '1px solid rgba(169,169,169,0.2)',
            paddingBottom: 30,
            marginBottom: 42
        }}>
            <CroakButton title='Sign in' type='white'/>
            <CroakButton style={{marginLeft: 28}} type='green' title='Get free API key'/>
        </div>

        <SupportedChain mobile={props.mobile} />
    </div>
  )
}

export default NoBullshit;
