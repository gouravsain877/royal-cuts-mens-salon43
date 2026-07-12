import { Service, Package, Stylist, Review, FAQItem, GalleryItem } from './types';
import heroImg from './assets/images/royal_cuts_hero_1782125101399.jpg';
import stylingImg from './assets/images/haircut_beard_styling_1782125118210.jpg';
import groomingImg from './assets/images/grooming_setup_1782125135078.jpg';
import hairColorImg from './assets/images/hair_coloring_session_1782126053615.jpg';

// Let's reference our premium generated images and beautiful Unsplash placeholders
export const HERO_IMAGE_URL = heroImg;
export const PREMIUM_STYLING_URL = stylingImg;
export const GROOMING_SETUP_URL = groomingImg;
export const HAIR_COLOR_SESSION_URL = hairColorImg;

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Basic Haircut',
    price: 150,
    category: 'haircut',
    duration: '25 mins',
    description: 'Classic clipper & scissors cut. Includes warm water rinse, neck shave, and basic styling gel/wax.'
  },
  {
    id: 's2',
    name: 'Premium Haircut',
    price: 250,
    category: 'haircut',
    duration: '40 mins',
    description: 'Expert personalized haircut, blow dry, premium styling product application, and a relaxing hot towel treatment.'
  },
  {
    id: 's3',
    name: 'Beard Styling',
    price: 100,
    category: 'styling',
    duration: '20 mins',
    description: 'Beard trim and line-up with electric shaver and razor. Finished with premium beard oil for healthy shine.'
  },
  {
    id: 's4',
    name: 'Hair Wash',
    price: 80,
    category: 'grooming',
    duration: '10 mins',
    description: 'Thorough cleansing wash with premium shampoo and relaxing scalp massage, followed by blow dry and set.'
  },
  {
    id: 's5',
    name: 'Hair Spa',
    price: 499,
    category: 'treatment',
    duration: '45 mins',
    description: 'Deep hair nourishment therapy. Includes deep conditioning cream, steaming, and active scalp massage to improve circulation.'
  },
  {
    id: 's6',
    name: 'Facial',
    price: 599,
    category: 'treatment',
    duration: '40 mins',
    description: 'Deep pore facial cleansing, exfoliating scrub, moisturizing face mask, and premium serum massage for a glowing lock.'
  },
  {
    id: 's7',
    name: 'Hair Coloring',
    price: 699,
    category: 'treatment',
    duration: '50 mins',
    description: 'Professional grey coverage or custom highlights using ammonia-free, hair-friendly premium hair dye.'
  },
  {
    id: 's8',
    name: 'Keratin Treatment',
    price: 1999,
    category: 'treatment',
    duration: '90 mins',
    description: 'Intense smoothing keratin application to reduce frizz, straighten hair, and restore natural protein and shine.'
  },
  {
    id: 's9',
    name: 'Head Massage',
    price: 299,
    category: 'grooming',
    duration: '25 mins',
    description: 'Traditional relaxing head massage with herbal/cooling oils. Extremely helpful to de-stress and boost focus.'
  },
  {
    id: 's10',
    name: 'Bridal Groom Package',
    price: 2499,
    category: 'grooming',
    duration: '120 mins',
    description: 'Complete elite grooming for grooms. premium haircut, deep facial, intense hair spa, professional beard sculpt, head massage.'
  }
];

export const POPULAR_PACKAGES: Package[] = [
  {
    id: 'pkg1',
    name: 'Student Package',
    price: 299,
    servicesIncluded: ['Basic Haircut', 'Beard Trim', 'Hair Wash'],
    description: 'Perfect for college & high school students looking for a premium look on a student budget. Highly affordable!',
    badge: 'Best Value'
  },
  {
    id: 'pkg2',
    name: 'Executive Package',
    price: 799,
    servicesIncluded: ['Premium Haircut', 'Beard Styling', 'Facial'],
    description: 'The standard choice for busy young professionals. Look highly business-ready, clean-cut, and deeply refreshed.',
    badge: 'Most Popular'
  },
  {
    id: 'pkg3',
    name: 'Groom Package',
    price: 2499,
    servicesIncluded: ['Premium Haircut', 'Facial', 'Hair Spa', 'Beard Styling', 'Head Massage'],
    description: 'The ultimate royal treatment designed for grooms, special occasions, or a deep self-care premium reset.',
    badge: 'Luxury Vibe'
  }
];

