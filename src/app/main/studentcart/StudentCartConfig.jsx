import i18next from 'i18next';
import { lazy } from 'react';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'studentCartPage', en);
i18next.addResourceBundle('tr', 'studentCartPage', tr);
i18next.addResourceBundle('ar', 'studentCartPage', ar);
const StudentCart = lazy(() => import('./StudentCart'));
/**
 * The Example page config.
 */
const StudentCartConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'student/cart',
			element: <StudentCart />
		}
	]
};
export default StudentCartConfig;
