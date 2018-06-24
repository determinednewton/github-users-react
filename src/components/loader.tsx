import * as React from 'react';

import spinner from '../images/spinner.svg';

import './Loader.css';

export const Loader = () => <img src={spinner} className="loader" alt="loader" />;
