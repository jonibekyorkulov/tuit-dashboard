import * as React from 'react';
import { memo } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Stack from '@mui/material/Stack'
import { Paper, Typography } from '@mui/material';

const dataset = [
    [63, 173, '1 - kurs'],
    [69, 167, '2 - kurs'],
    [103, 140, '3 - kurs'],
    [128, 171, '4 - kurs'],
].map(([high, low, order]) => ({
    high,
    low,
    order,
}));
const chartSettingsH = {
    dataset,
    height: 300,
    yAxis: [{ scaleType: 'band', dataKey: 'order' }],
    slotProps: {
        legend: {
            direction: 'row',
            position: { vertical: 'bottom', horizontal: 'middle' },
            padding: -5,
        },
    },
};
const chartSettingsV = {
    ...chartSettingsH,
    xAxis: [{ scaleType: 'band', dataKey: 'order' }],
    yAxis: undefined,
};


function HorizantalBarchart() {
    const [layout, setLayout] = React.useState('horizontal');
    const [radius, setRadius] = React.useState(10);

    return (
        <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <Typography className="text-lg font-medium tracking-tight leading-6 truncate center p-24">
                    To'lov Shakli taqsimoti
                </Typography>
            </div>
            <Stack direction="column" spacing={1} sx={{ width: '100%', maxWidth: 800 }}>
                <BarChart
                    series={[
                        { dataKey: 'high', label: 'Grant', layout, stack: 'stack' },
                        { dataKey: 'low', label: 'Kontrakt', layout, stack: 'stack' },
                        
                    ]}
                    {...(layout === 'vertical' ? chartSettingsV : chartSettingsH)}
                    borderRadius={radius}
                    barLabel="value"
                />

            </Stack>
        </Paper>
    );
}

export default memo(HorizantalBarchart);
