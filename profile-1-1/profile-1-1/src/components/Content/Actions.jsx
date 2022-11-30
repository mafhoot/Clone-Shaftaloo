import { Box, Button } from '@chakra-ui/react'
import "../../styles/index.css"
function Actions() {
  return (
    <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light" >
      <Button className='ww'>Update</Button>
    </Box>
  )
}

export default Actions
