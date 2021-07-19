import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';

const Order : any = (props : typeof Order.propTypes) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { componentName, componentWidth, Component, componentData } = props;

    const { MetaData, DataURI, method } = componentData;

    return (
        <Grid item xs={componentWidth}>
            <div><Component metaDataURL={MetaData} dataURL={DataURI} method={method}/></div>
        </Grid>
    )
}

Order.propTypes = {
    componentName: PropTypes.string.isRequired,
    componentWidth: PropTypes.number.isRequired,
    Component: PropTypes.elementType.isRequired,
    componentData: PropTypes.object.isRequired
}

export default Order
