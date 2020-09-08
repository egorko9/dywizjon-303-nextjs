import React from 'react';
import PropTypes from 'prop-types';

function PlaneLeft({ color, height }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238 298" height={height}>
      <path
        d="M61.797 11.309l-5.908 76.075-20.934.683v1.813l20.596 1.866-.717 9.213-20.987.65v1.812l20.658 1.775-2.17 27.996-5.559 3.338s-.704-1.017-1.75-1.954c-20.546 0-19.67 3.562-19.942 4.304-11.516 0-12.054 3.166-12.254 3.712C-.91 146.222.097 148.851.097 148.851v.079s-1.008 2.629 12.733 6.266c.2.53.738 3.705 12.254 3.705.271.741-.604 4.304 19.942 4.304a12.588 12.588 0 001.75-1.954l5.558 3.337 2.171 27.996-20.658 1.775v1.813l20.987.65.717 9.22-20.596 1.85v1.821l20.934.675 5.908 76.084s3.233 11.312 12.392 11.312c9.162 0 17.783-12.117 17.783-12.117s4.308-5.395 6.196-20.754c1.887-15.354 15.625-90.796 15.625-90.796s1.62-14.816 42.57-15.354c10.513-.27 38.53-2.696 38.53-2.696l6.737 29.371s2.692 5.925 10.775 5.925c8.084 0 12.596-13.746 12.596-13.746l1.313-19.5-8.588-5.85 18.996-1.425 1.113-1.912v-.08l-1.113-1.912-18.996-1.417 8.588-5.858-1.313-19.5s-4.512-13.746-12.596-13.746c-8.083 0-10.775 5.925-10.775 5.925l-6.737 29.371s-28.017-2.425-38.53-2.696c-40.95-.541-42.57-15.354-42.57-15.354s-13.738-75.442-15.625-90.796c-1.888-15.358-6.196-20.754-6.196-20.754S83.352-.004 74.189-.004c-9.159 0-12.392 11.313-12.392 11.313"
        fill={color}
      />
    </svg>
  );
}

PlaneLeft.propTypes = {
  color: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};
export default PlaneLeft;
