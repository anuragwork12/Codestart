import React from 'react';

const DialogBox = ({ isOpen, onClose, title, children }) => {
  const overlayClasses = isOpen ? "fixed inset-0 z-50 bg-opacity-50 bg-black blur-sm" : "hidden";
  const dialogClasses = isOpen ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg z-50" : "hidden";

  const handleClose = () => {
    onClose();
  };

  return (
    <div className='bg-blue-400'>
      <div className={overlayClasses}></div>
      <div className={`${dialogClasses} bg-blue-100`} >
        <div className="dialog-header">
          <h2 className='mx-auto'>{title}</h2>
          <button className="close-btn" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="dialog-content">{children}</div>
      </div>
    </div>
  );
};

export default DialogBox;
