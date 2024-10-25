import { Box } from '@chakra-ui/react';
import React from 'react'
import Navbar from '../components/Navbar';

const AdminLayout = ({ children }) => {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
    </>
  )
}

export default AdminLayout;