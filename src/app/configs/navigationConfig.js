import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);
/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig = [
	{
		id: 'student-component',
		title: 'Student',
		translate: 'Student',
		type: 'collapse',
		icon: 'heroicons-outline:user-group',
		children: [
			{
				id: 'student',
				title: 'Student statistics',
				type: 'item',
				url: 'student',
				end: true
			},
			{
				id: 'student-talante',
				title: 'Iqtidorli talabalar',
				type: 'item',
				url: 'student/talante'
			}
		]
	},
	{
		id: 'student-component',
		title: 'Student',
		translate: 'Student',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'student'
	},
	{
		id: 'teacher-component',
		title: 'Teacher',
		translate: 'Teacher',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'teacher'
	}
];
export default navigationConfig;
