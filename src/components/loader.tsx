import * as React from 'react';

import spinner from '../images/spinner.svg';

export const Loader = () => <img src={spinner} style={{ height: '80px' }} className="m-3" alt="loader" />;
