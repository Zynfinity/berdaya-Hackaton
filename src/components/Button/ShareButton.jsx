import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaChevronDown, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ShareButton = () => {
  return (
    <Menu>
      <MenuButton

        as={Button}
        fontWeight="normal"
        rightIcon={<FaChevronDown />}
        backgroundColor="green.2"
        textColor="white"
        _hover={{ bg: 'green.2' }}
        _expanded={{ bg: 'green.2' }}
      >
        Bagikan
      </MenuButton>
      <MenuList textColor="black">
        <MenuItem gap="2"><FaWhatsapp /><Link to="#">Whatsapp</Link></MenuItem>
        <MenuItem gap="2"><FaInstagram /><Link to="#">Instagram</Link></MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ShareButton;