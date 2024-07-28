import i18next from 'i18next';
import { lazy } from 'react';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'teacherPage', en);
i18next.addResourceBundle('tr', 'teacherPage', tr);
i18next.addResourceBundle('ar', 'teacherPage', ar);
const Teacher = lazy(() => import('./Teacher'));
/**
 * The Example page config.
 */
const TeacherConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'teacher',
			element: <Teacher />
		}
	]
};
export default TeacherConfig;
