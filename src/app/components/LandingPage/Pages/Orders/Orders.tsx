import React from 'react';

import Grid from '@material-ui/core/Grid';
import Order from './Order/Order';

import OrdersMetaData from "../../../../data/ordersTable.json";
import { API_URI_ORDER_VIEW } from '../../../../../shared/global_constants';
import OrderStatusTracking from './OrdersStatusTracking';


const ordersPageMetaData = {
    pageElement: {
        componentList: [
            {
                id: "1",
                componentName: "Order Status",
                componentWidth: 12,
                Component: OrderStatusTracking,
                componentData: {
                    MetaData: OrdersMetaData,
                    DataURI: API_URI_ORDER_VIEW,
                    URL: {},
                    Arg: {}
                },
            }
        ]
    }
};

const Orders = () => {

    return (
        <div style={{margin: "auto", width: "90%"}}>
            <Grid container spacing={3}>
                {ordersPageMetaData.pageElement.componentList.map((item, index) => (
                    <Order {...item} key={index} />
                ))}
            </Grid>
        </div>
    )

}

export default Orders;