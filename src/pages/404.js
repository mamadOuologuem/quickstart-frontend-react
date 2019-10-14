import React from 'react';
import { Typography } from '@material-ui/core';

import Layout from '../components/layouts/Layout';

const NotFoundPage = () => (
  <Layout routeSlug="NotFound">
    <Typography variant="h1" color="secondary">Not Found</Typography>
    <Typography>You just hit a route that doesn&#39;t exist... the sadness.</Typography>
  </Layout>
);

export default NotFoundPage;
