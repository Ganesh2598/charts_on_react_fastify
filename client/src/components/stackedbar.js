import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

function Stackedbar() {

    const [details, setDetails] = useState(null);

    useEffect(()=> {
        fetch("http://localhost:5000",{
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response=>response.json())
        .then(data=> {
            console.log(data)
            let result = [["Place","Population","Area"]]
            for (let item of data) {
                let record = []
                record[0] = item.name_of_the_ulb_with_grade
                record[1] = parseInt(item.population__2001_census_)
                record[2] = parseInt(item.area__in_sq_km_)
                result = [...result,record]
            }
            setDetails(result)
        })
    },[])

    return (

        <>
            <h4>Stacked Chart of Area and Population</h4>
            {
                details ? (
                    <div className="container1">
                        <Chart
                            width={'600px'}
                            height={'400px'}
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={details}
                            options={{
                                title: 'Population of Largest U.S. Cities',
                                chartArea: { width: '50%' },
                                isStacked: true,
                                hAxis: {
                                title: 'Total Population',
                                minValue: 0,
                                },
                                vAxis: {
                                title: 'City',
                                },
                            }}
                            // For tests
                            rootProps={{ 'data-testid': '3' }}
                        />
                    </div>
                ) : <h3>Loading...</h3>
            }
        </>

        
    )
}

export default Stackedbar;