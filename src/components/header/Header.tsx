
import {FC} from 'react';
import { SiteLogo } from '../logo/Logo';
import { HeaderStyled } from './Header.styled';





const Header:FC = () => {

  return (
    <HeaderStyled>
     <SiteLogo/>
    </HeaderStyled>
  )
}

export default Header