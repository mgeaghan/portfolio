export interface NavLink {
	id: number;
	text: string;
	path: string;
}

export const NAVLINKS: NavLink[] = [
	{ id: 0, text: 'About Me', path: "/aboutme" },
	{ id: 1, text: 'Placeholder', path: "/tmp" },
];