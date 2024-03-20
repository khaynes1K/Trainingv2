import React, { useState } from 'react';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


function AppointmentPage() {
    const [value, setValue] = useState('one');
  
    const handleChange = (newValue) => {
      setValue(newValue);
    };

    return (
        <div className="wrapper">
            <header className="header">Header</header>
            
            
            
            <article className="main">
                <p>Input a calendar</p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <StaticDatePicker orientation="landscape" />
                        </LocalizationProvider>
            </article>





            <div className="aside-1"> 
                <div className="user-info"></div>
                <div>
                    <PersonIcon className="personIcon"sx={{ fontSize: '50px' }} />
                </div>
                <div className="signoutButton">
                    <Button 
                        sx={{ bgcolor: 'black', color: 'white' }}
                        variant={value === 'one' ? 'contained' : 'outlined'}
                        onClick={() => handleChange('one')}
                    >
                        Sign out
                    </Button>
                </div>
            </div> 
        </div>
    );
}

export default AppointmentPage;
