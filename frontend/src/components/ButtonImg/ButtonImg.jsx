import * as styled from './ButttonImg.styled';

const ButtonImg = ({src, value, onClick, onMouseOver, onMouseLeave}) =>{

  return(
    <styled.ButtonImg value={value} onClick={onClick}>
      <img src={src} alt='button-img' 
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}/>
    </styled.ButtonImg>
  )
}

export default ButtonImg;
