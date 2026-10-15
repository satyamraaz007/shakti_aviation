import { useState } from 'react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { projects, projectCategories, getProjectsByCategory } from '@/data/projects';

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const gridRef = useScrollReveal<HTMLDivElement>();

    const filteredProjects = getProjectsByCategory(activeCategory);

    return (
        <>
            <SEO
                title="Aviation Projects & Consultancy Experience | SACS"
                description="Explore SACS projects and industry experience airport development, CNS/ATM studies, aeronautical studies, NOC consultancy and international airport projects across India and abroad."
                path="/projects"
            />

            <PageHero
                eyebrow="Our Work"
                title="Projects & Industry Experience"
                subtitle="A cross-section of consultancy assignments spanning airport development, CNS/ATM technical studies, aeronautical studies, NOC consultancy and international aviation projects."
                image="https://images.pexels.com/photos/12858453/pexels-photo-12858453.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
                imageAlt="Aerial view of airport runway and terminal area at twilight"
                breadcrumbs={[{ label: 'Projects' }]}
            />

            <section className="py-20 lg:py-28">
                <div className="container-sacs">
                    <SectionHeading
                        eyebrow="Project Portfolio"
                        title="Consultancy Assignments Across India & International Markets"
                        subtitle="Filter by category to explore specific types of aviation consultancy projects delivered by our team."
                        align="center"
                        className="mb-10"
                    />

                    {/* Category filter */}
                    <div className="flex flex-wrap justify-center gap-2.5 mb-12">
                        {projectCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-lg text-[13.5px] font-semibold transition-all ${activeCategory === cat
                                    ? 'bg-[#402E6D] text-white shadow-md'
                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Projects grid */}
                    <div
                        key={activeCategory}
                        ref={gridRef}
                        className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <p className="text-center text-gray-500 py-12">No projects in this category yet.</p>
                    )}
                </div>
            </section>

            {/* Project context section */}
            <section className="py-20 lg:py-28 bg-section-alt">
                <div className="container-sacs">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {[
                            { value: '7+', label: 'Documented consultancy projects shown' },
                            { value: '2', label: 'International airport projects' },
                            { value: '4', label: 'Categories of consultancy covered' },
                            { value: '2005–2022', label: 'Span of project experience' },
                        ].map((item) => (
                            <div key={item.label} className="text-center p-6 rounded-xl bg-white border border-gray-100">
                                <p className="font-display font-bold text-2xl text-[#A34354]">{item.value}</p>
                                <p className="text-[13px] text-gray-500 mt-2 leading-snug">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title="Have a Project in Mind?"
                subtitle="Our team has the aviation expertise to support your next airport, infrastructure or regulatory consultancy requirement."
                primaryLabel="Discuss Your Requirement"
                primaryPath="/contact"
                secondaryLabel="Explore Our Services"
                secondaryPath="/services"
            />
        </>
    );
}
