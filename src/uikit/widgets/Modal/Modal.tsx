import React from "react";
import Heading from "../../components/Heading/Heading";
import { ModalBody, ModalHeader, ModalTitle, ModalContainer, ModalCloseButton, ModalBackButton } from "./styles";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px",
  headerBackground = "transparent",
  minWidth = "320px",
  xstyle = { marginRight: '-20px' },
  ...props
}) => (
  <ModalContainer minWidth={minWidth} {...props}>
    <ModalHeader background={headerBackground}>
      <ModalTitle>
        {onBack && <ModalBackButton onBack={onBack} />}
        <Heading style={{color: '#4238C3', fontWeight: 'bold', fontSize: '22px'}}>{title}</Heading>
      </ModalTitle>
      {!hideCloseButton && <ModalCloseButton onDismiss={onDismiss} style={{ ...xstyle }} />}
    </ModalHeader>
    <ModalBody p={bodyPadding}>{children}</ModalBody>
  </ModalContainer>
);

export default Modal;
