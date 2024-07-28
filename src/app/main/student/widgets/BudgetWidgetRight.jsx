import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import Button from '@mui/material/Button';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';

/**
 * The BudgetWidget widget.
 */
function BudgetWidgetRight() {
	const notebook = 50
	const notebookLimit = 100


	function calcProgressVal(val, limit) {
		const percentage = (val * 100) / limit;
		return percentage > 100 ? 100 : percentage;
	}

	return (
		<Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden">
			<div className="flex items-center justify-between">
				<div className="flex flex-col">
					<Typography className="mr-16 text-lg font-medium tracking-tight leading-6 truncate">
						Ijtimoiy Holat
					</Typography>

				</div>

			</div>

			<div className="my-32 space-y-32">
				<div className="flex flex-col">
					<div className="flex items-center space-x-16">
						<div className="flex items-center justify-center w-56 h-56 rounded bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-50">
							<Typography className="text-24 font-bold text-current">9</Typography>
						</div>
						<div className="flex-auto leading-none">
							<Typography
								className="text-20 font-medium"
								color="text.secondary"
							>
								Chin yetim va mehribonlik uylarida tarbiyalanuvchilar
							</Typography>

							<LinearProgress
								variant="determinate"
								className="mt-4"
								color="warning"
								value={calcProgressVal(notebook, notebookLimit)}
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col">
					<div className="flex items-center space-x-16">
						<div className="flex items-center justify-center w-56 h-56 rounded bg-amber-100 text-amber-800 dark:bg-amber-600 dark:text-amber-50">
							<Typography className="text-24 font-bold text-current">25</Typography>
						</div>
						<div className="flex-auto leading-none">
							<Typography
								className="text-20 font-medium"
								color="text.secondary"
							>
								Nogironligi bolgan talabalar
							</Typography>

							<LinearProgress
								variant="determinate"
								className="mt-4"
								color="success"
								value={calcProgressVal(notebook, notebookLimit)}
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col">
					<div className="flex items-center space-x-16">
						<div className="flex items-center justify-center w-56 h-56 rounded bg-teal-100 text-teal-800 dark:bg-teal-600 dark:text-teal-50">
							<Typography className="text-24 font-bold text-current">41</Typography>
						</div>
						<div className="flex-auto leading-none">
							<Typography
								className="text-20 font-medium"
								color="text.secondary"
							>
								Ijtimoiy himoyaga muhtoj talabalar
							</Typography>

							<LinearProgress
								variant="determinate"
								className="mt-4"
								color="secondary"
								value={calcProgressVal(notebook, notebookLimit)}
							/>
						</div>
					</div>
				</div>
			</div>
		</Paper>
	);
}

export default memo(BudgetWidgetRight);
