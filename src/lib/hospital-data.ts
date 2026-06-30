import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";

export const HOSPITAL = {
  name: "Raheem Surgical Hospital",
  tagline: "Compassionate Care, Trusted Surgery",
  city: "Sambrial, Sialkot",
  address: "Main Wazirabad Road, Sambrial, Sialkot, Punjab, Pakistan",
  phone: "+92 300 0000000",
  emergency: "+92 300 0000911",
  whatsapp: "923000000000",
  email: "info@raheemhospital.pk",
  hours: "24/7 Emergency • OPD 9:00 AM – 9:00 PM",
  facebook: "https://facebook.com",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.879!2d74.349!3d32.466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSambrial%20Sialkot!5e0!3m2!1sen!2spk!4v1700000000000",
};

export type DepartmentSlug =
  | "surgery"
  | "emergency"
  | "icu"
  | "physiotherapy"
  | "gynaecology"
  | "laboratory"
  | "pharmacy"
  | "opd";

export interface Department {
  slug: DepartmentSlug;
  name: string;
  short: string;
  description: string;
  highlights: string[];
  icon: string;
}

export const DEPARTMENTS: Department[] = [
  {
    slug: "surgery",
    name: "Surgery",
    short: "General & specialised surgical procedures",
    description:
      "Our surgical department performs a wide range of procedures with modern equipment and experienced surgeons, supported by a fully equipped operation theatre.",
    highlights: [
      "General & laparoscopic surgery",
      "Appendectomy, hernia repair, gallbladder",
      "Modern OT with anaesthesia support",
      "Post-operative care in dedicated wards",
    ],
    icon: "scalpel",
  },
  {
    slug: "emergency",
    name: "Emergency",
    short: "24/7 emergency & trauma care",
    description:
      "Our emergency department is open 24 hours a day, 7 days a week, staffed by trained doctors and nurses ready to respond to trauma, accidents, and acute medical conditions.",
    highlights: [
      "Round-the-clock availability",
      "Trauma & accident response",
      "On-call surgeons & anaesthetists",
      "Ambulance coordination",
    ],
    icon: "siren",
  },
  {
    slug: "icu",
    name: "Intensive Care Unit",
    short: "Critical care with continuous monitoring",
    description:
      "Our ICU is equipped with cardiac monitors, ventilators, and infusion pumps, staffed by critical-care trained nurses and physicians around the clock.",
    highlights: [
      "Multi-para cardiac monitors",
      "Ventilator support",
      "Trained critical-care nursing",
      "24/7 physician supervision",
    ],
    icon: "activity",
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    short: "Rehabilitation & pain management — a hospital strength",
    description:
      "A flagship department at Raheem Surgical Hospital. Our physiotherapy team provides evidence-based rehabilitation for musculoskeletal, neurological, and post-surgical conditions, supported by modern therapeutic equipment.",
    highlights: [
      "Post-surgical rehabilitation",
      "Stroke & neurological recovery",
      "Sports & orthopaedic injuries",
      "Back, neck & joint pain management",
      "Electrotherapy, ultrasound, traction & exercise therapy",
      "Paediatric & geriatric physiotherapy",
    ],
    icon: "heart-pulse",
  },
  {
    slug: "gynaecology",
    name: "Gynaecology & Obstetrics",
    short: "Women's health, pregnancy & delivery",
    description:
      "Comprehensive care for women across every stage of life — from antenatal check-ups and safe deliveries to gynaecological surgery and routine wellness.",
    highlights: [
      "Antenatal & postnatal care",
      "Normal & C-section deliveries",
      "Gynaecological surgery",
      "Female physicians on staff",
    ],
    icon: "baby",
  },
  {
    slug: "laboratory",
    name: "Laboratory",
    short: "Diagnostic testing with quick turnaround",
    description:
      "On-site lab providing routine and specialised diagnostic tests with prompt reporting to support accurate clinical decisions.",
    highlights: [
      "Haematology & biochemistry",
      "Urinalysis & cultures",
      "Hormone & thyroid panels",
      "Same-day reports for most tests",
    ],
    icon: "flask",
  },
  {
    slug: "pharmacy",
    name: "Pharmacy",
    short: "In-house pharmacy with quality medicines",
    description:
      "A fully stocked in-house pharmacy ensures patients can collect prescribed medicines without leaving the premises.",
    highlights: [
      "Wide range of medicines",
      "Surgical & wound-care supplies",
      "Qualified pharmacists",
      "Open during OPD & emergency hours",
    ],
    icon: "pill",
  },
  {
    slug: "opd",
    name: "General Checkups / OPD",
    short: "Outpatient consultations for all ages",
    description:
      "Walk-in and scheduled consultations across general medicine and specialty clinics — for children, adults, and the elderly.",
    highlights: [
      "General physician consults",
      "Specialist clinics by appointment",
      "Routine health checkups",
      "Vaccination & preventive care",
    ],
    icon: "stethoscope",
  },
];

