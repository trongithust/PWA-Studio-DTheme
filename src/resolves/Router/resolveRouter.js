import React from 'react';
const Routes = React.lazy(() => import(`src/Theme/${window.DTHEME_NAMESPACE}/Routes`));

const ResolveRouter = (props) => {
    return (
    	<React.Suspense fallback=''>
    		<Routes {...props} />
    	</React.Suspense>
    );
};

export default ResolveRouter;
