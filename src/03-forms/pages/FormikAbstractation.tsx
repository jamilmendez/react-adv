import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput, MySelect, MyCheckbox } from '../components'

import '../styles/styles.css';

export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={( values ) => {
                    console.log( values );
                    
                }}
                validationSchema={ Yup.object({
                    firstName: Yup.string()
                                    .max(15, 'Debe tener 15 caracteres o menos')
                                    .required('Requerido'),
                    lastName: Yup.string()
                                    .max(10, 'Debe tener 10 caracteres o menos')
                                    .required('Requerido'),
                    email: Yup.string()
                                    .email('Formato de correo inválido')
                                    .required('Requerido'),
                    terms: Yup.boolean()
                                    .oneOf([true], 'Debe aceptar las condiciones'),
                    jobType: Yup.string()
                                    .notOneOf(['it-jr'], 'Esta opción no es permitida')
                                    .required('Requerido')
                })}
            >
                { ( formik ) => (
                    <Form>
                        <MyTextInput 
                            label={"First Name"}
                            name={"firstName"}
                            placeholder="Jamil"
                        />
                        
                        <MyTextInput 
                            label={"Last Name"}
                            name={"lastName"}
                            placeholder="Méndez"
                        />
        
                        <MyTextInput 
                            label={"Email Address"}
                            name={"email"}
                            placeholder="Jamil@demo.com"
                            type="email"
                        />

                        <MySelect name='jobType' label='Job Type'>
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Jr.</option>
                        </MySelect>

                        <MyCheckbox label="Terms & Conditions" name="terms" />
        
                        <button type="submit">Submit</button>
    
                    </Form>
                )}

            </Formik>

        </div>
    )
}
