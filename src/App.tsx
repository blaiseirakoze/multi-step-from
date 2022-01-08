import React from 'react';
import './App.css';
import { Formik } from "formik"
import { Button, TextField } from '@mui/material';
import * as yup from "yup";
import InputField from './InputFIeld';
import MultiStepForm, { FormStep } from './MultiStepForm';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('invalid email').required('Email is required')
})

function App()
{
  return (
    <div className="App">
      <header className="App-header">
        <MultiStepForm
          initialValues={{
            name: "",
            email: "",
            street: "",
            country: ""
          }}
          onSubmit={values =>
          {
            alert(JSON.stringify(values, null, 2))
          }}
        >
          <FormStep
            stepName="Person"
            onSubmit={() => console.log("step 1")}
            validationSchema={validationSchema} >
            <InputField
              name='name'
              label='Name'
            />
            <InputField
              name='email'
              label='email'
            />
          </FormStep>
          <FormStep
            stepName="Address"
            onSubmit={() => console.log("step2")}
            validationSchema={yup.object({
              street: yup.string().required("Street is required"),
              country: yup.string().required("Country is required")
            })} >
            <InputField
              name='street'
              label='Street'
            />
            <InputField
              name='country'
              label='Country'
            />
          </FormStep>
        </MultiStepForm>
      </header>
    </div>
  );
}

export default App;


