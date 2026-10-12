import { useEffect } from 'react';
import { siteInfo } from '@/data/siteInfo';

interface SEOProps {
    title: string;
    description: string;
    path: string;
    image?: string;
    type?: string;
    jsonLd?: object | object[];
}

/**
 * Manages document head meta tags for SEO, Open Graph and Twitter cards.
 * Injects and cleans up tags on mount/unmount.
 */
export default function SEO({ title, description, path, image, type = 'website', jsonLd }: SEOProps) {
    const fullTitle = title.includes(siteInfo.shortName)
        ? title
        : `${title} | ${siteInfo.shortName}`;
    const canonicalUrl = `${siteInfo.url}${path}`;
    const ogImage = image || `${siteInfo.url}/og-image.jpg`;

    useEffect(() => {
        document.title = fullTitle;

        const setMeta = (selector: string, attr: string, name: string, content: string) => {
            let el = document.head.querySelector(selector) as HTMLMetaElement | null;
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attr, name);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        setMeta('meta[name="description"]', 'name', 'description', description);
        setMeta('meta[name="robots"]', 'name', 'robots', 'index, follow');

        setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
        setMeta('meta[property="og:description"]', 'property', 'og:description', description);
        setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
        setMeta('meta[property="og:type"]', 'property', 'og:type', type);
        setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
        setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', siteInfo.name);

        setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
        setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
        setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
        setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

        let canonicalEl = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!canonicalEl) {
            canonicalEl = document.createElement('link');
            canonicalEl.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalEl);
        }
        canonicalEl.setAttribute('href', canonicalUrl);

        let jsonLdEl: HTMLScriptElement | null = null;
        const existingJsonLd = document.head.querySelectorAll('script[data-jsonld]');
        existingJsonLd.forEach((s) => s.remove());

        if (jsonLd) {
            jsonLdEl = document.createElement('script');
            jsonLdEl.setAttribute('type', 'application/ld+json');
            jsonLdEl.setAttribute('data-jsonld', 'true');
            const data = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
            jsonLdEl.textContent = JSON.stringify(data);
            document.head.appendChild(jsonLdEl);
        }

        return () => {
            if (jsonLdEl) {
                jsonLdEl.remove();
            }
        };
    }, [fullTitle, description, canonicalUrl, ogImage, type, jsonLd]);

    return null;
}
