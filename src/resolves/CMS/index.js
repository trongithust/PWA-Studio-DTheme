import React from 'react';
const CMS = React.lazy(() => import(`src/Theme/${window.DTHEME_NAMESPACE}/RootComponents/CMS`));

const ResolveCMS = (props) => {
    return (
    	<React.Suspense fallback=''>
    		<CMS {...props} />
    	</React.Suspense>
    );
};

export default ResolveCMS;