export interface Doctor {
  slug: string;
  name: string;
  qualification: string;
  specialty: string;
  department: DepartmentSlug;
  photo: string;
  timings: string;
  bio: string;
}

export const DOCTORS: Doctor[] = [
  {
    slug: "dr-hamza-zahid",
    name: "Dr. Hamza Zahid",
    qualification: "DPT, MS-OMPT",
    specialty: "Physiotherapist",
    department: "physiotherapy",
    photo: doctor3,
    timings: "Mon–Sat • 10:00 AM – 6:00 PM",
    bio: "Senior physiotherapist with extensive experience in musculoskeletal rehabilitation, post-surgical recovery, and neurological physiotherapy. Leads the physiotherapy department at Raheem Surgical Hospital.",
  },
  {
    slug: "dr-muhammad-raheem",
    name: "Dr. Muhammad Raheem",
    qualification: "MBBS, FCPS (Surgery)",
    specialty: "General & Laparoscopic Surgeon",
    department: "surgery",
    photo: doctor4,
    timings: "Mon–Sat • 11:00 AM – 4:00 PM",
    bio: "Consultant surgeon with years of experience in general and laparoscopic procedures. Founder and lead surgeon of the hospital.",
  },
  {
    slug: "dr-aisha-malik",
    name: "Dr. Aisha Malik",
    qualification: "MBBS, FCPS (Gynae)",
    specialty: "Gynaecologist & Obstetrician",
    department: "gynaecology",
    photo: doctor2,
    timings: "Mon–Fri • 10:00 AM – 2:00 PM",
    bio: "Consultant gynaecologist providing antenatal care, deliveries, and women's health services with a compassionate, patient-first approach.",
  },
  {
    slug: "dr-ahmed-khan",
    name: "Dr. Ahmed Khan",
    qualification: "MBBS, MCPS (Medicine)",
    specialty: "General Physician",
    department: "opd",
    photo: doctor1,
    timings: "Daily • 9:00 AM – 9:00 PM",
    bio: "General physician for OPD consultations, routine checkups, and chronic-disease management across all ages.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Saima R.",
    location: "Sambrial",
    text: "After my knee surgery I was in real pain. The physiotherapy team at Raheem Hospital helped me walk again — they were patient, kind, and explained every exercise carefully.",
  },
  {
    name: "Imran A.",
    location: "Sialkot",
    text: "Brought my father here in the middle of the night for a road accident. The emergency staff acted fast and the surgeon came in straight away. Forever grateful.",
  },
  {
    name: "Fatima B.",
    location: "Daska",
    text: "My delivery was handled with great care. The staff was respectful and the facility was clean. I'd recommend it to other mothers in the area.",
  },
];

export const FACILITY_STATS = [
  { label: "Years Serving Sambrial", value: "15+" },
  { label: "Doctors on Staff", value: "12+" },
  { label: "Beds & ICU Capacity", value: "30+" },
  { label: "Emergency Coverage", value: "24/7" },
];
