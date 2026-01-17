import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  liveUrl: string
  hasRepository: boolean
  featured: boolean
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'Ponttes Educacionais - Site Institucional',
      description: 'Website institucional completo para consultoria educacional, com design responsivo e interações customizadas. Implementação de hover adaptativo para mobile usando JavaScript e animações de scroll para melhor experiência do usuário.',
      image: './ponttes.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/Wanderson-XXV/ponttesEducacionais',
      liveUrl: 'https://pontteseducacionais.com.br',
      hasRepository: true,
      featured: true,
    },
    {
      id: 2,
      title: 'Sistema de Scout FTC',
      description: 'Aplicação para análise e visualização de dados de competições de robótica. Dashboard interativo com gráficos e métricas em tempo real, além de um excelente suporte para operação mobile e diversas animações interativas.',
      image: './scoutimg.png',
      tags: ['React', 'TypeScript', 'TailwindCSS'],
      liveUrl: 'https://tiereducation.com.br/techfenixscout/',
      hasRepository: false,
      featured: true,
    },
    {
      id: 3,
      title: 'Landing Page TIER Education (EdTech)',
      description: 'Landing page institucional desenvolvida com React e Tailwind CSS, focada em conversão e apresentação clara dos programas educacionais da edtech. Implementação de carrosséis responsivos, seções dinâmicas e layout totalmente adaptado para diferentes dispositivos.',
      image: './tierhomme.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      github: 'https://github.com/Wanderson-XXV/tier-main-page',
      liveUrl: 'https://tiereducation.com.br/',
      hasRepository: true,
      featured: false,
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            <span className="gradient-text">projetos</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl">
            Alguns dos projetos que desenvolvi, demonstrando minhas habilidades em desenvolvimento front-end e resolução de problemas.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative group ${project.featured ? 'md:col-span-1 lg:col-span-1' : ''}`}
              style={{
                perspective: '1000px'
              }}
            >
              <motion.div
                animate={{
                  rotateX: hoveredId === project.id ? 2 : 0,
                  rotateY: hoveredId === project.id ? -2 : 0,
                  scale: hoveredId === project.id ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-500 h-full flex flex-col"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-56 overflow-hidden block"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredId === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"
                    animate={{
                      opacity: hoveredId === project.id ? 0.9 : 0.7,
                    }}
                  />

                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent/90 text-white text-xs font-medium rounded-full">
                        Destaque
                      </span>
                    </div>
                  )}

                  {project.hasRepository && (
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                    </div>
                  )}

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                    className="absolute inset-0 flex items-center justify-center gap-4"
                  >
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.a>
                    )}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-accent/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent transition-colors pointer-events-none"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </a>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white font-poppins mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-accent/10 text-accent-light text-xs font-space rounded-full border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Wanderson-XXV"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 border border-accent text-accent hover:bg-accent/10 rounded-lg font-medium transition-all"
          >
            <span>Ver mais no GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects