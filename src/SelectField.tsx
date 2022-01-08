import React from "react";
import { TextField } from "@mui/material"
import { FieldConfig, useField } from "formik";

interface Props extends FieldConfig
{
    label: string
}

const SelectField = ({ label, ...props }: Props) =>
{
    const [field, meta] = useField(props);
    return (
        <TextField
            select
            fullWidth
            label={label}
            {...field}
            {...props}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
        >
            {props.children}
        </TextField>
    );
};

export default SelectField;
