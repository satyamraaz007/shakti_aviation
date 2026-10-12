import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    path?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.saktiaviation.com/',
            },
            ...items.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 2,
                name: item.label,
                item: item.path ? `https://www.saktiaviation.com${item.path}` : undefined,
            })),
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-[13px]">
                <Link
                    to="/"
                    className="inline-flex items-center gap-1 text-gray-500 hover:text-[#A34354] transition-colors"
                >
                    <Home className="w-3.5 h-3.5" />
                    <span className="sr-only">Home</span>
                </Link>
                {items.map((item, index) => (
                    <span key={index} className="inline-flex items-center gap-1.5">
                        <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
                        {item.path ? (
                            <Link to={item.path} className="text-gray-500 hover:text-[#A34354] transition-colors">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-gray-800 font-medium" aria-current="page">
                                {item.label}
                            </span>
                        )}
                    </span>
                ))}
            </nav>
        </>
    );
}
