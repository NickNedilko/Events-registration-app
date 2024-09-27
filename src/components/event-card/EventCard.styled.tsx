import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.li`
    width: 400px;
    min-height: 230px;
    padding: 8px;
    border-radius: 8px;
    background-color: var(--bgd-card-color);
   

    @media screen and (min-width: 768px) {
        
        padding: 10px;
    }

    @media screen and (min-width: 1280px) {
     
        padding: 16px;   
    }`


export const Title = styled.h2`
    font-weight: 500;
    text-align: center;
    margin-bottom: 15px;
    text-transform: uppercase;
    font-size: 16px;
    color: var(--card-title-color);

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 20px;
    }
`

export const Text = styled.p`
    font-size: 16px;
    color: antiquewhite;
    margin-bottom: 10px;
` 

export const SubTitle = styled.span`
font-weight: 800;
margin-right: 8px;
font-size: 18px;
color: black
`

export const LinkWrapper = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
`

export const StyledLink = styled(Link)`
    font-size: 18px;
    color: antiquewhite;
    &:hover{
        color: #edf12d;
    }
`