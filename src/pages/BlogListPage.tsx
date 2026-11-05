import { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, Sparkles, Newspaper, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import BlogCard from '@/components/BlogCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { blogPosts, blogCategories, getFeaturedBlog } from '@/data/blogs';

export default function BlogListPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

    const gridRef = useScrollReveal<HTMLDivElement>();
    const featuredPost = getFeaturedBlog();

    // Filter posts based on category and search query
    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            const matchesCategory =
                selectedCategory === 'All' || post.category === selectedCategory;

            const q = searchQuery.toLowerCase().trim();
            const matchesQuery =
                !q ||
                post.title.toLowerCase().includes(q) ||
                post.excerpt.toLowerCase().includes(q) ||
                post.tags.some((tag) => tag.toLowerCase().includes(q)) ||
                post.author.name.toLowerCase().includes(q);

            return matchesCategory && matchesQuery;
        });
    }, [selectedCategory, searchQuery]);

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newsletterEmail.trim()) {
            setNewsletterSubscribed(true);
            setNewsletterEmail('');
        }
    };

    const blogListJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Sakthi Aviation Insights & Technical Blog',
        description:
            'Expert analysis, regulatory compliance guides, CNS/ATM technical studies, and airport development insights by senior aviation consultants.',
        url: 'https://www.saktiaviation.com/blog',
        blogPost: blogPosts.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            url: `https://www.saktiaviation.com/blog/${post.slug}`,
            datePublished: post.publishedDate,
            author: {
                '@type': 'Person',
                name: post.author.name,
            },
        })),
    };

    return (
        <>
            <SEO
                title="Aviation Insights & Industry Blog | SACS Technical Guides"
                description="In-depth technical guides, AAI NOC regulations, GSR 751(E) height clearance insights, CNS/ATM modernizations, and airport infrastructure best practices from SACS senior aviation consultants."
                path="/blog"
                jsonLd={blogListJsonLd}
            />

            {/* Page Hero */}
            <PageHero
                eyebrow="Industry Insights & Thought Leadership"
                title="Aviation Consultancy Insights & Regulatory Guides"
                subtitle="Authoritative analysis, regulatory updates, engineering studies, and best practices covering AAI NOC height clearances, CNS/ATM infrastructure, airport development, and aviation safety."
                image="https://images.pexels.com/photos/14999417/pexels-photo-14999417.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
                imageAlt="Air traffic control towers and airfield runways illuminated at sunset"
                breadcrumbs={[{ label: 'Blog & Insights' }]}
            />

            {/* Main Content Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white" id="main-content">
                <div className="container-sacs">
                    {/* Featured Article Section (Shown when no search query and All category) */}
                    {selectedCategory === 'All' && !searchQuery && (
                        <div className="mb-16 lg:mb-20">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-[#FACC15]" />
                                    <h2 className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#168DE2]">
                                        Spotlight Article
                                    </h2>
                                </div>
                                <span className="text-[12.5px] text-gray-500 font-medium">
                                    Essential Reading for Developers &amp; Planners
                                </span>
                            </div>

                            <BlogCard post={featuredPost} featured={true} />
                        </div>
                    )}

                    {/* Section Heading & Filter Bar */}
                    <div className="mb-10">
                        <SectionHeading
                            eyebrow="Knowledge Base"
                            title="Explore All Aviation Articles & Case Studies"
                            subtitle="Filter through our expert publications by aviation domain or search by specific regulatory topics, airport codes, or compliance standards."
                            align="center"
                            className="mb-8"
                        />

                        {/* Search + Category Controls */}
                        <div className="bg-[#faf9fb] p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm max-w-4xl mx-auto mb-10">
                            {/* Search Input */}
                            <div className="relative mb-5">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search by topic, e.g. 'AAI NOC', 'GSR 751(E)', 'Radar', 'Runway', 'PIDS', 'UDAN'..."
                                    className="w-full pl-11 pr-10 py-3.5 bg-white rounded-xl border border-gray-200 text-[14.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#168DE2] focus:ring-2 focus:ring-[#168DE2]/10 transition-all shadow-sm"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>

                            {/* Category Filter Pills */}
                            <div>
                                <div className="flex items-center gap-1.5 mb-2.5 text-[12px] font-bold uppercase tracking-wider text-gray-500">
                                    <Filter className="w-3.5 h-3.5" />
                                    <span>Browse by Aviation Discipline:</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {blogCategories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200 ${selectedCategory === cat
                                                ? 'bg-[#402E6D] text-white shadow-md shadow-[#402E6D]/20 scale-[1.02]'
                                                : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200/80'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Search Results Summary */}
                        <div className="flex items-center justify-between text-[13.5px] text-gray-500 max-w-4xl mx-auto px-2">
                            <span>
                                Showing <strong className="text-gray-900 font-semibold">{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'article' : 'articles'}
                                {selectedCategory !== 'All' && (
                                    <> in <span className="text-[#168DE2] font-semibold">{selectedCategory}</span></>
                                )}
                                {searchQuery && (
                                    <> matching &quot;<span className="text-[#A34354] font-semibold">{searchQuery}</span>&quot;</>
                                )}
                            </span>
                            {(selectedCategory !== 'All' || searchQuery) && (
                                <button
                                    onClick={() => {
                                        setSelectedCategory('All');
                                        setSearchQuery('');
                                    }}
                                    className="text-[12.5px] text-[#A34354] hover:underline font-semibold"
                                >
                                    Reset Filters
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Blog Posts Grid */}
                    {filteredPosts.length > 0 ? (
                        <div
                            ref={gridRef}
                            className="reveal-stagger-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredPosts.map((post) => (
                                <BlogCard key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-[#faf9fb] rounded-3xl border border-gray-100 max-w-2xl mx-auto">
                            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                            <h3 className="font-display font-bold text-xl text-gray-800 mb-2">
                                No matching articles found
                            </h3>
                            <p className="text-[14px] text-gray-500 mb-6">
                                We couldn&apos;t find any articles matching your search query &quot;{searchQuery}&quot; in the selected category.
                            </p>
                            <button
                                onClick={() => {
                                    setSelectedCategory('All');
                                    setSearchQuery('');
                                }}
                                className="btn-primary !py-2.5 !px-6 !text-[13.5px]"
                            >
                                View All Articles
                            </button>
                        </div>
                    )}

                    {/* Aviation Regulatory Bulletin Newsletter Card */}
                    <div className="mt-20 lg:mt-24 relative overflow-hidden bg-gradient-to-br from-[#052640] via-[#09355E] to-[#041A2E] rounded-3xl text-white p-8 sm:p-10 lg:p-12 shadow-xl border border-sky-400/20">
                        {/* Aviation Grid Overlay */}
                        <div className="absolute inset-0 aviation-grid opacity-15 pointer-events-none" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-7">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11.5px] font-bold uppercase tracking-wider bg-[#168DE2]/20 text-[#38BDF8] border border-[#38BDF8]/30 mb-4">
                                    <Newspaper className="w-3.5 h-3.5" />
                                    Technical Advisory Bulletin
                                </div>
                                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                                    Stay Ahead of Indian Civil Aviation Regulations
                                </h3>
                                <p className="text-blue-100/90 text-[14.5px] leading-relaxed max-w-xl">
                                    Receive periodic executive summaries on DGCA Civil Aviation Requirements (CAR), Ministry of Civil Aviation GSR amendments, NOCAS updates, and airport infrastructure insights.
                                </p>
                            </div>

                            <div className="lg:col-span-5">
                                {newsletterSubscribed ? (
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-emerald-400/40 text-center">
                                        <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                                        <h4 className="font-bold text-[16px] text-white">Subscription Confirmed!</h4>
                                        <p className="text-blue-100 text-[13px] mt-1">
                                            Thank you. You will receive our next quarterly aviation regulatory advisory directly in your inbox.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                                        <div className="flex flex-col sm:flex-row gap-2">
                                            <input
                                                type="email"
                                                required
                                                value={newsletterEmail}
                                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                                placeholder="Enter your corporate email address"
                                                className="flex-grow px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/60 text-[14px] focus:outline-none focus:bg-white/15 focus:border-[#38BDF8] transition-all"
                                            />
                                            <button
                                                type="submit"
                                                className="btn-primary !bg-[#168DE2] hover:!bg-[#0875D1] !text-white flex-shrink-0 !py-3.5 !px-6"
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                        <p className="text-[11.5px] text-blue-200/70">
                                            Strictly technical and regulatory content. No marketing spam. Unsubscribe at any time.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
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
