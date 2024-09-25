import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled.img`
    width: 150px;
    color: white;
    height: 80px;
`
export const StyledLink = styled(NavLink)`
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
    cursor: pointer;
    color: var(--text-header);

    &.active {
        color: var(--hover-color);
    }
    &:hover,
    &:focus {
        outline: none;
    }


    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 20px;
    }
`