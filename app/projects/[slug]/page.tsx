import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

const projects = [
  {
    slug: 'podar-school',
    title: 'Podar International School',
    location: 'Vijay Nagar, Indore, Madhya Pradesh',
    status: 'Completed',
    image: '/images/Podar.png',
    description:
      'Podar International School is a well-established educational institution located in Vijay Nagar, Indore. Part of the Podar Education Network, it features a multi-story white building campus catering to students across multiple grades.',
    address:
      'Satya Sai Circle, Scheme No.74, A.B.Road, behind Shri Panchmukhi Hanuman Mandir, Indore, Madhya Pradesh 452010',
    details: [
      { label: 'Project Type', value: 'Educational Institution / School Building' },
      { label: 'Building Type', value: 'Multi-story (3+ floors) white painted building' },
    ],
    features: [
      'Gated campus with boundary wall',
      'Landscaped gardens and greenery',
      'Parking area',
      'Multiple classrooms and administrative block',
      'Covered entrance',
    ],
  },
  {
    slug: 'st-pauls-school',
    title: 'St. Paul Institute of Professional Studies (SPIPS)',
    location: 'Indore, Madhya Pradesh',
    status: 'Ongoing',
    image: '/images/Pauls.png',
    description:
      'St. Paul Institute of Professional Studies (SPIPS) is a prominent educational institution in Indore featuring a modern multi-story building with a distinctive curved architectural design in white and light blue colors. The campus is set in a green, well-landscaped environment with hills in the background.',
    address:
      '7, Boundary Road, near Agriculture College, Krishi Nagar, Indore, Madhya Pradesh 452001',
    details: [
      { label: 'Project Type', value: 'Educational Institution / Professional Studies Institute' },
      { label: 'Building Type', value: 'Modern multi-story (5+ floors) building with curved facade' },
      { label: 'Architectural Style', value: 'Contemporary design with white and light blue exterior' },
    ],
    features: [
      'Landscaped gardens',
      'Statue at entrance',
      'Hill-side location',
      'Multiple wings and administrative block',
      'Large window facade',
    ],
  },
  {
    slug: 'sica-school',
    title: 'SICA School',
    location: 'Indore, Madhya Pradesh',
    status: 'Completed',
    image: '/images/SICA.png',
    description:
      'SICA School is a distinctive educational institution in Indore featuring a red and cream colored multi-story building with a signature clock tower. The campus includes covered parking, a compound wall with fencing, and a spacious courtyard.',
    address:
      'Scheme Number 78, Aranya Nagar, Vijay Nagar, Indore, Madhya Pradesh 452010',
    details: [
      { label: 'Project Type', value: 'Educational Institution / School Building' },
      { label: 'Building Type', value: 'Multi-story (3+ floors) with red and cream exterior' },
      { label: 'Key Features', value: 'Clock tower, covered parking area, spacious courtyard' },
    ],
    features: [
      'Iconic clock tower',
      'Covered parking area',
      'Spacious courtyard',
      'Multiple floors with arched windows',
      'Boundary wall with fencing',
    ],
  },
  {
    slug: 'gaurishankar',
    title: 'Gaurishankar Visava',
    location: 'Kothrud, Pune, Maharashtra',
    status: 'Ongoing',
    image: '/images/Gaurishankar.png',
    units: '8 Row Houses',
    description:
      'Gaurishankar Visava is a premium residential project by Vardan Developers in Kothrud, Pune — "The Stylish, Selective, Symphonic" living experience. It features modern row house-style architecture with 4BHK units with lift and high-end finishes throughout.',
    address:
      'Plot no: 59B, Shree Gouri Shankar Housing Society, Damodar Nagar, Hingne, Sinhgad Road, Pune 411043',
    details: [
      { label: 'Developer', value: 'Vardan Developers' },
      { label: 'Project Type', value: 'Premium Residential Row Houses' },
      { label: 'Unit Type', value: '4BHK with Lift' },
      { label: 'Total Units', value: '8 Row Houses' },
    ],
    amenities: {
      Flooring: [
        'Branded ISI marked vitrified tiles in living/dining space',
        'Ceramic tiles in bathroom and kitchen',
        'Natural/engineered stones & pavers in exterior and terrace',
      ],
      Kitchen: [
        'Stainless steel basin in appropriate size',
        'L-shape granite kitchen counter top',
        'Premium phosphate assembly for washbasin',
      ],
      'Wall Finish': [
        'Branded acrylic emulsion paints (interiors)',
        'Weather proof acrylic emulsion paints (exteriors)',
        'Ceramic tiles matt finish up to 7 ft in bathroom, 2 ft over kitchen counter',
      ],
      'Living / Dining / Bedroom': [
        'Spacious dining with double height ceiling',
        'Anchor/Panasonic electrical brands or equivalent',
        'MCBs and DBs as per ISI standard',
        'Tube lights, fans and exhaust fans in all units',
        'TV, telephone, A.C./cooler points at appropriate places',
      ],
      'Bathroom / Toilet': [
        'Anti-skid ceramic tile flooring',
        'Premium Jaguar or equivalent fittings',
        'Cera/Hindware or equivalent sanitary fittings',
      ],
      'Electrical Fittings': [
        'Anchor, GreatWhite, and Liguard switches & sockets',
        'Designated electrical switches and meters',
        'Power points for ACs, geysers, etc.',
      ],
      'Doors & Windows': [
        'Main entrance door with access control system',
        'Wooden flush doors with wood frames internally',
        'Anodised/powder coated aluminium glazed window frames',
        'Main entrance double door for security',
        'Every window equipped with mosquito net',
      ],
      Security: [
        'Intercom from security to all units',
        'Secure gated community with manned entrance guards',
      ],
      'Landscaping & Terrace': [
        'Grass paver tiles and paved terrace',
        'Gazebo sitting area with plantation',
        'Overhead and underground water tanks with pump',
        'Rain water harvesting facility',
      ],
    },
  },
  {
    slug: 'yakshanagari',
    title: 'Yakshanagari CHS (Redevelopment)',
    location: 'Kothrud, Pune, Maharashtra',
    status: 'Completed',
    image: '/images/Yakshanagri.jpeg',
    units: 'Shops, Offices & Flats',
    description:
      'Yakshanagari CHS is a redevelopment project of a cooperative housing society in Kothrud, Pune, developed by VSA Infoline. It is a commercial-cum-residential multi-story building featuring shops, offices, and residential units with prices starting from ₹90 Lacs.',
    address: 'Yakshnagari, Near Kothrud Bus Stand, Kothrud, Pune, Maharashtra 411038',
    details: [
      { label: 'Developer', value: 'VSA Infoline' },
      { label: 'Project Type', value: 'Commercial + Residential (Redevelopment)' },
      { label: 'Unit Types', value: 'Shops, Offices & Residential Flats' },
      { label: 'Starting Price', value: '₹90 Lacs onwards' },
      { label: 'Contact', value: '7559430719' },
    ],
    features: [
      'Elegant entrance lobby with space for society office',
      'Hi-class elevator with MS Puzzle car parking and two-wheeler scissor lift',
      'Balcony SS railing with glass, SS pipe railing for staircase',
      'Heavy duty aluminium windows and sliding doors with mosquito mesh',
      '800×1600 size marble finish tiles, anti-skid flooring for balconies',
      'Well-designed toilet with 600×1200 size wall tiles and solar water supply',
      'Jaquar faucets and fittings',
      '30mm flush door in attractive laminate finish with necessary hardware',
    ],
  },
  {
    slug: 'dewas',
    title: 'Anand Vihar Lake View',
    location: 'Near Meetha Talab, Dewas, Madhya Pradesh',
    status: 'Proposed',
    image: 'https://picsum.photos/seed/oasis/800/600',
    units: '92 Units (Plots & Row Houses)',
    description:
      'Anand Vihar Lake View is a residential colony project located near Meetha Talab (Sweet Lake) in Dewas, Madhya Pradesh, developed by Vardan Group. "Sapne Nahi, Hakikat Dikhate Hain Hum" — We show reality, not dreams. It offers plots and row houses with PMAY subsidy eligibility.',
    address: 'Near Meetha Talab, Vriddha Ashram ke pahle, Newri Road, Dewas, Madhya Pradesh',
    details: [
      { label: 'Developer', value: 'Vardan Group' },
      { label: 'Marketing', value: 'Rajeshri Marketing Consultant & Real Estate' },
      { label: 'Project Type', value: 'Residential Colony – Plots & Row Houses' },
      { label: 'Plot Sizes', value: '15×40 and 20×40 feet' },
      { label: 'Unit Types', value: '1 BHK, 2 BHK Row Houses and Plots' },
      { label: 'Colony Status', value: 'Fully Legal (Vaidh Colony)' },
      { label: 'PMAY Subsidy', value: 'Up to ₹2.67 Lakh' },
      { label: 'Loan Availability', value: 'Central Bank of India, SBI, HDFC, Yes Bank' },
    ],
    features: [
      'Main entrance gate with 24-hour security guard',
      'CCTV cameras for colony security',
      'Cement concrete roads',
      'Boundary wall around the colony',
      'Underground sewerage with Sewage Treatment Plant (STP)',
      'Underground water supply line and overhead water tank',
      'Modern street lights',
      'Jogging street and jogging park',
      "Children's play area with garden",
      'Abundant trees and plants for environmental conservation',
    ],
    nearby: [
      'Meetha Talab – Just a few steps away',
      'Mata Chamunda Mandir – 5 minutes',
      'Dewas-Bhopal Road – 2 minutes',
      'Maharaja Tukojirao Pawar Sports Stadium – Nearby',
      'Saint Thomas Academy School – 4 minutes',
      'Dewas Main Market – 2 minutes',
      'Circuit House – 1 minute',
      'Indore-Dewas Bypass – 5 minutes',
      'D-Mart Shopping Mall – 3 minutes',
      'Bus Stand – 5 minutes',
      'Railway Station – 10 minutes',
    ],
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} | Vibgyor Inframech` : 'Project Not Found',
    description: project?.description ?? '',
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const p = project as any;

  // Build stats array — only include items that have real data
  const stats = [
    p.area      && { label: 'Project Area', value: p.area },
    p.units     && { label: 'Units',        value: p.units },
    p.startDate && { label: 'Start Date',   value: p.startDate },
    p.status    && { label: 'Status',       value: p.status },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <main className="bg-background">
      <Navbar />

      <div className="pt-20 pb-8 px-6 container mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      <div className="relative overflow-hidden mb-16 mx-auto" style={{ height: '550px', maxWidth: '1200px' }}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="px-6 container mx-auto pb-20">
        <div className="max-w-4xl">

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-4 py-2">
                {project.status}
              </span>
              <span className="text-sm text-muted-foreground">{project.location}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-black tracking-tighter mb-6 uppercase leading-none">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Stats row — only renders if at least one stat exists */}
          {stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-border">
              {stats.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">{label}</p>
                  <p className="text-2xl font-heading font-black">{value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Address */}
          {project.address && (
            <div className="mt-10 py-8 border-b border-border">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">Address</p>
              <p className="text-base text-muted-foreground leading-relaxed">{project.address}</p>
            </div>
          )}

          {/* Project Details */}
          {project.details && project.details.length > 0 && (
            <div className="mt-10 py-8 border-b border-border">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">Project Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.details.map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</span>
                    <span className="text-sm font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mt-10 py-8 border-b border-border">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                {p.amenities ? 'Colony Features' : 'Key Features'}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Amenities */}
          {p.amenities && (
            <div className="mt-10 py-8 border-b border-border">
              <h2 className="text-3xl font-heading font-black mb-8">Amenities</h2>
              <div className="space-y-8">
                {Object.entries(p.amenities).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">{category}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(items as string[]).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nearby Facilities */}
          {p.nearby && p.nearby.length > 0 && (
            <div className="mt-10 py-8 border-b border-border">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">Nearby Facilities</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {p.nearby.map((item: string) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </main>
  );
}