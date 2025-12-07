export interface University {
  id: number;
  name: string;
  arabicName: string;
  city: string;
  type: 'Public' | 'Private';
  founded: number;
  students: string;
  ranking: number;
  image: string;
  programs: string[];
  tuitionRange: string;
  rating: number;
  description: string;
  location: string;
}

export const universities: University[] = [
  {
    id: 1,
    name: 'Cairo University',
    arabicName: 'جامعة القاهرة',
    city: 'Cairo',
    type: 'Public',
    founded: 1908,
    students: '155,000+',
    ranking: 1,
    image: 'https://img.youm7.com/ArticleImgs/2024/8/5/244087-%D9%82%D8%A8%D8%A9.jpg',
    programs: ['Medicine', 'Engineering', 'Law', 'Business', 'Arts'],
    tuitionRange: 'EGP 1,500 - 15,000',
    rating: 4.8,
    description: 'Egypt\'s premier university, renowned for academic excellence and research innovation.',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.336496155697!2d31.208526199999998!3d30.027202699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846dbabc27ebd%3A0xa8c3715257b6f3cb!2sCairo%20University!5e0!3m2!1sen!2seg!4v1765086076244!5m2!1sen!2seg"
  },
  {
    id: 2,
    name: 'American University in Cairo',
    arabicName: 'الجامعة الأمريكية بالقاهرة',
    city: 'Cairo',
    type: 'Private',
    founded: 1919,
    students: '7,000+',
    ranking: 2,
    image: 'https://theigclub.com/wp-content/uploads/elementor/thumbs/138529499_10159073446255295_5222111569372919742_n-pt2koewkqz4gbfzb9qexbotsi9olkdlglqnu743z4w.jpg',
    programs: ['Business', 'Engineering', 'Computer Science', 'Political Science', 'Psychology'],
    tuitionRange: 'USD 15,000 - 25,000',
    rating: 4.7,
    description: 'Leading liberal arts university offering American-style education in Egypt.',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.6155427407025!2d31.500327075009352!3d30.019193819767562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458225af8f916d1%3A0x75e8bf3141e205c7!2sThe%20American%20University%20in%20Cairo!5e0!3m2!1sen!2seg!4v1765086687548!5m2!1sen!2seg"
  },
  {
    id: 3,
    name: 'Alexandria University',
    arabicName: 'جامعة الإسكندرية',
    city: 'Alexandria',
    type: 'Public',
    founded: 1942,
    students: '180,000+',
    ranking: 3,
    image: 'https://alexu.edu.eg/images/ahmedgaber/my_university.jpg',
    programs: ['Medicine', 'Engineering', 'Agriculture', 'Pharmacy', 'Science'],
    tuitionRange: 'EGP 1,200 - 12,000',
    rating: 4.6,
    description: 'Historic university known for medical and engineering programs with Mediterranean campus.',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.3664411989203!2d29.910495575056693!3d31.210575662383395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3ee42055555%3A0x7453e67e768b49a2!2sAlexandria%20University!5e0!3m2!1sen!2seg!4v1765086783821!5m2!1sen!2seg"
  },
  {
    id: 4,
    name: 'Ain Shams University',
    arabicName: 'جامعة عين شمس',
    city: 'Cairo',
    type: 'Public',
    founded: 1950,
    students: '200,000+',
    ranking: 4,
    image: 'https://scenenow.com/Content/Admin/Uploads/Articles/ArticlesMainPhoto/42796/36a16404-69c2-4ebd-b4ad-80245e29027d.jpg',
    programs: ['Medicine', 'Engineering', 'Commerce', 'Education', 'Computer Science'],
    tuitionRange: 'EGP 1,800 - 18,000',
    rating: 4.5,
    description: 'Comprehensive university with strong research focus and diverse academic programs.',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.6120148033447!2d31.281971075011654!3d30.076653917044933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581aa0476faf15%3A0x61a1e5a21354321a!2sAin%20Shams%20University!5e0!3m2!1sen!2seg!4v1765086846061!5m2!1sen!2seg"
  },
  {
    id: 5,
    name: 'German University in Cairo',
    arabicName: 'الجامعة الألمانية بالقاهرة',
    city: 'Cairo',
    type: 'Private',
    founded: 2003,
    students: '12,000+',
    ranking: 5,
    image: 'https://www.guc.edu.eg//img/content/about_guc/48.jpg',
    programs: ['Engineering', 'Management', 'Information Technology', 'Applied Sciences'],
    tuitionRange: 'EUR 4,000 - 8,000',
    rating: 4.6,
    description: 'German-Egyptian partnership offering European-standard education and research.',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.742371528698!2d31.438770875008256!3d29.986833121299163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cb2bfafbe73%3A0x6e7220116094726d!2sGerman%20University%20in%20Cairo%20(GUC)!5e0!3m2!1sen!2seg!4v1765086892556!5m2!1sen!2seg"
  },
  {
    id: 6,
    name: 'Mansoura University',
    arabicName: 'جامعة المنصورة',
    city: 'Mansoura',
    type: 'Public',
    founded: 1972,
    students: '140,000+',
    ranking: 6,
    image: 'https://oktamam.com/wp-content/uploads/2024/03/mansoura-university-campus.jpg',
    programs: ['Medicine', 'Engineering', 'Science', 'Agriculture', 'Veterinary Medicine'],
    tuitionRange: 'EGP 1,400 - 14,000',
    rating: 4.4,
    description: 'Leading regional university with excellent medical and engineering faculties.',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.3305994516636!2d31.35111177505004!3d31.044894870480366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dd4295c80e9%3A0x29c566a018cecb77!2sMansoura%20University!5e0!3m2!1sen!2seg!4v1765086933292!5m2!1sen!2seg"
  }
];

export function getUniversityById(id: number): University | undefined {
  return universities.find(uni => uni.id === id);
}

