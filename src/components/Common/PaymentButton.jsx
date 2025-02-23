

import React, { useState } from 'react';
import ConsultationForm from './ConsultationForm';
import { IoSend } from "react-icons/io5";
import DialogBox from './DialogBox';

const PaymentButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div className='bg-white mt-10 p-5'>
      <button onClick={openDialog} className='flex gap-3 cursor-pointer items-center p-4 w-max rounded-[20px] text-white bg-gradient-to-br from-pink-700 via-purple-600 to-blue-900'>
        <p>Consult Doctor</p> 
        <IoSend />
      </button>
      <DialogBox isOpen={isOpen} onClose={closeDialog} title="Doctor Consultation">
        <ConsultationForm />
      </DialogBox>
    </div>
  );
};

export default PaymentButton;