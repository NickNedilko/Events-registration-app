import styled from "styled-components"

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

export const Text = styled.p`
    font-size: 16px;
    color: antiquewhite;
    margin-bottom: 10px;
` 

export const SubTitle = styled.span`
font-weight: 800;
margin-right: 8px;
font-size: 18px;
color: grey
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
`