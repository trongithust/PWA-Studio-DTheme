import React from 'react';
const Product = React.lazy(() => import(`src/Theme/${window.DTHEME_NAMESPACE}/RootComponents/Product`));

const ResolveProduct = (props) => {
    return (
    	<React.Suspense fallback=''>
    		<Product {...props} />
    	</React.Suspense>
    );
};

export default ResolveProduct;
