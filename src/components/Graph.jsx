import React,{useState,useEffect} from 'react';
import { Chart, LineElement, PointElement, LinearScale, CategoryScale,BarElement, plugins } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Scatter } from 'react-chartjs-2';
import AllGraphs from './AllGraphs';
import SelectInput from '../components/SelectInput';
import '../styles/Graph.css'


// Register the necessary Chart.js components
Chart.register(LineElement,BarElement,PointElement, LinearScale, CategoryScale);

const Graph = ({ data,Type=Line }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const options = [
        { value: '', label: 'Choose display' },
        { value: 'Bar', label: 'Bar Display' },
        { value: 'Line', label: 'Ploting/Line display' },
        { value: 'Scatter', label: 'Scatter/Dot display' },
        {value:"e",label:`Graph for num in between 1 and ${data[0]}`}
        // Add more options here
    ];

    const handleSelectChange = (value) => {
        setSelectedOption(value);
    };
    const chartData = {
        labels: data.map((_, index) => `Step ${index + 1}`),
        datasets: [
            {
                label: "number reached",
                data: data,
                borderColor: 'aqua',
                backgroundColor: 'aqua',
                borderWidth: 1,
                tension: 0.1,
                padding: 10,
            },
        ]
    };

    const chartOptions = {
        scales: {
            x: {
                type: 'category',
                title: {
                    display: true,
                    text: 'LENGTH OF SEQUENCE',
                }
            },
            y: {
                title: {
                    display: true,
                    text:"NUMBER REACHED IN SEQUENCE"
                },
                beginAtZero: true
            }
        },
        animation: {
            duration: 1000,
        },


    };

    const graphComponents = {
        Bar: Bar,
        Scatter: Scatter,
        Line: Line,
        
    };

    const SelectedGraphComponent = graphComponents[selectedOption];
    


    return (
        <div className='graphs'>
            <SelectInput className='options'
                options={options}
                selectedValue={selectedOption}
                onChange={handleSelectChange}
            />
            <div className='selection'>
                {SelectedGraphComponent && <SelectedGraphComponent data={chartData} options={chartOptions} />}
            </div>


            
        </div>
    );
}

export default Graph;