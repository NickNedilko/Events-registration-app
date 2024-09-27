
import { Formik, Field } from 'formik';
import {
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Typography,
    Button
} from '@mui/material';
import * as Yup from 'yup';
import { GroupRadio, StyledForm, Title, Wrapper } from './RegistarationForm.styled';
import {  useMutation, useQueryClient } from '@tanstack/react-query';
import { addEventParticipant } from '../../services/eventsApi';
import { EventParticipant } from '../../types/types';
import { FC } from 'react';
import {  ThreeDots } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { MyDatePicker } from '../date-piker/DatePiker';

const RegistrationForm:FC<any> = ({id}) => {
    const navigate = useNavigate()
    const queryClient = useQueryClient();

    const { mutateAsync, isPending } = useMutation({
    //    mutationKey: ['partisipant', itemId],
    mutationFn: addEventParticipant,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['companies'],
      });
    },
  });



    const initialValues = {
        fullName: '',
        email: '',
        dateOfBirth: '',
        info: '',
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Full name is required'),
        email: Yup.string().email('Invalid email format').required('E-mail is required'),
        dateOfBirth: Yup.date().required('Birth date is required').nullable(),
        info: Yup.string().required('required'),
    });

    const handleSubmit = ( values: EventParticipant) => {
        mutateAsync({ id, values });
        toast.success('You successfully registrated on this event')
        navigate('/events')
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ values, handleChange, handleBlur, touched, errors }) => (
                <Wrapper>
                      <StyledForm>
                    <Title variant="h4" gutterBottom>
                        Registration Form
                        </Title>
                            <Field
                                name="fullName"
                                as={TextField}
                                label="Full Name"
                                fullWidth
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.fullName}
                                error={touched.fullName && Boolean(errors.fullName)}
                                helperText={touched.fullName && errors.fullName}
                            /> 
                            <Field
                                name="email"
                                as={TextField}
                                label="Email"
                                type="email"
                                fullWidth
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />
                  <MyDatePicker name="dateOfBirth" label="Date of Birth" />
                       
                            <FormControl component="fieldset" error={touched.info && Boolean(errors.info)}>
                                <FormLabel component="legend">Where did you hear about this event?</FormLabel>
                                <RadioGroup
                                    name="info"
                                    value={values.info}
                                    onChange={handleChange}
                                >
                               <GroupRadio>
                                 <FormControlLabel value="Social media" control={<Radio />} label="Social media" />
                                    <FormControlLabel value="Friends"control={<Radio />} label="Friends" />
                                    <FormControlLabel value="Found myself" control={<Radio />} label="Found myself" />
                                   </GroupRadio>
                                </RadioGroup>
                                {touched.info && errors.info && (
                                    <Typography color="error">{errors.info}</Typography>
                                )}
                            </FormControl>
                       
                            <Button type="submit" variant="contained" color="primary" >
                                {isPending ? <ThreeDots
                                 visible={true}
                                 height="35"
                                 width="35"
                                 color="#f5f9f4"
                                 radius="20"
                                 ariaLabel="three-dots-loading"
                                 />: "Register"}
                            </Button>
                </StyledForm>
                </Wrapper>
            )}
        </Formik>
    );
};

export default RegistrationForm;
