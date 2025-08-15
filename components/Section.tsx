
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          {title}
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mb-12"></div>
        {children}
      </div>
    </section>
  );
};

export default Section;
