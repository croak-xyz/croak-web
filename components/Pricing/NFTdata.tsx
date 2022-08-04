import styled from "styled-components";
import grey from '../../assets/gray_tick.svg';
import green from '../../assets/green_tick.svg';
import black from '../../assets/black_tick.svg';
import rectangle from '../../assets/rectangle.svg';
import Image from "next/image";
import CroakButton from "../CroakButton";
import { Index } from "react-virtualized";

const Header = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 900;
    font-size: 54px;
    line-height: 99.1%;
    text-align: center;
    letter-spacing: -0.03em;
    color: #000000;
    margin-bottom: 27px;
    text-align: center;
    margin-top: 72px;
`;

const Title = styled.div`
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 50px;
    letter-spacing: -0.014em;
    color: #5351CC;
    text-align: center;
    padding: 24px;
`;

const Text = styled.div`    
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.013em;
    color: #000000;
    text-align: center;
    padding: 24px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

const Subtitle = styled.div`  
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 50px;
    /* or 250% */

    display: flex;
    align-items: center;
    letter-spacing: -0.014em;
    justify-content: center;

    color: #000000;
    text-align: center;
    padding: 24px;
`;

const Table = styled.div`
    border-radius: 12px;
`;


const headerdata: any = {
    1: ['NFT Data', 'Free Plan', '$49.90/mo', 'Custom'],
    2: ['Minting on Ethereum', 'Free Plan', '$49.90/mo', 'Custom'],
    3: ['Minting on Polygon', 'Free Plan', '$49.90/mo', 'Custom'],
 };


 const data: any = {
     nft: [
         ['Monthly limit', '25,000 request/mo', '150,000 requests/mo', 'Custom'],
         ['Addtional Requests', false, '$0.001 / request', 'Custom'],
         ['Rate limit', '3 requests/sec', '10 requests/sec', 'Custom'],
         ['NFTs from ETH & Polygon', true, true, true],
         ['NFTs details & metadata', true, true, true],
         ['NFTs transactions', true, true, true],
         ['NFTs search', true, true, true],
     ],
     eth: [
         ['Deploy a contract', false, '$199/contract', 'Custom'],
         ['Update a contract', false, '$59/update', 'Custom'],
         ['Mint NFTs on demand', false, 'Upcoming', 'Upcoming'],
         ['FreeIPFS storage', true, true, true],
     ],
     polygon: [
        ['Deploy a contract', '5', '$15/mo', 'Custom'],
        ['Additional contract', false, '$2/update', 'Custom'],
        ['Collection size limit', 'Limited size (5,000)', 'Unlimited', 'Unlimited'],
     ],
 };

const HeaderRow = ({item}: any) => {
    return (
        <div className="purple-hover" style={{display: 'flex', justifyContent: 'space-between'}}>
            <Title style={{background: '#FBFBFF', minWidth: 273}}>{item[0]}</Title>
            <Subtitle style={{minWidth: 273}}>{item[1]}</Subtitle>
            <Subtitle style={{minWidth: 273}}>{item[2]}</Subtitle>
            <Subtitle style={{minWidth: 273}}>{item[3]}</Subtitle>
        </div>
    );
 };


 const Row = ({item}: any) => {
     let item1: any = <Text style={{minWidth: 273}}>{item[1]}</Text>
     let item2: any = <Text style={{minWidth: 273}}>{item[2]}</Text>
     let item3: any = <Text style={{minWidth: 273}}>{item[3]}</Text>

     if(item[1] == true) item1 = <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', minWidth: 273}}><Image src={black} alt='black tick icon' /></div>
     if(item[1] == false) item1 = <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', minWidth: 273}}><Image src={rectangle} alt='rectangle tick icon' /></div>


     if(item[2] == true) item2 = <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', minWidth: 273}}><Image src={black} alt='black tick icon' /></div>
     if(item[2] == false) item2 = <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', minWidth: 273}}><Image src={rectangle} alt='rectangle tick icon' /></div>


     if(item[3] == true) item3 = <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', minWidth: 273}}><Image src={black} alt='black tick icon' /></div>
     if(item[3] == false) item3 = <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', minWidth: 273}}><Image src={rectangle} alt='rectangle tick icon' /></div>

    return (
        <div className="purple-hover" style={{display: 'flex', justifyContent: 'space-between'}}>
            <Text style={{background: '#FBFBFF', minWidth: 273}}>{item[0]}</Text>
            {item1}
            {item2}
            {item3}
        </div>
    );
 };

const NFTdata: any = ({...props }: any) => {
    const rows1: any = data.nft.map((item: any, index: any) => {
        return (<Row key={`row-nft-${index}`} item={item} />)
    });
    const rows2: any = data.eth.map((item: any, index: any) => {
        return (<Row key={`row-nft-${index}`} item={item} />)
    });
    const rows3: any = data.polygon.map((item: any, index: any) => {
        return (<Row key={`row-nft-${index}`} item={item} />)
    });
    return (
      <div style={{padding: '0 10rem'}}>
          <Header>Compare plans & features</Header>
          <Table>
              <HeaderRow item={headerdata[1]}/>
              {rows1}
              <HeaderRow item={headerdata[2]}/>
              {rows2}
              <HeaderRow item={headerdata[3]}/>
              {rows3}
          </Table>
      </div>
    );
  }
  
  export default NFTdata
  