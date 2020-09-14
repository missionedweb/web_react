import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ColorButton = withStyles((theme) => ({
    root: {
      color: '#ffffff',
      fontWeight: '400',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      padding: '8px',
      paddingLeft: '32px',
      paddingRight: '32px',
      borderRadius: '10px',
      backgroundColor: '#5E81F4',
      lineHeight: '19px',
      '&:hover': {
        backgroundColor: '#5E81F4',
      },
    },
  }))(Button);

  export default function CustomButton({children}) {
  
    return (
        <ColorButton variant="contained">
          {children}
        </ColorButton>
    );
  }
  