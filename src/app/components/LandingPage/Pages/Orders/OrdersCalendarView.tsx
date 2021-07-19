import React from 'react';
import Grid from '@material-ui/core/Grid';
import Order from './Order/Order';
import CalendarMetadata from '../../../../data/schedulerdata/metadata.json';
import SchedulerWrapper from '../../../Charts/Scheduler/SchedulerWrapper';
import { API_URI_CALENDAR_VIEW } from '../../../../../shared/global_constants';


const CalendarPageMetadata = {
    pageElement: {
        componentList: [
            {
                id: "1",
                componentName: "Calendar",
                componentWidth: 12,
                Component: SchedulerWrapper,
                componentData: {
                    MetaData: CalendarMetadata,
                    DataURI: API_URI_CALENDAR_VIEW,
                    URL: {},
                    Arg: {}
                },
            }
        ]
    }
};

const CalendarPage = () => {
    return (
        <div>
            <Grid container spacing={3}>
                {CalendarPageMetadata.pageElement.componentList.map((item, index) => (
                    <Order {...item} key={index} />
                ))}
            </Grid>
        </div>
    )

}

export default CalendarPage;