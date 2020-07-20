import React from 'react';
const ToastContainer = React.lazy(() => import(`src/Theme/${window.DTHEME_NAMESPACE}/BaseComponents/ToastContainer`));

const ResolveToastContainer = (props) => {
    return (
    	<React.Suspense fallback=''>
    		<ToastContainer {...props} />
    	</React.Suspense>
    );
};

export default ResolveToastContainer;
