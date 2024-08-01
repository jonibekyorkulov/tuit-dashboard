import NavLinkAdapter from "@fuse/core/NavLinkAdapter";
import { Box, Paper, Typography } from "@mui/material";
import { lighten, useTheme } from '@mui/material/styles';
import { memo } from "react";

function TotalStudentWorkCompany() {
	const theme = useTheme();

    return (
        <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24">
			<div className="flex flex-col sm:flex-row items-center justify-between">
				<Typography className="text-lg font-medium tracking-tight leading-6 truncate center">
					Ish bilan band bo'lgan talabalar
                </Typography>
			</div>
            <div className="flex flex-col">
					<div className="flex-auto grid grid-cols-5 gap-16 mt-24">
                        <Box
                            sx={{
                                backgroundColor: (_theme) =>
                                    _theme.palette.mode === 'light'
                                        ? lighten(theme.palette.background.default, 0.4)
                                        : lighten(theme.palette.background.default, 0.02)
                            }}
                            component={NavLinkAdapter}
						    to="/student/cart"
                            className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl bg-green-50 text-green-800 cursor-pointer"
                        >
                            <Typography className="text-5xl font-semibold leading-none tracking-tight">
                                129
                            </Typography>
                            <Typography className="mt-4 text-sm font-medium text-center">IT kompaniyalarda </Typography>
                        </Box>
                        <Box
							sx={{
								backgroundColor: (_theme) =>
									_theme.palette.mode === 'light'
										? lighten(theme.palette.background.default, 0.4)
										: lighten(theme.palette.background.default, 0.02)
							}}
                            component={NavLinkAdapter}
						    to="/student/cart"
							className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl cursor-pointer bg-indigo-50 text-indigo-800"
						>
							<Typography className="text-5xl font-semibold leading-none tracking-tight">
								23
							</Typography>
							<Typography className="mt-4 text-sm font-medium text-center">Frilanser </Typography>
						</Box>
						<Box
							sx={{
								backgroundColor: (_theme) =>
									_theme.palette.mode === 'light'
										? lighten(theme.palette.background.default, 0.4)
										: lighten(theme.palette.background.default, 0.02)
							}}
                            component={NavLinkAdapter}
						    to="/student/cart"
							className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl cursor-pointer bg-green-50 text-green-800"
						>
							<Typography className="text-5xl font-semibold leading-none tracking-tight">
								17
							</Typography>
							<Typography className="mt-4 text-sm font-medium text-center">Maktab va texnikumlarda AKT o’qituvchisi</Typography>
						</Box>
						<Box
							sx={{
								backgroundColor: (_theme) =>
									_theme.palette.mode === 'light'
										? lighten(theme.palette.background.default, 0.4)
										: lighten(theme.palette.background.default, 0.02)
							}}
                            component={NavLinkAdapter}
						    to="/student/cart"
							className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl cursor-pointer bg-indigo-50 text-indigo-800"
						>
							<Typography className="text-5xl font-semibold leading-none tracking-tight">
								31
							</Typography>
							<Typography className="mt-4 text-sm font-medium text-center">O’quv markazlarda</Typography>
						</Box>
						<Box
							sx={{
								backgroundColor: (_theme) =>
									_theme.palette.mode === 'light'
										? lighten(theme.palette.background.default, 0.4)
										: lighten(theme.palette.background.default, 0.02)
							}}
                            component={NavLinkAdapter}
						    to="/student/cart"
							className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl cursor-pointer bg-green-50 text-green-800"
						>
							<Typography className="text-5xl font-semibold leading-none tracking-tight">
								72
							</Typography>
							<Typography className="mt-4 text-sm font-medium text-center">Davlat tashkilotlarida</Typography>
						</Box>
					</div>
				</div>
			
		</Paper>
    )
}
export default memo(TotalStudentWorkCompany);

