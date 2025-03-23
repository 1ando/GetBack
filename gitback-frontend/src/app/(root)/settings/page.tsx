'use client'
import { useState } from 'react';
import React from "react";
import NavBar from '@/app/components/NavBar';

export default function Settings() {
  const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openChangeModal = () => setIsChangeModalOpen(true);
  const closeChangeModal = () => setIsChangeModalOpen(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 transform rounded-full">
          <div className="settingsBox">
            <p className="settingsText">SETTINGS</p>
          </div>
        </div>

        <div className="settingsContainer flex flex-col items-center gap-4">

          <button 
            id="changeUsername" 
            className="changeUsername"
            onClick={openChangeModal}
          >
            Change Email
          </button>


          {isChangeModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-600">Change Email</h2>
            <button 
          className="text-gray-500 hover:text-gray-700"
          onClick={closeChangeModal}
        >
          ✕
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <label htmlFor="username" className="text-sm text-gray-600">
          Your new Email:
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter new Email"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />

        <div className="flex justify-end gap-4 mt-4">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            onClick={closeChangeModal}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => {
              closeChangeModal();
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  </div>
)}


        
          <div className="logOut">
            <a 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Log Out
            </a>
          </div>

       
          <button 
            id="deleteAccount" 
            className="deleteAccount"
            onClick={openDeleteModal}
          >
            Delete Account
          </button>
          {isDeleteModalOpen && (
               <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-red-600">Delete Account</h2>
           <button 
          className="text-gray-500 hover:text-gray-700"
          onClick={closeDeleteModal}
        >
          ✕
        </button>
      </div>

      <p className="text-gray-700 mb-6">Are you sure you want to delete your account? This action cannot be undone.</p>
      
      <div className="flex justify-end gap-4">
        <button
          className="px-4 py-2 bg-black 200 rounded hover:bg-gray-300"
          onClick={closeDeleteModal}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={() => {
            closeDeleteModal();
          }}
        >
          Yes, Delete
        </button>
      </div>
    </div>
  </div>
)}

        </div>
      </main>
    </div>
  );
}