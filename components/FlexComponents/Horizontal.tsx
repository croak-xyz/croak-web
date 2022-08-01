
const Horizontal: any = ({...props }: any) => {
    return (
      <div style={{display: 'flex', justifyContent: props.justify, alignContent: 'center', flexDirection: 'row'}}>
        {props.children}
      </div>        
    );
  }
  
  export default Horizontal
  