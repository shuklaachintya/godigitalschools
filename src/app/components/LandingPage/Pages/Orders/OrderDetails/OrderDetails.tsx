import React from 'react';

import Grid from '@material-ui/core/Grid';

import SimpleDialog from '../../../../Dialog/SimpleDialog';
import Order from '../Order/Order';


import orderDetailsMetaData from '../../../../../data/dialogData/orderDetailsMetaData.json';
import { API_URI_ORDERS } from '../../../../../../shared/global_constants';

const orderDetailsPageMetaData = {
    pageElement: {
        componentList: [
            {
                id: "1",
                componentName: "Order Details",
                componentWidth: 8,
                Component: SimpleDialog,
                componentData: {
                    MetaData: orderDetailsMetaData,
                    DataURI: API_URI_ORDERS,
                    URL: {},
                    Arg: {}
                },
            }
        ]
    }
};

const OrderDetails = () => {
    
    return (
        <div>
            <Grid container spacing={3}>
                {orderDetailsPageMetaData.pageElement.componentList.map((item, index) => (
                    <Order {...item} key={index} />
                ))}
            </Grid>
        </div>
    )

}

export default OrderDetails;