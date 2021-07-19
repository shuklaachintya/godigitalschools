import React from 'react';

import Grid from '@material-ui/core/Grid';
import Chart from './Chart/Chart';

import { API_URI_PRODUCT_VIEW } from '../../../../../shared/global_constants';
import GanttWrapper from '../../../Charts/Gantt/GanttWrapper';
import GanttMetaData from "../../../../data/ganttdata/ganttmetadata.json";

const chartsPageMetaData = {
    pageElement: {
        componentList: [
            {
                id: "1",
                componentName: "Gantt Landing Page",
                componentWidth: 12,
                Component: GanttWrapper,
                componentData: {
                    MetaData: GanttMetaData,
                    DataURI: API_URI_PRODUCT_VIEW,
                    URL: {},
                    Arg: {}
                },
            }
        ]
    }
};

const ChartsGantt = () => {
    return (
        <div>
            <Grid container spacing={3}>
                {chartsPageMetaData.pageElement.componentList.map((item, index) => (
                    <Chart {...item} key={index} />
                ))}
            </Grid>
        </div>
    )

}

export default ChartsGantt;