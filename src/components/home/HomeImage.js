import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, withStyles } from '@material-ui/core';

import { spacing } from '../styledComponents';

import hero from '../../assets/home/image-test.png';

const HomeImage = ({ classes }) => (
  <Grid classes={classes.mainContainer}>
    <Typography variant="h1" color="secondary">Hello World</Typography>
    <img src={hero} alt="Because we always need it" />
  </Grid>
);

HomeImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const style = () => ({
  mainContainer: {
    marginLeft: spacing(5),
  },
});

export default withStyles(style)(HomeImage);
