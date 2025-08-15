
import type { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Galactic Nebulae Classification",
    category: "Astronomy & ML",
    description: "A deep learning model to classify different types of nebulae from telescopic images, aiding in astronomical research.",
    imageUrl: "https://picsum.photos/seed/nebula/800/600",
    tags: ["TensorFlow", "Python", "CNN", "Astrophotography"],
  },
  {
    id: 2,
    title: "Urban Light Pollution Analysis",
    category: "Data Science & Photography",
    description: "Analyzing long-exposure photographs and satellite data to map and quantify the impact of light pollution on night sky visibility.",
    imageUrl: "https://picsum.photos/seed/citylights/800/600",
    tags: ["Pandas", "GeoPy", "Data Visualization"],
  },
  {
    id: 3,
    title: "Real-time Object Detection",
    category: "Computer Vision",
    description: "Developing a high-performance system for real-time object detection and tracking in dynamic environments using YOLOv8.",
    imageUrl: "https://picsum.photos/seed/computervision/800/600",
    tags: ["PyTorch", "OpenCV", "YOLO", "Real-Time"],
  },
  {
    id: 4,
    title: "Cosmic Portraits",
    category: "Photography",
    description: "A personal collection of astrophotography, capturing the beauty of the cosmos from remote locations.",
    imageUrl: "https://picsum.photos/seed/astrophotography/800/600",
    tags: ["Long Exposure", "Photoshop", "Lightroom"],
  },
  {
    id: 5,
    title: "Sentiment Analysis of Scientific Papers",
    category: "Data Science & ML",
    description: "Utilizing NLP techniques to gauge the sentiment and trends in academic publications within the field of astrophysics.",
    imageUrl: "https://picsum.photos/seed/datascience/800/600",
    tags: ["NLP", "scikit-learn", "NLTK"],
  },
  {
    id: 6,
    title: "Planetary Surface Simulation",
    category: "Computer Vision & Astronomy",
    description: "Generating realistic 3D terrains of planetary surfaces from satellite imagery using Generative Adversarial Networks (GANs).",
    imageUrl: "https://picsum.photos/seed/planet/800/600",
    tags: ["GANs", "PyTorch3D", "3D Modeling"],
  },
];
