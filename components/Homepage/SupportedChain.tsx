import styled from 'styled-components';
import chain from '../../assets/images/chain-horizontal.svg';
import Image from 'next/image';

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
`;


const Heading = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    /* identical to box height */

    letter-spacing: 0.03em;
    text-transform: uppercase;

    color: #717171; 
`;

const SupportedChain: any = ({...props }: any) => {
  
  return (
    <div 
      style={{
       display: 'flex',
       alignContent: 'center',
       justifyContent: 'space-between',
       width: '100%',
       flexDirection: props.mobile ? 'column' : 'row',
       marginBottom: props.mobile ? 32 : 0,
      }}
      >
        <Heading style={{textAlign: props.mobile ? 'center': 'left'}}>ALL EVM CHAINS SUPPORTED</Heading>
        <div style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            height: 20,
            marginTop: props.mobile ? 18 : 0,
        }}>
            <Image src={chain} alt='chain icons'/>
        </div>
    </div>
  )
}

export default SupportedChain;
