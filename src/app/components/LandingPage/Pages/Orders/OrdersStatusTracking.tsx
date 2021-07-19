import React from "react";
import PropTypes from 'prop-types';
import './OrdersStatusTracking.css';

import Customise from '../../../Customise/Customise';
import CustomViews from './../../../CustomViews/CustomViews';

import Filters from "../../../Filters/Filters";
import OrdersTabPanel from '../Orders/OrdersTabPanel';

interface tableprops {

    metaDataURL: any,
    dataURL: string
}


const OrderStatusTracking = ({ metaDataURL, dataURL }: tableprops) => {



    return (
        <div className="pageWidth">
            <Customise/>
            <CustomViews/>
            <Filters metadata={metaDataURL.filters} dataURI={dataURL}/>
            {/* <Table metaDataURL={metaDataURL} dataURL={dataURL} method={'post'} /> */}
            {/* <ToggleButtons /> */}
            <OrdersTabPanel metaDataURL={metaDataURL} dataURL={dataURL}/>
        </div>


    )
}

OrderStatusTracking.propTypes = {
    metaDataURL: PropTypes.object.isRequired,
    dataURL: PropTypes.string.isRequired,
}

export default OrderStatusTracking;