import React from 'react';
const Navigation = React.lazy(() => import(`src/Theme/${window.DTHEME_NAMESPACE}/BaseComponents/Navigation`));

const ResolveNavigation = (props) => {
    return (
    	<React.Suspense fallback=''>
    		<Navigation {...props} />
    	</React.Suspense>
    );
};

export default ResolveNavigation;
