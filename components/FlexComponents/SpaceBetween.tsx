
const SpaceBetween: any = ({...props }: any) => {
  return (
    <div 
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: props.direction,
        ...props.style
        }}>
      {props.children}
    </div>        
  );
}

export default SpaceBetween
