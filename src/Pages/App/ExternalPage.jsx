import React from 'react';

const ExternalPage = () => {
  const externalPageUrl = '/docs';

  return (
    <div>
      <h1>Documentacion</h1>
      <iframe
        title="Página Externa"
        src={externalPageUrl}
        width="100%"
        height="900px"
        frameBorder="0"
        scrolling="auto"
      />
    </div>
  );
};

export default ExternalPage;