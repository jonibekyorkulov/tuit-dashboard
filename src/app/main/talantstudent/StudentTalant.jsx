import FusePageSimple from '@fuse/core/FusePageSimple';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import TalantStudent from './widgets/TalantStudent';
import VerticalBarchartTalant from './widgets/VerticalBarchartTalant';
import TotalStudentWork from './widgets/TotalStudentWork';
import TotalStudentWorkCompany from './widgets/TotalStudentWorkCompany';


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


function StudentTalant() {
	const { t } = useTranslation('studentTalantPage');
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
							<TalantStudent />
						</motion.div>
					</div>
					<div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-32 w-full p-24">
						<motion.div variants={item}>
							<VerticalBarchartTalant />
						</motion.div>
						<motion.div variants={item}>
							<TotalStudentWork />
						</motion.div>
					</div>
					<div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-32 w-full p-24">
						<motion.div variants={item}>
							<TotalStudentWorkCompany />
						</motion.div>
					</div>
				</div>
			}
		/>
	);
}

export default StudentTalant;
