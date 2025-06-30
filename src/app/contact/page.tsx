
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: '',
    email: '',
    message: ''
  });

  const router = useRouter();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className='min-h-screen bg-black py-12 pt-36 px-4 sm:px-6 lg:px-8'>
  <div className='max-w-7xl mx-auto'>
    <h1 className='text-3xl md:text-5xl font-bold text-white mb-8 text-center'>Contact Us</h1>
    <div className='grid md:grid-cols-2 gap-8'>
      <div className='space-y-6'>
        <div className='bg-gray-900 p-6 rounded-xl'>
          <h2 className='text-white text-xl font-semibold mb-4'>Get in Touch</h2>
          <form className='space-y-4' onSubmit={async (e) => {
              e.preventDefault();
              try {
                const response = await fetch('/api/contact', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData),
                });
                if (response.ok) {
                  router.push('/thank-you');
                }
              } catch (error) {
                console.error('Error:', error);
              }
            }}>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              className='w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name='message'
              placeholder='Message'
              className='w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 h-32'
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className='bg-gray-900 p-6 rounded-xl space-y-6'>
        <h2 className='text-white text-xl font-semibold'>Contact Information</h2>
        <div className='space-y-4 text-gray-300'>
          <p>📞 +1 (555) 123-4567</p>
          <p>📧 support@musicapp.com</p>
          <p>📍 123 Music Street, Melody City</p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Page;
