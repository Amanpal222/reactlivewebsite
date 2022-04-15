import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import {
    ListItem,
    OrderedList,
  } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { FaInfoCircle } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/react';


const InfoModal = props => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <IconButton
        size="sm"
        aria-label={`Site Info`}
        as={FaInfoCircle}
        marginRight=""
        cursor="pointer"
        onClick={onOpen}
        {...props}
        />
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize=""></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <OrderedList  spacing={3}>
                    <ListItem>I should be able to add destinations</ListItem>
                    <ListItem>Display points of interest between each destination.</ListItem>
                    <ListItem>Use the dates.</ListItem>
                    <ListItem>click on a map (with an API call)</ListItem>
                    <ListItem> I'd like my data to be stored in my browsers local storage</ListItem>
                </OrderedList>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} colorScheme=""></Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default InfoModal 