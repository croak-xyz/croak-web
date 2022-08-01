import styled from 'styled-components';
import CroakButton from './CroakButton';

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
  font-style: normal;
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

const Navigation: any = ({ active, onSelect, ...props }: any) => {
  return (
    <Wrapper>
      <Nav>
        <Title className={'hover'}>Croak</Title>
      </Nav>
      <Nav>
        <Mail className={'hover'}>help@croak.xyz</Mail>
        <SubTitle className={'hover'}>Discord</SubTitle>
        <SubTitle className={'hover'}>Pricing</SubTitle>
        <SubTitle className={'hover'}>View Docs</SubTitle>
        <CroakButton style={{marginLeft: 28}} type={'white'} onClick={() => {}} title='Sign In' />
        <CroakButton style={{marginLeft: 28,}} type={'green'} onClick={() => {}} title='Get free API key' />
      </Nav>
    </Wrapper>
    
  )
}

export default Navigation
