import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'

function AccountSettings() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel className='dd'>First Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Mahdi"  />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel  className='hh'>Last Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Fathian" />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel className='kk'>Phone Number</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="09765678354"
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel className='tt'>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="mahdi@gmail.com"
        />
      </FormControl>
      <FormControl id="city">
        <FormLabel className='uu'>City</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select city" className='vv'>
          <option value="california">ilam</option>
          <option value="washington">ghazvin</option>
          <option value="toronto">rasht</option>
          <option value="toronto">Tehran</option>
          <option value="newyork" selected >
             azarbayjan
     
          </option>
          <option value="london">gilan</option>
          <option value="netherland">Mashhad</option>
          <option value="poland">tabriz</option>
        </Select>
      </FormControl>
      <FormControl id="country">
        <FormLabel className='rr'><h1>Country</h1></FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select country" className='ee'>
          <option value="america" selected> 
            Iran
          </option>
          <option value="england">England</option>
          <option value="poland">Poland</option>
        </Select>
      </FormControl>
    </Grid>
  )
}

export default AccountSettings
















