import React from 'react';

import Layout from '../components/layouts/Layout';
import HomeImage from '../components/home/HomeImage';
import SpecialComp from '../components/ui/SpecialComp';

const HomePage = () => (
  <Layout routeSlug="HomePage">
    <HomeImage />
    <SpecialComp />
  </Layout>
);

export default HomePage;
