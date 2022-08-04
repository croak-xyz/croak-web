import styled from 'styled-components';
import Horizontal from '../FlexComponents/Horizontal';
import SpaceBetween from '../FlexComponents/SpaceBetween';
import Image from 'next/Image';
import copy from '../../assets/copy.svg';
import Prism from "prismjs";
import { useEffect, useState } from "react";
import CroakButton from '../CroakButton';


interface Props {
    active: any;
  }

const Tab: any = styled.div<Props>`
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    /* identical to box height */

    letter-spacing: -0.013em;

    color: ${props => props.active ? '#181818' : '#181818'};
    opacity: ${props => props.active ? '1' : '0.4'};

    background: ${props => props.active ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.04)), #FFFFFF': 'background: linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)), #FFFFFF'};
    padding: 9px 20px;
`;

const Shell = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 8px 10px rgba(5, 8, 34, 0.04);
    border-radius:  0px 0px 11.6795px 11.6795px;
    padding: 19px 16px;
    box-shadow: 0px 5.119400978088379px 6.3992509841918945px 0px rgba(5, 8, 34, 0.04);

`;



const Code = ({ code, language }: any) => {
    useEffect(() => {
      Prism.highlightAll();
    }, []);
    return (
      <div className="code">
        <pre style={{background: 'transparent'}} className="line-numbers">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    );
  }

  const JSCode = `// Turn anything into an NFT with a single API call
  
  curl --request POST 
  --url https://api.nftport.xyz/v0/mints/easy/urls
  --header 'Authorization: Your API Key'
  --data'{ 
       "chain": "ethereum", 
       "name": "Space Shipping",
       "description": "Spaceship on Mars",
       "file_url": "https://ipfs.io/ipfs",
       "mint_to_address": "0x5FDd0881Ef28"
    }'
  `;

  
const Terminal: any = ({ active, onSelect, ...props }: any) => {
    const [tab, setTab] = useState('curl');

  return (
    <div style={{flex: 1, display: 'flex', flexDirection: 'column', marginLeft: props.mobile ? 0 :65, marginTop: 40}}>
        <SpaceBetween direction={'row'}>
            <Horizontal justify={'flex-start'}>
                <Tab onClick={() => setTab('curl')} className='hover' style={{borderTopLeftRadius: 12}} active={tab == 'curl'}>curl</Tab>
                <Tab onClick={() => setTab('node')} className='hover' style={{borderTopRightRadius: 12}} active={tab == 'node'}>node</Tab>
            </Horizontal>
            <Tab className='hover' active={false}>
                <Image alt='copy-icon' src={copy} />
            </Tab>
        </SpaceBetween>
        <Shell>
            <Code code={JSCode} language="javascript" />
        </Shell>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <CroakButton style={{marginLeft: 28, width: 141, position: 'relative', bottom: 20}} type='green' title='View docs >'/>        
        </div>
    </div>    
  );
}

export default Terminal
