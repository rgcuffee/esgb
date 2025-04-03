import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define form schema
const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  phone: yup
    .string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  category: yup.string().required('Please select a category'),
  entryFeeType: yup.string().required('Please select an entry fee type'),
  make: yup.string().required('Car make is required'),
  model: yup.string().required('Car model is required'),
  year: yup
    .number()
    .typeError('Car year must be a valid number') // Custom error for invalid input
    .min(1885, 'Enter a valid year')
    .max(new Date().getFullYear(), 'Cannot be in the future')
    .required('Car year is required'),
  heardAboutUs: yup.string().required('Please select how you heard about us'),
});

// Define form types
interface FormInputs {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  category: string;
  entryFeeType: string;
  make: string;
  model: string;
  year: number;
  heardAboutUs: string;
}

// Define Props Type
interface RegistrationFormProps {
  onClose: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const [category, setCategory] = useState('');
  // Handle category change
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };
  //tfi5IkTqFa7Sf1ZUnkcu_cBheFk_aHTLKT32nHMDWFM
  // 'https://script.google.com/macros/s/AKfycbyB9kTj2DRUDOS7NiWThrP24XC7uIqpXIRiKzS03oNYMQ4ZCt2IOlDJG3ZFJZnS-kqsCQ/exec',
  const onSubmit = async (data: FormInputs) => {
    // Collect form data
    const formData = {
      ...data,
      category,
      createdAt: new Date().toISOString(), // Current timestamp
    };

    try {
      // Send POST request to your Google Apps Script endpoint or proxy
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyB9kTj2DRUDOS7NiWThrP24XC7uIqpXIRiKzS03oNYMQ4ZCt2IOlDJG3ZFJZnS-kqsCQ/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), // Send form data as JSON
        }
      );

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse response from the Google Apps Script
      const data = await response.json();
      console.log('Success:', data); // Handle success
    } catch (error) {
      console.error('Error:', error); // Handle errors
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='registration-form'>
      <input {...register('firstName')} placeholder='First Name' />
      <p className='error'>{errors.firstName?.message}</p>

      <input {...register('lastName')} placeholder='Last Name' />
      <p className='error'>{errors.lastName?.message}</p>

      <input {...register('phone')} placeholder='Phone Number' />
      <p className='error'>{errors.phone?.message}</p>

      <input {...register('email')} placeholder='Email' type='email' />
      <p className='error'>{errors.email?.message}</p>

      {/* Category */}
      <select
        style={{ marginBottom: '20px' }}
        {...register('category')}
        onChange={handleCategoryChange}
      >
        <option value=''>Select Category</option>
        <option value='carshow'>Car Show (Competing)</option>
        <option value='showcase'>Showcase Only (No Competition)</option>
      </select>

      {/* Entry Fee Type */}
      <select {...register('entryFeeType')}>
        <option value=''>Select Entry Fee Type</option>
        {category === 'carshow' && <option value='30'>$30 Fee</option>}
        {category === 'showcase' && <option value='20'>$20 Fee</option>}
        <option value='toys'>4 Toy Donation</option>
      </select>

      <p className='error'>{errors.entryFeeType?.message}</p>

      <input {...register('year')} placeholder='Car Year' type='number' />
      <p className='error'>{errors.year?.message}</p>

      <input {...register('make')} placeholder='Car Make' />
      <p className='error'>{errors.make?.message}</p>

      <input {...register('model')} placeholder='Car Model' />
      <p className='error'>{errors.model?.message}</p>

      <p className='error'>{errors.category?.message}</p>

      <select {...register('heardAboutUs')}>
        <option value=''>How Did You Hear About Us?</option>
        <option value='social'>Instagram</option>
        <option value='facebook'>Facebook</option>
        <option value='flyer'>Flyer</option>
        <option value='poster'>Poster</option>
        <option value='friend'>Friend</option>
        <option value='other'>Other</option>
      </select>
      <p className='error'>{errors.heardAboutUs?.message}</p>

      <button type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Register'}
      </button>
    </form>
  );
};

export default RegistrationForm;
