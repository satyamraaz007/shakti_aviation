import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowLeft,
    ArrowRight,
    Linkedin,
    Twitter,
    Phone,
    Mail,
    ExternalLink,
    Check,
    ChevronDown,
    AlertTriangle,
    Info,
    ShieldAlert,
    FileCheck,
    BookOpen,
    HelpCircle,
    User,
    Compass,
    Copy,
    Building2,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageWithFallback from '@/components/ImageWithFallback';
import CTASection from '@/components/CTASection';
import BlogCard from '@/components/BlogCard';
import { getBlogPost, getRelatedBlogs, blogPosts } from '@/data/blogs';
import { siteInfo } from '@/data/siteInfo';

export default function BlogDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getBlogPost(slug) : undefined;

    const [copied, setCopied] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Reading progress calculation
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                const currentProgress = (window.scrollY / totalHeight) * 100;
                setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scrollspy for Table of Contents
    useEffect(() => {
        if (!post) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-100px 0px -60% 0px',
                threshold: 0,
            }
        );

        post.tableOfContents.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [post]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const relatedPosts = getRelatedBlogs(post.slug, 3);

    // Find Previous and Next posts
    const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
    const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

    const handleCopyLink = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
    };

    const shareUrl = encodeURIComponent(window.location.href);
    const shareTitle = encodeURIComponent(post.title);

    // Schema.org Structured Data
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: [post.featuredImage],
        datePublished: post.publishedDate,
        dateModified: post.updatedDate,
        author: {
            '@type': 'Person',
            name: post.author.name,
            jobTitle: post.author.designation,
        },
        publisher: {
            '@type': 'Organization',
            name: siteInfo.name,
            url: siteInfo.url,
            logo: {
                '@type': 'ImageObject',
                url: `${siteInfo.url}/logo.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.saktiaviation.com/blog/${post.slug}`,
        },
        keywords: post.tags.join(', '),
    };

    const faqJsonLd = post.faqs?.length
        ? {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: post.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        }
        : undefined;

    return (
        <>
            <SEO
                title={`${post.title} | SACS Technical Insights`}
                description={post.excerpt}
                path={`/blog/${post.slug}`}
                image={post.featuredImage}
                type="article"
                jsonLd={faqJsonLd ? [articleJsonLd, faqJsonLd] : articleJsonLd}
            />

            {/* Reading Progress Indicator */}
            <div
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#168DE2] via-[#FACC15] to-[#A34354] z-[65] transition-all duration-150"
                style={{ width: `${scrollProgress}%` }}
                aria-hidden="true"
            />

            {/* Header Hero Section */}
            <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 bg-gradient-to-b from-[#faf9fb] via-white to-white border-b border-gray-100">
                <div className="container-sacs">
                    {/* Breadcrumbs */}
                    <div className="mb-6">
                        <Breadcrumbs
                            items={[
                                { label: 'Blog', path: '/blog' },
                                { label: post.category, path: '/blog' },
                                { label: post.title },
                            ]}
                        />
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* Eyebrow & Category Badge */}
                        <div className="flex flex-wrap items-center gap-2.5 mb-4">
                            <span className="px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider bg-[#168DE2]/10 text-[#168DE2] border border-[#168DE2]/20">
                                {post.category}
                            </span>
                            <span className="text-[12px] font-semibold text-gray-400">•</span>
                            <span className="text-[12px] font-semibold uppercase tracking-wider text-[#A34354]">
                                {post.eyebrow}
                            </span>
                        </div>

                        {/* Article Title */}
                        <h1 className="font-display font-bold text-2xl sm:text-4xl lg:text-[42px] text-gray-900 leading-[1.2] mb-6 text-balance">
                            {post.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-[16px] sm:text-[18px] text-gray-600 font-normal leading-relaxed mb-8 text-pretty">
                            {post.excerpt}
                        </p>

                        {/* Author & Meta Bar */}
                        <div className="pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            {/* Author info */}
                            <div className="flex items-center gap-3.5">
                                <Link to="/team" className="flex-shrink-0 group">
                                    <img
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        className="w-13 h-13 rounded-full object-cover border-2 border-white shadow-sm ring-2 ring-gray-200 group-hover:ring-[#168DE2] transition-all"
                                    />
                                </Link>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <Link
                                            to="/team"
                                            className="font-bold text-[15px] text-gray-900 hover:text-[#168DE2] transition-colors"
                                        >
                                            {post.author.name}
                                        </Link>
                                        <span className="hidden sm:inline-block text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-[#075BA8]">
                                            SACS Technical Lead
                                        </span>
                                    </div>
                                    <p className="text-[12.5px] text-gray-500 leading-tight mt-0.5">
                                        {post.author.designation}
                                    </p>
                                </div>
                            </div>

                            {/* Meta & Social Share */}
                            <div className="flex items-center gap-4 text-[13px] text-gray-500">
                                <div className="flex items-center gap-3 pr-4 border-r border-gray-200">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-gray-400" />
                                        {post.publishedDate}
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4 text-gray-400" />
                                        {post.readTime}
                                    </span>
                                </div>

                                {/* Share Buttons */}
                                <div className="flex items-center gap-1.5">
                                    <a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg text-gray-500 hover:text-[#0077b5] hover:bg-gray-100 transition-colors"
                                        title="Share on LinkedIn"
                                        aria-label="Share on LinkedIn"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
                                        title="Share on X (Twitter)"
                                        aria-label="Share on X"
                                    >
                                        <Twitter className="w-4 h-4" />
                                    </a>
                                    <button
                                        onClick={handleCopyLink}
                                        className="p-2 rounded-lg text-gray-500 hover:text-[#168DE2] hover:bg-gray-100 transition-colors relative"
                                        title="Copy link to clipboard"
                                        aria-label="Copy link"
                                    >
                                        {copied ? (
                                            <Check className="w-4 h-4 text-emerald-600" />
                                        ) : (
                                            <Copy className="w-4 h-4" />
                                        )}
                                        {copied && (
                                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded shadow whitespace-nowrap">
                                                Link copied!
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image Banner */}
            <div className="container-sacs py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 shadow-lg bg-slate-900">
                        <ImageWithFallback
                            src={post.featuredImage}
                            alt={post.featuredImageAlt}
                            className="w-full max-h-[480px] object-cover object-center"
                            loading="eager"
                        />
                    </div>
                    {post.featuredImageCaption && (
                        <p className="mt-2.5 text-center text-[12.5px] text-gray-500 italic">
                            {post.featuredImageCaption}
                        </p>
                    )}
                </div>
            </div>

            {/* Executive Summary / Key Takeaways Box */}
            <div className="container-sacs mb-12">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#faf9fb] via-[#f7f5fa] to-[#f0edf5] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#402E6D]/15 shadow-sm">
                    <div className="flex items-center gap-2.5 mb-4">
                        <span className="w-8 h-8 rounded-lg bg-[#402E6D] text-white flex items-center justify-center font-bold">
                            <BookOpen className="w-4 h-4 text-[#FACC15]" />
                        </span>
                        <h2 className="font-display font-bold text-lg sm:text-xl text-[#402E6D]">
                            Executive Summary &amp; Key Strategic Takeaways
                        </h2>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                        {post.keyTakeaways.map((takeaway, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-[14px] text-gray-700 leading-relaxed">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#168DE2]/15 text-[#168DE2] flex items-center justify-center text-[12px] font-bold mt-0.5">
                                    {idx + 1}
                                </span>
                                <span>{takeaway}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Article Main Body with Sticky Sidebar */}
            <section className="container-sacs pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 max-w-7xl mx-auto items-start">
                    {/* Left Column: Article Content */}
                    <article className="lg:col-span-8 space-y-12 max-w-none">
                        {post.sections.map((section) => (
                            <section key={section.id} id={section.id} className="scroll-mt-28">
                                <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 mb-5 leading-tight pb-2 border-b border-gray-100">
                                    {section.heading}
                                </h2>

                                {/* Paragraphs */}
                                <div className="space-y-4 text-[15.5px] sm:text-[16.5px] text-gray-700 leading-relaxed">
                                    {section.paragraphs.map((p, pIdx) => (
                                        <p key={pIdx}>{p}</p>
                                    ))}
                                </div>

                                {/* In-Article Section Image */}
                                {section.image && (
                                    <div className="my-7 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-slate-900">
                                        <ImageWithFallback
                                            src={section.image.src}
                                            alt={section.image.alt}
                                            className="w-full max-h-[380px] object-cover object-center"
                                        />
                                        <div className="p-3 bg-gray-50 border-t border-gray-200">
                                            <p className="text-[12px] text-gray-600 text-center font-medium">
                                                {section.image.caption}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Callout Box */}
                                {section.callout && (
                                    <div
                                        className={`my-6 p-5 sm:p-6 rounded-2xl border ${section.callout.type === 'regulation'
                                            ? 'bg-amber-50/70 border-amber-200 text-amber-950'
                                            : section.callout.type === 'warning'
                                                ? 'bg-rose-50/70 border-rose-200 text-rose-950'
                                                : section.callout.type === 'tip'
                                                    ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                                                    : 'bg-blue-50/70 border-blue-200 text-blue-950'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            {section.callout.type === 'regulation' && (
                                                <FileCheck className="w-5 h-5 text-amber-700 flex-shrink-0" />
                                            )}
                                            {section.callout.type === 'warning' && (
                                                <AlertTriangle className="w-5 h-5 text-rose-700 flex-shrink-0" />
                                            )}
                                            {section.callout.type === 'tip' && (
                                                <ShieldAlert className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                                            )}
                                            {section.callout.type === 'info' && (
                                                <Info className="w-5 h-5 text-blue-700 flex-shrink-0" />
                                            )}
                                            <h4 className="font-bold text-[15px]">{section.callout.title}</h4>
                                        </div>
                                        <p className="text-[14px] leading-relaxed opacity-90 pl-7">
                                            {section.callout.content}
                                        </p>
                                    </div>
                                )}

                                {/* Comparison Table */}
                                {section.table && (
                                    <div className="my-7 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                                        <table className="w-full text-left border-collapse text-[13.5px]">
                                            {section.table.caption && (
                                                <caption className="p-3 text-xs font-semibold text-gray-500 bg-gray-50 text-left border-b border-gray-200">
                                                    {section.table.caption}
                                                </caption>
                                            )}
                                            <thead>
                                                <tr className="bg-[#402E6D] text-white">
                                                    {section.table.headers.map((h, hIdx) => (
                                                        <th key={hIdx} className="py-3 px-4 font-semibold text-left">
                                                            {h}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 bg-white">
                                                {section.table.rows.map((row, rIdx) => (
                                                    <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-gray-50/70' : ''}>
                                                        {row.map((cell, cIdx) => (
                                                            <td
                                                                key={cIdx}
                                                                className={`py-3 px-4 text-gray-800 ${cIdx === 0 ? 'font-semibold text-gray-900' : ''
                                                                    }`}
                                                            >
                                                                {cell}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}

                                {/* Quote */}
                                {section.quote && (
                                    <blockquote className="my-7 relative p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-gray-50 to-white border-l-4 border-[#168DE2] shadow-sm">
                                        <p className="font-display italic text-gray-800 text-[17px] sm:text-[18px] leading-relaxed mb-3">
                                            &ldquo;{section.quote.text}&rdquo;
                                        </p>
                                        <footer className="text-[13px] text-gray-600">
                                            <strong className="text-gray-900 font-bold">{section.quote.author}</strong> —{' '}
                                            <span>{section.quote.role}</span>
                                        </footer>
                                    </blockquote>
                                )}

                                {/* Bullets */}
                                {section.bullets && (
                                    <ul className="my-5 space-y-2.5">
                                        {section.bullets.map((b, bIdx) => (
                                            <li key={bIdx} className="flex items-start gap-2.5 text-[15px] text-gray-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#168DE2] mt-2.5 flex-shrink-0" />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Nested Links Box (Internal & External) */}
                                {section.nestedLinks && section.nestedLinks.length > 0 && (
                                    <div className="my-6 p-4 sm:p-5 rounded-xl bg-gray-50/80 border border-gray-200 space-y-2.5">
                                        <p className="text-[12px] font-bold uppercase tracking-wider text-gray-500 mb-1 flex items-center gap-1.5">
                                            <Compass className="w-3.5 h-3.5 text-[#168DE2]" />
                                            Related Services &amp; Resources:
                                        </p>
                                        {section.nestedLinks.map((link, lIdx) =>
                                            link.isExternal ? (
                                                <a
                                                    key={lIdx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-start justify-between gap-3 p-2.5 rounded-lg bg-white border border-gray-200/80 hover:border-[#168DE2] hover:shadow-sm transition-all group"
                                                >
                                                    <div>
                                                        <span className="font-semibold text-[13.5px] text-[#075BA8] group-hover:text-[#168DE2] transition-colors inline-flex items-center gap-1">
                                                            {link.text}
                                                            <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#168DE2]" />
                                                        </span>
                                                        <p className="text-[12px] text-gray-500 mt-0.5">
                                                            {link.description}
                                                        </p>
                                                    </div>
                                                </a>
                                            ) : (
                                                <Link
                                                    key={lIdx}
                                                    to={link.url}
                                                    className="flex items-start justify-between gap-3 p-2.5 rounded-lg bg-white border border-gray-200/80 hover:border-[#168DE2] hover:shadow-sm transition-all group"
                                                >
                                                    <div>
                                                        <span className="font-semibold text-[13.5px] text-[#402E6D] group-hover:text-[#168DE2] transition-colors inline-flex items-center gap-1">
                                                            {link.text}
                                                            <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#168DE2] group-hover:translate-x-0.5 transition-transform" />
                                                        </span>
                                                        <p className="text-[12px] text-gray-500 mt-0.5">
                                                            {link.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            )
                                        )}
                                    </div>
                                )}
                            </section>
                        ))}

                        {/* Interactive FAQ Accordion */}
                        {post.faqs && post.faqs.length > 0 && (
                            <section id="frequently-asked-questions" className="scroll-mt-28 pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-2 mb-6">
                                    <HelpCircle className="w-6 h-6 text-[#168DE2]" />
                                    <h3 className="font-display font-bold text-2xl text-gray-900">
                                        Frequently Asked Questions
                                    </h3>
                                </div>
                                <div className="space-y-3">
                                    {post.faqs.map((faq, idx) => {
                                        const isOpen = openFaqIndex === idx;
                                        return (
                                            <div
                                                key={idx}
                                                className="rounded-xl border border-gray-200 overflow-hidden bg-white transition-all"
                                            >
                                                <button
                                                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-[15px] text-gray-900 hover:text-[#168DE2] transition-colors"
                                                    aria-expanded={isOpen}
                                                >
                                                    <span>{faq.question}</span>
                                                    <ChevronDown
                                                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180 text-[#168DE2]' : ''
                                                            }`}
                                                    />
                                                </button>
                                                {isOpen && (
                                                    <div className="px-5 pb-5 text-[14px] text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-[#faf9fb]">
                                                        {faq.answer}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        )}

                        {/* Article Tags */}
                        <div className="pt-8 border-t border-gray-200 flex flex-wrap items-center gap-2">
                            <span className="text-[12px] font-bold uppercase tracking-wider text-gray-400 mr-2">
                                Topic Tags:
                            </span>
                            {post.tags.map((tag) => (
                                <Link
                                    key={tag}
                                    to="/blog"
                                    className="text-[12px] font-medium px-3 py-1 rounded-lg bg-gray-100 hover:bg-[#168DE2] hover:text-white text-gray-700 transition-colors"
                                >
                                    #{tag}
                                </Link>
                            ))}
                        </div>

                        {/* Next / Previous Article Navigation */}
                        <div className="pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {prevPost ? (
                                <Link
                                    to={`/blog/${prevPost.slug}`}
                                    className="p-4 rounded-2xl border border-gray-200 hover:border-[#168DE2] hover:shadow-md transition-all group flex flex-col justify-between"
                                >
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1 mb-1">
                                        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                                        Previous Article
                                    </span>
                                    <p className="font-display font-bold text-[14.5px] text-gray-900 group-hover:text-[#168DE2] transition-colors line-clamp-2">
                                        {prevPost.title}
                                    </p>
                                </Link>
                            ) : (
                                <div className="hidden sm:block" />
                            )}

                            {nextPost && (
                                <Link
                                    to={`/blog/${nextPost.slug}`}
                                    className="p-4 rounded-2xl border border-gray-200 hover:border-[#168DE2] hover:shadow-md transition-all group flex flex-col justify-between text-left sm:text-right"
                                >
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 flex items-center sm:justify-end gap-1 mb-1">
                                        Next Article
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <p className="font-display font-bold text-[14.5px] text-gray-900 group-hover:text-[#168DE2] transition-colors line-clamp-2">
                                        {nextPost.title}
                                    </p>
                                </Link>
                            )}
                        </div>
                    </article>

                    {/* Right Column: Sticky Sidebar */}
                    <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
                        {/* Table of Contents Card */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                            <h3 className="font-display font-bold text-[17px] text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center justify-between">
                                <span>Table of Contents</span>
                                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                                    {post.tableOfContents.length} Sections
                                </span>
                            </h3>
                            <nav className="space-y-1.5" aria-label="Table of contents">
                                {post.tableOfContents.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`block text-[13.5px] py-1.5 px-2.5 rounded-lg transition-all ${activeSection === item.id
                                            ? 'bg-[#168DE2]/10 text-[#075BA8] font-bold border-l-2 border-[#168DE2]'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                            }`}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Author Bio Box */}
                        <div className="bg-gradient-to-b from-[#faf9fb] to-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-3.5 mb-3">
                                <img
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow ring-1 ring-gray-200"
                                />
                                <div>
                                    <h4 className="font-bold text-[15px] text-gray-900 leading-tight">
                                        {post.author.name}
                                    </h4>
                                    <p className="text-[12px] text-gray-500 leading-tight mt-0.5">
                                        {post.author.designation}
                                    </p>
                                </div>
                            </div>
                            <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
                                {post.author.bio}
                            </p>
                            <Link
                                to="/team"
                                className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#168DE2] hover:text-[#0875D1] transition-colors"
                            >
                                <User className="w-3.5 h-3.5" />
                                <span>View Full SACS Team Profile →</span>
                            </Link>
                        </div>

                        {/* Quick Consultancy Consultation Callout */}
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#052640] to-[#09355E] text-white p-6 shadow-md border border-sky-400/20">
                            <div className="absolute inset-0 aviation-grid opacity-15 pointer-events-none" />
                            <div className="relative z-10">
                                <span className="inline-block px-2.5 py-0.5 rounded text-[10.5px] font-bold uppercase tracking-wider bg-[#FACC15] text-[#052640] mb-3">
                                    Advisory Hotline
                                </span>
                                <h4 className="font-display font-bold text-[18px] text-white leading-snug mb-2">
                                    Need Expert Aviation Consultancy?
                                </h4>
                                <p className="text-blue-100/90 text-[13px] leading-relaxed mb-5">
                                    Discuss your height clearance, CNS radar study, or airport master plan directly with our senior specialists.
                                </p>
                                <div className="space-y-2 mb-5">
                                    <a
                                        href={`tel:${siteInfo.phones[0].replace(/[^+\d]/g, '')}`}
                                        className="flex items-center gap-2 text-[13px] text-blue-100 hover:text-white transition-colors"
                                    >
                                        <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                                        <span>{siteInfo.phones[0]}</span>
                                    </a>
                                    <a
                                        href={`mailto:${siteInfo.email}`}
                                        className="flex items-center gap-2 text-[13px] text-blue-100 hover:text-white transition-colors"
                                    >
                                        <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                                        <span>{siteInfo.email}</span>
                                    </a>
                                </div>
                                <Link
                                    to="/contact"
                                    className="btn-primary !w-full !py-2.5 !text-[13px] !bg-[#168DE2] hover:!bg-[#0875D1]"
                                >
                                    Book Technical Consultation
                                </Link>
                            </div>
                        </div>

                        {/* Statutory Regulatory Links */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                            <h4 className="text-[12.5px] font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
                                <Building2 className="w-4 h-4 text-[#168DE2]" />
                                Official Aviation Portals
                            </h4>
                            <ul className="space-y-2">
                                {post.regulatoryLinks.map((reg, rIdx) => (
                                    <li key={rIdx}>
                                        <a
                                            href={reg.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between text-[13px] text-gray-700 hover:text-[#168DE2] py-1 transition-colors group"
                                        >
                                            <span className="font-medium group-hover:underline">{reg.label}</span>
                                            <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#168DE2]" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Related Blogs Section */}
            <section className="py-16 sm:py-20 bg-[#faf9fb] border-t border-gray-200">
                <div className="container-sacs">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                        <div>
                            <span className="eyebrow">Continue Reading</span>
                            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 mt-1">
                                Related Aviation Insights &amp; Regulatory Analyses
                            </h2>
                        </div>
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-1 text-[14px] font-bold text-[#168DE2] hover:text-[#0875D1] transition-colors"
                        >
                            <span>Browse All Articles</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedPosts.map((relatedPost) => (
                            <BlogCard key={relatedPost.id} post={relatedPost} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Global CTA */}
            <CTASection
                title="Planning an Aviation, Airport or Infrastructure Project?"
                subtitle="Connect with senior former DGCA and AAI technical experts for precise regulatory clearances, obstacle studies, and airport engineering advisory."
                primaryLabel="Schedule a Consultation"
                primaryPath="/contact"
                secondaryLabel="Explore Our Services"
                secondaryPath="/services"
            />
        </>
    );
}
