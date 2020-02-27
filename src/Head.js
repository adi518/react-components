import React from 'react';
import Helmet from 'react-helmet';
// import capitalize from 'capitalize';

const { PUBLIC_URL } = process.env;

const Head = ({ title, description, themeColor = '#040404' }) => {
  // const PACKAGE_NAME = pkg.name.split('-').join(' ');
  // const TITLE = capitalize.words(`${PACKAGE_NAME} ${docsPkg.name}`);
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="theme-color" content={themeColor} />
      <meta name="description" content={description} />
      {/* <link rel="manifest" href={`${PUBLIC_URL}/site.webmanifest`} /> */}
      <link rel="apple-touch-icon" href={`${PUBLIC_URL}/logo192.png`} />
    </Helmet>
  );
};

export default Head;
