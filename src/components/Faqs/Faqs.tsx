import React, { useState, useRef } from 'react';
import './Faqs.css';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQData = {
  [key: string]: FAQItem[];
};

const faqData: FAQData = {
  'General Event Information': [
    {
      question: 'When and where is the event?',
      answer:
        'May 17th 10:00am - 2:00pm, Las Vegas High School, 6500 E Sahara Ave, Las Vegas, NV 89142',
    },
    {
      question: 'Is there an entry fee?',
      answer:
        'Entry is free for spectators! However, we encourage everyone to bring a new, unwrapped toy to donate.',
    },
    {
      question: 'Who benefits from the toy drive?',
      answer:
        'All donated toys will go to Whitney Elementary School to help bring holiday joy to children in need.',
    },
    {
      question: 'What vendors will be there?',
      answer:
        'We’ll have a variety of local vendors, food trucks, and entertainment; such as Mob Dowg, Lot H, Neon Ice, SHOP-CEE, Grafiko Arts, Audio Zone, Las Vegas High School Mariachi Band, Folklorico, and more!',
    },
  ],
  'Car Show Details': [
    {
      question: 'How can I enter my car in the show?',
      answer:
        'You can register your vehicle online (click the link in the banner above) or on-site the day of the event if spots are still available.',
    },
    {
      question: 'Is there a fee to enter my car in the show?',
      answer:
        'Yes, the entry fee is $30 or a donation of 4 toys (see Toy Drive & Donation below for requirements).',
    },
    {
      question: 'Can I showcase my car without entering the competition?',
      answer:
        "Yes! Select the 'Showcase Only' option when registering online, or let us know if registering in person. There is a $20 showcase fee, and your car will be displayed alongside both competition and showcase-only entries.",
    },
    {
      question: 'Are there awards or categories?',
      answer:
        'Yes! We’ll have awards for categories like Best in Show, Best Classic, Best Custom, and more.',
    },
    {
      question: 'What time should I arrive if I’m showing my car?',
      answer:
        'Roll-in starts at 8:00AM, and all registered cars should be parked by 10:00AM.',
    },
  ],
  'Toy Drive & Donations': [
    {
      question: 'What kind of toys should I bring?',
      answer:
        'Please bring new, unwrapped toys suitable for kids of all ages. No toy weapons or used items, please.',
    },
    {
      question: 'Can I donate money instead of a toy?',
      answer: 'Yes! We will have donation stations at the event.',
    },
  ],
  'Other Event Info': [
    {
      question: 'Will there be food and vendors?',
      answer:
        'Yes! We’ll have food trucks, local vendors, and music to keep the vibe going all day.',
    },
    {
      question: 'Is this a family-friendly event?',
      answer:
        'Absolutely! Bring the whole family for a fun day of cars, community, and giving back.',
    },
    {
      question: 'How can I volunteer or sponsor the event?',
      answer:
        'We’d love your support! Email us at EastLVGivingBack@gmail.com to get involved.',
    },
  ],
};

const FAQAccordion: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
    setExpandedItems((prev) => {
      const newExpandedItems = new Set(prev);
      if (newExpandedItems.has(category)) {
        newExpandedItems.delete(category);
      } else {
        newExpandedItems.add(category);
      }
      return newExpandedItems;
    });
  };

  const getHeight = (category: string) => {
    const section = document.getElementById(category);
    if (section) {
      return `${section.scrollHeight}px`; // Get the full height of the section
    }
    return '0px'; // Default to 0 if no section found
  };

  return (
    <div className='faq-container'>
      <h2>Event Details</h2>
      {Object.keys(faqData).map((category, index) => (
        <div key={index} className='faq-category'>
          <h3
            onClick={() => toggleCategory(category)}
            className={openCategory === category ? 'active' : ''}
          >
            {category}
          </h3>
          <div
            id={category}
            className='faq-items'
            style={{
              height: expandedItems.has(category) ? getHeight(category) : '0',
              overflow: 'hidden',
              transition: 'height 0.5s ease-out',
            }}
          >
            {faqData[category].map((item, i) => (
              <div key={i} className='faq-item'>
                <strong>{item.question}</strong>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
