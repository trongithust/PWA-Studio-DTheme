import React from 'react';
const Search = React.lazy(() => import(`src/Theme/${window.DTHEME_NAMESPACE}/RootComponents/Search`));

const ResolveSearch = (props) => {
    return (
    	<React.Suspense fallback=''>
    		<Search {...props} />
    	</React.Suspense>
    );
};

export default ResolveSearch;
