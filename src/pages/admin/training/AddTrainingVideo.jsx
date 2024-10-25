import { Box, Button, FormControl, FormLabel, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react';
const AddTrainingVideo = () => {
  return (
    <Box>
      <HStack mt="16" justifyContent="space-between" alignItems="start">
        <VStack alignItems="start">
          <Text fontSize="2xl" letterSpacing="2px" fontWeight="semibold">TAMBAH VIDEO PELATIHAN</Text>
          <Text>Tambahkan video pelatihan</Text>
        </VStack>
      </HStack>
      <Stack mt="10" bg="white.2" p="4" rounded="md" alignItems="start" shadow="md">
        <HStack w="100%" gap="10">
          <FormControl variant="floating" id="video-title">
            <Input placeholder=" " w={{ base: '100%' }} />
            <FormLabel color="gray">Judul Modul</FormLabel>
          </FormControl>
          <FormControl variant="floating" id="video-url">
            <Input placeholder=" " w={{ base: '100%' }} />
            <FormLabel color="gray">Deskripsi Modul</FormLabel>
          </FormControl>
        </HStack>
        <Button mt="5" fontSize="xs" width="fit-content" alignSelf="end">TAMBAH</Button>
      </Stack>
    </Box >
  );
}

export default AddTrainingVideo;