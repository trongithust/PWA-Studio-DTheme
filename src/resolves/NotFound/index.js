import React from 'react';
const NotFound = React.lazy(() => import(`src/Theme/${window.DTHEME_NAMESPACE}/RootComponents/NotFound`));

const ResolveNotFound = (props) => {
    return (
    	<React.Suspense fallback=''>
    		<NotFound {...props} />
    	</React.Suspense>
    );
};

export default ResolveNotFound;
