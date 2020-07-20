import React from 'react';
const Category = React.lazy(() => import(`src/Theme/${window.DTHEME_NAMESPACE}/RootComponents/Category`));

const ResolveCategory = (props) => {
    return (
    	<React.Suspense fallback=''>
    		<Category {...props} />
    	</React.Suspense>
    );
};

export default ResolveCategory;
