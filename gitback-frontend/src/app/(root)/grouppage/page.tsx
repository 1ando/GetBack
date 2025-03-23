'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const incomingItems = ['Incoming A', 'Incoming B', 'Incoming C', 'Incoming D', 'Incoming A', 'Incoming B', 'Incoming C', 'Incoming D'];
const outgoingItems = ['Outgoing X', 'Outgoing Y', 'Outgoing Z'];

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
    <Box sx={{ minHeight: '100vh', bgcolor: '#fffaf0', display: 'flex', p: 3, color: '#000' }}>
      {/* Main Content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <Typography sx={{ fontSize: '2.5rem', fontWeight: 600, mt: 2 }}>
          NO FISH
        </Typography>

        {/* Sections */}
        <Box sx={{ width: '100%', maxWidth: '768px', display: 'flex', flexDirection: 'column', gap: 5 }}>
          {/* Incoming Carousel */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Incoming
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 1 }}>
              {incomingItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    minWidth: '100px',
                    height: '6rem',
                    bgcolor: '#f2f2f2',
                    borderRadius: 2,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 500,
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Outgoing Carousel */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Outgoing
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 1 }}>
              {outgoingItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    minWidth: '100px',
                    height: '6rem',
                    bgcolor: '#f2f2f2',
                    borderRadius: 2,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 500,
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Transactions */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Transactions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[...Array(2)].map((_, i) => (
                <Box key={i} sx={{ height: '3rem', borderRadius: 1, bgcolor: '#d3d6dd' }} />
              ))}
            </Box>
          </Box>
        </Box>

        {/* GET BACK Button */}
        <Box sx={{ mt: 6 }}>
          <Button
            variant="contained"
            onClick={() => setIsModalOpen(true)}
            sx={{
              backgroundColor: '#f2f2f2',
              color: '#000',
              fontWeight: 600,
              fontSize: '0.875rem',
              borderRadius: '0.5rem',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              boxShadow: 2,
              '&:hover': {
                backgroundColor: '#e2e2e2',
              },
            }}
          >
            GET BACK
          </Button>
        </Box>

        {/* Modal */}
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#f5f5f5',
              p: 4,
              borderRadius: 3,
              maxWidth: 400,
              width: '100%',
              boxShadow: 24,
              outline: 'none',
              color: '#000',
            }}
          >
            {!formComplete ? (
              <>
                <Typography variant="h6" fontWeight="bold" mb={3}>
                  Submit a Get Back Request
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    label="Who owes you?"
                    value={formData.person}
                    onChange={(e) => setFormData({ ...formData, person: e.target.value })}
                    fullWidth
                    size="small"
                  />
                  <TextField
                    label="Why do they owe you?"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    fullWidth
                    size="small"
                  />
                  <TextField
                    label="How much do they owe?"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    fullWidth
                    size="small"
                  />
                  <TextField
                    label="When do you expect it back?"
                    value={formData.timeLimit}
                    onChange={(e) => setFormData({ ...formData, timeLimit: e.target.value })}
                    fullWidth
                    size="small"
                  />
                </Box>

                <Box mt={4} display="flex" justifyContent="space-between">
                  <Button
                    variant="contained"
                    onClick={() => setFormComplete(true)}
                    sx={{
                      backgroundColor: '#CBF3F0',
                      color: '#000',
                      borderRadius: '999px',
                      px: 3,
                      textTransform: 'none',
                      '&:hover': { backgroundColor: '#b9e7e4' },
                    }}
                  >
                    Confirm
                  </Button>
                  <Button
                    onClick={() => setIsModalOpen(false)}
                    sx={{
                      backgroundColor: '#e0e0e0',
                      color: '#000',
                      borderRadius: '999px',
                      px: 3,
                      textTransform: 'none',
                      '&:hover': { backgroundColor: '#d5d5d5' },
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              </>
            ) : (
              <Box textAlign="center">
                <CheckCircle sx={{ fontSize: 60, color: '#06d6a0', mb: 2 }} />
                <Typography fontWeight="bold">
                  Now sit back, while we make sure you get back!
                </Typography>
                <Button
                  onClick={() => {
                    setIsModalOpen(false);
                    setFormComplete(false);
                    setFormData({ person: '', reason: '', amount: '', timeLimit: '' });
                  }}
                  sx={{
                    mt: 2,
                    color: '#000',
                    textTransform: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Close
                </Button>
              </Box>
            )}
          </Box>
        </Modal>
      </Box>

      {/* Wall of Shame */}
      <Box
        sx={{
          width: '12rem',
          bgcolor: '#f2f2f2',
          borderRadius: 2,
          p: 2,
          ml: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          color: '#000',
        }}
      >
        <Typography variant="caption" fontWeight="bold" color="black" mb={2} pl={1}>
          Wall of Shame
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            width: '100%',
            fontSize: '0.875rem',
            fontWeight: 600,
            pl: 1,
          }}
        >
          {[...Array(10)].map((_, i) => (
            <Box key={i}>{i + 1}</Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
