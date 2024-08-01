import i18next from 'i18next';
import { lazy } from 'react';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'studentTalantPage', en);
i18next.addResourceBundle('tr', 'studentTalantPage', tr);
i18next.addResourceBundle('ar', 'studentTalantPage', ar);
const StudentTalant = lazy(() => import('./StudentTalant'));
/**
 * The Example page config.
 */
const StudentTalanConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'student/talante',
			element: <StudentTalant />
		}
	]
};
export default StudentTalanConfig;
