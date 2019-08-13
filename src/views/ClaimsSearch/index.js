/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { connect } from 'react-redux';

/* --- Local Dependencies --- */
import { Box, Button, ButtonFlat, Heading, Flex, Span } from 'atoms'
import { MenuVerifiableCredentials } from 'views'
import { FormClaimsSearch } from 'forms'
import { VerifiableCredentialQuery } from 'containers'
/* --- React Component --- */
class OrganizationView extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "Claims Search",
      isLoading: true
    }
  }

  componentDidMount()
  {

  }
  
  /* Will Update */
  componentWillUpdate()
  {

  }

  /* Did Update */
  componentDidUpdate()
  {

  }

  /* Will Mount */
  componentWillUnmount()
  {

  }


  render(){
    return(
      <Flex column  height='100%'>
        <Flex align='center' between boxShadow={0} gradient='white' p={15}>
          <Heading color='turquoise' fontSize={[3,3,4]} fontWeight={300} mb={0} >
            {this.state.name}
          </Heading>
          <Box>
            
          </Box>
          <Box>
            <ButtonFlat palette='green'>Create Template</ButtonFlat>
          </Box>
        </Flex>

        <Flex between height='100%'>
          <Flex column height='100%' gradient='turquoise' p={15} width={[1,1,1,0.25]}>
            <FormClaimsSearch/>
          </Flex>
          <Flex  height='100%' width={[1,1,1,0.85]} p={25}>
            <Flex boxShadow={0} gradient='white' p={15} width={1}>
              <VerifiableCredentialQuery/>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    )
  }
}

/* -- Global State -- */
const mapStateToProps = (state, props) => ({

});

const mapDispatchToProps = (dispatch, props) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationView)