import FusePageSimple from '@fuse/core/FusePageSimple';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import TeacherStatistic from './widgets/TeacherStatistic';
import TeacherDegree from './widgets/TeacherDegree';
import TeacherBarChart from './widgets/TeacherBarChart';
import TeacherIndicator from './widgets/TeacherIndicator';
import TeacherGaugeWidget from './widgets/TeacherGaugeWidget';
import VerticalBarchartTeacher from './widgets/VerticalBarchartTeacher';


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


function Teacher() {
	const { t } = useTranslation('teacherPage');
	return (
		<Root
			header={
				<div className="p-24">
					<h4>{t('TITLE')}</h4>
				</div>
			}
			content={
				<div className="p-24">
					<div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-32 w-full p-24">
						<motion.div variants={item}>
							<TeacherIndicator />
						</motion.div>
					</div>
					<div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24">
						<motion.div variants={item} className="col-span-1">
							<TeacherStatistic />
						</motion.div>
						<motion.div variants={item} className="col-span-1 sm:col-span-2 lg:col-span-2">
							<TeacherDegree />
						</motion.div>

					</div>
					<div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24">
						
						<motion.div variants={item} className="col-span-1 sm:col-span-2 lg:col-span-2">
							<TeacherBarChart />
						</motion.div>
						<motion.div variants={item} className="col-span-1">
							<VerticalBarchartTeacher />
						</motion.div>
						
					</div>
					<div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-32 w-full p-24">
						<motion.div variants={item}>
							<TeacherGaugeWidget />
						</motion.div>
					</div>
				</div>
			}
		/>
	);
}

export default Teacher;
