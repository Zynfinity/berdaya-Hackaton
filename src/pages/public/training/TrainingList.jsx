import { Box, ButtonGroup, Card, CardBody, CardFooter, Flex, FormControl, FormLabel, Grid, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import ButtonHref from '../../../components/Button/ButtonHref';

const TrainingList = () => {
  return (
    <Box>
      <HStack mt="16" justifyContent="space-between" alignItems="start">
        <VStack alignItems="start">
          <Text fontSize="2xl" letterSpacing="2px" fontWeight="semibold">PELATIHAN</Text>
        </VStack>
        <ButtonHref href="/training/manage">KELOLA</ButtonHref>
      </HStack>
      <Stack mt="16">
        <FormControl variant="floating" id="first-name">
          <Input placeholder=" " w={{ base: '100%' }} />
          <FormLabel color="gray">Cari Pelatihan</FormLabel>
        </FormControl>
        <Flex mt="10">
          <Grid spacing={4} templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }} gap="10">
            <Card maxW='sm' shadow="lg">
              <CardBody>
                <Image
                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Belajar Dasar Crypto</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <ButtonHref href="/training/id">Pelajari</ButtonHref>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='sm' shadow="lg">
              <CardBody>
                <Image
                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Belajar Dasar Crypto</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <ButtonHref href="/training/id">Pelajari</ButtonHref>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='sm' shadow="lg">
              <CardBody>
                <Image
                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Belajar Dasar Crypto</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <ButtonHref href="/training/id">Pelajari</ButtonHref>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='sm' shadow="lg">
              <CardBody>
                <Image
                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Belajar Dasar Crypto</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <ButtonHref href="/training/id">Pelajari</ButtonHref>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Grid>
        </Flex>
      </Stack>
    </Box>
  )
}

export default TrainingList;