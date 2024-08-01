import { Paper, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { memo } from 'react';

function VerticalUzbekistanBar() {
    return (
        <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <Typography className="text-lg font-medium tracking-tight leading-6 truncate center p-24">
                    Talabalarning viloyatlar kesimida soni
                </Typography>
            </div>
            <BarChart
                xAxis={[
                    { 
                        scaleType: 'band', 
                        data: [
                            "Qoraqalpog‘iston",
                            'Andijon',
                            'Buxoro',
                            'Jizzax',
                            'Qashqadaryo',
                            'Namangan',
                            'Samarqand',
                            'Surxondaryo',
                            'Sirdaryo',
                            'Toshkent',
                            'Farg‘ona',
                            'Xorazm',
                            'Toshkent shahri'
                        ],
                        tickLabelAngle: -90 // Rotate labels by 90 degrees counter-clockwise
                    }
                ]}
                series={[{ data: [39, 62, 102, 38, 98, 83, 44, 51, 28, 86, 63, 34, 195] }]}
                width={1400}
                height={300}
                barLabel="value"
                grid={{ vertical: true }}
            />
        </Paper>
    );
}

export default memo(VerticalUzbekistanBar);
