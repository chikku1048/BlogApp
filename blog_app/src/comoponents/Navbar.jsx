import React from 'react';
import { pink } from '@mui/material/colors';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const primary = pink[500];
  const buttonColor = pink[200]; 

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: primary }} 
        >
        <Toolbar>
      
          <span>
            Blog APP
          </span>
         <Link to='/'>
         <Button
            sx={{
              color: 'white', 
              backgroundColor: buttonColor, 
              '&:hover': {
                backgroundColor: pink[300],
              }
            }}
          >
            Home
          </Button>
         </Link>

         <Link to='/add-blog'>
         <Button
            sx={{
              color: 'white', 
              backgroundColor: buttonColor, 
              '&:hover': {
                backgroundColor: pink[300],
              },
            }}
          >
           ADD Blog
          </Button>

         </Link>
         
          
         
         
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;