import React, { useEffect, useState } from 'react';

const ThemeProvider = ({ children }) => {
	const [ hasTheme, setHasTheme ] = useState(false);
	useEffect(() => {
		async function fetchThemeData() {
		    // Call API to get current theme
	   		// await callAPI();
	   		window.DTHEME_NAMESPACE = await process.env.DTHEME_NAMESPACE ? process.env.DTHEME_NAMESPACE : 'Default';
			setHasTheme(true);
		}
		fetchThemeData();
	}, []);

    return hasTheme && (
    	<React.Fragment>
    		{children}
    	</React.Fragment>
    );
};

export default ThemeProvider;
