import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const GroupPre = () => {
    const groupName = 'APT 205';
    const debt = '-$20';

    const bull = (
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      >
        •
      </Box>
    );

    const card = (
      <React.Fragment>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 50, alignContent: 'center'  }}>
            {groupName}
          </Typography>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 40, alignContent: 'center'  }}>
            {debt}
          </Typography>

          <div>
            
          </div>
         
          
         
        </CardContent>
      </React.Fragment>
    );

    return (
        <div className='group-page'>

            <div className='card-holder'>
                <Card variant="outlined">{card}</Card>
            </div>

        </div>
    );
}

export default GroupPre;
