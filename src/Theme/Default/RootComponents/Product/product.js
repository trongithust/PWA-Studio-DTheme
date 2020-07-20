import React from 'react';
import { default as VeniaProduct } from '@magento/venia-ui/lib/RootComponents/Product';

const Product = (props) => {
    return (
        <VeniaProduct {...props}/>
    );
};

export default Product;
