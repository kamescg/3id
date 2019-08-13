/* --- Global Dependencies --- */
import React from 'react';

/* --- Local Dependencies --- */
import { Box, Button, Field, Form, Heading, Paragraph } from 'atoms'
import { Error } from 'fields'

/* ------ Component ------ */
export default ({ values, handleSubmit, isSubmitting, ...props }) =>
isSubmitting ? <FormIsSubmitting/> :
<Form onSubmit={handleSubmit} style={{width: '100%'}} >

  {/* <label>Email <Error.default name="email" component="span" /></label> */}
  <Field type="text" name="email" placeholder='Email' value={values.email} mt={30} />
  <Error.default name="email" component="span" />
  {/* <label>Password <Error.default name="password" component="span" /></label> */}
  <Field type="password" name="password" placeholder='Password' value={values.password} mt={10}/>
  <Error.default name="password" component="span" />

  <Button type="submit" disabled={isSubmitting} mt={15} width={1}>
    Create Account
  </Button>
</Form>

const FormIsSubmitting = props =>
<Box>
  <Heading fontSize={[3]}>
    Recovering Account
  </Heading>
  <Paragraph fontSize={[1]}>
    Please check your email to reset the password to recover account.
  </Paragraph>
</Box>