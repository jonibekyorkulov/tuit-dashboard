import { Paper, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { memo } from 'react';

function VerticalBarchartTeacher() {
    return (
        <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <Typography className="text-lg font-medium tracking-tight leading-6 truncate center p-24">
                    O'rtacha yosh
                </Typography>
            </div>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['ATDT', 'TAD', 'A va MM', 'Oliy matematika'] }]}
                series={[{ data: [41, 45, 43, 41] }]}
                width={450}
                height={300}
                barLabel="value"
            />
        </Paper>
    );
}

export default memo(VerticalBarchartTeacher);