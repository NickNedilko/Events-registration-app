
import {FC} from 'react';
import { HeaderStyled } from './header.styled';
import { SiteLogo } from '../logo/Logo';





const Header:FC = () => {

  return (
    <HeaderStyled>
     <SiteLogo/>
    </HeaderStyled>
  )
}

export default Header