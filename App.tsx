
import React from 'react';
import { PROJECTS } from './constants';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';

const Header: React.FC = () => (
  <header className="min-h-screen flex items-center justify-center text-center text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 opacity-90"></div>
    <div className="absolute inset-0 bg-black/20"></div>

    <div className="relative z-10 p-8">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-4 animate-fade-in-down">
        Tubagus Naufal Fathurahman
      </h1>
      <p className="text-xl md:text-2xl text-purple-300 font-light tracking-wide animate-fade-in-up">
        Fotografi · Machine Learning · Data Science · Astronomi
      </p>
    </div>
  </header>
);


const About: React.FC = () => (
    <Section id="about" title="Tentang Saya">
        <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
                Saya adalah seorang pengembara yang mencoba mengejar langitnya sendiri melalui Fotografi, Machine Learning, Data Science, dan tentunya astronomi. Proses pengembaraan ini didukung oleh sifat saya yang selalu ingin mempelajari hal baru dan memahaminya. Sebisa mungkin bermanfaat bagi sekitar dan selalu berharap menjadi manusia yang baik.
            </p>
        </div>
    </Section>
);

const Portfolio: React.FC = () => (
  <Section id="portfolio" title="Portofolio Proyek">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </Section>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-900/50 text-center py-8">
    <div className="container mx-auto px-6">
      <p className="text-gray-400">
        &copy; {new Date().getFullYear()} Tubagus Naufal Fathurahman. All Rights Reserved.
      </p>
       <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Email</a>
       </div>
    </div>
  </footer>
);


const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.5s forwards; }
      `}</style>
      <main className="bg-gradient-to-b from-transparent via-gray-900 to-gray-900">
        <Header />
        <div className="relative bg-gradient-to-b from-indigo-900/20 via-purple-900/10 to-gray-900">
            <About />
            <Portfolio />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;
