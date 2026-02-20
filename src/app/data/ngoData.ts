// NGO Data

export interface Director {
  id: number;
  name: string;
  title: string;
  photo: string;
  bio?: string;
  education?: string;
  experience?: string;
  skills?: string[];
  impact?: string;
}

export const directors: Director[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Executive Director",
    photo: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc2OTEwNTkwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Dr. Sarah Johnson has dedicated over 20 years to humanitarian work across Africa and Asia. Her passion for community development and sustainable change has transformed thousands of lives.",
    education: "PhD in International Development, Harvard University; MA in Public Health, Johns Hopkins University",
    experience: "Former Director at UNICEF Regional Office, Lead Consultant for WHO Health Programs, Founder of Community Health Initiative",
    skills: ["Strategic Planning", "Fundraising", "Community Engagement", "Program Management"],
    impact: "Led initiatives that provided clean water to over 500,000 people and established 150+ community health centers"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Director of Operations",
    photo: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2OTA3NDA5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Michael brings extensive experience in logistics and supply chain management to ensure our programs run efficiently and resources reach those who need them most.",
    education: "MBA in Operations Management, Stanford University",
    skills: ["Supply Chain Management", "Logistics", "Team Leadership", "Process Optimization"],
    impact: "Reduced operational costs by 40% while expanding program reach by 200%"
  },
  {
    id: 3,
    name: "Amina Okonkwo",
    title: "Director of Programs",
    photo: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc2OTEwNTkwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Amina's grassroots approach and deep understanding of local communities has made our programs culturally sensitive and highly effective.",
    experience: "15 years in community development across West Africa, Former Program Manager at Oxfam",
    impact: "Launched 50+ education programs benefiting over 25,000 children"
  },
  {
    id: 4,
    name: "Dr. James Martinez",
    title: "Medical Director",
    photo: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2OTA3NDA5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Dr. Martinez oversees all medical programs and partnerships, ensuring quality healthcare reaches underserved communities.",
    education: "MD, University of California; MPH, Columbia University",
    skills: ["Public Health", "Medical Training", "Healthcare Policy"]
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "Director of Finance",
    photo: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc2OTEwNTkwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Lisa ensures financial transparency and sustainability, managing our resources with integrity and strategic foresight.",
    experience: "Former CFO at international development organization, 18 years in non-profit finance"
  },
  {
    id: 6,
    name: "Raj Patel",
    title: "Director of Technology",
    photo: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2OTA3NDA5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Raj leverages technology to amplify our impact, from data-driven decision making to digital education platforms.",
    skills: ["Software Development", "Data Analytics", "Digital Strategy"]
  }
];

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description: "Building sustainable water wells and sanitation systems in rural communities across East Africa.",
    image: "https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHdlbGwlMjBhZnJpY2F8ZW58MXx8fHwxNzY5MDcyODgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    title: "Education for All",
    description: "Providing quality education, school supplies, and teacher training to underserved communities.",
    image: "https://images.unsplash.com/photo-1758612898181-d7c92f0e21d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc2OTA2MjIwMXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    title: "Community Health Centers",
    description: "Establishing accessible healthcare facilities with trained medical professionals in remote areas.",
    image: "https://images.unsplash.com/photo-1516574290314-5a56c5acdd4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoJTIwY2xpbmljfGVufDF8fHx8MTc2OTA3MzgxMXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    title: "Sustainable Livelihoods",
    description: "Empowering families through vocational training, microfinance, and agricultural support programs.",
    image: "https://images.unsplash.com/photo-1759709042164-0dd78a39028b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwY29tbXVuaXR5JTIwaGVscGluZ3xlbnwxfHx8fDE3NjkwNzY1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export const organizationInfo = {
  name: "Hope & Change Foundation",
  motto: "Transforming Lives, Building Futures",
  vision: "A world where every community has access to essential resources, quality education, and healthcare, enabling individuals to reach their full potential.",
  mission: "To empower underserved communities through sustainable development programs, focusing on education, healthcare, clean water, and economic opportunity.",
  objectives: [
    "Provide access to clean water and sanitation for 1 million people by 2028",
    "Establish 200 community health centers in rural areas",
    "Ensure 100,000 children receive quality education annually",
    "Train 50,000 individuals in sustainable livelihood skills"
  ],
  coreValues: [
    { title: "Integrity", description: "We operate with transparency and accountability in all our actions" },
    { title: "Compassion", description: "We approach every community with empathy and respect for their dignity" },
    { title: "Sustainability", description: "We build programs that create lasting change and empower communities" },
    { title: "Innovation", description: "We embrace creative solutions to address complex challenges" },
    { title: "Collaboration", description: "We work in partnership with local communities and stakeholders" }
  ],
  contact: {
    website: "www.hopeandchange.org",
    email: "info@hopeandchange.org",
    phone: "+1 (555) 123-4567",
    address: "123 Hope Street, Suite 500, New York, NY 10001"
  }
};
