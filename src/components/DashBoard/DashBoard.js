import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='container mx-auto'>
            <h2 className='my-8 text-4xl font-bold text-center text-gray-600'>Chart Data</h2>
            <div className=' my-16 items-center grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2'>
                <div>
                    <h2 className='text-center mt-8 text-2xl font-bold mb-3 text-sky-600'>INVESTMENT VS REVENUE</h2>
                    <BarChart width={500} height={500} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey='investment' />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>

                <div>
                    <h2 className='text-center mt-8 mb-3 text-3xl font-bold text-sky-600'>MONTH WISE SELL</h2>
                    <LineChart width={500} height={500} data={data}>
                        <Line dataKey={'sell'}></Line>
                        <YAxis dataKey={'sell'} ></YAxis>
                        <Tooltip></Tooltip>
                        <Legend />
                        <XAxis dataKey={"month"}></XAxis>
                    </LineChart>
                </div>

                <div>
                    <h2 className='text-center mt-8 text-2xl font-bold mb-3 text-sky-600'>INVESTMENT VS REVENUE</h2>
                    <ComposedChart width={500} height={500} data={data}>
                        <XAxis dataKey="month" />
                        <YAxis dataKey={"investment"} />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                    </ComposedChart>
                </div>
                <div>
                <h2 className='text-center mt-8 text-2xl font-bold mb-3 text-sky-600'>INVESTMENT VS REVENUE</h2>
                    <PieChart width={500} height={500}>
                        <Pie data={data} dataKey="revenue" nameKey="investment" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={data} dataKey="investment" nameKey="revenue" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>

            </div>
        </div>

    );
};

export default DashBoard;