import styled from "styled-components";
import { Form } from 'formik';
import { Typography } from "@mui/material";


export const Wrapper = styled.div`
    display:flex;
    margin: 60px 0;
    text-align: center;
    justify-content: center;
`

export const Text = styled.p`
    color: blue;
    font-size: 16px;
`

export const Title = styled(Typography)`
    color: var(--title-color);
    font-size: 30px;
    font-weight: 600;
`


export const StyledForm = styled(Form)`
    display: flex;
    width: 500px;
    flex-direction: column;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 30px;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

`

export const GroupRadio = styled.div`
    display: flex;
    gap: 15px;
`


