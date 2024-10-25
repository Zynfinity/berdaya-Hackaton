/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "@chakra-ui/react";

const ButtonHref = ({ children, ...props }) => {
  return (
    <Link bg="green.2" textColor="white" fontWeight="semibold" px="4" py="2" rounded="md" _hover={{ textDecoration: "none", bg: "green.3" }} fontSize="xs" {...props}>{children}</Link>
  )
}

export default ButtonHref;