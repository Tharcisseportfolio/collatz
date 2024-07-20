import React, { useState } from 'react';
import Arrow from '../assets/arrow.svg';
import { Link } from 'react-router-dom';
// import Graph from './Graph';
import AllGraphs from './AllGraphs';
import { Scatter, Line,Bar } from 'react-chartjs-2';
import SelectInput from './SelectInput';
import Formula from './Formula';
import '../styles/allGraphing.css';

const Graphing = () => {

    const [number, setNumber] = useState(0);
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        { value: '', label: 'Choose display' },
        { value: 'Bar', label: 'Bar Display' },
        { value: 'Line', label: 'Ploting/Line display' },
        { value: 'Scatter', label: 'Scatter/Dot display' },
        {value:"",label:`Graph for num in between 1 and ${data[0]}`}
        // Add more options here
    ];

    const graphComponents = {
        Bar: Bar,
        Scatter: Scatter,
        Line: Line,
        
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

    const SelectedGraphComponent = graphComponents[selectedOption];

    const handleSelectChange = (value) => {
        setSelectedOption(value);
    };

    const handleNumber = (e) => {
        setNumber(parseInt(e.target.value));
    };

    const collatz = (n) => {
        let sequence = [n];
        while (n !== 1) {
            if (n % 2 === 0) {
                n = n / 2;
            } else {
                n = 3 * n + 1;
            }
            sequence.push(n);
        }
        return sequence;
    };

    const allCollatz = (n) => {
        let allData = [];
        for (let i = 1; i <= n; i++) {
            allData.push(collatz(i));
        }

        console.log(allData);
        return allData;
    };



    

    const handleSubmit = (e) => {
        e.preventDefault();
        setData(collatz(number));
        setAllData(allCollatz(number));
    };


    const description = {
        text:`The collatz sequence for the number ${data[0]} is of the length ${data.length}. One the challgenges of the collatz conjecture is that no matter the number you start with, you will always end up with the number 1 but no one has proven this conjecture to apply for every existing number. Mathematicians have tried the long numbers that a computer can handle but there is a limit of computation level by this time. Hopefully, if we get a computing machine, there is a possibility of proving this conjecture.`
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" name="number" id="number" onChange={handleNumber}  placeholder='Enter a number' className='text-secondary' defaultValue={4}/>
                <button type="submit" className='btn btn-primary'>Generate</button>
            </form>

            <div className='sequence'>
                <div className='sequence'>
                    <div className="details-container">
                        <details>
                            <summary>What is collatz conjecture and why is not proven yet</summary>
                            <p>
                            {description.text}
                            </p>
                        </details>
                        
                        <details>
                            <summary>View sequence for the number {data[0]}</summary>
                            <p>
                            {data.map((num, index) => (
                                <span key={index}> {num} {index !== data.length - 1 && <img src={Arrow} alt='arrow' />}</span>
                            ))}
                            </p>
                        </details>
                        </div>
                </div>
            </div>

            <SelectInput className='options'
                options={options}
                selectedValue={selectedOption}
                onChange={handleSelectChange}
            />
            <div className='selection d-flex m-4'>
                <div className='graphs-list'>
                    {SelectedGraphComponent && <SelectedGraphComponent data={chartData} options={chartOptions} />}

                    {SelectedGraphComponent !== undefined && <AllGraphs sequences={allData} Type={SelectedGraphComponent} />}
                </div>

                <div className='description-text ms-4 fs-5 border border-dark p-5 border-2 rounded'>
                    <h1 className='fs-4 text-warning'>Collatz Conjecture </h1>
                    <p className='bg-black '>
                        The Collatz conjecture is a conjecture in mathematics that concerns a sequence defined as follows: start with any positive integer n. Then each term is obtained from the previous term as follows: if the previous term is even, the next term is one half of the previous term. If the previous term is odd, the next term is 3 times the previous term plus 1. The conjecture is that no matter what value of n, the sequence will always eventually reach 1.<br></br>

                        
                    </p>
                    <h1 className='fs-4 text-warning'>The formula for collatz is</h1>

                    <h3>... <Formula  expression=' 3x + 1' /> if the number is odd and  <Formula  expression=' 2x/2' /> if it is even continuously until you reach 1.</h3>
                    <h1 className='fs-4 text-warning'>Example</h1>
                    <p>For example, if you start with <span className='text-warning'>12</span>, the sequence is: <span className='text-warning'>12, 6, 3, 10, 5, 16, 8, 4, 2, 1</span>. Because 12 is even and <Formula expression=' 12/2' />  is 6 and 6 , you get 3 but 3 is odd then you apply <Formula expression=' 3x+1' /> formula and now  3*3 + 1 we get <span className='text-warning'>10....</span> </p>
                    
                    <Link to='/quiz'><button className='btn btn-success'>Take assessment</button></Link>
                </div>

            </div>



÷


        </div>
    );
};

export default Graphing;
