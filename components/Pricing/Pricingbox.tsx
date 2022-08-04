import styled from "styled-components";
import grey from '../../assets/gray_tick.svg';
import green from '../../assets/green_tick.svg';
import Image from "next/image";
import CroakButton from "../CroakButton";

const Title = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 50px;
    /* identical to box height, or 156% */

    letter-spacing: -0.014em;

    color: #000000;
`;

const SubTitle = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    /* identical to box height, or 179% */

    letter-spacing: 0.01em;

    color: rgba(0, 0, 0, 0.5);
    margin-top: 20px;

`;

const List = styled.div`

  font-family: 'Graphik';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  /* identical to box height, or 179% */

  letter-spacing: 0.01em;

  color: #0C0C0C;
  margin-left: 10px;

`;


const data: any = {
  free: ['Access to NFT data', 'Create collections (limited size)', 'Mint 100 NFTs on demand'],
  paid: ['150,000 requests / mo for NFT data', 'Create unlimited size collections', 'Mint 500 NFTs on demand'],
  custom: ['Commited use discounts', 'Dedicated support', 'Pay in crypto', 'Custom feature requests']
};

const Pricingbox: any = ({...props }: any) => {
    let bg = 'white';
    let border = '1px solid rgba(230, 230, 230, 1)'
    let button: any;
    let list: any = data[props.type].map((item: any, index: any) => {
      return (
        <>
        {props.type == 'free' && <div style={{display: 'flex', marginTop: 5, marginBottom: 5}}> <Image src={grey} alt='grey tick icon' /> <List>{item}</List></div>}
        {props.type != 'free' && <div style={{display: 'flex', marginTop: 5, marginBottom: 5}}> <Image src={green} alt='green tick icon' /> <List>{item}</List></div>}
        </>
      )
    });
    if(props.type == 'free') {      
      button = <CroakButton style={{marginLeft: 0}} type={'white'} onClick={() => {}} title='Get free API Key' />
    }
    if(props.type == 'paid') {
      bg = 'rgba(22, 248, 154, 0.08)';
      border = '1px solid transparent';
      button = <CroakButton style={{marginLeft: 0, marginTop: 86}} type={'green'} onClick={() => {}} title='Get API Key' />
    }
    if(props.type == 'custom') {
      button = <CroakButton style={{marginLeft: 0, marginTop: 86}} type={'white'} onClick={() => {}} title='Contact us' />
    }
    return (
      <div 
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
          flexDirection: 'column',
          padding: '30px 16px',
          background: bg,
          color: 'black',
          borderRadius: 12,
          margin: 13,
          border,
          minWidth: 340
        }}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
            <div>
              <Title>{props.title}</Title>
              {props.subtitle && <SubTitle>{props.subtitle}</SubTitle>}
              {list}
            </div>

            {button}
          </div>
      </div>        
    );
  }
  
  export default Pricingbox
  