import FusePageSimple from '@fuse/core/FusePageSimple';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import TotalStudent from './widgets/TotalStudent';
import HorizantalBarchart from './widgets/HorizantalBarchart';
import VerticalBarchart from './widgets/VerticalBarchart';
import OverdueWidget from './widgets/OverdueWidget';
import GanderStudent from './widgets/GanderStudent';
import PlaceStudent from './widgets/PlaceStudent';
import BudgetWidget from './widgets/BudgetWidget';
import BudgetWidgetRight from './widgets/BudgetWidgetRight';
import VerticalUzbekistanBar from './widgets/VerticalUzbekistanBar';


const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-header': {
		backgroundColor: theme.palette.background.paper,
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderColor: theme.palette.divider
	},
	'& .FusePageSimple-content': {},
	'& .FusePageSimple-sidebarHeader': {},
	'& .FusePageSimple-sidebarContent': {}
}));

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 }
};


function Student() {
	const { t } = useTranslation('studentPage');
	return (
		<Root
			header={
				<div className="p-24">
					<h4>{t('TITLE')}</h4>
				</div>
			}
			content={
				<div className="p-24">
					<div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24">
						<motion.div variants={item}>
							<TotalStudent />
						</motion.div>

						<motion.div variants={item}>
							<VerticalBarchart />
						</motion.div>
						<motion.div variants={item}>
							<HorizantalBarchart />
						</motion.div>
					</div>
					<div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24">
						<motion.div variants={item} className="col-span-1 sm:col-span-2 lg:col-span-2">
							<PlaceStudent />
						</motion.div>
						<motion.div variants={item} className="col-span-1">
							<GanderStudent />
						</motion.div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24">
						<motion.div variants={item}>
							<OverdueWidget title='Kursdan qolgan talabalar' ratio='20 / 6' color="text-blue-600" />
						</motion.div>
						<motion.div variants={item}>
							<OverdueWidget title="Akademik tatil olganlar" ratio='0 / 1' color="text-red-600" />
						</motion.div>
						<motion.div variants={item}>
							<OverdueWidget title='Akademik mobillik davridagilar' ratio='10 / 0' color="text-amber-600" />
						</motion.div>
						<motion.div variants={item}>
							<OverdueWidget title='Chetlashtirilgan talabalar' ratio='13 / 4' color="text-green-600" />
						</motion.div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-24 w-full min-w-0 p-24">
						<motion.div variants={item}>
							<BudgetWidget />
						</motion.div>
						<motion.div variants={item}>
							<BudgetWidgetRight />
						</motion.div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-24 w-full min-w-0 p-24">
						<motion.div variants={item}>
							<VerticalUzbekistanBar />
						</motion.div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-24 w-full min-w-0 p-24">
						<motion.div variants={item}>
							
						</motion.div>
						
					</div>
				</div>
			}
		/>
	);
}

export default Student;
