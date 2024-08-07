import { Paper, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { memo } from 'react';

function VerticalBarchart() {
    return (
        <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <Typography className="text-lg font-medium tracking-tight leading-6 truncate center p-24">
                    Kurslar bo'yicha talabalar soni
                </Typography>
            </div>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['1 - kurs', '2 - kurs', '3 - kurs', '4 - kurs'] }]}
                series={[{ data: [300, 243, 236, 236] }]}
                width={450}
                height={300}
                barLabel="value"
            />
        </Paper>
    );
}

export default memo(VerticalBarchart);