import styled from "styled-components";
import equals from '../../assets/equals.svg';
import Image from "next/image";
import CroakButton from "../CroakButton";

const Title = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 900;
    font-size: 54px;
    line-height: 99.1%;
    /* identical to box height, or 54px */

    text-align: center;
    letter-spacing: -0.03em;

    color: #000000;
    margin-bottom: 22px;
`;

const SubTitle = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 135%;
    /* or 24px */

    text-align: center;
    letter-spacing: -0.02em;

    color: #000000;
    margin-bottom: 33px;

`;

const Text = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 135%;
    /* or 24px */

    text-align: center;
    letter-spacing: -0.02em;

    color: #000000;

`;

const Price = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 50px;
    /* identical to box height, or 156% */

    text-align: center;
    letter-spacing: -0.014em;

    color: #000000;
`;

const Purple = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 50px;
    /* identical to box height, or 139% */

    text-align: center;
    letter-spacing: -0.014em;

    color: #5351CC;
`;


const Grey = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 135%;
    /* or 24px */

    text-align: center;
    letter-spacing: -0.02em;

    color: #BDBDD2;
`;

const WhiteWrapper = styled.div`
    background: white;
    border-radius: 12px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    margin: 18px;
    width: 100%;
    padding-left: 52px;
    padding-right: 52px;
    min-width: 390px;

`;

const MarketplaceData: any = ({...props }: any) => {
    
    return (
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          flexDirection: 'column',
          background: '#FBFBFF',
          color: 'black',
          borderRadius: 12,
          border: '1px solid #EDEDFF',
          padding: 55,
        }}>
          <Title>We take <span style={{color: '#5351CC'}}>10%</span> of your fees</Title>
          <SubTitle>Pro Plans are billed monthly according <br></br>to your monthly active user size</SubTitle>

          <div
            style={{
                display: 'flex',
                justifyContent: 'space-evenly'
            }}
          >
              <WhiteWrapper>
                  <div style={{borderBottom: '1px solid rgba(237, 237, 255, 1)', paddingBottom: 20}}>
                    <Text>Monthly Sales</Text>
                    <Price style={{marginTop: 15}}>$10,000</Price>
                  </div>
                  <Text style={{paddingTop: 25, marginBottom: 18}}>Marketplace fees</Text>
                  <Price>5%</Price>
              </WhiteWrapper>
              <Image src={equals} alt='equals icon' />
              <div style={{display: 'flex', width: '100%', flexDirection: 'column'}}>
                  <WhiteWrapper>
                      <Text>How much we will take</Text>
                      <Purple style={{marginTop: 38, marginBottom: 38}}>$50</Purple>
                      <Grey>10% of 5% of $10,000</Grey>
                  </WhiteWrapper>
                  <CroakButton type={'purple'} style={{width: '100%', margin: 18}} title={'Get Free API key'} />
              </div>

          </div>
      </div>        
    );
  }
  
  export default MarketplaceData
  