import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Page from './components/page';

import './_index.css';

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
