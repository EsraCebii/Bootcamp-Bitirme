import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Divider from '@mui/material/Divider';





export default function ListContent() {

  return (
    <Card sx={{ minWidth: 250,  borderColor: 'grey.500' }}>
      <CardHeader
        title="Card title"
      />
        <Divider />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <VisibilityIcon />
        </IconButton>

    
      </CardActions>
     
    </Card>
  );
}