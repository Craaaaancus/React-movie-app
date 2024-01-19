import React, {
  DialogHTMLAttributes,
  FC,
  HTMLAttributes,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { AppFrame } from '@components/AppFrame';
import { AppFlex } from '@components/AppFlex';
import { AppSkeletonLoader } from '@components/AppSkeletonLoader';

type AppModalProps = DialogHTMLAttributes<HTMLDialogElement> & {
  isOpen?: boolean;
};

const StyledDialog = styled.dialog`
  & {
    padding: 3rem 2rem 1.2rem;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    position: fixed;
    outline: none;
    border: none;
    border-radius: 0.25rem;
    z-index: 100;
  }

  &::backdrop {
    background-color: hsl(200, 3%, 30%, 0.5);
  }
`;

const AppModal: FC<AppModalProps> = (props) => {
  const [modalIsOpen, setModalOpen] = useState(props.isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (modalIsOpen) {
        modalElement.showModal();
        document.body.classList.add('active-modal');
      } else {
        modalElement.close();
        document.body.classList.remove('active-modal');
      }
    }
  }, [modalIsOpen]);
  // <AppFrame src="https://www.youtube.com/embed/8HTYXNLLLSQ"></AppFrame>

  return (
    <>
      <StyledDialog ref={modalRef} onKeyDown={handleKeyDown}>
        <div style={{ width: '65vw' }}></div>

        <button style={{ position: 'fixed', top: '0', right: '0' }} onClick={handleCloseModal}>
          Close
        </button>
      </StyledDialog>
      {props.children}
    </>
  );
};

export default AppModal;
