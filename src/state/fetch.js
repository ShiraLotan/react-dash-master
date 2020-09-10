
import { fetchDataRequest, fetchDataSuccess, fetchDataFaliure } from '../state/action';

export const fetchData = () => {
    return async function (dispatch) {
        dispatch(fetchDataRequest());
        try {
            const res = await fetch('https://covid-193.p.rapidapi.com/history?day=2020-06-02&country=usa', {
                method: 'GET',
                headers: {
                    "x-rapidapi-host": "covid-193.p.rapidapi.com",
                    "x-rapidapi-key": "d48d540977msh3fa07820543a991p154cb1jsn3f9c7a3051fb"
                }
            });
            const data = await res.json();
            const filterDataObj = filterData(data);
            
            dispatch(fetchDataSuccess(filterDataObj));
        } catch (error) {
            console.log(error) //ADD ERROR HANDLING
            dispatch(fetchDataFaliure());
        }
    }

}

const filterData = (data)=>{
    const filterDataToArr = []
    for (const [key, value] of Object.entries(data.response)) {
        const row = [value["time"],value["deaths"]["new"],value["deaths"]["total"],value["tests"]["total"],value["cases"]["active"],value["cases"]["critical"]];      
        filterDataToArr.push(row)
    }
    const newObj = {
        country: data.parameters.country,
        day: data.parameters.day,
        tableRows: filterDataToArr
    };
    return newObj

}