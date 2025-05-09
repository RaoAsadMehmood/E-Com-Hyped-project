'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const initialErrors = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  message: '',
  agree: '',
};

const customStyles = `
  .react-tel-input .form-control {
    width: 100% !important;
    height: 60px !important;
    border: 1px solid #d1d5db !important;
    border-radius: 0.375rem !important;
    padding-left: 50px !important;
    font-size: 16px !important;
    outline: none !important;
  }

  .react-tel-input .form-control:focus {
    border-color: #F7A51E !important;
    box-shadow: 0 0 0 2px rgba(247, 165, 30, 0.5) !important;
  }

  .react-tel-input .flag-dropdown {
    border: 1px solid #d1d5db !important;
    border-right: none !important;
    border-radius: 0.375rem 0 0 0.375rem !important;
    background: transparent !important;
    height: 60px !important;
  }

  .react-tel-input .flag-dropdown:hover,
  .react-tel-input .flag-dropdown.open {
    background: #f3f4f6 !important;
  }

  .react-tel-input .selected-flag {
    padding-left: 12px !important;
    height: 100% !important;
  }
`;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
    agree: false,
  });

  const [errors, setErrors] = useState(initialErrors);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors = { ...initialErrors };
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email.';
      valid = false;
    }

    const phoneValue = formData.phone.replace(/\D/g, '');
    if (!phoneValue || phoneValue.length < 7 || phoneValue.length > 15) {
      newErrors.phone = 'Enter a valid phone number.';
      valid = false;
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
      valid = false;
    }

    const today = new Date().toISOString().split('T')[0];
    if (!formData.date || formData.date < today) {
      newErrors.date = 'Select a valid future date.';
      valid = false;
    }

    if (!formData.agree) {
      newErrors.agree = 'You must agree before submitting.';
      valid = false;
    }

    setErrors(newErrors);
    setIsFormValid(valid);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log('Form submitted:', formData);
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={formVariants}
      className="w-full px-4 py-12 flex justify-center"
    >
      <style>{customStyles}</style>
      <form
        onSubmit={handleSubmit}
        className="w-[1200px] bg-white shadow-lg rounded-lg px-6 md:px-10 py-8 md:py-10 space-y-6"
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full h-[60px] border border-gray-300 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-[#F7A51E]"
          />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
        </div>

        {/* Services + Date */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Services Required
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full h-[60px] border border-gray-300 rounded-md px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#F7A51E] "
            >
              <option value="">Select a service</option>
              <option value="online-arbitrage">Online Arbitrage</option>
              <option value="fba-wholesale">FBA WholeSale</option>
              <option value="supllier-directory">Supplier Directory</option>
              <option value="product-research-sourcing">Product-Research/Sourcing</option>
              <option value="seller-central-managment">Seller Central Managment</option>
              <option value="amazon-listing-optimization">Amazon Listing Optimization</option>
              <option value="ppc-optimization">PPC Optimization</option>

            </select>
            {errors.service && <p className="text-sm text-red-600 mt-1">{errors.service}</p>}
          </div>
          <div className="flex-1">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              min={new Date().toISOString().split('T')[0]}
              value={formData.date}
              onChange={handleInputChange}
              className="w-full h-[60px] border border-gray-300 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-[#F7A51E]"
            />
            {errors.date && <p className="text-sm text-red-600 mt-1">{errors.date}</p>}
          </div>
        </div>

        {/* Email + Phone */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full h-[60px] border border-gray-300 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-[#F7A51E]"
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>
          <div className="flex-1">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <PhoneInput
              country={'us'}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: false,
              }}
              containerClass="w-full react-tel-input"
            />
            {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-gray-400">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F7A51E]"
          ></textarea>
        </div>

        {/* Checkbox + Submit */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleInputChange}
                className="mr-2 accent-[#F7A51E]"
              />
              I agree to the terms & conditions
            </label>
            {errors.agree && <p className="text-sm text-red-600 mt-1">{errors.agree}</p>}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={!isFormValid}
            className={`w-full sm:w-auto px-[48px] py-[14px] sm:px-[56px] sm:py-[16px] border ${
              isFormValid
                ? 'border-[#F7A51E] text-[#F7A51E] hover:bg-[#F7A51E] hover:text-white'
                : 'border-gray-300 text-gray-400 cursor-not-allowed'
            } text-[16px] sm:text-[18px] font-semibold rounded-md transition-all duration-300 ease-out`}
          >
            Send Message
          </motion.button>
        </div>
      </form>
    </motion.section>
  );
};

export default ContactForm;
