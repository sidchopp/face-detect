import Grid from '@mui/material/Grid';
//Components
import UseStyles from './UseStyles';

function HeroImage() {
  const classes = UseStyles();
  return (
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      className={classes.image}
    />
  );
}

export default HeroImage;