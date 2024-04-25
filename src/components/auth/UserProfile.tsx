import { Avatar, Box, Button, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";

function UserProfile({ user, logout }: { user: any, logout: any }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(user);
  console.log("picture", user.picture);

  return (
    <>
      <Menu>
        <MenuButton as={Button} rounded="full" variant="link" cursor="pointer" minW={0}>
          <Avatar size="sm" src={user.picture} />



        </MenuButton>
        <MenuList>
          <MenuItem onClick={onOpen}>View Profile</MenuItem>
          <MenuItem onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </MenuItem>
        </MenuList>
      </Menu>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box mb={4}>
              <Avatar size="xl" src={user.picture} />
            </Box>
            <Text>
              <strong>Name:</strong> {user.name}
            </Text>
            <Text>
              <strong>Email:</strong> {user.email}
            </Text>
            {/* Add more user information as needed */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UserProfile;