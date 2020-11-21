import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";


function Scatter() {

    const [details, setDetails] = useState(null);

    useEffect(()=> {
        fetch("http://localhost:5000",{
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response=>response.json())
        .then(data=> {
            console.log(data)
            let result = [["Population","Area"]]
            for (let item of data) {
                let record = []
                record[0] = parseInt(item.population__2001_census_)
                record[1] = parseInt(item.area__in_sq_km_)
                result = [...result,record]
            }
            setDetails(result)
        })
    },[])

    return (
        <>
            <h4>Scattered Chart of Area and Population</h4>
            {
                details ? (
                    <div className="container1">
                        <Chart
                            width={'600px'}
                            height={'400px'}
                            chartType="ScatterChart"
                            loader={<div>Loading Chart</div>}
                            data={details}
                            options={{
                                title: 'Area vs Population comparison',
                                hAxis: { title: 'Population', minValue: 0, maxValue: 15 },
                                vAxis: { title: 'Area', minValue: 0, maxValue: 15 },
                                legend: 'none',
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
                    </div>
                ) : <h3>Loading...</h3>
            }
        </>
    )
}

export default Scatter