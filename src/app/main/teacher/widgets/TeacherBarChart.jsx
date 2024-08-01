import { Paper, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { memo } from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const chartSetting = {
    width: 1200,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
    slotProps: {
        legend: {
          direction: 'row',
          position: { vertical: 'bottom', horizontal: 'middle' },
          padding: -5,
        },
      },
  };
  
const valueFormatter = (value) => `${value}%`;
const dataset = [
    {
      london: 40,
      paris: 42,
      newYork: 14,
      month: '2021',
    },
    {
      london: 47,
      paris: 42,
      newYork: 14,
      month: '2022',
    },
    {
      london: 76,
      paris: 46,
      newYork: 14,
      month: '2023',
    }
  ];
  

function TeacherBarChart() {
    const theme = useTheme();
    return (
        <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <Typography className="text-lg font-medium tracking-tight leading-6 truncate center p-24">
                    Fakultet professor-o'qituvchilarining ilmiy salohiyati
                </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 24px' }}>

                <BarChart
                    dataset={dataset}
                    xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                    borderRadius={10}
                    series={[
                        { dataKey: 'london', label: 'Axborot xavfsziligi', valueFormatter },
                        { dataKey: 'paris', label: 'Kriptologiya', valueFormatter },
                        { dataKey: 'newYork', label: 'Kiberxavfsizlik va kriminalistika', valueFormatter },
                    ]}
                    {...chartSetting}
                />
            </div>
        </Paper>
    )
}
export default memo(TeacherBarChart);

