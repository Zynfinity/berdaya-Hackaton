import { Box, Divider, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import ButtonHref from '../../../components/Button/ButtonHref';
const TrainingSubList = () => {
  return (
    <Box>
      <HStack mt="16" justifyContent="space-between" alignItems="start">
        <VStack alignItems="start">
          <Text fontSize="2xl" letterSpacing="2px" fontWeight="semibold">PELATIHAN</Text>
          <Text>Belajar Crypto</Text>
        </VStack>
        <ButtonHref href="/training/trainingid/new">Tambah Video</ButtonHref>
      </HStack>
      <Stack mt="16" bg="gray.50" rounded="md" p="4" gap="5">
        <HStack justifyContent="space-between">
          <HStack gap="6">
            <Image rounded="md" src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' width="80px" aspectRatio={1 / 1} />
            <Stack>
              <Text>Video Materi 1</Text>
              <Text textColor="gray.600">Deskripsi</Text>
            </Stack>
          </HStack>
          <ButtonHref href="/training/trainingid/videoid">TONTON</ButtonHref>
        </HStack>
        <Divider />
        <HStack justifyContent="space-between">
          <HStack gap="6">
            <Image rounded="md" src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' width="80px" aspectRatio={1 / 1} />
            <Stack>
              <Text>Video Materi 2</Text>
              <Text textColor="gray.600">Deskripsi</Text>
            </Stack>
          </HStack>
          <ButtonHref href="/training/trainingid/videoid">TONTON</ButtonHref>
        </HStack>
      </Stack>
    </Box>
  )
}

export default TrainingSubList