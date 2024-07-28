import { memo } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Paper, Typography } from '@mui/material';
import { dataset } from '../dataset/place.ts';

const chartSetting = {

    width: 700,
    height: 300,
};

const valueFormatter = (value) => `${value}mm`;

function PlaceStudent() {

    return (
        <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <Typography className="text-lg font-medium tracking-tight leading-6 truncate center p-24">
                    Talabalarning yashash o'rni haqida ma'lumot
                </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 24px' }}>
                <BarChart
                    dataset={dataset}
                    yAxis={[
                        {
                            scaleType: 'band',
                            dataKey: 'name',
                            
                        }
                    ]}
                    series={[{ dataKey: 'count', valueFormatter }]}
                    layout="horizontal"
                    grid={{ vertical: true }}
                    barLabel="value"
                    {...chartSetting}
                />
            </div>
        </Paper>
    );
}

export default memo(PlaceStudent);
