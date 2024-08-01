import FusePageSimple from '@fuse/core/FusePageSimple';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import TeamMembersWidget from './widgets/TeamMembersWidget';


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
const container = {
    show: {
        transition: {
            staggerChildren: 0.04
        }
    }
};

function StudentCart() {
    const { t } = useTranslation('studentCartPage');
    return (
        <Root
            header={
                <div className="p-24">
                    <h4>{t('TITLE')}</h4>
                </div>
            }
            content={

                <div  className="widget flex w-full p-24">
                    <TeamMembersWidget />
                </div>
                



            }
        />
    );
}

export default StudentCart;
