import { 
  Database, 
  Code2, 
  BarChart3, 
  BrainCircuit, 
  LineChart, 
  FileSpreadsheet,
  Globe,
  GitPullRequest,
  Mail,
  User,
  GraduationCap,
  Cpu,
  Layers,
  Terminal,
  Zap,
  Microscope,
  Workflow
} from 'lucide-react';

export const portfolioData = {
  name: "Ahmad Raza",
  role: "Data Science Student",
  roles: ["Data Scientist", "ML Engineer", "Data Analyst", "AI Enthusiast"],
  intro: "Aspiring Data Scientist passionate about uncovering patterns in data and building intelligent systems that solve complex problems.",
  
  about: {
    bio: "I am a Data Science student with a deep interest in machine learning, statistical modeling, and data engineering. My journey is focused on bridging the gap between raw data and actionable intelligence. I thrive on building models that not only predict but explain the 'why' behind the numbers.",
    journey: "Starting from a strong foundation in science at DJ Govt Science College, I transitioned into the world of Data Science at Muhammad Ali Jinnah University. My path is defined by constant learning and building.",
    goals: "My ultimate goal is to become an expert AI Researcher, contributing to innovations that make technology more intuitive and data-driven.",
    stats: [
      { label: "Projects Completed", value: "12+" },
      { label: "Skills Mastered", value: "25+" },
      { label: "Learning Hours", value: "800+" },
      { label: "Model Accuracy Avg", value: "92%" }
    ],
    education: [
      {
        degree: "BS in Data Science",
        institution: "Muhammad Ali Jinnah University (MAJU)",
        year: "2022 - Present",
        description: "Focusing on Machine Learning, Big Data Analytics, and Advanced Statistics."
      },
      {
        degree: "Intermediate in Pre-Engineering",
        institution: "DJ Govt Science College",
        year: "2020 - 2022",
        description: "Strong foundation in Mathematics and Physics."
      }
    ]
  },

  skills: [
    { name: "Python", icon: Code2, category: "Core", proficiency: 95 },
    { name: "SQL", icon: Database, category: "Core", proficiency: 85 },
    { name: "PyTorch/TF", icon: BrainCircuit, category: "AI/ML", proficiency: 80 },
    { name: "Scikit-Learn", icon: Microscope, category: "AI/ML", proficiency: 90 },
    { name: "Apache Spark", icon: Zap, category: "Big Data", proficiency: 70 },
    { name: "Plotly/D3.js", icon: BarChart3, category: "Visualization", proficiency: 85 },
    { name: "Pandas/NumPy", icon: FileSpreadsheet, category: "Core", proficiency: 98 },
    { name: "Docker/Git", icon: Layers, category: "DevOps", proficiency: 75 }
  ],

  projects: [
    {
      id: 1,
      title: "Supply Chain Forecasting",
      category: "Machine Learning",
      tag: "XGBoost",
      description: "Optimizing inventory levels using advanced time-series forecasting models.",
      impact: "Reduced overhead by 15%",
      tech: ["Python", "XGBoost", "Statsmodels"],
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      id: 2,
      title: "Sentiment Analysis Engine",
      category: "NLP",
      tag: "Transformer",
      description: "Real-time analysis of customer feedback using fine-tuned BERT models.",
      impact: "94% classification accuracy",
      tech: ["PyTorch", "HuggingFace", "FastAPI"],
      github: "https://github.com"
    },
    {
      id: 3,
      title: "Traffic Anomaly Detection",
      category: "Computer Vision",
      tag: "YOLOv8",
      description: "Automated identification of traffic violations using real-time video streams.",
      impact: "Real-time processing at 30 FPS",
      tech: ["OpenCV", "PyTorch", "CUDA"],
      github: "https://github.com"
    }
  ],

  visualizations: {
    skillProficiency: [
      { subject: 'Machine Learning', A: 90, fullMark: 100 },
      { subject: 'Data Engineering', A: 80, fullMark: 100 },
      { subject: 'Deep Learning', A: 85, fullMark: 100 },
      { subject: 'Statistical Analysis', A: 95, fullMark: 100 },
      { subject: 'Visualization', A: 88, fullMark: 100 },
      { subject: 'Big Data', A: 75, fullMark: 100 },
    ],
    projectDistribution: [
      { name: 'Computer Vision', value: 40 },
      { name: 'NLP', value: 30 },
      { name: 'Predictive Modeling', value: 30 },
    ]
  },

  socials: [
    { icon: GitPullRequest, link: "https://github.com", name: "GitHub" },
    { icon: User, link: "https://linkedin.com", name: "LinkedIn" },
    { icon: Mail, link: "mailto:ahmad@example.com", name: "Email" }
  ]
};

