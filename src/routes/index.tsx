import { About, Profile, Projects } from '../pages';

export type RouteConfigItemType = {
    path: string;
    component: React.ReactNode;
    title: string;
};

export const routes: RouteConfigItemType[] = [
    { path: '/', component: <Profile />, title: 'Home' },
    { path: '/about', component: <About />, title: 'About' },
    { path: '/projects', component: <Projects />, title: 'My Projects' },
];
