import { en, es, type Translations } from './translations';

export type Language = 'en' | 'es';

export function getTranslations(lang: Language): Translations {
	return lang === 'es' ? es : en;
}

export function getLangFromUrl(url: URL): Language {
	const pathname = url.pathname;
	if (pathname.startsWith('/es/') || pathname === '/es') {
		return 'es';
	}
	return 'en';
}

export function getLocalizedPath(path: string, lang: Language): string {
	if (lang === 'es') {
		return `/es${path}`;
	}
	return path;
}
