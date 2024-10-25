import { Box, Divider, FormControl, FormLabel, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const CitizenReport = () => {
  return (
    <Box>
      <HStack mt="16" justifyContent="space-between" alignItems="start">
        <VStack alignItems="start">
          <Text fontSize="2xl" letterSpacing="2px" fontWeight="semibold">LAPORAN WARGA</Text>
        </VStack>
      </HStack>
      <Stack mt="16">
        <FormControl variant="floating" id="first-name">
          <Input placeholder=" " w={{ base: '100%' }} />
          <FormLabel color="gray">Cari Laporan</FormLabel>
        </FormControl>
        <Stack mt="16" bg="white.2" rounded="md" p="4" gap="5">
          <Link to="/report/citizen/1">
            <HStack justifyContent="space-between">
              <HStack gap="6" alignItems="start">
                <Image rounded="md" src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' width="150px" aspectRatio={1 / 1} />
                <Stack>
                  <Text fontSize="lg">Laporan 1</Text>
                  <Text textColor="gray.500" fontSize="sm">Uploader</Text>
                  <Text fontSize="sm" textColor="gray.700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quaerat placeat quidem veniam pariatur sapiente quas cupiditate repellat ad adipisci rerum perferendis reiciendis doloremque molestias iure officiis, qui dolorum quo quos optio? Alias illum pariatur dicta amet, sequi necessitatibus excepturi!</Text>
                  <Text alignSelf="end" fontSize="sm" textColor="gray.500">02 Oktober 2024</Text>
                </Stack>
              </HStack>
            </HStack>
          </Link>
          <Divider />
          <Link to="/report/citizen/2">
            <HStack justifyContent="space-between">
              <HStack gap="6" alignItems="start">
                <Image rounded="md" src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' width="150px" aspectRatio={1 / 1} />
                <Stack>
                  <Text fontSize="lg">Laporan 2</Text>
                  <Text textColor="gray.500" fontSize="sm">Uploader</Text>
                  <Text fontSize="sm" textColor="gray.700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quaerat placeat quidem veniam pariatur sapiente quas cupiditate repellat ad adipisci rerum perferendis reiciendis doloremque molestias iure officiis, qui dolorum quo quos optio? Alias illum pariatur dicta amet, sequi necessitatibus excepturi!</Text>
                  <Text alignSelf="end" fontSize="sm" textColor="gray.500">04 Oktober 2024</Text>
                </Stack>
              </HStack>
            </HStack>
          </Link>
        </Stack>
      </Stack>
    </Box>
  )
}

export default CitizenReport;