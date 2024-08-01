import { memo } from 'react';
import Stack from '@mui/material/Stack';
import { Gauge, gaugeClasses  } from '@mui/x-charts/Gauge';
import { Paper, Typography } from '@mui/material';



function TeacherGaugeWidget() {

    return (
        <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <Typography className="text-lg font-medium tracking-tight leading-6 truncate center">
                    Shtat birligi: 108.5
                </Typography>
            </div>
            <div className="flex flex-col">
				<div className="flex-auto grid grid-cols-4 gap-16 mt-24">
                    <div>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
                            <Gauge
                                width={250}
                                height={300}
                                value={30}
                                sx={(theme) => ({
                                    [`& .${gaugeClasses.valueText}`]: {
                                      fontSize: 45,
                                    },
                                    [`& .${gaugeClasses.valueArc}`]: {
                                      fill: 'rgb(46 150 255)',
                                    },
                                    
                                  })}
                                />
                        </Stack>
                        <Typography className="text-lg font-medium tracking-tight leading-6 truncate center" align="center">
                            ATDT
                        </Typography>
                    </div>
                    <div>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
                            <Gauge
                                width={250}
                                height={300}
                                value={18.75}
                                sx={(theme) => ({
                                    [`& .${gaugeClasses.valueText}`]: {
                                      fontSize: 45,
                                    },
                                    [`& .${gaugeClasses.valueArc}`]: {
                                      fill: 'rgb(46 150 255)',
                                    },
                                    
                                  })}
                                />
                        </Stack>
                        <Typography className="text-lg font-medium tracking-tight leading-6 truncate center" align="center">
                            TAD
                        </Typography>
                    </div>
                    <div>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
                            <Gauge
                                width={250}
                                height={300}
                                value={27.75}
                                sx={(theme) => ({
                                    [`& .${gaugeClasses.valueText}`]: {
                                      fontSize: 45,
                                    },
                                    [`& .${gaugeClasses.valueArc}`]: {
                                      fill: 'rgb(46 150 255)',
                                    },
                                    
                                  })}
                                />
                        </Stack>
                        <Typography className="text-lg font-medium tracking-tight leading-6 truncate center" align="center">
                            A va MM
                        </Typography>
                    </div>
                    <div>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
                            <Gauge
                                width={250}
                                height={300}
                                value={32} 
                                sx={(theme) => ({
                                    [`& .${gaugeClasses.valueText}`]: {
                                      fontSize: 45,
                                    },
                                    [`& .${gaugeClasses.valueArc}`]: {
                                      fill: 'rgb(46 150 255)',
                                    },
                                    
                                  })}/>
                        </Stack>
                        <Typography className="text-lg font-medium tracking-tight leading-6 truncate center" align="center">
                            Oliy matematika
                        </Typography>
                    </div>
                </div>
            </div>
        </Paper>
    );
}

export default memo(TeacherGaugeWidget);
