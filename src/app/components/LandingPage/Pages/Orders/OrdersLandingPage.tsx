import React from 'react';
import Grid from '@material-ui/core/Grid';
import Order from './Order/Order';
import { API_URI_HISTORY_VIEW , API_URI_CONTROL_SHEETS} from '../../../../../shared/global_constants';


const controlSheetPageMetaData = {
    pageElement: {
        componentList: [
            /* {
                id: "1",
                componentName: "ControlSheet Landing Page",
                componentWidth: 9,
                Component: ControlSheetsPage,
                componentData: {
                    MetaData: tabsMetadata,
                    DataURI: {
                        recentlyViewed:  API_URI_CONTROL_SHEETS ,
                        masterControlSheets: API_URI_CONTROL_SHEETS
                    },
                    method:'get',
                    URL: {},
                    Arg: {}
                },
            },
            {
                id: "2",
                componentName: "ControlSheet Landing Page",
                componentWidth: 3,
                Component: ActivityLogger,
                componentData: {
                    MetaData: OrdersHistoryMetaData,
                    DataURI: API_URI_HISTORY_VIEW,
                    URL: {},
                    Arg: {}
                },
            } */
        ]
    }
};

const OdersLandingPage = () => {
    return (
        <div>
            <Grid container spacing={3}>
                {controlSheetPageMetaData.pageElement.componentList.map((item, index) => (
                    <Order {...item} key={index} />
                ))}
            </Grid>
        </div>
    )

}

export default OdersLandingPage;