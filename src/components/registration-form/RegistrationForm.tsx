
import { Formik, Form, Field } from 'formik';
import {
    TextField,
    Button,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Typography
} from '@mui/material';
import * as Yup from 'yup';
import { GroupRadio, StyledForm, Wrapper } from './RegistarationForm.styled';
import {  useMutation, useQueryClient } from '@tanstack/react-query';
import { addEventParticipant } from '../../services/eventsApi';
import { EventParticipant } from '../../types/types';
import { FC } from 'react';

const RegistrationForm:FC<string> = ({itemId}) => {

    const queryClient = useQueryClient();

    const { mutateAsync, isPending } = useMutation({
       mutationKey: ['partisipant', itemId],
    mutationFn: (data)=> addEventParticipant(itemId, data),
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
        fullName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        dateOfBirth: Yup.date().required('Required').nullable(),
        info: Yup.string().required('Required'),
    });

    const handleSubmit = ( values: EventParticipant) => {
        mutateAsync(itemId, values );
    };
// (values) => {
//         mutation.mutate({ id: itemId, data: values });
//       }}
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ values, handleChange, handleBlur, touched, errors }) => (
                <Wrapper>
                      <StyledForm>
                    <Typography variant="h4" gutterBottom>
                        Registration Form
                    </Typography>

                    
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
                        
                            <Field
                                name="dateOfBirth"
                                as={TextField}
                                label="Date of Birth"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dateOfBirth}
                                error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
                                helperText={touched.dateOfBirth && errors.dateOfBirth}
                            />
                       
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
                       
                            <Button type="submit" variant="contained" color="primary">
                                Register
                            </Button>
                </StyledForm>
                </Wrapper>
            )}
        </Formik>
    );
};

export default RegistrationForm;
