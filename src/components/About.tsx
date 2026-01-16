import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    { 
      title: 'Front-End',
      description: 'Especialista em React',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#FFFFFF">
          <circle cx="12" cy="12" r="2"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-60 12 12)"/>
        </svg>
      )
    },
    { 
      title: 'TypeScript',
      description: 'Código tipado e seguro',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#3178C6">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      )
    },
    { 
      title: 'Robótica',
      description: '7 anos de experiência',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#9333EA">
          <path d="M12 .04a1.743 1.743 0 0 0-.537 3.401l-.631 2.579H2.456A2.456 2.456 0 0 0 0 8.476v13.029a2.456 2.456 0 0 0 2.456 2.456h19.088c1.356 0 2.456-1.1 2.456-2.456V8.476c0-1.356-1.1-2.456-2.456-2.456h-8.403l-.616-2.575A1.743 1.743 0 0 0 11.999.04zM3.933 7.881h16.136c1.101 0 1.994.893 1.994 1.994v10.117a1.994 1.994 0 0 1-1.994 1.994H3.933a1.994 1.994 0 0 1-1.994-1.994V9.875c0-1.101.893-1.994 1.994-1.994zm3.254 2.312a4.575 4.575 0 1 0 0 9.15 4.575 4.575 0 0 0 0-9.15zm9.743 0a4.575 4.575 0 1 0 0 9.15 4.575 4.575 0 0 0 0-9.15zm-9.743 1.07a3.506 3.506 0 1 1 0 7.011 3.506 3.506 0 0 1 0-7.011zm9.743 0a3.506 3.506 0 1 1 0 7.011 3.506 3.506 0 0 1 0-7.011zm-9.743 1.663a1.843 1.843 0 1 0 0 3.686 1.843 1.843 0 0 0 0-3.686zm9.743 0a1.843 1.843 0 1 0 0 3.686 1.843 1.843 0 0 0 0-3.686zm-6.927 6.5v2.159h.706v-2.159h-.706zm1.077 0v2.159h.705v-2.159h-.705zm1.076 0v2.159h.706v-2.159h-.706zm1.077 0v2.159h.706v-2.159h-.706zm1.077.03v2.1a1.08 1.08 0 0 0 .829-1.049v-.001c0-.51-.354-.937-.829-1.05zm-4.678.028a1.08 1.08 0 0 0-.731 1.021v.001c0 .474.306.876.731 1.021v-2.043z"/>
        </svg>
      )
    },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            <span className="gradient-text">sobre</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Sou um desenvolvedor <span className="text-accent font-semibold">Front-end</span> especializado em <span className="text-accent font-semibold">React</span> e <span className="text-accent font-semibold">TypeScript</span>, com uma trajetória que une o rigor lógico da robótica de competição à agilidade do desenvolvimento web moderno.
            </p>
            
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Ao longo de 4  anos competindo e <span className="text-white font-medium">3 anos liderando equipes premiadas internacionalmente</span>, desenvolvi uma robusta capacidade analítica para lidar com sistemas complexos e visualização de dados, competências que aplico diariamente na criação de interfaces performáticas e escaláveis.
            </p>

            <motion.a
              href="https://www.linkedin.com/in/wanderson-damasceno/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
            >
              <span>Conecte-se comigo no LinkedIn</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-card p-6 rounded-xl hover-glow transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-4">
                  {item.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-white font-poppins">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 font-space">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About