import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

// eslint-disable-next-line react/prop-types
const GuestLayout = ({ children }) => {
  return (
    <>
      <Box pb="20">
        <Navbar />
        <Box px={{ base: "18", sm: "18", md: "20", xl: "56" }}>
          {children}
        </Box>
      </Box>
    </>
  )
}

export default GuestLayout;