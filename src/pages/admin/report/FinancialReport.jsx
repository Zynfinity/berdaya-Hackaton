import { Box, HStack, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from '@chakra-ui/react';
const FinancialReport = () => {
  const danaMasuk = [{
    id: 1,
    sumberDana: 'Bank BNI',
    jumlah: '100.000.000',
    data: '02 Oktober 2024'
  }]
  return (
    <Box>
      <HStack mt="16" justifyContent="space-between" alignItems="start">
        <VStack alignItems="start" w="100%">
          <Text fontSize="2xl" letterSpacing="2px" fontWeight="semibold">LAPORAN KEUANGAN</Text>
          <Box w="full" shadow="md" border="1px" borderColor="gray.600" rounded="md">
            <HStack bg="green.2" w="full" rounded="md" p="2">
              <Text fontSize="lg" fontWeight="semibold" textColor="white">Laporan Dana Masuk</Text>
            </HStack>
            <Box p="6">
              <TableContainer border="1px" borderColor="gray.400" rounded="lg">
                <Table size='sm'>
                  <Thead>
                    <Tr>
                      <Th>No</Th>
                      <Th>Sumber Dana</Th>
                      <Th isNumeric>Jumlah (IDR)</Th>
                      <Th isNumeric>Data</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>feet</Td>
                      <Td>centimetres (cm)</Td>
                      <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                      <Td>yards</Td>
                      <Td>metres (m)</Td>
                      <Td isNumeric>0.91444</Td>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th>To convert</Th>
                      <Th>into</Th>
                      <Th isNumeric>multiply by</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </VStack>
      </HStack>
    </Box>
  )
}

export default FinancialReport;