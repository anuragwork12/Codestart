import React, { useState } from 'react';

const ConsultationForm = () => {
    const handlePayment = () => {
    
        const options = {
          key: 'rzp_test_T0BfdH5QYBk7fM',
          amount: 1000*100, 
          currency: 'INR',
          name: 'Consultation Payment',
          description: 'Payment for doctor consultation',
          handler: function(response) {
          
            window.location.href = 'https://meet.google.com/kfk-yqfy-awd';
          },
        };
        /* global Razorpay */
        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
      };

      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [symptoms, setSymptoms] = useState('');
      const [medicalHistory, setMedicalHistory] = useState('');

      const handleSubmit = (event) => {
        event.preventDefault();
       
        
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Symptoms:', symptoms);
        console.log('Medical History:', medicalHistory);
        handlePayment();
      };
    

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 justify-center'>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <label>
        Symptoms:
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
        />
      </label>
      <label>
        Medical History:
        <textarea
          value={medicalHistory}
          onChange={(e) => setMedicalHistory(e.target.value)}
        />
      </label>
      <button type="submit" className='bg-blue-600 p-4 rounded-sm text-white'>Start Video Consultation</button>
    </form>
  );
};

export default ConsultationForm;