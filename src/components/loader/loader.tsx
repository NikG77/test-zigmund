import * as React from 'react';
import ReactLoading from 'react-loading';

const Loader: React.FC = () => {
  const loaderStyles = {
    display: `flex`,
    width: `100%`,
    minHeight: `100vh`,
    justifyContent: `center`,
    alignItems: `center`,
  };

  return (
      <div style={loaderStyles}>
        <ReactLoading
          type="spinningBubbles"
          color="#d9cd8d"
        />
      </div>
  );
};

export default Loader;
