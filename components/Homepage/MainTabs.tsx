import { useState } from 'react';
import styled from 'styled-components';

const Tab = styled.div`
  font-family: 'Graphik';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.013em;

  color: #000000;
`;

const Title = styled.span`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    /* identical to box height */
    color: black;
`;


const MainTabs: any = ({...props }: any) => {
    const [active, setActive] = useState('nft');

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '12px 0px',
        border: '1px solid rgba(169,169,169,0.2)',
        borderRadius: 100,
        }}>
        <Tab className='hover' onClick={() => setActive('nft')} >
            <Title style={{
                borderRight: active == 'nft' ? '1px solid transparent' : '1px solid transparent',
                color: active == 'nft' ? 'white' : 'black',
                padding: '12px 18px',
                background: active == 'nft' ? 'black' : 'white',
                borderRadius: 100,
                }}>
                    NFT
            </Title>
        </Tab>
        <Tab className='hover' onClick={() => setActive('marketplace')}>
            <Title style={{
                borderRight: active == 'marketplace' ? '1px solid transparent' : '1px solid transparent',
                color: active == 'marketplace' ? 'white' : 'black',
                padding: '12px 18px',
                background: active == 'marketplace' ? 'black' : 'white',
                borderRadius: 100,
                }}>
                    Marketplace
            </Title>
        </Tab>
        <Tab className='hover' onClick={() => setActive('wallet')}>
            <Title style={{
                borderRight: active == 'wallet' ? '1px solid transparent' : '1px solid transparent',
                color: active == 'wallet' ? 'white' : 'black',   
                padding: '12px 18px',
                background: active == 'wallet' ? 'black' : 'white',
                borderRadius: 100,
                }}>
                    Wallet
            </Title>
        </Tab>
    </div>
  );
}

export default MainTabs;
