import { Paper, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { memo } from "react";
import { PieChart } from '@mui/x-charts/PieChart';

function TeacherStatistic() {
    const theme = useTheme();
    const data = [
        { id: 0, value: 20, label: 'Ilmiy salohiyatga ega bo‘lgan' },
        { id: 1, value: 36, label: 'Ilmiy salohiyatga ega bo‘lmagan' },
    ];
    return (
        <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <Typography className="text-lg font-medium tracking-tight leading-6 truncate center p-24">
                    Fakultet professor-o'qituvchilarining ilmiy salohiyati
                </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 24px' }}>

                <PieChart
                    series={[
                        {
                            data,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            innerRadius: 45,
                            outerRadius: 90,
                            paddingAngle: 5,
                            cornerRadius: 5,
                            startAngle: -90,
                            cx: 180,
                            cy: 100,
                        },
                    ]}
                    height={300}
                    slotProps={{
                        legend: {
                        direction: 'row',
                        position: { vertical: 'bottom', horizontal: 'middle' },
                        padding: 0,
                        },
                    }}
                />
            </div>
        </Paper>
    )
}
export default memo(TeacherStatistic);

