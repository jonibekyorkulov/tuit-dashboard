import i18next from 'i18next';
import { lazy } from 'react';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'studentPage', en);
i18next.addResourceBundle('tr', 'studentPage', tr);
i18next.addResourceBundle('ar', 'studentPage', ar);
const Student = lazy(() => import('./Student'));
/**
 * The Example page config.
 */
const StudentConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'student',
			element: <Student />
		}
	]
};
export default StudentConfig;
