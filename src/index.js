import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { injectGlobal } from 'styled-components';

import App from "./Components/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./Store";
import { fetchMetadata } from './Store/actions';

injectGlobal`
	body {
		font-family: sans-serif;
		margin: 0;
		padding: 0;
	}
`;

store.dispatch(fetchMetadata())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
