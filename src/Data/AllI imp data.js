import dentalImage from './Image Placeholder.png';
import bonesImage from './Image Placeholder (1).png';
import diagnosisImage from './Container.png';
import eyecareImage from './Container (3).png';
import cardiologyImage from './Container (2).png';
import surgeryImage from './Container (1).png';

const AllImpinfo = [
  {
    id: 1,
    image: dentalImage,
    name: "Dental",
    description: "Information related to dental health and care.",
  },
  {
    id: 2,
    image: bonesImage,
    name: "Bones",
    description: "Data on bone structure, health, and related conditions.",
  },
  {
    id: 3,
    image: diagnosisImage,
    name: "Diagnosis",
    description: "Diagnostic tools and information for various medical conditions.",
  },
  {
    id: 4,
    image: cardiologyImage,
    name: "Cardiology",
    description: "Information about heart health and cardiovascular diseases.",
  },
  {
    id: 5,
    image: eyecareImage,
    name: "Eyecare",
    description: "Information related to eye health and care.", // Add description
  },
  {
    id: 6,
    image: surgeryImage,
    name: "Surgery",
    description: "Information about surgical procedures and treatments.", // Add description
  },
];
   
  export const AllImpinfo2 = [
  {
    id: 1, // Generate unique IDs if needed (see explanation below)
    profileName: "MysteriousWanderer42",
    description: "Lost in the labyrinth of thoughts, seeking solace in the echoes of silence. A wanderer of dreams, chasing the horizon's elusive embrace.",
    img: "https://loremflickr.com/320/320/girl"
  },
  {
    id: 2, // Generate unique IDs if needed (see explanation below)
    profileName: "StarryEyedSeeker",
    description: "With a heart full of stardust and a soul hungry for adventure, /n I explore the universe within and beyond. A dreamer searching for cosmic connections.",
    img: "https://loremflickr.com/320/320/girl"
  },
  {
    id: 3, // Generate unique IDs if needed (see explanation below)
    profileName: "SilentObserver",
    description: "Observing the world from a quiet corner, finding beauty in the ordinary and magic in the unseen. A silent witness to life's unfolding tapestry.",
    img: "https://loremflickr.com/320/320/girl"
  }
];

export default AllImpinfo;
