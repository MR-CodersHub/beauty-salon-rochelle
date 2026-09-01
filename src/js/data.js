/**
 * ROCHELLE AT-HOME | Central Dataset
 * Dynamic Repository for Services, Blogs, Reviews, and FAQs
 */

const ROCHELLE_DATA = {
  services: [
    {
      id: 'hair-spa',
      title: 'Moroccan Argan Hair Spa & Steam',
      category: 'hair',
      categoryName: 'Hair Couture & Spa',
      price: 79,
      origPrice: 99,
      duration: 60,
      rating: 4.98,
      reviewsCount: 342,
      badge: 'Bestseller',
      brand: 'Kérastase Pro',
      image: 'hero.jpg',
      shortDesc: 'Deep nourishing hot-towel infusion, scalp detoxification massage, and supersonic blowout.',
      fullDesc: 'Rejuvenate damaged, dehydrated tresses in the privacy of your home. Our master stylists use pure cold-pressed Moroccan Argan oils and Kérastase Nutritive masque with mobile micro-mist steam caps to infuse lipids deep into the hair cortex.',
      features: [
        'High-pressure clarifying wash & scalp sebum analysis',
        'Customized Kérastase Chronologiste caviar masque',
        'Mobile micro-steam infusion therapy for 20 mins',
        'Aromatherapy neck, shoulder & cranial pressure-point release',
        'Dyson Supersonic thermal blowdry & mirror shine shield'
      ],
      includedKit: '100% Single-use sealed monodose Kérastase ampoules, disposable waterproof cape, UV-sterilized wooden wide-tooth comb.',
      faqs: [
        { q: 'Do I need a special hair sink at home?', a: 'No! Our specialists bring portable ergonomic head-rests with protective splash guards that work with any standard washbasin or bathtub.' },
        { q: 'How long do results last?', a: 'Hair remains intensely hydrated, silky, and frizz-free for 3 to 4 weeks depending on washing frequency.' }
      ],
      pricingTiers: [
        { name: 'Standard Session', price: 79, desc: 'Full 60-minute spa with blowdry finish' },
        { name: 'VIP Luxe Package', price: 119, desc: 'Includes additional peptide bond builder & take-home 100ml elixir' }
      ]
    },
    {
      id: 'couture-cut',
      title: 'Couture Precision Cut & Volume Blowout',
      category: 'hair',
      categoryName: 'Hair Couture & Spa',
      price: 65,
      origPrice: 85,
      duration: 45,
      rating: 4.95,
      reviewsCount: 289,
      badge: 'Popular',
      brand: 'Dyson & Oribe',
      image: 'hero.jpg',
      shortDesc: 'Face-framing precision shear cut, split-end repair, and iconic voluminous red-carpet styling.',
      fullDesc: 'Tailored specifically to your face geometry and lifestyle. Includes dry consultation, texturizing Japanese steel shear haircutting, and styling with Dyson Airwrap and Oribe signature hair care.',
      features: [
        'Face-shape and hair density architectural consultation',
        'Precision wet/dry scissor cut and split-end elimination',
        'Heat defense primer & royal blowout volumizing cream',
        'Full post-cut clean-up with cordless vacuum – zero mess left'
      ],
      includedKit: 'Autoclaved Japanese steel shears, sterilized sectioning clips, single-use neck strips, and floor drop cloth.',
      faqs: [
        { q: 'Will hair clippings get onto my carpet or furniture?', a: 'Never. We lay down an 8x8 ft medical-grade waterproof floor sheet and vacuum all stray fibers before packing up.' }
      ],
      pricingTiers: [
        { name: 'Classic Cut & Style', price: 65, desc: 'Precision cut, wash prep, and blowdry' },
        { name: 'Cut + Deep Hydration Mask', price: 95, desc: 'Adds 20-min botanical moisture treatment' }
      ]
    },
    {
      id: 'keratin-gloss',
      title: 'Keratin Silk Gloss Treatment',
      category: 'hair',
      categoryName: 'Hair Couture & Spa',
      price: 189,
      origPrice: 240,
      duration: 120,
      rating: 4.99,
      reviewsCount: 178,
      badge: 'Frizz-Free 4 Mos',
      brand: 'L’Oréal Professionnel',
      image: 'hero.jpg',
      shortDesc: 'Formaldehyde-free organic silk protein infusion for instant glassy smoothness and zero humidity frizz.',
      fullDesc: 'The gold standard in home hair smoothing. Our formaldehyde-free formulation uses bio-keratin and amino acids to seal the cuticle, cut daily blowdry time in half, and reflect mirror-like gloss.',
      features: [
        'Pre-treatment clarifying cuticle opening wash',
        'Nano-keratin bond saturation and micro-combing',
        'Infrared titanium flat-iron thermal crystallization',
        'Sulfate-free pH balancer & gloss sealant spray'
      ],
      includedKit: 'Fume-extractor mini filter, single-use gloves, sealed Brazilian keratin monodose vial, aftercare travel shampoo.',
      faqs: [
        { q: 'Can I wash my hair right after?', a: 'Yes, our modern formaldehyde-free formula requires zero downtime—you can wash or tie your hair the same day!' }
      ],
      pricingTiers: [
        { name: 'Shoulder Length', price: 189, desc: 'For hair up to collarbone length' },
        { name: 'Extra Long / Dense Hair', price: 229, desc: 'Includes additional product dosage and infrared lock' }
      ]
    },
    {
      id: 'hydra-facial',
      title: '6-Step HydraGlow Radiance Facial',
      category: 'skin',
      categoryName: 'Skin & Glow Therapy',
      price: 119,
      origPrice: 155,
      duration: 75,
      rating: 4.99,
      reviewsCount: 512,
      badge: 'Top Rated',
      brand: 'O3+ Derma Pro',
      image: 'skin.jpg',
      shortDesc: 'Ultrasonic pore vacuum extraction, antioxidant Vitamin C infusion, cryo jade massage, and rubber peel mask.',
      fullDesc: 'Our most sought-after clinical home facial. Combines painless hydro-dermabrasion pore vortex cleansing with pharmaceutical-grade hyaluronic acid and active antioxidants for glass-like dewy skin.',
      features: [
        'Double lymphatic oil & enzymatic cleansing',
        'Ultrasonic painless blackhead & sebum vortex extraction',
        'Pure Vitamin C & Multi-Peptide infusion ampoule',
        'Cryo-cooling globes contouring massage',
        'Custom peel-off spirulina algae rubber mask'
      ],
      includedKit: 'Sterile single-use vacuum suction tips, sealed glass ampoules, disposable plush headbands, and sterile sponge pads.',
      faqs: [
        { q: 'Is there any redness or downtime?', a: 'Zero downtime. You leave with immediate plumpness and radiance suitable for stepping straight onto an event or date.' }
      ],
      pricingTiers: [
        { name: 'HydraGlow Classic', price: 119, desc: 'Complete 6-step deep extraction & infusion' },
        { name: 'HydraGlow + LED Light Therapy', price: 149, desc: 'Adds medical-grade 7-color collagen LED treatment' }
      ]
    },
    {
      id: 'gold-facial',
      title: '24K Pure Gold Glow Ceremony',
      category: 'skin',
      categoryName: 'Skin & Glow Therapy',
      price: 149,
      origPrice: 195,
      duration: 90,
      rating: 4.97,
      reviewsCount: 210,
      badge: 'Luxury Luxe',
      brand: 'Casmara Luxury',
      image: 'skin.jpg',
      shortDesc: 'Anti-aging ceremony with 24K gold foil sheets, collagen peptide lifting massage, and instant luminosity.',
      fullDesc: 'An opulent royal facial inspired by ancient rituals. Real 24K gold leaves penetrate through cellular massage to stimulate microcirculation, reduce fine lines, and impart an otherworldly golden glow.',
      features: [
        'Micro-crystal diamond buffing exfoliation',
        'Cellular rejuvenation massage with botanical stem cells',
        '24K colloidal gold leaf layering ceremony',
        'Hydra-lift firming contour Casmara gold mask'
      ],
      includedKit: '24K gold leaf sealed booklet, disposable linen sheets, sanitized cryo balls, single-use Casmara mask mix.',
      faqs: [
        { q: 'Is this suitable for sensitive skin?', a: 'Yes! Pure 24K gold has natural anti-inflammatory and soothing properties suitable for all skin types.' }
      ],
      pricingTiers: [
        { name: 'Single 90-min Session', price: 149, desc: 'Complete 24K gold treatment' },
        { name: 'Gold Facial + Eye & Lip Rejuvenation', price: 185, desc: 'Includes targeted peptide collagen patches' }
      ]
    },
    {
      id: 'berry-cleanup',
      title: 'Detoxifying Berry Cleanup & D-Tan',
      category: 'skin',
      categoryName: 'Skin & Glow Therapy',
      price: 55,
      origPrice: 70,
      duration: 40,
      rating: 4.92,
      reviewsCount: 165,
      badge: 'Quick Refresh',
      brand: 'Sothys Paris',
      image: 'skin.jpg',
      shortDesc: 'Pore declogging, antioxidant wild berry scrub, tan reversal pack, and cooling botanical mist.',
      fullDesc: 'An express 40-minute revitalization designed for busy routines. Removes environmental pollution, reverses sun tanning, and infuses antioxidant superfruits into tired skin.',
      features: [
        'Gentle botanical foam cleanse & hot steam wrap',
        'Wild berry & crushed walnut micro-exfoliation',
        'Oxygenating D-Tan detox pack',
        'SPF 50 protective barrier hydration'
      ],
      includedKit: 'Single-use biodegradable facial sponges, sealed berry sachet, sterile spatula.',
      faqs: [
        { q: 'How often should I book a cleanup?', a: 'We recommend booking every 2 to 3 weeks to keep pores free of blackheads and pollution.' }
      ],
      pricingTiers: [
        { name: 'Express Cleanup', price: 55, desc: '40 mins pore unclogging and D-Tan pack' }
      ]
    },
    {
      id: 'russian-manicure',
      title: 'Russian Gel Manicure & Chrome Glaze',
      category: 'nails',
      categoryName: 'Luxury Nails & Pedicure',
      price: 69,
      origPrice: 89,
      duration: 60,
      rating: 4.98,
      reviewsCount: 420,
      badge: 'Trending Hailey Glow',
      brand: 'OPI & BioGel',
      image: 'nails.jpg',
      shortDesc: 'Dry e-file cuticle alignment, long-lasting LED gel overlay, chrome pearl powder dust, and warm oil bath.',
      fullDesc: 'The pinnacle of precision nail artistry. Our trained manicurists use sterile diamond bits to clear cuticles without cutting, followed by structural gel overlays and glazed chrome finish that lasts 4+ weeks.',
      features: [
        'Dry precision Russian e-file cuticle clean-up',
        'Structural rubber base coat for natural nail reinforcement',
        'Dual-coat high pigmentation non-toxic gel color',
        'Glazed pearl/chrome powder rubbing finish',
        'Warm organic shea butter hand massage'
      ],
      includedKit: 'Autoclaved medical-grade drill bits, disposable nail files, 180-grit buffer, LED cure lamp.',
      faqs: [
        { q: 'Will Russian manicure weaken my natural nails?', a: 'Not with our technique! By avoiding aggressive clippers and utilizing flexible rubber base coats, your natural nails grow thicker and healthier.' }
      ],
      pricingTiers: [
        { name: 'Gel Manicure + Chrome Glaze', price: 69, desc: 'Full dry Russian mani with chrome art' },
        { name: 'Mani + Pedicure Combo', price: 129, desc: 'Includes matching Ice Cream Spa Pedicure' }
      ]
    },
    {
      id: 'icecream-pedicure',
      title: 'Signature Ice Cream Spa Pedicure',
      category: 'nails',
      categoryName: 'Luxury Nails & Pedicure',
      price: 75,
      origPrice: 95,
      duration: 60,
      rating: 4.96,
      reviewsCount: 310,
      badge: 'Ultimate Relax',
      brand: 'Voesh New York',
      image: 'nails.jpg',
      shortDesc: 'Portable heated tub soak, bubble salt effervescence, callus smoothing, and heated bootie therapy.',
      fullDesc: 'Turn your sofa into a 5-star foot sanctuary. Enjoy fizzy mineral bath salts, gentle callus removal, cooling peppermint clay wrap, and deep reflexology pressure point therapy.',
      features: [
        'Sanitized single-use tub liner & aromatherapy bath',
        'Gentle pumice callus buffing & dead skin removal',
        'Cooling sea kelp detox mud masque with heated booties',
        '20-minute acupressure foot & calf massage'
      ],
      includedKit: 'Brand new tub liner, individual Voesh 4-step sachet, sanitized pedicure tools.',
      faqs: [
        { q: 'How is the water tub handled inside the house?', a: 'Our therapists bring waterproof floor mats and portable electric tubs with sealed drains that are emptied directly into your drain with zero spillage.' }
      ],
      pricingTiers: [
        { name: 'Classic Spa Pedicure', price: 75, desc: '60-min complete foot indulgence' },
        { name: 'Gel Pedicure with Callus Treatment', price: 95, desc: 'Includes chip-proof LED gel finish' }
      ]
    },
    {
      id: 'bridal-airbrush',
      title: 'HD 4K Airbrush Couture Bridal Glam',
      category: 'bridal',
      categoryName: 'Bridal & Red Carpet Couture',
      price: 289,
      origPrice: 380,
      duration: 150,
      rating: 5.0,
      reviewsCount: 195,
      badge: 'Celebrity Choice',
      brand: 'MAC Pro & Temptu',
      image: 'bridal.jpg',
      shortDesc: 'Waterproof 24-hr HD airbrush makeup, mink lashes, couture hair sculpting, and dupatta/saree draping.',
      fullDesc: 'For the most important day of your life. Master celebrity bridal artists arrive with full illuminated vanity stations, waterproof Temptu silicone airbrush technology, hand-sculpted couture hairstyles, and impeccable jewelry & drape placement.',
      features: [
        'Pre-bridal skin priming & cryogenic de-puffing',
        'Temptu 4K waterproof silicone airbrush foundation',
        'Custom eye artistry with 3D silk mink lashes',
        'Couture bridal hair updo with floral/veil placement',
        'Iron-pressed saree, lehenga, or gown draping'
      ],
      includedKit: 'Full mobile vanity lighting, sealed makeup palettes, disposable airbrush needles, emergency bride touch-up kit.',
      faqs: [
        { q: 'Is a bridal trial included?', a: 'Bridal trials can be scheduled at home beforehand at a 50% discount when booking the wedding package.' }
      ],
      pricingTiers: [
        { name: 'Bridal Ceremony Glam', price: 289, desc: 'Full HD airbrush makeup, hair, and draping' },
        { name: 'Full Day Bride + Mother of Bride', price: 449, desc: 'Dual master artists for bride and family member' }
      ]
    },
    {
      id: 'prebridal-ritual',
      title: 'Pre-Bridal Radiance Head-to-Toe Ritual',
      category: 'bridal',
      categoryName: 'Bridal & Red Carpet Couture',
      price: 249,
      origPrice: 320,
      duration: 180,
      rating: 4.99,
      reviewsCount: 140,
      badge: 'Complete Package',
      brand: 'Kérastase & Casmara',
      image: 'bridal.jpg',
      shortDesc: '24K Gold Facial, Argan Hair Spa, Gel Mani-Pedi duo, and full body brown sugar radiance scrub.',
      fullDesc: 'Designed to be booked 2 to 3 days before your wedding festivities. A comprehensive 3-hour ritual covering hair, skin, hands, and feet to ensure you step onto the aisle glowing from every angle.',
      features: [
        'Full body exfoliating brown sugar & jasmine polish',
        '24K Gold Cellular Rejuvenation Facial',
        'Kérastase Argan hair steam nourishment',
        'Russian Gel manicure and luxury spa pedicure duo'
      ],
      includedKit: 'All premium monodose sealed kits, disposable spa slippers, waffle robe, and aromatherapy candles.',
      faqs: [
        { q: 'How many days before the wedding should I book this?', a: 'We recommend scheduling this 2 to 4 days prior to your first major wedding ceremony.' }
      ],
      pricingTiers: [
        { name: '3-Hour Full Body Ritual', price: 249, desc: 'Complete hair, skin, nails & scrub' },
        { name: 'Ritual + 2 Bridesmaids Cleanups', price: 379, desc: 'Group session with 2 senior stylists' }
      ]
    }
  ],

  blogs: [
    {
      id: 'doorstep-salon-guide',
      title: 'Why Doorstep Salon & Spa Services Are the Future of Self-Care',
      category: 'Lifestyle',
      author: 'Sophia Vance',
      authorRole: 'Master Esthetician',
      date: 'August 28, 2026',
      readTime: '5 min read',
      image: 'expert.jpg',
      excerpt: 'Discover why thousands of modern women are trading traffic jams and sterile waiting rooms for private doorstep salon luxury.',
      content: `
        <p class="mb-4">In an era where convenience, personalization, and safety dictate our lifestyle choices, traditional salons are facing a quiet revolution. Commuting across town, hunting for parking spots, and waiting in crowded lobbies are friction points that women no longer wish to endure for a routine blowout or facial.</p>
        
        <h3 class="text-2xl font-bold my-4 text-gray-900 dark:text-white">1. The Luxury of Time</h3>
        <p class="mb-4">When a certified master therapist arrives at your doorstep equipped with ergonomic salon seating, ambient ring lights, and hospital-grade sterilization kits, your living room transforms into a private VIP suite. You save an average of 90 minutes in commute and waiting time per appointment.</p>
        
        <h3 class="text-2xl font-bold my-4 text-gray-900 dark:text-white">2. 100% Monodose Hygiene</h3>
        <p class="mb-4">Cross-contamination is virtually impossible with modern doorstep services. At ROCHELLE, every cream, serum, and scrub is sealed in single-use sachets opened in front of your eyes. Metal instruments are autoclaved and sealed in blue surgical indicator pouches.</p>
        
        <blockquote class="border-l-4 border-pink-600 pl-4 italic my-6 text-gray-700 dark:text-gray-300">
          "The true luxury of doorstep beauty isn't just skipping the commute—it's being able to curl up on your own sofa with a hot cup of tea the instant your treatment ends."
        </blockquote>

        <h3 class="text-2xl font-bold my-4 text-gray-900 dark:text-white">3. Tailored 1-on-1 Focus</h3>
        <p class="mb-4">In a busy brick-and-mortar salon, stylists frequently juggle multiple clients simultaneously. With doorstep beauty, you receive 100% undivided attention from start to finish.</p>
      `,
      tags: ['Doorstep Salon', 'Hygiene', 'Self-Care', 'Luxury Wellness']
    },
    {
      id: 'keratin-vs-botox',
      title: 'Keratin vs. Hair Botox: Which Doorstep Treatment Is Right for You?',
      category: 'Hair Care',
      author: 'Clara Moreau',
      authorRole: 'Senior Hair Specialist',
      date: 'August 15, 2026',
      readTime: '6 min read',
      image: 'hero.jpg',
      excerpt: 'Breakdown of smoothing vs. reparative hair treatments to help you choose the ideal home salon session.',
      content: `
        <p class="mb-4">With hundreds of smoothing treatments on the market, choosing between Keratin and Hair Botox can feel overwhelming. Both promise glossy, frizz-free locks, but they work on fundamentally different principles.</p>

        <h3 class="text-2xl font-bold my-4 text-gray-900 dark:text-white">What is Keratin Silk Smoothing?</h3>
        <p class="mb-4">Keratin is a protein-based smoothing treatment formulated to tame unruly textures, reduce curls by 60-80%, and create an impervious moisture barrier against humidity. It is ideal for thick, coarse, and highly frizzy hair types.</p>

        <h3 class="text-2xl font-bold my-4 text-gray-900 dark:text-white">What is Hair Botox?</h3>
        <p class="mb-4">Despite its name, Hair Botox contains zero botulinum toxin. It is a deep conditioning cocktail of caviar oil, Vitamin B5, collagen, and amino acids designed to fill microscopic gaps in damaged, bleached hair without altering your natural curl pattern.</p>

        <div class="my-6 p-4 rounded-xl bg-pink-50 dark:bg-zinc-800 border border-pink-200 dark:border-zinc-700">
          <h4 class="font-bold text-lg mb-2">Quick Recommendation:</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Choose Keratin</strong> if your primary goal is sleek, pin-straight hair that dries in minutes.</li>
            <li><strong>Choose Hair Botox</strong> if your hair is fine, over-bleached, or you want to keep your curls defined and frizz-free.</li>
          </ul>
        </div>
      `,
      tags: ['Hair Care', 'Keratin', 'Hair Botox', 'Smooth Hair']
    },
    {
      id: 'bridal-skin-timeline',
      title: 'The 6-Month Countdown: The Ultimate At-Home Bridal Beauty Timeline',
      category: 'Bridal Glam',
      author: 'Nadia Al-Mansoor',
      authorRole: 'Celebrity Makeup & Skin Artist',
      date: 'July 29, 2026',
      readTime: '8 min read',
      image: 'bridal.jpg',
      excerpt: 'A comprehensive month-by-month guide for brides preparing their skin and hair for the big day.',
      content: `
        <p class="mb-4">Every bride dreams of walking down the aisle with glass-like luminosity and healthy, flowing hair. Achieving this requires consistent, well-timed treatments rather than a frantic last-minute rush.</p>

        <h3 class="text-2xl font-bold my-4 text-gray-900 dark:text-white">6 Months Before: Skin Barrier Reset</h3>
        <p class="mb-4">Start with monthly HydraGlow Facials to clear deep congestion, establish cellular hydration, and balance natural sebum production.</p>

        <h3 class="text-2xl font-bold my-4 text-gray-900 dark:text-white">3 Months Before: Hair Strengthening & Trials</h3>
        <p class="mb-4">Schedule your at-home hair smoothing or Botox treatment and book your bridal makeup trial to lock in lipstick shades, lash densities, and hairstyle architecture.</p>

        <h3 class="text-2xl font-bold my-4 text-gray-900 dark:text-white">3 Days Before: The Royal Pre-Bridal Ritual</h3>
        <p class="mb-4">This is the time for your 24K Pure Gold Facial, Argan Hair Spa, and Russian Gel Manicure & Pedicure duo so your glow peaks exactly on your wedding morning.</p>
      `,
      tags: ['Bridal', 'Wedding Prep', 'Skincare Timeline', 'Glow']
    },
    {
      id: 'at-home-manicure-trends',
      title: 'The Rise of the Russian Dry Manicure: Why It Outlasts Traditional Gel',
      category: 'Nail Art',
      author: 'Elena Rostova',
      authorRole: 'Senior Nail Artist',
      date: 'July 14, 2026',
      readTime: '4 min read',
      image: 'nails.jpg',
      excerpt: 'Why celebrities and beauty editors swear by dry e-file manicure techniques for 4+ week chip-free wear.',
      content: `
        <p class="mb-4">If your traditional water-soak gel manicure chips after 10 days, you are not alone. Water causes the natural nail plate to expand, which contracts after polish application, causing premature lifting and peeling.</p>

        <h3 class="text-2xl font-bold my-4 text-gray-900 dark:text-white">The Dry E-File Advantage</h3>
        <p class="mb-4">By eliminating water baths and utilizing high-precision diamond-coated electric bits, Russian manicurists cleanly contour the proximal nail fold without clipping living tissue. This allows gel color to be applied underneath the cuticle line, giving you an extra 2 weeks of growth before you see a gap.</p>
      `,
      tags: ['Nails', 'Russian Manicure', 'Chrome Nails', 'Nail Art']
    },
    {
      id: 'sterilization-standards',
      title: 'Behind the Curtain: Our 7-Point Safe-Salon™ Sterilization Standard',
      category: 'Safety & Hygiene',
      author: 'Sophia Vance',
      authorRole: 'Safety & Quality Director',
      date: 'June 30, 2026',
      readTime: '5 min read',
      image: 'expert.jpg',
      excerpt: 'Explore how medical-grade autoclave sterilization and monodose packaging make our doorstep service the cleanest in the industry.',
      content: `
        <p class="mb-4">Safety is not an afterthought at ROCHELLE—it is the foundation upon which every service is engineered. Here is our step-by-step sterilization protocol for every home appointment.</p>
        <ol class="list-decimal pl-5 space-y-2 my-4">
          <li><strong>120°C Autoclave Heat Sterilization:</strong> All steel shears and cuticle pushers are medical-grade heat sterilized and sealed in blue indicator pouches.</li>
          <li><strong>100% Sealed Monodose Packaging:</strong> Skincare and haircare formulas are packaged in single-use sealed tubes opened exclusively in front of the client.</li>
          <li><strong>Biodegradable Gowns & Sheets:</strong> We never reuse towels or bedsheets.</li>
          <li><strong>Comprehensive Police & Identity Vetting:</strong> 100% of our therapists are background checked and verified.</li>
        </ol>
      `,
      tags: ['Hygiene', 'Safety', 'Sterilization', 'Monodose']
    },
    {
      id: 'monodose-beauty-revolution',
      title: 'Why Monodose Packaging Is the Biggest Revolution in Professional Skincare',
      category: 'Innovation',
      author: 'Dr. Audrey Lin',
      authorRole: 'Cosmetic Chemist Consultant',
      date: 'June 18, 2026',
      readTime: '5 min read',
      image: 'skin.jpg',
      excerpt: 'How single-use sealed vials preserve potent active vitamins (C, Retinol, Peptides) from oxidizing before touching your skin.',
      content: `
        <p class="mb-4">Every time a jar of luxury face cream is opened in a traditional salon, active ingredients like Vitamin C and Hyaluronic acid begin to degrade from oxygen exposure. Monodose sealed packaging ensures you receive maximum clinical potency at 100% freshness.</p>
      `,
      tags: ['Skincare', 'Monodose', 'Vitamin C', 'Cosmetic Chemistry']
    }
  ],

  pricingPackages: [
    {
      id: 'weekday-glow',
      name: 'The Weekday Glow',
      badge: 'Express Essentials',
      price: 89,
      origPrice: 110,
      duration: '60 mins',
      desc: 'Ideal for a quick maintenance refresh before your workweek or weekend dinner.',
      features: [
        'Express Fruit & Berry Detox Cleanup',
        'Luxe Russian Manicure with OPI Polish',
        'Blowdry & High-Gloss Argan Shield',
        'Sealed Single-Use Monodose Kit included',
        'Zero Doorstep Travel Fee'
      ]
    },
    {
      id: 'signature-luxe',
      name: 'Signature Radiance Luxe',
      badge: 'Most Popular • Save 25%',
      isFeatured: true,
      price: 169,
      origPrice: 225,
      duration: '120 mins',
      desc: 'Our bestselling complete head-to-toe transformation in your living room.',
      features: [
        '6-Step HydraGlow Radiance Facial',
        'Moroccan Argan Hair Spa & Steam Therapy',
        'Russian Gel Manicure & Chrome Glaze',
        'Signature Ice Cream Spa Pedicure',
        'Relaxing Head, Neck & Shoulder Acupressure',
        'Full Bio-Degradable Drapes & Spotless Cleanup'
      ]
    },
    {
      id: 'royal-bridal',
      name: 'Royal Couture Bridal',
      badge: 'Bridal & Red Carpet',
      price: 349,
      origPrice: 450,
      duration: '180 mins',
      desc: 'Master celebrity bridal artist with HD Airbrush, hair couture, and pre-wedding glow.',
      features: [
        'HD 4K Waterproof Airbrush Makeup',
        'Couture Hair Sculpting & Veil Draping',
        '24K Pure Gold Radiance Facial',
        'Chrome Gel Nail Art & Spa Pedicure',
        'Senior Celebrity Master Artist Assigned',
        'Emergency Bridal Touchup Kit'
      ]
    }
  ],

  testimonials: [
    {
      name: 'Elena Gallagher',
      role: 'Mother of twins • Beverly Hills',
      service: 'HydraGlow Facial + Hair Spa',
      rating: 5,
      quote: 'As a mother of twins, getting to a salon was virtually impossible. Having Sophia arrive with a sanitized kit, hot steam, and giving me the best HydraFacial in my living room was pure bliss!'
    },
    {
      name: 'Maya Chen',
      role: 'Fashion Tech Executive • Manhattan',
      service: 'Keratin Gloss + Gel Mani',
      rating: 5,
      quote: 'The live beautician tracker was so convenient! I saw exactly when she was 8 minutes away. She left the room immaculate and my hair has never felt so silky.'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Bride • Miami',
      service: 'Royal Couture Bridal Package',
      rating: 5,
      quote: 'We booked ROCHELLE for my wedding glam. Three master artists arrived on time with flawless HD airbrush gear. We felt like royalty without leaving the suite!'
    }
  ],

  faqs: [
    {
      category: 'Doorstep Setup',
      q: 'What do I need to prepare before the beautician arrives?',
      a: 'Nothing except a normal power outlet, comfortable seating, and access to water/washbasin if you booked hair or facial treatments. Our artists bring all protective floor draping, portable lighting, sterile tools, and bio-waste bags.'
    },
    {
      category: 'Tracking & Arrival',
      q: 'How does live beautician arrival tracking work?',
      a: 'Once your booking is confirmed, open your User Dashboard or click Track Stylist. You will see a live GPS map with your assigned specialist’s photo, rating, vehicle license plate, and real-time ETA countdown.'
    },
    {
      category: 'Pricing & Fees',
      q: 'Are there any hidden travel or doorstep convenience surcharges?',
      a: 'Zero! All listed prices include therapist travel, disposable single-use kit costs, and post-service sanitation. What you see is exactly what you pay.'
    },
    {
      category: 'Hygiene Standards',
      q: 'How do you guarantee product safety and sanitation?',
      a: 'We use 100% single-use sealed monodose sachets for skincare and haircare, opened in front of you. Metal tools are autoclaved and UV sterilized in sealed indicator pouches, and all linen/gowns are brand-new disposables.'
    },
    {
      category: 'Cancellations',
      q: 'What is your rescheduling or cancellation policy?',
      a: 'You can reschedule or cancel with 1-click in your User Dashboard up to 2 hours before your scheduled appointment time with no cancellation penalty.'
    }
  ]
};

// Export to window
window.ROCHELLE_DATA = ROCHELLE_DATA;
