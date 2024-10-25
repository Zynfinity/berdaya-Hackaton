import { Box, Button, Divider, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { MdDelete } from "react-icons/md";
import ButtonHref from '../../../components/Button/ButtonHref';

const ManageTraining = () => {
  return (
    <Box>
      <HStack mt="16" justifyContent="space-between" alignItems="start">
        <VStack alignItems="start">
          <Text fontSize="2xl" letterSpacing="2px" fontWeight="semibold">KELOLA PELATIHAN</Text>
          <Text>Tambahkan, edit dan hapus Materi pelatihan</Text>
        </VStack>
        <ButtonHref href="/training/new">Materi Baru</ButtonHref>
      </HStack>
      <Stack mt="16" bg="gray.50" rounded="md" p="4" gap="5">
        <HStack justifyContent="space-between">
          <HStack gap="6">
            <Image rounded="md" src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' width="100px" />
            <Stack>
              <Text>Materi 1</Text>
              <Text textColor="gray.600">Deskripsi 1</Text>
            </Stack>
          </HStack>
          <Button fontSize="sm" bg="red.500"><MdDelete size="20px" /></Button>
        </HStack>
        <Divider />
        <HStack justifyContent="space-between">
          <HStack gap="6">
            <Image rounded="md" src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' width="100px" />
            <Stack>
              <Text>Materi 1</Text>
              <Text textColor="gray.600">Deskripsi 1</Text>
            </Stack>
          </HStack>
          <Button fontSize="sm" bg="red.500"><MdDelete size="20px" /></Button>
        </HStack>
      </Stack>
    </Box>
  )
}

export default ManageTraining;