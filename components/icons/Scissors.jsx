import React from 'react';
import PropTypes from 'prop-types';

function Scissors({ color, height }) {
  return (
    <svg height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297">
      <path
        d="m266.708,115c-7.696-7.696-17.927-11.934-28.811-11.934-10.883,0-21.115,4.239-28.81,11.934-11.973,11.973-14.917,29.605-8.842,44.366l-36.619,7.323-14.939-14.939 7.318-36.592c4.869,2.011 10.134,3.066 15.561,3.066 10.883,0 21.115-4.239 28.81-11.934s11.934-17.927 11.934-28.81c0-10.884-4.238-21.115-11.934-28.811-8.38-8.38-19.532-12.334-30.532-11.872 0.096-0.733 0.177-1.475 0.229-2.234 0.744-10.995-3.51-21.596-12.643-31.509-3.546-3.848-9.541-4.095-13.389-0.548s-4.094,9.541-0.548,13.389c5.427,5.89 8.012,11.694 7.682,17.251-0.398,6.71-4.849,11.985-6.848,14.035-0.533,0.48-1.058,0.975-1.571,1.488-0.021,0.021-0.041,0.044-0.062,0.065-0.03,0.03-0.058,0.061-0.088,0.092-7.598,7.678-11.784,17.842-11.784,28.653 0,9.093 2.969,17.726 8.431,24.81l-9.671,48.356-109.008,130.813c-3.137,3.765-2.886,9.301 0.579,12.767 1.841,1.841 4.268,2.775 6.702,2.775 2.147,0 4.3-0.726 6.064-2.196l130.812-109.01 48.357-9.671c7.084,5.462 15.717,8.431 24.81,8.431 10.884,0 21.115-4.238 28.811-11.934 15.884-15.885 15.884-41.734-0.001-57.62zm-79.73-52.929c4.117,4.116 6.384,9.589 6.384,15.41 0,5.821-2.267,11.293-6.383,15.409-0.001,0-0.001,0-0.001,0.001-4.116,4.116-9.588,6.383-15.409,6.383-5.821,0-11.294-2.267-15.411-6.384-4.116-4.116-6.383-9.588-6.383-15.409 0-5.752 2.221-11.159 6.245-15.258 0.296-0.262 0.682-0.614 1.14-1.058 4.107-3.63 9.25-5.467 14.409-5.467 5.579,0 11.162,2.124 15.409,6.373zm-85.119,151.448l37.181-44.617 7.436,7.436-44.617,37.181zm151.449-54.299c-4.116,4.117-9.589,6.384-15.41,6.384-5.821,0-11.293-2.267-15.409-6.384-8.497-8.497-8.497-22.322 0-30.82 4.116-4.116 9.588-6.383 15.409-6.383 5.821,0 11.294,2.267 15.41,6.383 8.496,8.498 8.496,22.323 0,30.82z"
        fill={color}
      />
    </svg>
  );
}

Scissors.propTypes = {
  color: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default Scissors;
