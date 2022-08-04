import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/Navigation';
import styled from 'styled-components';
import GreenBanner from '../components/Homepage/GreenBanner';
import Footer from '../components/Footer';
import MainTabs from '../components/Homepage/MainTabs';
import { useState } from 'react';
import Pricingbox from '../components/Pricing/Pricingbox';
import MarketplaceData from '../components/Pricing/MarketplaceData';
import NFTdata from '../components/Pricing/NFTdata';
import WalletData from '../components/Pricing/WalletData';


const Mobile = styled.div`
  display: none;
  @media only screen and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const Desktop = styled.div`
  display: none;
  @media (min-device-width: 481px) {
    display: flex;
    flex-direction: column;
  }
`;

const Header = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 99.1%;
    /* or 71px */

    text-align: center;
    letter-spacing: -0.03em;

    color: #000000;
    
`;

const Pricing: NextPage = () => {
  const [active, setActive] = useState('nft');

  return (
    <div>
      <Head>
        <title>Pricing | Croak: Onboard web2 players to your web3 game</title>
        <meta name="description" content="Wallet and easy to use APIs for web3, NFTs" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Desktop>
        <div style={{padding: '0 10em', background: 'transparent', paddingBottom: 42}}>
          <Navigation />           
        </div>

        {/* Page Content start */}

        <Header>Pricing</Header>

        <div style={{display: 'flex', justifyContent: 'center', paddingTop: 42, paddingBottom: 55}}>
            <MainTabs setActive={setActive} active={active} />            
        </div>

        {active == 'nft' && <>
          <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Pricingbox title={'Free'} subtitle={false} type={'free'} />
              <Pricingbox title={'$49.90/mo'} subtitle={'Everything in Free, plus:'} type={'paid'} />
              <Pricingbox title={'Custom'} subtitle={'Everything in $49.90/mo, plus:'} type={'custom'} />

                
          </div>
          <div>
            <NFTdata />
          </div>
        </>
        }

        {active == 'marketplace' && <>
          <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <MarketplaceData />
                
          </div>
          
        </>
        }

      {active == 'wallet' && <>
          <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <WalletData />
                
          </div>
          
        </>
        }
        {/* Page Content end */}

        <div 
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                padding: '0 10rem',
                paddingTop: 60,
                paddingBottom: 40,
                flexDirection: 'column'
          }}>
            <GreenBanner />
            <Footer />
        </div>    
      </Desktop>

      <Mobile>
        
        <Navigation />

        {/* Page Content start */}

        <div style={{display: 'flex', justifyContent: 'center', paddingTop: 42, paddingBottom: 55}}>
          <MainTabs setActive={setActive} active={active} />
        </div>

        {/* Page Content end */}

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          padding: '0 16px',
          paddingTop: 60,
          paddingBottom: 40,
          flexDirection: 'column'
          }}>
           
            <br></br>
            <br></br>
            <GreenBanner />

            <Footer />
        </div>
      </Mobile>
    </div>
  )
}

export default Pricing
