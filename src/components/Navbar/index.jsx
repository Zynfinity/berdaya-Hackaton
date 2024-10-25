import { Box, Button, Flex, HStack, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaChevronDown } from "react-icons/fa";
import logo from '../../assets/icons/berdaya2.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Box py="6" px={{ base: "18", sm: "18", md: "20", xl: "56" }} mb={"8"} backgroundColor="green">
      <Flex justifyContent={"space-between"} alignItems="center">
        <Link to="/" alignitems="center">
          <Image src={logo} />
        </Link>
        <HStack textColor="white" gap="6" fontSize="md">
          <Box px="4" py="2" rounded="lg" _hover={{ bg: "green.2" }}>
            <Link to="/">Beranda</Link>
          </Box>
          <Menu>
            <MenuButton

              as={Button}
              fontWeight="normal"
              rightIcon={<FaChevronDown />}
              backgroundColor="transparent"
              textColor="white"
              _hover={{ bg: 'green.2' }}
              _expanded={{ bg: 'green.2' }}
            >
              Layanan
            </MenuButton>
            <MenuList textColor="black">
              <MenuItem><Link to="/training">Pelatihan</Link></MenuItem>
              <MenuItem><Link to="/posts">Postingan</Link></MenuItem>
              <MenuItem><Link to="/product">Produk</Link></MenuItem>
              <MenuItem><Link to="/penginapan">Penginapan</Link></MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              fontWeight="normal"
              rightIcon={<FaChevronDown />}
              backgroundColor="transparent"
              textColor="white"
              _hover={{ bg: 'green.2' }}
              _expanded={{ bg: 'green.2' }}
            >
              Laporan
            </MenuButton>
            <MenuList textColor="black">
              <MenuItem><Link to="/report/visitors">Laporan Pengunjung</Link></MenuItem>
              <MenuItem><Link to="/report/financial">Laporan Keuangan</Link></MenuItem>
              <MenuItem><Link to="/report/citizen">Laporan Warga</Link></MenuItem>
              <MenuItem>Permohonan Modal</MenuItem>
              <MenuItem>Kontribusi</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar;