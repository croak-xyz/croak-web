import styled from 'styled-components';
import twitter from '../assets/twitter.svg';
import discord from '../assets/discord.svg';
import github from '../assets/github.svg';
import croak from '../assets/images/croak.png';
import Image from 'next/image';
import Link from 'next/link';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 37px;
`;



const Title = styled.div`
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 900;
    font-size: 18.7586px;
    line-height: 22px;
    letter-spacing: -0.01em;
    text-transform: uppercase;

    color: #000000;
`;

const TLink = styled.div`

    font-family: 'Graphik';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: -0.013em;

    color: #343433;
    margin-left: 24px;
`;

const Mobile = styled.div`
  display: none;
  @media only screen and (max-device-width: 480px) {
    display: block;
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

const Navigation: any = ({ active, onSelect, ...props }: any) => {
  return (
    <>
        <Mobile>

            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 30}}>
                <div>
                    <Link href='/'>
                        <div style={{display: 'flex'}}>
                            <div style={{width: 34, display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                                <Image src={croak} alt='Croak logo' />
                            </div>
                            <Title style={{marginLeft: 6}} className='hover'>CROAK</Title>
                        </div>
                    </Link>
                    <Link href='https://glip.readme.io'><TLink className='hover' style={{marginLeft: 0, marginTop: 32}}>View Docs</TLink></Link>
                    <Link href='/contact'><TLink className='hover' style={{marginLeft: 0, marginTop: 32}}>Contact us</TLink></Link>
                    <Link href='/terms'><TLink className='hover' style={{marginLeft: 0, marginTop: 32}}>Terms & Conditions</TLink></Link>
                    <Link href='/privacy'><TLink className='hover' style={{marginLeft: 0, marginTop: 32}}>Privacy Policy</TLink></Link>
                </div>
                <div style={{display: 'flex'}}>
                    <div style={{marginLeft: 18}} >
                        <Image src={twitter} alt='twitter page link'  />
                    </div>
                    <div style={{marginLeft: 18}}>
                        <Image src={github} alt='github page link'  />
                    </div>
                    <div style={{marginLeft: 18}}>
                        <Image src={discord} alt='discord page link' />
                    </div>                        
                </div>
            </div>

        </Mobile>

        <Desktop>

            <Wrapper>

                <Link href='/'>
                    <div style={{display: 'flex'}}>
                        <div style={{width: 34, display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                            <Image src={croak} alt='Croak logo' />
                        </div>
                        <Title style={{marginLeft: 6}} className='hover'>CROAK</Title>
                    </div>
                </Link>
            
                <div style={{display: 'flex'}}>
                    <Link href='https://glip.readme.io'><TLink className='hover'>View Docs</TLink></Link>
                    <Link href='/contact'><TLink className='hover'>Contact us</TLink></Link>
                    <Link href='/terms'><TLink className='hover'>Terms & Conditions</TLink></Link>
                    <Link href='/privacy'><TLink className='hover'>Privacy Policy</TLink></Link>
                </div>

                <div style={{display: 'flex'}}>
                    <Link href=''>
                        <div className='hover' style={{marginLeft: 18}} >
                            <Image src={twitter} alt='twitter page link'  />
                        </div>
                    </Link>
                    <Link href=''>
                        <div className='hover' style={{marginLeft: 18}} >
                            <Image src={github} alt='github page link'  />
                        </div>
                    </Link>
                    <Link href=''>
                        <div className='hover' style={{marginLeft: 18}} >
                            <Image src={discord} alt='discord page link' />
                        </div>
                    </Link>                                        
                </div>
            </Wrapper>
        </Desktop>
    </>    
  )
}

export default Navigation
