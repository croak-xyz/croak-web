import styled from 'styled-components';
import CroakButton from './CroakButton';
import SpaceBetween from './FlexComponents/SpaceBetween';
import hamburger from '../assets/hamburger.svg';
import Image from 'next/image';
import { useState } from 'react';
import Modal from 'rsuite/Modal';
import twitter from '../assets/twitter.svg';
import discord from '../assets/discord.svg';
import github from '../assets/github.svg';
import Link from 'next/link';
import croak from '../assets/images/croak.png';

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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding-top: 28px;
`;


const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
`;

const Title = styled.div`
  font-family: 'SF Pro Display bold';
  font-style: bold;
  font-weight: 900;
  font-size: 23.1777px;
  line-height: 28px;
  /* identical to box height */

  letter-spacing: -0.01em;
  text-transform: uppercase;

  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Graphik';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.013em;

  color: #000000;
  margin-left: 28px;
`;

const Mail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Graphik';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.013em;

  color: #000000;

  opacity: 0.4;
`;


const MobileTitle = styled.div`
  font-family: 'Graphik';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 35px;
  letter-spacing: -0.02em;

  color: #000000;
  margin-bottom: 56px;
`;

const Navigation: any = ({ active, onSelect, ...props }: any) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Mobile>
        <Modal style={{margin: 0,}} size={'full'} open={showModal} onClose={handleClose}>
          <div style={{}}>

            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <Image onClick={() => handleClose()} src={hamburger} alt='close modal icon' />
            </div>

            <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column'}}>
              <Link href='/'><MobileTitle style={{marginTop: 50, textAlign: 'center'}}>Home</MobileTitle></Link>
              <Link href='/pricing'><MobileTitle style={{textAlign: 'center'}}>Pricing</MobileTitle></Link>
              <Link href='https://glip.readme.io'><MobileTitle style={{textAlign: 'center'}}>View docs</MobileTitle></Link>
            </div>
                        
            <div style={{display: 'flex', marginTop: 75, justifyContent: 'center', alignContent: 'center', marginBottom: 46}}>
                <Link href=''>
                    <div style={{marginLeft: 18}} >
                        <Image src={twitter} alt='twitter page link'  />
                    </div>
                </Link>
                <Link href=''>
                    <div style={{marginLeft: 18}} >
                        <Image src={github} alt='github page link'  />
                    </div>
                </Link>
                <Link href=''>
                    <div style={{marginLeft: 18}} >
                        <Image src={discord} alt='discord page link' />
                    </div>
                </Link>                                        
            </div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
              <CroakButton style={{marginLeft: 0}} type={'white'} onClick={() => {}} title='Sign In' />
              <CroakButton style={{marginLeft: 0, marginTop: 12}} type={'green'} onClick={() => {}} title='Get free API key' />            
            </div>
          </div>
        </Modal>
        <SpaceBetween direction={'row'} style={{paddingLeft: 16, paddingRight: 16, marginTop: 15}}>
          <Link href='/'>
            <div style={{display: 'flex'}}>
              <div style={{width: 34, display: 'flex', justifyContent: 'center',}}><Image src={croak} alt='Croak logo' /></div>
              <Title style={{marginLeft: 6}} className='hover'>CROAK</Title>
            </div>
          </Link>
          <Image src={hamburger} onClick={() => handleOpen()} alt='menu icon' />
        </SpaceBetween>
      </Mobile>
      <Desktop>
        <Wrapper>
          <Nav>
            <Link href='/'>
              <div style={{display: 'flex'}}>
                <div style={{width: 34, display: 'flex', justifyContent: 'center',}}><Image src={croak} alt='Croak logo' /></div>
                <Title style={{marginLeft: 6}} className='hover'>CROAK</Title>
              </div>
            </Link>
          </Nav>
          <Nav>
            <Link href=''><Mail className={'hover'}>help@croak.xyz</Mail></Link>
            <Link href=''><SubTitle className={'hover'}>Discord</SubTitle></Link>
            <Link href='/pricing'><SubTitle className={'hover'}>Pricing</SubTitle></Link>
            <Link href='https://glip.readme.io'><SubTitle className={'hover'}>View Docs</SubTitle></Link>
            <Link href='/login'><CroakButton style={{marginLeft: 28}} type={'white'} onClick={() => {}} title='Sign In' /></Link>
            <Link href='/sign-up'><CroakButton style={{marginLeft: 28,}} type={'green'} onClick={() => {}} title='Get free API key' /></Link>
          </Nav>
        </Wrapper>
      </Desktop>
    </>
    
  )
}

export default Navigation
