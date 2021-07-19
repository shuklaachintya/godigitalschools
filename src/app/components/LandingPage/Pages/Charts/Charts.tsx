import React from 'react';

import Grid from '@material-ui/core/Grid';
import Chart from './Chart/Chart';
import List from './../../../List/List';
import './Charts.css'


import ChartWrapperMetaData1 from "../../../../data/chartviewdata/chartView1.json";
import ChartWrapperMetaData2 from "../../../../data/chartviewdata/chartView2.json";
import ChartWrapperMetaData3 from "../../../../data/chartviewdata/chartView3.json"; 
import ChartWrapperMetaData4 from '../../../../data/chartviewdata/chartViewMultiSeries.json'
// import listData from '../../../../data/lisToggle.json'

import { API_URI_ORDER_VIEW } from '../../../../../shared/global_constants';
import ChartWrapper from '../../../Charts/ChartWrapper/ChartWrapper'

const chartsPageMetaData = {
    pageElement: {
        componentList: [
            {
                id: "1",
                componentName: "List Wrapper",
                componentWidth:2,
                Component: List,
                componentData: {
                    MetaData:ChartWrapperMetaData4, 
                    DataURI:[ API_URI_ORDER_VIEW,API_URI_ORDER_VIEW],
                    URL: {},
                    Arg: {}
                },
            },
            {
                id: "2",
                componentName: "Chart Wrapper",
                componentWidth:6,
                Component: ChartWrapper,
                componentData: {
                    MetaData: ChartWrapperMetaData4,
                    DataURI:[ API_URI_ORDER_VIEW,API_URI_ORDER_VIEW],
                    URL: {},
                    Arg: {}
                },
            },
            // {
            //     id: "3",
            //     componentName: "Chart Wrapper",
            //     componentWidth: 6,
            //     Component: ChartWrapper,
            //     componentData: {
            //         MetaData: ChartWrapperMetaData2,
            //         DataURI: [API_URI_ORDER_VIEW,API_URI_ORDER_VIEW],
            //         URL: {},
            //         Arg: {}
            //     },
            // },
            // {
            //     id: "4",
            //     componentName: "Chart Wrapper",
            //     componentWidth: 12,
            //     Component: ChartWrapper,
            //     componentData: {
            //         MetaData: ChartWrapperMetaData3,
            //         DataURI: [API_URI_ORDER_VIEW,API_URI_ORDER_VIEW],
            //         URL: {},
            //         Arg: {}
            //     },
            // }
        ]
    }
};

const Charts = () => {
    return (
        <div>
            <Grid container className='grid-item'>
                {chartsPageMetaData.pageElement.componentList.map((item, index) => (
                    <Chart {...item} key={index} />
                ))}
            </Grid>
        </div>
    )

}

export default Charts