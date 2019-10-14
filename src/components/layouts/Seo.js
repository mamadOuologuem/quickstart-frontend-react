import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { getPageSeo } from '../../Routes';

const SEO = ({ routeSlug }) => {
  const { site: { siteMetadata } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
      }
    `,
  );

  const { title, description, meta: additionalMeta, lang } = getPageSeo(routeSlug) || {};
  const metaTitle = title || siteMetadata.title;
  const metaDescription = description || siteMetadata.description;
  const metaLang = lang || 'en';

  return (
    <Helmet
      htmlAttributes={{
        metaLang,
      }}
      title={metaTitle}
      meta={([
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: siteMetadata.url,
        },
        {
          property: 'og:image',
          content: `${siteMetadata.url}/photo-header.jpg`,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: metaTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'viewport',
          content: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no',
        },
      ]).concat(additionalMeta || [])}
    />
  );
};


SEO.propTypes = {
  routeSlug: PropTypes.string.isRequired,
};

export default SEO;
