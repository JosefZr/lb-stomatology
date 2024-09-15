import {Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Image from 'next/image';
export default function Arabic() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <div className='flex flex-row items-center justify-center gap-1'>
        <div className='reveal-horizontal-left flex flex-row text-5xl font-bold  text-word-purple cursor-pointer'>
            <span onClick={onOpen} className=' cursor-pointer hover:opacity-70 transition-all'>اللغة العربية</span>
        </div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={true} isKeyboardDismissDisabled={true}>
        <ModalContent>
            {(onClose) => (
                <>
                <ModalBody>
                    <div className=" flex  justify-center">
                        <Image
                            src="/family/location.jpg"
                            width={400}
                            height={600}
                            alt='invitation for dental students'
                            quality={90}
                            className=' pointer-events-none text-center'
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Close
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
    </div>
    )
}
