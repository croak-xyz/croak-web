import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/Navigation';
import styled from 'styled-components';
import GreenBanner from '../components/Homepage/GreenBanner';
import Footer from '../components/Footer';

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

const Login: NextPage = () => {
  

  return (
    <div>
      <Head>
        <title>Login | Croak: Onboard web2 players to your web3 game</title>
        <meta name="description" content="Wallet and easy to use APIs for web3, NFTs" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Desktop>
        <div style={{padding: '0 10em', background: '#FAFAFA', paddingBottom: 42}}>
          <Navigation />                    
        </div>

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

export default Login
