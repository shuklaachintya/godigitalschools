// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React  from 'react';
import moment from 'moment'
const base = (window as any);

export class Config {
    public static domainURL = process.env.REACT_APP_API_ENDPOINT;
    //public static domainURL = base.env.API_ENDPOINT_URI;
    
    public static apiUrl = 'https://localhost:3000/';

    public static getUrl(url: string): string {
        return (url.endsWith('.json') ? Config.apiUrl : Config.domainURL) + url;
    }



}


// Human Readable Date
export class HumanReadableDate {


    public static getReadableDate(date: any, format: string, istime: boolean, timeFormat: boolean, local: string) {

        const event = new Date(date);

        // console.log(moment.locale())

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        const eventLocal = event.toLocaleDateString('en-US');

        const currentDate = event.toISOString();

        const datew = currentDate.split("T")[0];

        // var utcDate  = '2021-02-04T00:15:25.145+00:00';
        // var localDate = new Date(utcDate);
        // console.log(localDate)

        // Get day in number
        const currentDayOfMonth = datew.split("-")[2];
        // Get month (in number)
        const currentMonth = datew.split("-")[1];
        // Get year (4 Digit)
        const currentYear = datew.split("-")[0];
        // Get year (2 Digit)
        const currentYear2DIgit = currentYear.substr(2, 4);

        // Get time
        const getTime = currentDate.split("T")[1];
        const time = getTime.split(".");
        const time24Hours = time[0];
        let time12Hours = '';
        let timex = time24Hours.split(':');
        if (timex[0] !== undefined && timex[1] !== undefined) {
            let hor = parseInt(timex[0]) > 12 ? (parseInt(timex[0]) - 12) : timex[0];
            let minu = timex[1];
            let merid = parseInt(timex[0]) < 12 ? 'AM' : 'PM';
            let res = hor + ':' + minu + ' ' + merid;
            time12Hours = res.toString();
        }

        // Get current month in string (eg: February)
        const month = event.toLocaleString('default', { month: 'long' });

        // Get month sort string 
        const monthShort = event.toLocaleString('default', { month: 'short' });

        // Get Week Day in Short
        // const weekdayShort = event.toLocaleString('default', { weekday: 'short' });
        // console.log(weekdayShort);


        

        // Get Day of week in string (eg: Sunday)
        let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const getDay = weekday[event.getDay()];

        let change = '';
        if (format!='') {
            // Convert date format as passed
            change = format.replace("day", getDay).replace("DD", currentDayOfMonth).replace("MM", currentMonth).replace("YYYY", currentYear).replace("YY", currentYear2DIgit).replace("m", month).replace("M", monthShort);


            if (istime === true) {
                change = format.replace("day", getDay).replace("DD", currentDayOfMonth).replace("MM", currentMonth).replace("YYYY", currentYear).replace("YY", currentYear2DIgit).replace("m", month) + ', ' + time12Hours;
                if (timeFormat === true) {
                    change = format.replace("day", getDay).replace("DD", currentDayOfMonth).replace("MM", currentMonth).replace("YYYY", currentYear).replace("YY", currentYear2DIgit).replace("m", month).replace("M", monthShort) + ', ' + time24Hours;
                }
            }

            // Localization
            if (local != '' && local.length > 1) {
                // Get Local Year Date Month
                const dayhLocal = event.toLocaleString(local, { day: '2-digit' });
                const monthLocalString = event.toLocaleString(local, { month: 'long' });
                const monthLocalNum = event.toLocaleString(local, { month: '2-digit' });
                const yearLocal = event.toLocaleString(local, { year: 'numeric' });
                const weekdayLocal = event.toLocaleString(local, { weekday: 'long' });
                const localTime12 = event.toLocaleString(local, { hour: 'numeric', minute: '2-digit' });
                const localTime24 = event.toLocaleString(local, { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: false });
                // console.log(localTime24);
                change = format.replace("day", weekdayLocal).replace("DD", dayhLocal).replace("MM", monthLocalNum).replace("YYYY", yearLocal).replace("YY", currentYear2DIgit).replace("m", monthLocalString).replace("M", monthShort);
                if (istime === true) {
                    change = format.replace("day", weekdayLocal).replace("DD", dayhLocal).replace("MM", monthLocalNum).replace("YYYY", yearLocal).replace("YY", currentYear2DIgit).replace("m", monthLocalString).replace("M", monthShort) + ', ' + localTime12;
                    if (timeFormat === true) {
                        change = format.replace("day", weekdayLocal).replace("DD", dayhLocal).replace("MM", monthLocalNum).replace("YYYY", yearLocal).replace("YY", currentYear2DIgit).replace("m", monthLocalString).replace("M", monthShort) + ', ' + localTime24;
                    }
                }
            }
            // console.log(change)
        } else {
            change = currentDayOfMonth+'/'+currentMonth+'/'+currentYear;
        }

        return change;
    }
}