import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';

const Chart: any = (props: typeof Chart.propTypes) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { componentName, componentWidth, Component, componentData } = props;

    const { MetaData, DataURI } = componentData;

    return (
        <Grid item xs={componentWidth}>
            <div><Component metaDataURL={MetaData} dataURL={DataURI}/></div>
        </Grid>
    )
}

Chart.propTypes = {
    componentName: PropTypes.string.isRequired,
    componentWidth: PropTypes.number,
    Component: PropTypes.elementType,
    componentData: PropTypes.object.isRequired
}

export default Chart
