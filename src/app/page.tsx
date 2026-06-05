"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="fluid"
        cardStyle="inset"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "Services",          id: "#services"},
        {
          name: "About Us",          id: "#why-choose-us"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "Service Areas",          id: "#service-areas"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"}
      ]}
      brandName="Epley Plumbing Co."
      button={{
        text: "Request Service",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Reliable Plumbing Services in Gastonia, NC"
      description="Fast, affordable, and dependable plumbing solutions for homes and businesses. We're your trusted local plumbers, ready to tackle any issue."
      testimonials={[
        {
          name: "John D.",          handle: "@homeowner",          testimonial: "Epley Plumbing Co. saved our weekend! Fast service, professional team, and a perfect fix for our burst pipe. Couldn't ask for more.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/real-professional-smiling-businesswoman-looking-confident-determined-face-expression-standing-suit-white-background_1258-122910.jpg",          imageAlt: "professional male portrait smiling"},
        {
          name: "Sarah M.",          handle: "@localbiz",          testimonial: "Our business relies on functional plumbing, and Epley Plumbing delivers every time. Their commercial service is unmatched.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/professional-male-portrait-smiling_23-2147671932.jpg",          imageAlt: "professional male portrait smiling"},
        {
          name: "David L.",          handle: "@satisfiedclient",          testimonial: "Honest pricing and excellent work. They clearly explained the water heater repair process and finished quickly. Highly recommend!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12307.jpg",          imageAlt: "professional male portrait smiling"},
        {
          name: "Emily C.",          handle: "@gastoniaresident",          testimonial: "Friendly, efficient, and clean! Epley Plumbing handled our drain cleaning with no fuss. Will definitely call them again.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1613.jpg",          imageAlt: "professional male portrait smiling"},
        {
          name: "Michael B.",          handle: "@happycustomer",          testimonial: "We had a tricky leak, but the technicians at Epley Plumbing located and fixed it quickly. Very impressed with their expertise.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-home_23-2150062545.jpg",          imageAlt: "professional male portrait smiling"}
      ]}
      tag="Trusted Local Plumbers"
      buttons={[
        {
          text: "Request Service",          href: "#contact"},
        {
          text: "Call Now",          href: "tel:+17045551234"}
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/professional-male-portrait-smiling_23-2147671932.jpg",          alt: "Happy Customer"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12307.jpg",          alt: "Customer 2"},
        {
          src: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1613.jpg",          alt: "Customer 3"},
        {
          src: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-home_23-2150062545.jpg",          alt: "Customer 4"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-young-businessman-walking-near-business-center_171337-19784.jpg",          alt: "Customer 5"}
      ]}
      avatarText="See what our customers say"
      imageSrc="http://img.b2bpic.net/free-photo/technician-checking-heating-system-boiler-room_169016-55519.jpg"
      imageAlt="Plumber repairing a leaky pipe"
      showDimOverlay={true}
      showBlur={true}
      textPosition="bottom"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          tag: "Service",          title: "Plumbing Repairs",          subtitle: "Fixing leaks, drips, and burst pipes",          description: "Our experienced plumbers tackle all types of plumbing repairs, from minor drips to major pipe bursts, ensuring a lasting solution.",          imageSrc: "http://img.b2bpic.net/free-photo/technician-checking-heating-system-boiler-room_169016-55519.jpg",          imageAlt: "Plumber repairing a leaky pipe"},
        {
          tag: "Service",          title: "Drain Cleaning",          subtitle: "Clear blockages, restore flow",          description: "Professional drain cleaning services to remove stubborn clogs and restore proper drainage in your sinks, showers, and toilets.",          imageSrc: "http://img.b2bpic.net/free-photo/washbasin-hole_1339-1020.jpg",          imageAlt: "Plumber cleaning a clogged drain"},
        {
          tag: "Service",          title: "Water Heater Installation & Repair",          subtitle: "Hot water when you need it",          description: "Specializing in installation, repair, and maintenance of all water heater types, including tankless, for reliable hot water.",          imageSrc: "http://img.b2bpic.net/free-photo/man-installs-heating-system-house-checks-pipes-with-wrench_169016-55834.jpg",          imageAlt: "New water heater being installed"},
        {
          tag: "Service",          title: "Leak Detection",          subtitle: "Advanced tools for pinpoint accuracy",          description: "Using advanced technology to accurately detect hidden leaks in pipes and slabs, preventing costly water damage to your property.",          imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721566.jpg",          imageAlt: "Technician using leak detection equipment"},
        {
          tag: "Service",          title: "Pipe Repair & Replacement",          subtitle: "Durable solutions for old or damaged pipes",          description: "From minor pipe repairs to complete re-piping, we ensure your plumbing system is robust and free from future issues.",          imageSrc: "http://img.b2bpic.net/free-photo/cheese-industry-interior-production-hard-cheese-background_645730-198.jpg",          imageAlt: "New copper pipes installed in a wall"},
        {
          tag: "Service",          title: "Emergency Plumbing Services",          subtitle: "24/7 rapid response for urgent issues",          description: "Plumbing emergencies can't wait. Our team is on call for rapid response to urgent issues like burst pipes or severe clogs.",          imageSrc: "http://img.b2bpic.net/free-photo/scene-with-photorealistic-logistics-operations-proceedings_23-2151468854.jpg",          imageAlt: "Plumber working on an emergency at night"}
      ]}
      title="Comprehensive Plumbing Solutions"
      description="From leaky faucets to major installations, our expert team provides a full range of services to keep your plumbing running smoothly and efficiently."
    />
  </div>

  <div id="why-choose-us" data-section="why-choose-us">
      <TextAbout
      useInvertedBackground={false}
      tag="Local Expertise"
      title="Why Choose Epley Plumbing Co.?"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Epley Plumbing Co. provided outstanding service. They were quick to respond, very professional, and fixed our water heater efficiently. Highly recommend their reliable service!"
      rating={5}
      author="Sarah M., Gastonia Resident"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-66975.jpg",          alt: "Client Photo 1"},
        {
          src: "http://img.b2bpic.net/free-photo/authentic-book-club-scene_23-2150104578.jpg",          alt: "Client Photo 2"},
        {
          src: "http://img.b2bpic.net/free-photo/closeup-confident-businessman-white-shirt-looking-left-smiling-satisfied-standing-whi_1258-112690.jpg",          alt: "Client Photo 3"},
        {
          src: "http://img.b2bpic.net/free-photo/smiley-professional-businesswoman-with-glasses-presentation_23-2148824824.jpg",          alt: "Client Photo 4"},
        {
          src: "http://img.b2bpic.net/free-photo/waist-up-shot-successful-delighted-good-looking-young-male-with-blue-eyes-beard-smiling-satisfied-as-holding-hands-crossed-chest-being-self-satisfied-achieving-good-income-grey-wall_176420-43212.jpg",          alt: "Client Photo 5"}
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="service-areas" data-section="service-areas">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "gastonia",          name: "Gastonia, NC",          price: "Local Service",          variant: "Gastonia",          imageSrc: "http://img.b2bpic.net/free-photo/complex-aerial-view-city_23-2148975283.jpg",          imageAlt: "Gastonia North Carolina skyline"},
        {
          id: "belmont",          name: "Belmont, NC",          price: "Local Service",          variant: "Belmont",          imageSrc: "http://img.b2bpic.net/free-photo/embracing-young-stylish-couple-love-countryside-indie-hipster-bohemian-style-weekend-vacation-summer-outfit-red-dress-green-grass-holding-hands_285396-2643.jpg",          imageAlt: "Belmont North Carolina town"},
        {
          id: "mount-holly",          name: "Mount Holly, NC",          price: "Local Service",          variant: "Mount Holly",          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-wooden-sign-with-trees-snowy-mountains-background-clear-sky_181624-3629.jpg",          imageAlt: "Mount Holly North Carolina landscape"},
        {
          id: "dallas",          name: "Dallas, NC",          price: "Local Service",          variant: "Dallas",          imageSrc: "http://img.b2bpic.net/free-photo/united-states-america-map-with-magnifying-glass_23-2148232489.jpg",          imageAlt: "Dallas North Carolina downtown"},
        {
          id: "bessemer-city",          name: "Bessemer City, NC",          price: "Local Service",          variant: "Bessemer City",          imageSrc: "http://img.b2bpic.net/free-photo/roosevelt-island_649448-4645.jpg",          imageAlt: "Bessemer City North Carolina park"},
        {
          id: "more-areas",          name: "And More!",          price: "Check Availability",          variant: "Contact Us",          imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-luxury-tropical-resort-with-red-roofs-phuket-thailand_1308-189271.jpg",          imageAlt: "Map pointer over Gastonia area"}
      ]}
      title="Proudly Serving Gastonia & Beyond"
      description="Our dedicated team extends expert plumbing services across Gastonia, NC, and the vibrant communities in its vicinity. If you're in any of these areas, we're just a call away for prompt and reliable service!"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",          title: "What areas do you serve?",          content: "We proudly serve Gastonia, Belmont, Mount Holly, Dallas, Bessemer City, and surrounding communities in North Carolina. Check our service area map for full details."},
        {
          id: "faq-2",          title: "Do you offer emergency services?",          content: "Yes, we provide 24/7 emergency plumbing services for urgent issues like burst pipes, severe leaks, or overflowing toilets. Call us anytime for immediate assistance."},
        {
          id: "faq-3",          title: "How much does a plumbing repair cost?",          content: "Repair costs vary depending on the issue. We offer honest, transparent pricing and provide a detailed estimate before any work begins. Contact us for a consultation."},
        {
          id: "faq-4",          title: "Are your technicians licensed and insured?",          content: "Absolutely. All our technicians are fully licensed, insured, and undergo continuous training to provide the highest quality and safest plumbing services."},
        {
          id: "faq-5",          title: "Can I get an online estimate?",          content: "While complex issues require an on-site assessment, you can request an initial estimate or consultation through our contact form or by calling us directly. We're happy to discuss your needs."
        }
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Have questions about our plumbing services, pricing, or emergency availability? Find quick answers here or contact us directly for personalized assistance from our expert team."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      tag="Get In Touch"
      title="Need Immediate Plumbing Help?"
      description="Don't let a plumbing problem disrupt your day. Contact Epley Plumbing Co. for fast, reliable service or to schedule your next appointment. We're available Monday to Friday, 8 AM - 5 PM."
      buttons={[
        {
          text: "Call Us: (704) 555-1234",          href: "tel:+17045551234"},
        {
          text: "Request an Estimate Online",          href: "mailto:info@epleyplumbing.com"}
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Epley Plumbing Co."
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Plumbing Repairs",              href: "#services"},
            {
              label: "Drain Cleaning",              href: "#services"},
            {
              label: "Water Heaters",              href: "#services"},
            {
              label: "Leak Detection",              href: "#services"},
            {
              label: "Emergency Service",              href: "#services"}
          ]
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#why-choose-us"},
            {
              label: "Testimonials",              href: "#testimonials"},
            {
              label: "Service Areas",              href: "#service-areas"},
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact",              href: "#contact"}
          ]
        },
        {
          title: "Connect",          items: [
            {
              label: "Facebook",              href: "#"},
            {
              label: "Google Reviews",              href: "#"}
          ]
        }
      ]}
      copyrightText="© 2024 Epley Plumbing Co. All rights reserved."
      onPrivacyClick={() => alert('Privacy Policy Clicked')}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}