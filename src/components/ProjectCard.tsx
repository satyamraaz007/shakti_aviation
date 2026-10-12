import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import ImageWithFallback from '@/components/ImageWithFallback';
import type { ProjectItem } from '@/data/projects';

interface ProjectCardProps {
    project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="card-sacs group overflow-hidden flex flex-col h-full">
            <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-gray-100">
                <ImageWithFallback
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wide bg-white/90 backdrop-blur text-[#402E6D]">
                        {project.category}
                    </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-[13px]">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-[12px] font-bold text-[#A34354]">{project.year}</span>
                    <span className="h-px w-8 bg-gray-200" />
                </div>
                <h3 className="font-display font-bold text-[17px] text-gray-900 leading-snug mb-2.5">
                    {project.name}
                </h3>
                <p className="text-[14px] leading-relaxed text-gray-600 line-clamp-3 flex-grow">
                    {project.description}
                </p>
            </div>
        </article>
    );
}