export const STYLISTS: Stylist[] = [
  {
    id: 'sty1',
    name: 'Mohit Sharma',
    role: 'Founder & Head Stylist',
    experience: '10 Years',
    specialty: 'Advanced Hair Sculpture & Royal Makeovers',
    rating: 4.9,
    bio: 'With a decade of master grooming experience in Delhi, Mohit founded Royal Cuts in 2019. He specializes in bespoke signature haircuts and bridal styling.'
  },
  {
    id: 'sty2',
    name: 'Rahul Verma',
    role: 'Senior Barber',
    experience: '7 Years',
    specialty: 'Modern Fades & Classic Pompadours',
    rating: 4.8,
    bio: 'Rahul has a keen eye for geometry and trend styling. He is your go-to barber for crisp skin-fades, modern crop cuts, and slick back styles.'
  },
  {
    id: 'sty3',
    name: 'Deepak Singh',
    role: 'Hair Specialist',
    experience: '5 Years',
    specialty: 'Keratin, Hair Spa & Coloring Treatments',
    rating: 4.8,
    bio: 'Deepak is the chemistry and hair care master. He excels in restoring damaged hair, premium keratin application, and beautiful color work.'
  },
  {
    id: 'sty4',
    name: 'Aman Kumar',
    role: 'Beard Styling Expert',
    experience: '4 Years',
    specialty: 'Beard Sculpting, Razor Linings & Hot Towel Shaves',
    rating: 4.7,
    bio: 'Aman lives and breathes beard grooming. He styles beards to match customer face structures and excels in traditional cut-throat razor trims.'
  },
  {
    id: 'sty5',
    name: 'Vikas Yadav',
    role: 'Hair Color Specialist',
    experience: '6 Years',
    specialty: 'Creative Coloring & Hair Highlights',
    rating: 4.8,
    bio: 'Vikas is known for his creative vision. He performs perfect bleach work, subtle global color highlights, and grey coverage services.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Barbers',
    description: 'Our 5 handpicked artisans bring decades of combined hair craft, styling, and beard geometry to your groom.'
  },
  {
    title: 'Affordable Pricing',
    description: 'Premium, air-conditioned luxury services styling at democratic price points, making elite grooming standard for everyone.'
  },
  {
    title: 'Hygienic Environment',
    description: 'We adhere to surgical grade hygiene, using sterilized scissors, single-use razor blades, and fresh neck towels.'
  },
  {
    title: 'Modern Equipment',
    description: 'Equipped with the finest clippers, premium dryers, custom ergonomic chairs, and comfortable washing stations.'
  },
  {
    title: 'Online Appointment Facility',
    description: 'Skip long queues in Najafgarh! Select your preferred barber, choose a time slot, and get serviced instantly.'
  },
  {
    title: 'Premium Hair Products',
    description: 'We exclusively use professional, premium brands for shampoos, hair wax, beard balms, and facial clays.'
  },
  {
    title: 'Air Conditioned Salon',
    description: 'Beat the Delhi heat in our fully air-conditioned, odor-free, soothing ambient grooming lounge.'
  },
  {
    title: 'Free Consultation',
    description: 'Unsure of what styles suit you? Our barbers provide active, free hair and face-shape consultations.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Rohit Kumar',
    rating: 5,
    date: 'June 18, 2026',
    comment: 'Best haircut experience in Najafgarh. Staff is friendly and professional. Highly recommended!',
    isVerified: true
  },
  {
    id: 'r2',
    author: 'Amit Saini',
    rating: 5,
    date: 'June 12, 2026',
    comment: 'Affordable prices and great service quality. They handle hygiene super well and use fresh blades every time.',
    isVerified: true
  },
  {
    id: 'r3',
    author: 'Rajat Sharma',
    rating: 5,
    date: 'June 04, 2026',
    comment: 'The beard styling service of Aman is excellent. He really understands beard geometry and how to shape it.',
    isVerified: true
  }
];

export const BUSINESS_STATS = [
  { label: 'Happy Clients Served', value: '15,000+' },
  { label: 'Google Rating (1,400+ reviews)', value: '4.9★' },
  { label: 'Haircuts & Fades Crafted', value: '25,000+' },
  { label: 'Client Retention Rate', value: '98.4%' },
  { label: 'Hygiene & Safety Audit Score', value: '99.9%' },
  { label: 'Master Stylists On Staff', value: '5 Experts' }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Do I need an appointment?',
    answer: 'Walk-ins are always welcome, but we highly recommend booking an appointment online in advance to skip physical queues and ensure your preferred barber is fully available for you.'
  },
  {
    question: 'Which payment methods are accepted?',
    answer: 'We accept Cash, UPI (Google Pay, PhonePe, Paytm), and major credit/debit cards.'
  },
  {
    question: 'Do you offer home service?',
    answer: 'Currently, no. We only offer in-salon services in our Najafgarh, Delhi studio as we believe premium grooming requires professional, specialized salon setups and equipment.'
  },
  {
    question: 'Are grooming packages available?',
    answer: 'Yes! We offer a student package for ₹299, an executive package for ₹799, and a comprehensive royal groom package for ₹2499.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Premium Salon Lounge',
    category: 'Vibe',
    imageUrl: HERO_IMAGE_URL,
    description: 'Our air-conditioned premium salon environment with custom styling stations and warm lighting.'
  },
  {
    id: 'g2',
    title: 'Modern Haircut Session',
    category: 'Haircut',
    imageUrl: PREMIUM_STYLING_URL,
    description: 'Precise hair trimming and alignment of the hairline for a razor-sharp modern crop.'
  },
  {
    id: 'g3',
    title: 'Elite Grooming Setup',
    category: 'Accessories',
    imageUrl: GROOMING_SETUP_URL,
    description: 'Our sanitized scissors, premium amber vials, head massage products, and professional styling instruments.'
  },
  {
    id: 'g4',
    title: 'Sleek Beard Sculpting',
    category: 'Beard',
    imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600',
    description: 'Precision beard styling, trim, straight-razor detailing, and beard nourishing treatment.'
  },
  {
    id: 'g5',
    title: 'Relaxing Waiting Lounge',
    category: 'Vibe',
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600',
    description: 'A comfortable waiting space with magazines, warm ambient coffee, and relaxed sitting.'
  },
  {
    id: 'g6',
    title: 'Hair Wash and Care Station',
    category: 'Treatment',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600',
    description: 'A dedicated hair wash washing sink for comfortable scalp cleansing and hair treatment prep.'
  },
  {
    id: 'g7',
    title: 'Expert Hair Coloring Unit',
    category: 'Color',
    imageUrl: HAIR_COLOR_SESSION_URL,
    description: 'Ammonia-free hair color formulas and precision highlight styling tailored to hair textures.'
  },
  {
    id: 'g8',
    title: 'Groom Makeover Setup',
    category: 'Grooming',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600',
    description: 'Our signature bridal and grooms package elements to look razor sharp on the big day.'
  }
];
