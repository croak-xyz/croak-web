import { useState } from 'react';
import styled from 'styled-components';

interface Props {
    active: any;
  }

const TabStyle = styled.div<Props>`
    padding: 12px 20px;
    margin: 5px;
    border-radius: 12px;
    border: ${props => props.active ? '1px solid #B4B4FF' : '1px solid white'}; 
    background: ${props => props.active ? 'linear-gradient(180deg, rgba(180, 180, 255, 0.16) 0%, rgba(180, 180, 255, 0) 100%)' : '#FAFAFA'}; 
`;

const Title = styled.span<Props>`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.013em;
    color: ${props => props.active ? '#5351CC' : '#000000'};    
`;

const Detail: any = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -0.02em;
    color: #181818;
    padding-bottom: 24px;
    padding-top: 24px;
    border-bottom: 1px solid #ECECEC;


`;

const Tab: any = ({...props }: any) => {

    return (
        <TabStyle className='hover' onClick={() => props.setActive(props.title)} active={props.active}>
            <Title active={props.active}>{props.title}</Title>
        </TabStyle>
    );
}


const Tabs: any = ({...props }: any) => {
   

    const tabs: any = props.items.map((item: any, index: any) => {
        return (
            <Tab setActive={props.setActive} key={`tab-item-${index}`} active={props.active == item} title={item} />
        );
    });

    return (
        <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'flex-start', alignContent: 'center', flexWrap: 'wrap'}}>
                {tabs}
            </div>
            {props.active == 'Deploy Contracts' && <div style={{display:'flex', flexDirection: 'column'}}>
                    <Detail>Deploy smart contracts for ERC-721/1155 NFTs</Detail>
                    <Detail>Convert existing assets to NFTs</Detail>
                    <Detail>Supports the latest royalty protocol EIP-2981 & chain upgrades anytime</Detail>
                
                </div>
            }
            {props.active == 'Universal Listing' && <div style={{display:'flex', flexDirection: 'column'}}>
                    <Detail>Deploy smart contracts for ERC-721/1155 NFTs</Detail>
                    <Detail>Convert existing assets to NFTs</Detail>
                    <Detail>Supports the latest royalty protocol EIP-2981 & chain upgrades anytime</Detail>
                
                </div>
            }
            {props.active == 'Mint & Airdrop' && <div style={{display:'flex', flexDirection: 'column'}}>
                    <Detail>Deploy smart contracts for ERC-721/1155 NFTs</Detail>
                    <Detail>Convert existing assets to NFTs</Detail>
                    <Detail>Supports the latest royalty protocol EIP-2981 & chain upgrades anytime</Detail>
                
                </div>
            }
            {props.active == 'Fetch & Update' && <div style={{display:'flex', flexDirection: 'column'}}>
                    <Detail>Deploy smart contracts for ERC-721/1155 NFTs</Detail>
                    <Detail>Convert existing assets to NFTs</Detail>
                    <Detail>Supports the latest royalty protocol EIP-2981 & chain upgrades anytime</Detail>
                
                </div>
            }
            {props.active == 'Analytics' && <div style={{display:'flex', flexDirection: 'column'}}>
                    <Detail>Deploy smart contracts for ERC-721/1155 NFTs</Detail>
                    <Detail>Convert existing assets to NFTs</Detail>
                    <Detail>Supports the latest royalty protocol EIP-2981 & chain upgrades anytime</Detail>
                
                </div>
            }
        </div>
    );
}

export default Tabs;
