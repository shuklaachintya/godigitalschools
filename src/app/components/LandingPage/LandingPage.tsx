import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';

//import landingPageMetaData from '../../data/landingPage.json';
//import StackedBarChart from '../Charts/StackedBarChart';
import Pages from './Pages/Pages';


const landingPageMetaData = {
    pageElement: {
        componentList: [
            /* {
                id: "1",
                componentName: "stackedBarChart",
                componentWidth: 6,
                Component: StackedBarChart,
                componentData: {
                    Data: {},
                    URL: {},
                    Arg: {}
                },
            },
            {
                id: "2",
                componentName: "stackedBarChart",
                componentWidth: 6,
                Component: StackedBarChart,
                componentData: {
                    Data: {},
                    URL: {},
                    Arg: {}
                },
            },
            {
                id: "3",
                componentName: "stackedBarChart",
                componentWidth: 12,
                Component: StackedBarChart,
                componentData: {
                    Data: {},
                    URL: {},
                    Arg: {}
                },
            } */
        ]
    }
};

const LandingPage = () => {
    return (
        <div>
            <Grid container spacing={3}>
                {landingPageMetaData.pageElement.componentList.map((item, index) => (
                    <Pages {...item} key={index} />
                ))}
            </Grid>
        </div>
    )

}

export default LandingPage;