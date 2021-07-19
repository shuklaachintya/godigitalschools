import React from 'react';
import Grid from '@material-ui/core/Grid';
import Order from './Order/Order';
import GanttMetadata from '../../../../data/ganttdata/ganttmetadata.json';
import GanttWrapper from '../../../Charts/Gantt/GanttWrapper';
import { API_URI_GANTT_VIEW } from '../../../../../shared/global_constants';

const GanttPageMetadata = {
    pageElement: {
        componentList: [
                     {
                id: "1",
                componentName: "Gantt",
                componentWidth: 12,
                Component: GanttWrapper,
                componentData: {
                    MetaData: GanttMetadata,
                    DataURI: API_URI_GANTT_VIEW,
                    URL: {},
                    Arg: {}
                },
            }
        ]
    }
};

const GanttPage = () => {
    return (
        <div>
            <Grid container spacing={3}>
                {GanttPageMetadata.pageElement.componentList.map((item, index) => (
                    <Order {...item} key={index} />
                ))}
            </Grid>
        </div>
    )

}

export default GanttPage;