import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';


const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));
  
  const label = { inputProps: { 'aria-label': 'Color switch demo' } };
  

function MySwitch({online, setOnline}) {
  // const [online, setOnline] = useState(false);

  const handleToggle = () => {
    // console.log("Connected to internet")
    setOnline(!online)
  }
  return (
    <div>
        <Card variant="outlined" sx={{width:'275px', minHeight: '200px'}}>
        <CardContent>
        <Typography variant="h6" sx={{fontSize:18, fontWeight:'bold'}}>
                Online Mode
        </Typography>
        <Typography variant="h6" sx={{fontSize:14, marginTop:'40px'}}>
                Is this application connected to the internet? : {online ? 'connected' : "not connected"}
        </Typography>
        <PinkSwitch {...label} 
        checked={online}
        onChange={handleToggle} />        
        </CardContent>
        </Card>
    </div>
  )
}

export default MySwitch