import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import ImageWithFallback from '@/components/ImageWithFallback';
import YellowBorderBeam from '@/components/YellowBorderBeam';
import type { BlogPost } from '@/data/blogs';

interface BlogCardProps {
    post: BlogPost;
    featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
    if (featured) {
        return (
            <div className="relative group bg-white rounded-3xl border border-gray-100/90 shadow-md hover:shadow-2xl transition-all duration-400 overflow-hidden">
                <YellowBorderBeam rx={24} />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                    {/* Image Column */}
                    <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] overflow-hidden bg-slate-900">
                        <ImageWithFallback
                            src={post.featuredImage}
                            alt={post.featuredImageAlt}
                            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent lg:hidden" />
                        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold tracking-wide uppercase bg-[#FACC15] text-[#052640] shadow-sm">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                Featured Insight
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold bg-white/90 backdrop-blur-md text-[#402E6D] shadow-sm">
                                {post.category}
                            </span>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-b from-white to-[#faf9fb]">
                        <div>
                            <div className="hidden lg:flex items-center gap-2 mb-3">
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FACC15]/20 text-[#A34354] border border-[#FACC15]/40">
                                    ★ Featured Insight
                                </span>
                                <span className="text-[12px] font-medium text-gray-500">•</span>
                                <span className="text-[12px] font-semibold text-[#168DE2]">
                                    {post.category}
                                </span>
                            </div>

                            <div className="flex items-center gap-4 text-[12.5px] text-gray-500 mb-3">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                                    {post.publishedDate}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                                    {post.readTime}
                                </span>
                            </div>

                            <Link to={`/blog/${post.slug}`}>
                                <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-[26px] text-gray-900 group-hover:text-[#168DE2] transition-colors leading-[1.25] mb-3">
                                    {post.title}
                                </h3>
                            </Link>

                            <p className="text-[14.5px] text-gray-600 leading-relaxed line-clamp-3 mb-6">
                                {post.excerpt}
                            </p>

                            {/* Tags preview */}
                            <div className="flex flex-wrap gap-1.5 mb-6">
                                {post.tags.slice(0, 3).map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[11.5px] font-medium px-2.5 py-1 rounded-md bg-gray-100 text-gray-700"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Author + CTA */}
                        <div className="pt-5 border-t border-gray-100 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm ring-1 ring-gray-200"
                                />
                                <div>
                                    <p className="text-[13.5px] font-bold text-gray-900 leading-tight">
                                        {post.author.name}
                                    </p>
                                    <p className="text-[11.5px] text-gray-500 leading-tight mt-0.5 line-clamp-1">
                                        {post.author.designation}
                                    </p>
                                </div>
                            </div>

                            <Link
                                to={`/blog/${post.slug}`}
                                className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#168DE2] group-hover:text-[#0875D1] transition-all flex-shrink-0"
                            >
                                <span>Read Article</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Standard Grid Card
    return (
        <article className="relative group bg-white rounded-2xl border border-gray-100/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
            <YellowBorderBeam rx={16} />

            {/* Card Header Image */}
            <Link to={`/blog/${post.slug}`} className="relative block h-52 sm:h-56 overflow-hidden bg-slate-900 flex-shrink-0">
                <ImageWithFallback
                    src={post.featuredImage}
                    alt={post.featuredImageAlt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11.5px] font-semibold tracking-wide bg-white/95 backdrop-blur-md text-[#402E6D] shadow-sm">
                        {post.category}
                    </span>
                </div>

                {/* Read time badge */}
                <div className="absolute bottom-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-black/60 backdrop-blur-md text-white/90">
                        <Clock className="w-3 h-3 text-[#FACC15]" />
                        {post.readTime}
                    </span>
                </div>
            </Link>

            {/* Card Content Body */}
            <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                    {/* Meta Row */}
                    <div className="flex items-center gap-3 text-[12px] text-gray-500 mb-2.5">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-3 h-3 text-gray-400" />
                            {post.publishedDate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-[#168DE2] font-medium">
                            <BookOpen className="w-3 h-3" />
                            Guide
                        </span>
                    </div>

                    {/* Title */}
                    <Link to={`/blog/${post.slug}`}>
                        <h3 className="font-display font-bold text-[18px] sm:text-[19px] text-gray-900 group-hover:text-[#168DE2] transition-colors leading-snug mb-2.5 line-clamp-2">
                            {post.title}
                        </h3>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-[13.5px] text-gray-600 leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {post.tags.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className="text-[11px] font-medium px-2 py-0.5 rounded bg-gray-50 text-gray-600 border border-gray-100"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Footer with Author and Read Link */}
                <div className="pt-4 border-t border-gray-100/90 flex items-center justify-between gap-3 mt-auto">
                    <div className="flex items-center gap-2.5 min-w-0">
                        <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-9 h-9 rounded-full object-cover border border-white shadow-sm ring-1 ring-gray-200 flex-shrink-0"
                        />
                        <div className="min-w-0">
                            <p className="text-[12.5px] font-bold text-gray-900 truncate">
                                {post.author.name}
                            </p>
                            <p className="text-[11px] text-gray-500 truncate">
                                {post.author.designation}
                            </p>
                        </div>
                    </div>

                    <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#168DE2] group-hover:text-[#0875D1] transition-all flex-shrink-0 pl-2"
                        aria-label={`Read article: ${post.title}`}
                    >
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </article>
    );
}

