import React, {useCallback, useEffect, useState} from 'react';
import './Modal.scss';

interface IModalProps {
  children: React.ReactNode;
  open: boolean;
  title?: string;
}

const Modal:React.FC<IModalProps> = ({ children, title = '', open }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  if (!isOpen) return null;
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button type="button" className="modal__close" onClick={handleClose}>
          <span className="modal__close-line" />
          <span className="modal__close-line" />
        </button>
        {title && (
        <h2 className="modal__header">
          {title}
        </h2>
        )}
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
