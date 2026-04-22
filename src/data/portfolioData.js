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
  GraduationCap
} from 'lucide-react';

export const portfolioData = {
  name: "Ahmad Hassan",
  role: "Data Scientist & ML Enthusiast",
  roles: ["Data Scientist", "ML Engineer", "Data Analyst", "Python Developer"],
  intro: "Turning complex data into actionable insights. Passionate about building robust machine learning models and creating compelling data stories.",
  
  about: {
    bio: "I am a Data Scientist with a strong foundation in statistical analysis and machine learning. I specialize in extracting meaningful patterns from large datasets to solve real-world problems. With experience in Python, SQL, and various data visualization tools, I thrive at the intersection of business and technology.",
    education: [
      {
        degree: "Bachelor of Science in Data Science",
        institution: "University of Excellence",
        year: "2019 - 2023"
      },
      {
        degree: "Professional Certificate in Applied AI",
        institution: "DataCamp",
        year: "2023"
      }
    ]
  },

  skills: [
    { name: "Python", icon: Code2, category: "Programming" },
    { name: "SQL", icon: Database, category: "Programming" },
    { name: "Pandas/NumPy", icon: FileSpreadsheet, category: "Data Processing" },
    { name: "Scikit-Learn", icon: BrainCircuit, category: "Machine Learning" },
    { name: "TensorFlow", icon: BrainCircuit, category: "Machine Learning" },
    { name: "Tableau/PowerBI", icon: BarChart3, category: "Visualization" },
    { name: "Recharts", icon: LineChart, category: "Visualization" },
    { name: "Git", icon: GitPullRequest, category: "Tools" }
  ],

  projects: [
    {
      id: 1,
      title: "Movie Dataset Analysis",
      category: "Data Analysis",
      description: "Explored a dataset of 80,000+ movies to identify trends in genres, ratings, and revenue over the last century.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      highlights: "Discovered a 15% increase in movie production during the streaming era.",
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      id: 2,
      title: "Customer Churn Prediction",
      category: "ML",
      description: "Developed a Random Forest model to predict customer churn for a telecom company with 92% accuracy.",
      tech: ["Scikit-Learn", "Python", "XGBoost"],
      highlights: "Reduced churn by 10% through targeted marketing based on model insights.",
      github: "https://github.com"
    },
    {
      id: 3,
      title: "Stock Market Dashboard",
      category: "Visualization",
      description: "Real-time stock market tracker with technical indicators and sentiment analysis from Twitter.",
      tech: ["React", "D3.js", "Alpha Vantage API"],
      highlights: "Interactive multi-line charts showing moving averages and RSI.",
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      id: 4,
      title: "NLP Sentiment Analyzer",
      category: "ML",
      description: "A deep learning model using LSTM to classify product reviews into positive, neutral, and negative sentiment.",
      tech: ["TensorFlow", "Keras", "NLTK"],
      highlights: "Achieved 89% F1-score on the IMDB reviews dataset.",
      github: "https://github.com"
    }
  ],

  visualizations: {
    skillProficiency: [
      { subject: 'Python', A: 95, fullMark: 100 },
      { subject: 'Machine Learning', A: 85, fullMark: 100 },
      { subject: 'Data Viz', A: 90, fullMark: 100 },
      { subject: 'SQL', A: 80, fullMark: 100 },
      { subject: 'Statistics', A: 75, fullMark: 100 },
    ],
    projectDistribution: [
      { name: 'Data Analysis', value: 40 },
      { name: 'Machine Learning', value: 35 },
      { name: 'Visualization', value: 25 },
    ]
  },

  socials: [
    { icon: GitPullRequest, link: "https://github.com", name: "GitHub" },
    { icon: User, link: "https://linkedin.com", name: "LinkedIn" },
    { icon: Mail, link: "mailto:ahmad@example.com", name: "Email" }
  ]
};
