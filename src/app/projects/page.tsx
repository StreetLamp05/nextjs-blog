import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects"; // Import project data

export default function Projects() {
    return (
        <section id="projects" className="max-w-5xl mx-auto py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="group relative bg-[#1a1a1a] p-6 rounded-2xl shadow-lg transition hover:scale-[1.02]">
                        <div className="relative w-full h-52 rounded-lg overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="group-hover:opacity-90 transition-opacity object-cover"
                            />
                        </div>

                        <div className="mt-4">
                            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                            <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.tech.map((tech, idx) => (
                                <span key={idx} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
                  {tech}
                </span>
                            ))}
                        </div>

                        {/* Project Link */}
                        <Link href={project.link} target="_blank">
                            <span className="absolute inset-0"></span>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
