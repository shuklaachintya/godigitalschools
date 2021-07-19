import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';

import CalendarWrapper from './OrdersCalendarView';
import GanttPage from './OrdersGanttView';
import Table from "../../../Table/Table";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={0}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const OrdersTabPanel = (props: any) => {
    return (
        <div>
            <TabPanel value={props.customise.whichTabPanel} index={0}>
                {<Table metaDataURL={props.metaDataURL} dataURL={props.dataURL} method={'post'} />}
                {/* <Orders /> */}
            </TabPanel>
            <TabPanel value={props.customise.whichTabPanel} index={1}>
                <GanttPage />
            </TabPanel>
            <TabPanel value={props.customise.whichTabPanel} index={2}>
                <CalendarWrapper />
            </TabPanel>
        </div>
    )
}

const mapStateToProps = (state: any) => ({

    customise: state.customise

})

export default connect(mapStateToProps)(OrdersTabPanel)
