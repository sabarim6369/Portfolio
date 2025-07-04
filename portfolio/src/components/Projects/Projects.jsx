import React, { useState } from 'react';
import { Github, ExternalLink, Briefcase, Code } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('freelance');
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const freelanceProjects = [
    {
      title: "Sokkai - Clothing E-Commerce Website",
      description:
        "An e-commerce platform for clothing with seamless shopping experience and real-time inventory management.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "MongoDB", "Razorpay"],
      github: "https://github.com/sokkai642/client-sokkai.git",
      live: "https://ecommerse-sokkai.vercel.app/",
      client: "Sokkai",
    },

    {
      title: "Lead Management System",
      description:
        "A lead management system for tracking staff assignments, communication, and call duration.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "MongoDB", "Express", "Node.js"],
      github: "https://github.com/vijayguhan10/Leadmanagement.git",
      live: "https://aws-leadmanagementsystem.vercel.app",
      client: "Lead Management",
    },
    {
      title: "4Trip - Travel Planning & Booking Companion",
      description:
        "A smart travel planner app allowing users to discover places, create custom itineraries, and manage bookings in one place. Integrated with maps and weather APIs for better planning.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Express", "Node.js", "MongoDB"],
      github: "https://github.com/vijayguhan10/trip.git", // replace with actual link
      live: "https://drive.google.com/drive/folders/1NDwYnGtQnGfyCXEkxhQtbJnbxSVPl5eQ?usp=sharing", // replace with actual deployed URL
      client: "4trip",
    },
    {
      title: "Thots - Social Polling Platform",
      description:
        "A social platform where users can post questions as polls and others can vote and view real-time results. Designed like Instagram but with a focus on polls instead of reels. Ideal for engaging discussions and quick feedback.",
      image:
        "https://images.unsplash.com/photo-1603574670812-d24560880210?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Express", "Node.js", "MongoDB"],
      github: "https://github.com/sabarim6369/Thoughtsapp.git",
      live: "https://drive.google.com/drive/folders/1Zc97FZM0yqXA5UzLIjlR_WDq7tbVkk1v?usp=sharing",
      client: "Thoughts",
    },
    {
      title: "Milver - MILK Transport",
      description:
        "A transport management system for MIL Transport, including driver allocation and delivery maintenance.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "MongoDB", "Express", "Node.js"],
      github: "https://github.com/Dharanish-AM/MILVER.git",
      live: "https://milver-alpha.vercel.app/",
      client: "Milver",
    },
    
  ];

  const personalProjects = [
    {
        title: 'Event Management System',
        description: 'A comprehensive platform designed to manage and track events happening in the college, enabling  faculty to create, organize, and promote events seamlessly.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        github: 'https://github.com/vijayguhan10/EventManagement.git',
        live: 'https://event-management-swart-kappa.vercel.app/'
      },      
    {
      title: 'Campusway - College Guidance',
      description: 'A platform that helps students after 12th grade to explore colleges and exam preparation options.',
      image: 'https://campusprovo.com/wp-content/uploads/2021/07/CWAY6.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/sabarim6369/campus_way.git',
      live: '#'
    },
    {
      title: 'Onduty Form',
      description: 'A tool for managing employee duty schedules and attendance efficiently.',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Express','Node.js', 'MongoDB'],
      github: 'https://github.com/sabarim6369/odform_reactnative.git',
      live: '#'
    },
    
    // {
    //   title: 'Wellness 360 - Disease Detection and Diet Plans',
    //   description: 'A health platform that detects diseases and provides personalized diet plans using machine learning.',
    //   image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //   technologies: ['Python','Html','CSS','javascript'],
    //   github: 'https://github.com/sabarim6369/wellness_360_using_python.git',
    //   live: '#'
    // },
  ];
  const internProjects = [
    {
      title: "Rapid Review",
      description:
        "A feedback management system for tracking and managing feedback sessions, assignments, and communication with tutors and students.",
      image:
        "https://media.mopinion.com/wp-content/uploads/2022/03/27133400/customer-feedback-blog-min.jpg",
      technologies: ["React", "MongoDB", "Express", "Node.js"],
      github: "https://github.com/sabarim6369/feedback_management.git",
      live: "https://feedback-management-iota.vercel.app/",
      client: "Feedback Management",
    },
    {
      title: "RampeX Management System",
      description: "A training management system with standalone modules for Admin, Trainer, and Student. I developed the Trainer-side platform, TraceX, where trainers can manage batches, upload materials, evaluate performance, and provide feedback. Built during my internship, TraceX streamlines the trainer's workflow.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCpAKshD0iybl7vmLAlctlZRYKuGZN5RBCw&s",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/yourusername/rampex-tracex", // replace with your actual repo link
      live: "#"
    }
    
  ];
  
  const activeProjects =
  activeTab === 'freelance'
    ? freelanceProjects
    : activeTab === 'personal'
    ? personalProjects
    : internProjects;

  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2
          ref={headingRef}
          className={`text-4xl font-bold text-center text-white mb-4 transition-all duration-1000 ${
            headingInView
              ? "motion-preset-slide-right"
              : "opacity-0 translate-x-[-50px]"
          }`}
        >
          My <span className="text-red-500">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-full p-1 ">
            <button
              onClick={() => setActiveTab("freelance")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "freelance"
                  ? "bg-red-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4" />
                <span>Freelance Projects</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("intern")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "intern"
                  ? "bg-red-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4" />
                <span>Intern Projects</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("personal")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "personal"
                  ? "bg-red-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Personal Projects</span>
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {project.client && (
                  <div className="absolute top-4 right-4 z-20 bg-red-500 px-3 py-1 rounded-full text-xs font-medium text-white">
                    {project.client}
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium text-red-500 bg-red-500/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="cursor-pointer">Code</span>
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors"
                    target="_blank"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;