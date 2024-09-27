import { FormControl, InputLabel } from "@mui/material";
import { useField } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import { MydatePicker, Wrapper } from "./DatePicker.styled";
import { FC, HTMLProps } from "react";


interface MyDatePicker extends HTMLProps<HTMLDivElement> {
    label: string;

}

export const MyDatePicker:FC<MyDatePicker> = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props as string);

    return (
        <FormControl fullWidth variant="outlined" margin="normal">
            <Wrapper>
            <InputLabel>{label}</InputLabel>
           
            <MydatePicker
                selected={field.value}
                onChange={(date:any) => helpers.setValue(date)}
                dateFormat="MM-dd-yyyy"
                placeholderText="Enter your date of birth"
                isClearable
            />
            {meta.touched && meta.error ? (
                <div style={{ color: 'red' }}>{meta.error}</div>
            ) : null}
            </Wrapper>
        </FormControl>
    );
};