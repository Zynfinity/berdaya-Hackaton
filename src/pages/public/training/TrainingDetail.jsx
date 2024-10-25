import { Box, Grid, HStack, Stack, Text, VStack } from '@chakra-ui/react';

const TrainingDetail = () => {
  return (
    <Box>
      <HStack mt="16" justifyContent="space-between" alignItems="start">
        <VStack alignItems="start">
          <Text fontSize="2xl" letterSpacing="2px" fontWeight="semibold">PELATIHAN</Text>
          <Text>Belajar Crypto</Text>
        </VStack>
      </HStack>
      <Stack mt="10">
        <Grid templateColumns={{ base: '1fr', lg: '4fr 1fr' }} w="100%" gap="10">
          <Box aspectRatio={16 / 9} bg="gray.200" rounded="md">Video</Box>
          <Box height="200px" bg="gray.200" rounded="md" w="100%">Playlist</Box>
        </Grid>
        <Box mt="5">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, tenetur quae. Atque nostrum nemo aliquam accusantium laboriosam? Consequatur dolorum quos sunt voluptatibus perferendis illum, deserunt nemo veritatis earum iusto praesentium?
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default TrainingDetail;