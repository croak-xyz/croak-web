import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import MainTabs from '../components/Homepage/MainTabs';
import NoBullshit from '../components/Homepage/NoBullshit';
import Tabs from '../components/Homepage/Tags';
import Navigation from '../components/Navigation';
import Terminal from '../components/Homepage/Terminal';
import styled from 'styled-components';
import FeaturesCards from '../components/Homepage/FeaturesCards';
import GreenBanner from '../components/Homepage/GreenBanner';
import Footer from '../components/Footer';
import frog from '../assets/images/main-frog.svg';
import glip from '../assets/glip.svg';
import hashed from '../assets/hashed.svg';
import winzo from '../assets/winzo.svg';
import polygon from '../assets/polygon.svg';
import Image from 'next/image';

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

const TrustTitle = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
    color: #C6C6C6;
`;

const Home: NextPage = () => {
  const [items, setItems] = useState(['Deploy Contracts', 'Universal Listing', 'Mint & Airdrop', 'Fetch & Update', 'Analytics']);
  const [active, setActive] = useState('Deploy Contracts');

  return (
    <div>
      <Head>
        <title>Croak: No bullshit web3 APIs</title>
        <meta name="description" content="Easy to use APIs for web3, NFTs" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Desktop>
        <div style={{padding: '0 10em', background: '#FAFAFA', paddingBottom: 42}}>
          <Navigation />      
          
          <div style={{display: 'flex', alignContent: 'center', justifyContent: 'space-between', marginTop: 60, width: '100%'}}>
            <NoBullshit justify={'flex-start'} />
            <Image src={frog} alt='croak frog with ethereum' />
          </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', paddingTop: 42, paddingBottom: 55}}>
          {/* <MainTabs /> */}
          <MainTabs />
        </div>

        <div style={{
          padding: '0 10em',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          width: '100%',
          paddingBottom: 76,
          borderBottom: '1px solid rgba(236,236,236,0.4)'
          }}>
              <Tabs items={items} active={active} setActive={setActive} />
              <Terminal active={'curl'} />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          padding: '0 10rem',
          paddingTop: 60,
          paddingBottom: 40,
          flexDirection: 'column'
          }}>
            <TrustTitle>TRUSTED by DAPPS, GAMES, FUNDS, CHAINS</TrustTitle>

            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', justifyItems: 'center', marginTop: 45}}>
              <div>
                <Image src={polygon} alt='polygon logo'/>
              </div>
              <div style={{marginLeft: 45}}>
                 <Image src={winzo} alt='winzo logo'/>
              </div>
              <div style={{marginLeft: 45}}>
                 <Image src={hashed} alt='hashed logo'/>
              </div>
              <div style={{marginLeft: 45}}>
                 <Image src={glip} alt='glip logo'/>
              </div>                                         
            </div>
            <FeaturesCards />
            <GreenBanner />
            <Footer />
        </div>
      </Desktop>

      <Mobile>
        
        <Navigation />    

        <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: 60, width: '100%', flexDirection: 'column'}}>
          <NoBullshit justify={'center'} mobile={true} />
          <Image src={frog} alt='croak frog with ethereum' />
        </div>

        <div style={{display: 'flex', justifyContent: 'center', paddingTop: 42, paddingBottom: 55}}>
          {/* <MainTabs /> */}
          <MainTabs />
        </div>

        <div style={{
          padding: '0 16px',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          width: '100%',
          paddingBottom: 76,
          borderBottom: '1px solid rgba(236,236,236,0.4)',
          flexDirection: 'column',
          }}>
              <Tabs items={items} active={active} setActive={setActive} />
              <Terminal active={'curl'} mobile={true} />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          padding: '0 16px',
          paddingTop: 60,
          paddingBottom: 40,
          flexDirection: 'column'
          }}>
            <TrustTitle>TRUSTED by DAPPS, GAMES, FUNDS, CHAINS</TrustTitle>

            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', justifyItems: 'center', marginBottom: 46}}>
              <div style={{marginLeft: 45, marginTop: 45}}>
                <Image src={polygon} alt='polygon logo'/>
              </div>
              <div style={{marginLeft: 45, marginTop: 45}}>
                 <Image src={winzo} alt='winzo logo'/>
              </div>
              <div style={{marginLeft: 45, marginTop: 45}}>
                 <Image src={hashed} alt='hashed logo'/>
              </div>
              <div style={{marginLeft: 45, marginTop: 45}}>
                 <Image src={glip} alt='glip logo'/>
              </div>                                         
            </div>

            <FeaturesCards />
            <br></br>
            <br></br>
            <GreenBanner />

            <Footer />
        </div>
      </Mobile>
    </div>
  )
}

export default Home
