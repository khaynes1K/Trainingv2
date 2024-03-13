import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import TextField from '@mui/material/TextField';


function Practice() {
    const [data, setData] = useState(null) ;
    const [city, setCity] = useState("");

    const commonStyles = {
      bgcolor: 'background.paper',
      m: 1,
      borderColor: 'text.primary',
      width: '5rem',
      height: '5rem',
    };

    const theme = createTheme({
      palette: {
        primary: {
          main: '#ff0000', // Red color
        },
      },
    });

  //https://mui.com/system/properties/
  // More notes included inside my google documentation

    return (
            <div>
              <header>
            <div style={{ width: '100%' }}>
          <Box
            sx={{
              display: 'grid',
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              border: '1px solid',
              borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
              p: 1,
              borderRadius: 2,
              fontSize: '0.875rem',
              fontWeight: '700',
            }}
          >
            {"I'm a grid container!"}
          </Box>
        </div>
        </header>

        <body>
          <header>
            {/* grid-template-areas */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 1,
                gridTemplateRows: 'auto',
                gridTemplateAreas: `"header header header header"
                                    "main main . sidebar"
                                    "footer footer footer footer"`,
                                  }}
              >
                <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>Header</Box>
                <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}>Main</Box>
                <Box sx={{ gridArea: 'sidebar', bgcolor: 'error.main' }}>Sidebar</Box>
                <Box sx={{ gridArea: 'footer', bgcolor: 'warning.dark' }}>Footer</Box>
              </Box>
          </header>
          <body>
            {/*grid-auto-flow */}
            <Box
                sx={{
                display: 'grid',
                gridAutoFlow: 'row',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gridTemplateRows: 'repeat(2, 50px)',
                gap: 1,
            }}
            >
              <div sx={{ gridColumn: '1', gridRow: '1 / 3' }}>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div sx={{ gridColumn: '5', gridRow: '1 / 3' }}>5</div>
            </Box>
          </body>

          {/* Box */}
          <body>
          <Box
              height={200}
              width={200}
              my={4}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{ border: '2px solid grey' }}
             >
              This Box uses MUI System props for quick customization.
          </Box>
          </body>
          <body>
            {/* Width */}
            <Box sx={{ width: '100%' }}>
              <Box
                sx={{
                width: '25%',
                p: 1,
                bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
                color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                textAlign: 'center',
                 }}
               >
                  Width 25%
            </Box>
            <Box
                sx={{
                width: '50%',
                p: 1,
                my: 1,
                bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
                color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                textAlign: 'center',
              }}
                >
                Width 50%
            </Box>
             <Box
                sx={{
                width: '75%',
                p: 1,
                my: 1,
                bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
                color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                textAlign: 'center',
                  }}
                >
                 Width 75%
            </Box>
            <Box
                sx={{
                width: '100%',
                p: 1,
                my: 1,
                bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
                color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                textAlign: 'center',
                 }}
                   >
                 Width 100%
              </Box>
              <Box
                sx={{
                width: 'auto',
                p: 1,
                bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
                color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                textAlign: 'center',
                  }}
                   >
                 Width auto
                </Box>
                </Box>
          </body>
          {/* Height */}
          <body>
          <Box sx={{ height: 100, width: '100%' }}>
      <Box
        sx={{
          height: '25%',
          width: 120,
          display: 'inline-block',
          p: 1,
          mx: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
        Height 25%
      </Box>
      <Box
            sx={{
            height: '50%',
            width: 120,
            display: 'inline-block',
            p: 1,
            mx: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
        Height 50%
      </Box>
      <Box
        sx={{
          height: '75%',
          width: 120,
          display: 'inline-block',
          p: 1,
          mx: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
        Height 75%
      </Box>
      <Box
        sx={{
          height: '100%',
          width: 120,
          display: 'inline-block',
          p: 1,
          mx: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
        Height 100%
        </Box>
        </Box>
          </body>
          {/*flexbox display */}
          <body>
          <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          m: 1,
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        {"I'm a flexbox container that uses flex!"}
      </Box>
      <Box
        sx={{
          display: 'inline-flex',
          m: 1,
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        {"I'm a flexbox container that uses inline-flex!"}
      </Box>
      </div>
      </body>
        </body>
        <footer>

          {/* z-index */}
        <body>
        <div
  style={{
    height: 100,
    width: '100%',
    position: 'relative',
  }}
>
  <Box
    sx={{
      bgcolor: (theme) =>
        theme.palette.mode === 'dark' ? '#101010' : 'grey.600',
      color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.50'),
      border: '1px solid',
      borderColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
      p: 2,
      borderRadius: 2,
      fontSize: '0.875rem',
      fontWeight: '700',
      position: 'absolute',
      top: 40,
      left: '40%',
      zIndex: 'tooltip',
    }}
  >
    z-index tooltip
  </Box>
  <Box
    sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : '#fff'),
      color: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
      border: '1px solid',
      borderColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
      p: 2,
      borderRadius: 2,
      fontSize: '0.875rem',
      fontWeight: '700',
      position: 'absolute',
      top: 0,
      left: '43%',
      zIndex: 'modal',
    }}
  >
    z-index modal
        </Box>
        </div>
        </body>

        {/* Border */}
          <body>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ ...commonStyles, borderTop: 1 }} />
          </Box>
          </body>
      
          {/* Border-color */}
          <body>
          <ThemeProvider theme={theme}>
            <body>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ ...commonStyles, borderBottom: 1, borderColor: 'primary.main' }} />
            </Box>
            </body>
          </ThemeProvider>
          </body>

          {/*Border-radius */}
          <body>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ ...commonStyles, borderRadius: 1 }} />
          <Box sx={{ ...commonStyles, borderRadius: '16px' }} />
          </Box>
          </body>

          {/* Block */}
          <body>
          <div style={{ width: '100%' }}>
      <Box
        component="span"
        sx={{
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        block
      </Box>
    </div>
          </body>
        </footer>
        </div>
        );
}

export default Practice;