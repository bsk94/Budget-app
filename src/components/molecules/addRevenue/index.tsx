import React from 'react';
import { Formik } from 'formik';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import { StyledForm } from '../../../shared/styles';

const AddRevenue = () => {
  const initialValues = {
    name: '',
    date: '',
    amount: ''
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}>
      {({ values, handleChange, isSubmitting }) => (
        <>
          <StyledForm>
            <h2>+ Add revenue</h2>
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
              placeholder=" ">
              name
            </Input>

            <Input
              type="date"
              name="date"
              onChange={handleChange}
              value={values.date}
              placeholder=" ">
              date
            </Input>

            <Input
              type="number"
              name="amount"
              onChange={handleChange}
              value={values.amount}
              placeholder=" ">
              amount
            </Input>

            <Button type="submit" className="formRev__btn--add" disabled={isSubmitting}>
              Add
            </Button>
          </StyledForm>
        </>
      )}
    </Formik>
  );
};

export default AddRevenue;
