import React from 'react';
import './App.css';
import { MenuItem } from '@mui/material';
import * as yup from "yup";
import InputField from './InputFIeld';
import SelectField from './SelectField';
import MultiStepForm, { FormStep } from './MultiStepForm';

const validationSchema = yup.object({
  name: yup.string().trim().required('Name is required'),
  email: yup.string().trim().email('invalid email').required('Email is required'),
  gender: yup.string().trim().required("Gender is required")
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
            gender: "",
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
              label='Email'
            />
            <SelectField
              name='gender'
              label='Gender'
            >
              <MenuItem value="">select</MenuItem>
              <MenuItem value="female">female</MenuItem>
              <MenuItem value="male">male</MenuItem>
            </SelectField>
          </FormStep>
          <FormStep
            stepName="Address"
            onSubmit={() => console.log("step2")}
            validationSchema={yup.object({
              street: yup.string().trim().required("Street is required"),
              country: yup.string().trim().required("Country is required")
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
    </div >
  );
}

export default App;


