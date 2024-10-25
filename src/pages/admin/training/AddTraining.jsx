import { Box, Button, Flex, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea, VStack } from '@chakra-ui/react';

const AddTraining = () => {
  return (
    <Box>
      <HStack mt="16" justifyContent="space-between" alignItems="start">
        <VStack alignItems="start">
          <Text fontSize="2xl" letterSpacing="2px" fontWeight="semibold">TAMBAH PELATIHAN</Text>
          <Text>Tambahkan modul pelatihan</Text>
        </VStack>
      </HStack>
      <HStack mt="10" bg="white.2" p="4" rounded="md" alignItems="start" gap="10" shadow="md">
        <Stack width={{ base: "100%", md: "50%" }} gap="10">
          <FormControl variant="floating" id="modul-title">
            <Input placeholder=" " w={{ base: '100%' }} />
            <FormLabel color="gray">Judul Modul</FormLabel>
          </FormControl>
          <FormControl variant="floating" id="modul-desc">
            <Textarea />
            <FormLabel color="gray">Deskripsi Modul</FormLabel>
          </FormControl>
        </Stack>
        <Stack width={{ base: "100%", md: "50%" }} alignItems="end">
          <FormControl variant="floating" id="modul-title">
            <Flex height="160px" border="1px" borderColor="gray.300" rounded="md" alignItems="center" justifyContent="center">
              <Input type='file' placeholder=" " width="fit-content" border="0" />
            </Flex>
            {/* <FormLabel color="gray">Thumbnail</FormLabel> */}
          </FormControl>
          <Button mt="5" fontSize="xs" width="fit-content">TAMBAH</Button>
        </Stack>
      </HStack>
    </Box >
  )
}

export default AddTraining;