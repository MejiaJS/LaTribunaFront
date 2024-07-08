import Modal from "react-bootstrap/Modal";
import { useLaTribunaAuthFormContext } from "@/app/assets/context/auth";
import { ModalProps } from "@/app/assets/types/types";
export default function CustomModal ({ children }: ModalProps): JSX.Element {
  const { showModalForm, handleCloseModalForm } = useLaTribunaAuthFormContext();
  return (
    <>
      <Modal show={showModalForm} onHide={handleCloseModalForm}>
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>
    </>
  );
}
