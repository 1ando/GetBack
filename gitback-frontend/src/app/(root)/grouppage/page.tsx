'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
import { Group, Person, Settings } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NavBar from '@/app/components/NavBar';

export default function GroupPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formComplete, setFormComplete] = useState(false);
  const [formData, setFormData] = useState({
    person: '',
    reason: '',
    amount: '',
    timeLimit: '',
  });

  return (
    <div className="min-h-screen bg-[#fffaf0] flex p-6">
      {/* Left Sidebar */}
      <div className="w-[250px]">
        <NavBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center gap-8 relative">
        {/* Header */}
        <div className="bg-[#CBF3F0] text-black text-5xl font-semibold text-center py-6 px-10 rounded-[2rem] w-fit mt-2">
          NO FISH
        </div>

        {/* Sections */}
        <div className="w-full max-w-4xl flex flex-col gap-10">
          {/* Incoming */}
          <div>
            <h2 className="text-lg font-bold text-black mb-3">Incoming</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="h-24 rounded-md" style={{ backgroundColor: '#06d6a0' }} />
              ))}
            </div>
          </div>

          {/* Outgoing */}
          <div>
            <h2 className="text-lg font-bold text-black mb-3">Outgoing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="h-24 rounded-md" style={{ backgroundColor: '#ef476f' }} />
              ))}
            </div>
          </div>

          {/* Transactions */}
          <div>
            <h2 className="text-lg font-bold text-black mb-3">Transactions:</h2>
            <div className="flex flex-col gap-3">
              {Array(2).fill(0).map((_, i) => (
                <div key={i} className="bg-gray-300 h-12 rounded-md" />
              ))}
            </div>
          </div>
        </div>

        {/* GET BACK Button */}
        <Button
          variant="contained"
          onClick={() => setIsModalOpen(true)}
          sx={{
            backgroundColor: '#CBF3F0',
            color: '#000',
            fontWeight: 600,
            fontSize: '0.875rem',
            borderRadius: '1rem',
            px: 4,
            py: 1.5,
            textTransform: 'none',
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: '#b5eae7',
            },
          }}
        >
          GET BACK
        </Button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="bg-[#CBF3F0] p-8 rounded-2xl shadow-lg text-center max-w-sm w-full">
              {!formComplete ? (
                <>
                  <h2 className="text-xl font-bold mb-4">GET BACK REQUEST</h2>

                  <div className="flex flex-col text-left gap-4 text-black text-sm mb-6">
                    <div>
                      <label className="font-semibold block mb-1">Which person do you need to get back?</label>
                      <input
                        className="w-full px-3 py-2 rounded bg-white"
                        value={formData.person}
                        onChange={(e) => setFormData({ ...formData, person: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="font-semibold block mb-1">Why do you need to get back?</label>
                      <input
                        className="w-full px-3 py-2 rounded bg-white"
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="font-semibold block mb-1">How much do you need to get back?</label>
                      <input
                        className="w-full px-3 py-2 rounded bg-white"
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="font-semibold block mb-1">How long do they have to get back?</label>
                      <input
                        className="w-full px-3 py-2 rounded bg-white"
                        value={formData.timeLimit}
                        onChange={(e) => setFormData({ ...formData, timeLimit: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <Button
                      variant="contained"
                      onClick={() => setFormComplete(true)}
                      sx={{
                        backgroundColor: '#06d6a0',
                        color: '#fff',
                        textTransform: 'none',
                        borderRadius: '999px',
                        px: 3,
                        '&:hover': { backgroundColor: '#05c495' },
                      }}
                    >
                      Confirm
                    </Button>
                    <Button
                      onClick={() => setIsModalOpen(false)}
                      sx={{
                        backgroundColor: '#ef476f',
                        color: '#fff',
                        textTransform: 'none',
                        borderRadius: '999px',
                        px: 3,
                        '&:hover': { backgroundColor: '#d7375f' },
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4">
                  <CheckCircleIcon sx={{ fontSize: 60, color: '#06d6a0' }} />

                  <p className="font-semibold text-black text-lg text-center">
                    Now sit back, while we make sure you get back!
                  </p>
                  <Button
                    onClick={() => {
                      setIsModalOpen(false);
                      setFormComplete(false);
                      setFormData({ person: '', reason: '', amount: '', timeLimit: '' });
                    }}
                    sx={{
                      textTransform: 'none',
                      mt: 2,
                      color: '#000',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    Close
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Wall of Shame */}
      <div className="w-48 bg-gray-300 rounded-xl p-4 flex flex-col items-start ml-6">
        <p className="text-xs font-bold text-black mb-4 pl-2">wall of shame</p>
        <div className="flex flex-col justify-between h-full w-full text-black text-sm font-semibold flex-1">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="pl-2">{i + 1}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
