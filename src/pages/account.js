/* --- Global Dependencies --- */
import React from "react"
import { Link, Router } from '@reach/router'

/* --- Local Dependencies --- */
import { Box, Container, Flex, Heading, Paragraph, Span } from 'atoms'
import { FormAccountCreate, FormLogin } from 'forms'

import Layout from "components/layout"
import SEO from "components/seo"

const Register = props =>
<Flex>
  Register
</Flex>

const Recover = props =>
<Flex>
  Recover
</Flex>

const Account = () =>
<Flex gradient='blue' height='100vh'>
  
  <Flex column color='white' justify='space-between' width={[1,1,1, 0.4]} >
    <Box p={20}>
    <Heading fontSize={[1,1,2,3]} mb={0} level={1} ><Link to="/">Credentialize</Link></Heading>
    </Box>
    <Box px={50}>
      <Heading fontSize={[4,4,5]}>
        Welcome To Credentialize
      </Heading>
      <Paragraph fontSize={[2]} fontWeight={300}>
        Nulla lorem mauris, finibus in nisl sed, consequat volutpat elit. Maecenas blandit varius dui, non dapibus est fermentum nec. Aenean sed finibus velit. 
      </Paragraph>
    </Box>
    <Box p={20} textAlign='right'>
      <Flex between fontSize={1} width={200}>
        <Link to='/'>Privacy Policy</Link>
        <Link to='/legal'>Legal</Link>
        <Link to='contact'>Contact</Link>
      </Flex>
    </Box>
  </Flex>

  <Flex bg='white' column justify='space-between' width={[1,1,1, 0.6]} >
      <Box p={20} textAlign='right' width={1}>
        <Span fontSize={2} fontWeight={300}>Don't have an account yet? <Link to='/account/register'><Span color='blue' fontWeight={700}>Sign Up Today!</Span></Link></Span>
      </Box>
      <Flex width={520} mx='auto' >
      <Router style={{width: '100%'}}>
        <FormLogin path="/account" />
        <Register path="/account/register" />
        <Recover path="/account/recover" />
      </Router>
      </Flex>
      <Box p={20}>

      </Box>
    </Flex>

</Flex>


export default Account