import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import ShareButton from '../../../components/Button/ShareButton';
const PostDetail = () => {
  return (
    <Box>
      <HStack mt="16" justifyContent="space-between" alignItems="start">
        <VStack alignItems="start" w="100%">
          <Box w="60%" bg="gray.300" rounded="md" alignSelf="center" aspectRatio={16 / 9}>IMAGE</Box>
          <HStack w="full" justifyContent="space-between">
            <Text fontSize="2xl" letterSpacing="2px" fontWeight="semibold">POSTINGAN 1</Text>
            <ShareButton />
          </HStack>
          <Text fontSize="sm" letterSpacing="2px" textColor="gray.600">By Uploader | 02 Oktober 2024</Text>
          <Text textAlign="justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero molestiae nostrum maxime. Asperiores culpa odit qui nobis quia totam nesciunt earum non aliquid eum necessitatibus unde, doloremque corporis nemo quod reiciendis voluptatum consequatur quidem sapiente consectetur aperiam laudantium recusandae impedit maxime. Reprehenderit ea dolores totam autem iste doloribus aut cumque odit cupiditate et fuga eum deserunt obcaecati velit quibusdam ipsam vel, vero, veniam enim sunt. Eligendi, quia expedita dolor necessitatibus commodi fugit nostrum minus, perferendis maxime aliquid veritatis repellendus dolorum atque enim praesentium doloribus! Quos, aperiam sapiente provident iusto quasi vero tempore voluptates deleniti delectus minima, magni ipsum! Enim, quibusdam!</Text>
        </VStack>
      </HStack>
    </Box>
  )
}

export default PostDetail;