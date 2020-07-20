import React from 'react';
const Main = React.lazy(() => import(`src/Theme/${window.DTHEME_NAMESPACE}/BaseComponents/Main`));

const ResolveMain = (props) => {
    return (
    	<React.Suspense fallback=''>
    		<Main {...props} />
    	</React.Suspense>
    );
};

export default ResolveMain;
