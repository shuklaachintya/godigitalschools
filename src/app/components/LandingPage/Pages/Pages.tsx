import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';

const Pages: any = (props: typeof Pages.propTypes) => {

    const { componentName, componentWidth, Component } = props;

    return (
        <Grid item xs={componentWidth}>
            <div><Component /></div>
        </Grid>
    )
}

Pages.propTypes = {
    componentName: PropTypes.string.isRequired,
    componentWidth: PropTypes.number,
    Component: PropTypes.elementType
}

export default Pages
