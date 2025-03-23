'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  Avatar,
} from '@mui/material';

export default function ProfilePage() {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isFriendsModalOpen, setFriendsModalOpen] = useState(false);
  const [displayName, setDisplayName] = useState('Display Name');
  const [editName, setEditName] = useState(displayName);
  const [friends, setFriends] = useState(['Alice', 'Bob']);
  const [newFriend, setNewFriend] = useState('');

  const handleSaveName = () => {
    setDisplayName(editName);
    setEditModalOpen(false);
  };

  const handleAddFriend = () => {
    if (newFriend.trim()) {
      setFriends([...friends, newFriend.trim()]);
      setNewFriend('');
    }
  };

  return (
    <Box
      sx={{
        bgcolor: '#d3d3d3',
        p: 4,
        width: 300,
        height: 350,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '2px solid #2196f3',
        position: 'relative',
        color: '#000',
      }}
    >
      {/* Friends tab */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bgcolor: '#f0f0f0',
          color: '#000',
          px: 1.5,
          py: 0.5,
          cursor: 'pointer',
          borderBottomLeftRadius: 4,
          fontWeight: 500,
        }}
        onClick={() => setFriendsModalOpen(true)}
      >
        friends
      </Box>

      {/* Profile Picture */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar sx={{ width: 80, height: 80, bgcolor: 'black' }} />
      </Box>

      {/* Display Name and Edit */}
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography>Groups:</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
          <Typography>{displayName}</Typography>
          <Button
            size="small"
            onClick={() => {
              setEditName(displayName);
              setEditModalOpen(true);
            }}
            sx={{ px: 1, py: 0.5, fontSize: '0.75rem', minWidth: 'unset', textTransform: 'uppercase' }}
          >
            edit
          </Button>
        </Box>
      </Box>

      {/* Log Out */}
      <Typography sx={{ position: 'absolute', bottom: 8, right: 8, cursor: 'pointer' }}>log out</Typography>

      {/* Edit Modal */}
      <Modal open={isEditModalOpen} onClose={() => setEditModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#f5f5f5',
            p: 4,
            borderRadius: 2,
            boxShadow: 4,
            width: 300,
            color: '#000',
          }}
        >
          <Typography fontWeight="bold" mb={2}>
            Edit Display Name
          </Typography>
          <TextField
            fullWidth
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleSaveName}
            sx={{ mt: 2, backgroundColor: '#CBF3F0', color: '#000', '&:hover': { backgroundColor: '#b9e7e4' } }}
          >
            Save
          </Button>
        </Box>
      </Modal>

      {/* Friends Modal */}
      <Modal open={isFriendsModalOpen} onClose={() => setFriendsModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#f5f5f5',
            p: 4,
            borderRadius: 2,
            boxShadow: 4,
            width: 300,
            maxHeight: '80vh',
            overflowY: 'auto',
            color: '#000',
          }}
        >
          <Typography fontWeight="bold" mb={2}>
            Friends List
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <TextField
              fullWidth
              placeholder="Add a friend"
              value={newFriend}
              onChange={(e) => setNewFriend(e.target.value)}
              size="small"
            />
            <Button
              variant="contained"
              onClick={handleAddFriend}
              sx={{ backgroundColor: '#CBF3F0', color: '#000', '&:hover': { backgroundColor: '#b9e7e4' } }}
            >
              Add
            </Button>
          </Box>
          {friends.map((friend, idx) => (
            <Typography key={idx} sx={{ mb: 1 }}>
              {friend}
            </Typography>
          ))}
        </Box>
      </Modal>
    </Box>
  );
}
