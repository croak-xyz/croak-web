import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Graphik';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.013em;

  color: #000000;
`;

const CroakButton: any = ({...props }: any) => {
  let background: any = 'transparent';
  let border: any = '1px solid #E6E6E6';
  if(props.type == 'white') {
    background = '#fff';
    border = '1px solid #E6E6E6';
  }
  if(props.type == 'green') {
    background = 'linear-gradient(0deg, #16F89A, #16F89A),linear-gradient(0deg, #21D789, #21D789)';
    border = '1px solid #21D789'
  }
  return (
    <Button 
      style={{
        padding: '12px 18px',
        borderRadius: 12,
        background: background,
        border: border,
        ...props.style
      }}
      onClick={props.onClick}>
        {props.title}
    </Button>
  )
}

export default CroakButton;
