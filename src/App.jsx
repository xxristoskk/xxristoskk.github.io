import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen p-8 md:p-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="gradient-text">Xristos Katsaros</span>
        </h1>
        <div className="flex gap-4 mb-6">
          <a href="mailto:x.katsaros.ds@gmail.com" className="text-text hover:text-blue-400"><Mail size={24} /></a>
          <a href="https://www.linkedin.com/in/xristos-katsaros/" className="text-text hover:text-blue-400"><Linkedin size={24} /></a>
          <a href="https://github.com/xxristoskk" className="text-text hover:text-blue-400"><Github size={24} /></a>
        </div>
        <p className="text-xl text-gray-300">Data Analyst || Engineer || Full Stack Developer</p>
      </motion.section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Skills Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="skills-panel technical-panel"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Technical Arsenal</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="skill-card technical">
                <Code2 className="text-blue-400 mb-2" size={24} />
                <h4 className="text-lg font-medium mb-2">Frontend</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    React & React Hooks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    JavaScript/TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Tailwind CSS
                  </li>
                </ul>
              </div>
              
              <div className="skill-card technical">
                <Code2 className="text-green-400 mb-2" size={24} />
                <h4 className="text-lg font-medium mb-2">Backend</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Python
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Django
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    REST APIs
                  </li>
                </ul>
              </div>

              <div className="skill-card technical">
                <Code2 className="text-purple-400 mb-2" size={24} />
                <h4 className="text-lg font-medium mb-2">Data Science</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Pandas & NumPy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Scikit-Learn
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Data Visualization
                  </li>
                </ul>
              </div>

              <div className="skill-card technical">
                <Code2 className="text-yellow-400 mb-2" size={24} />
                <h4 className="text-lg font-medium mb-2">Tools</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Git & GitHub
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    SQL & NoSQL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Docker
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Core Skills Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="skills-panel core-panel"
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Core Foundation</h3>
            <div className="space-y-6">
              <div className="skill-card core">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🔍</span>
                  <h4 className="text-lg font-medium">Research & Analysis</h4>
                </div>
                <p className="text-gray-300">
                  Deep expertise in data-driven research, pattern recognition, and extracting meaningful insights from complex information.
                </p>
                <div className="mt-3 text-sm text-gray-400">
                  Applied in: Policing in the Pandemic research
                </div>
              </div>

              <div className="skill-card core">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">✍️</span>
                  <h4 className="text-lg font-medium">Critical Writing</h4>
                </div>
                <p className="text-gray-300">
                  Strong ability to articulate complex ideas clearly and create compelling data-driven narratives.
                </p>
                <div className="mt-3 text-sm text-gray-400">
                  Featured in: Medium publications
                </div>
              </div>

              <div className="skill-card core">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🧠</span>
                  <h4 className="text-lg font-medium">Critical Thinking</h4>
                </div>
                <p className="text-gray-300">
                  Philosophy background enabling systematic problem-solving and logical analysis of complex challenges.
                </p>
                <div className="mt-3 text-sm text-gray-400">
                  Background: Philosophy studies at Brooklyn College
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Vibe Atlas</h3>
            <p className="text-gray-300 mb-4">A modern, interactive map-based music discovery platform for exploring independent artists on Bandcamp.</p>
            <div className="flex gap-4">
              <a href="https://vibe-atlas-57un.onrender.com/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                <ExternalLink size={16} /> Demo
              </a>
            </div>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Policing In The Pandemic</h3>
            <p className="text-gray-300 mb-4">Examining trends of policing during the early pandemic with data from multiple sources.</p>
            <div className="flex gap-4">
              <a href="https://medium.com/qri-io/policing-in-the-pandemic-45448687714b" className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                <ExternalLink size={16} /> Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-8">
          <div className="card">
            <div className="flex items-start gap-4">
              <Briefcase className="text-blue-400" size={24} />
              <div>
                <h3 className="text-xl font-semibold">ASPCA</h3>
                <p className="text-gray-400">Data Entry Contractor</p>
                <p className="text-sm text-gray-500">September 2023 – December 2023</p>
                <ul className="mt-4 list-disc list-inside text-gray-300">
                  <li>Cleaned and revised animal clinical intakes from 2019-2022</li>
                  <li>Cross-referenced multiple databases to recover missing data</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-start gap-4">
              <Briefcase className="text-blue-400" size={24} />
              <div>
                <h3 className="text-xl font-semibold">Qri</h3>
                <p className="text-gray-400">Data Analyst and Research Consultant</p>
                <p className="text-sm text-gray-500">February 2020 – February 2021</p>
                <ul className="mt-4 list-disc list-inside text-gray-300">
                  <li>Published data analysis research about social media, criminal justice, and COVID-19</li>
                  <li>Built over 30 datasets for Qri users by scraping over 500 webpages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="section-title">Education</h2>
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-start gap-4">
              <GraduationCap className="text-blue-400" size={24} />
              <div>
                <h3 className="text-xl font-semibold">Flatiron School</h3>
                <p className="text-gray-400">Immersive Data Science Bootcamp</p>
                <p className="text-sm text-gray-500">2019</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-start gap-4">
              <GraduationCap className="text-blue-400" size={24} />
              <div>
                <h3 className="text-xl font-semibold">Brooklyn College</h3>
                <p className="text-gray-400">Philosophy and Urban Policy</p>
                <p className="text-sm text-gray-500">2016-2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
