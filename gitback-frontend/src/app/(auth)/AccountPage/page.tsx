'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

export default function AccountPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [createEmail, setCreateEmail] = useState('');
  const [createDisplayName, setCreateDisplayName] = useState('');
  const [createPassword, setCreatePassword] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

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
            <h2 className="createAccount">Create Account</h2>
            <TextField
                id="outlined-basic"
                placeholder="Email"
                margin="dense"
                className="w-full mb-6 px-3 py-2 border rounded m-2"
                onChange={(value) => setCreateEmail(value.target.value)}
            />
            <TextField
                id="outlined-basic"
                placeholder="Display Name"
                margin="dense"
                className="w-full mb-6 px-3 py-2 border rounded"
                onChange={(value) => setCreateDisplayName(value.target.value)}
            />
            <TextField
              id="outlined-basic"
              placeholder="Password"
              margin="dense"
              className="w-full mb-6 px-3 py-2 border rounded"
              onChange={(value) => setCreatePassword(value.target.value)}
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
              onClick={async () => {
                  const firestore_response = await fetch("http://localhost:5000/api/set-user", {
                      method: "POST",
                      headers: {
                          "Content-Type": "application/json",
                      },
                      body: JSON.stringify({pfpLink: "google.com", displayName: createDisplayName, email: createEmail}),
                  });
                    console.log(firestore_response);
                  const auth_response = await fetch("http://localhost:5000/api/register", {
                      method: "POST",
                      headers: {
                          "Content-Type": "application/json",
                      },
                      body: JSON.stringify({email: createEmail, password: createPassword}),
                  });
                  alert("Please check your email for verification!");
                  console.log(auth_response);
                  setShowCreateModal(false);
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
              <TextField
                  id="outlined-basic"
                  placeholder="Email"
                  margin="dense"
                  className="w-full mb-6 px-3 py-2 border rounded m-2"
                  onChange={(value) => setLoginEmail(value.target.value)}
              />
              <TextField
                  id="outlined-basic"
                  placeholder="Email"
                  margin="dense"
                  className="w-full mb-6 px-3 py-2 border rounded m-2"
                  onChange={(value) => setLoginPassword(value.target.value)}
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
              onClick={async () => {
                  const firestore_response = await fetch("http://localhost:5000/api/login", {
                      method: "POST",
                      headers: {
                          "Content-Type": "application/json",
                      },
                      body: JSON.stringify({email: loginEmail, password: loginPassword}),

                  });
                  const json = await firestore_response.json();
                  if (json.message == "User signed in successfully") {

                  }
                setShowLoginModal(false);
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
