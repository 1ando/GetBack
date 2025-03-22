'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function AccountPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#fffaf0] flex flex-col items-center justify-center p-6 relative">
      {/* Logo */}
      <Image src="/logo.png" alt="logo" width={120} height={120} className="mb-10" />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6">
        <Button
          variant="contained"
          onClick={() => setShowCreateModal(true)}
          sx={{
            backgroundColor: '#06d6a0',
            color: '#fff',
            textTransform: 'none',
            borderRadius: '999px',
            px: 4,
            py: 1.5,
            fontWeight: 600,
            '&:hover': { backgroundColor: '#05c495' },
          }}
        >
          Create Account
        </Button>

        <Button
          variant="outlined"
          onClick={() => setShowLoginModal(true)}
          sx={{
            color: '#000',
            borderColor: '#000',
            textTransform: 'none',
            borderRadius: '999px',
            px: 4,
            py: 1.5,
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#f2f2f2',
              borderColor: '#000',
            },
          }}
        >
          Log In
        </Button>
      </div>

      {/* Create Account Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-black relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setShowCreateModal(false)}
            >
              <CloseIcon />
            </button>
            <h2 className="text-xl font-bold mb-4">Create Account</h2>
            <input
              type="text"
              placeholder="Email"
              className="w-full mb-4 px-3 py-2 border rounded"
            />
            <input
              type="text"
              placeholder="First Name"
              className="w-full mb-4 px-3 py-2 border rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full mb-4 px-3 py-2 border rounded"
            />
            <input
              type="text"
              placeholder="Display Name"
              className="w-full mb-4 px-3 py-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-6 px-3 py-2 border rounded"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#06d6a0',
                color: '#fff',
                textTransform: 'none',
                borderRadius: '999px',
                '&:hover': { backgroundColor: '#05c495' },
              }}
              onClick={() => {
                setShowCreateModal(false);
                alert('Account created!');
              }}
            >
              Confirm
            </Button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-black relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setShowLoginModal(false)}
            >
              <CloseIcon />
            </button>
            <h2 className="text-xl font-bold mb-4">Log In</h2>
            <input
              type="text"
              placeholder="Email"
              className="w-full mb-4 px-3 py-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-6 px-3 py-2 border rounded"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#118ab2',
                color: '#fff',
                textTransform: 'none',
                borderRadius: '999px',
                '&:hover': { backgroundColor: '#0f7da3' },
              }}
              onClick={() => {
                setShowLoginModal(false);
                alert('Logged in!');
              }}
            >
              Log In
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
