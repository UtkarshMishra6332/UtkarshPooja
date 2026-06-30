import { Bilingual } from './models';

/**
 * All user-interface strings used across the site, keyed by a dotted name.
 * Service content (history / purpose / facts) lives in services.data.ts.
 */
export const UI_STRINGS: Record<string, Bilingual> = {
  'brand.name': { en: 'Utkarsh Acharya Ji', hi: 'उत्कर्ष आचार्य जी' },
  'brand.tagline': {
    en: 'Vedic Poojas, Homams & Ceremonies',
    hi: 'वैदिक पूजा, हवन एवं अनुष्ठान',
  },

  // Header quote
  'header.quote': {
    en: 'Worship is not for God. God needs nothing from you. This ritual is for you — to remind yourself every morning of who you are.',
    hi: 'पूजा भगवान के लिए नहीं है। भगवान को आपसे कुछ नहीं चाहिए। यह अनुष्ठान आपके लिए है: हर सुबह खुद को यह याद दिलाने के लिए कि आप कौन हैं।',
  },
  'header.profileAlt': { en: 'Utkarsh Acharya Ji', hi: 'उत्कर्ष आचार्य जी' },
  'header.langToggle': { en: 'हिंदी', hi: 'English' },

  // Navigation
  'nav.home': { en: 'Home', hi: 'मुख्य पृष्ठ' },
  'nav.services': { en: 'Services', hi: 'सेवाएँ' },
  'nav.connect': { en: 'Get in Connect', hi: 'संपर्क करें' },

  // Hero / intro section
  'hero.welcome': { en: 'Welcome to', hi: 'स्वागत है' },
  'hero.title': {
    en: 'Sacred Rituals, Performed with Devotion',
    hi: 'श्रद्धा के साथ संपन्न पवित्र अनुष्ठान',
  },
  'hero.subtitle': {
    en: "Authentic Vedic rituals — performed with devotion, knowledge and spiritual purity for your family's prosperity.",
    hi: 'आपके परिवार की समृद्धि के लिए भक्ति, ज्ञान और आध्यात्मिक शुद्धता के साथ प्रामाणिक वैदिक अनुष्ठान।',
  },
  'hero.contactLine': {
    en: 'For any kind of astrological consultation, Vastu, Muhurta and Vedic poojas — please get in touch.',
    hi: 'किसी भी प्रकार की ज्योतिष परामर्श, वास्तु, मुहूर्त एवं वैदिक पूजा आदि के लिये संपर्क करें।',
  },
  'hero.cta': { en: 'Book a Pooja', hi: 'पूजा बुक करें' },
  'hero.ctaServices': { en: 'Explore Services', hi: 'सेवाएँ देखें' },
  'hero.photoAlt': { en: 'Utkarsh Acharya Ji', hi: 'उत्कर्ष आचार्य जी' },

  // Services overview
  'services.heading': { en: 'Our Services', hi: 'हमारी सेवाएँ' },
  'services.intro': {
    en: 'In Hindu Dharma a pooja is a ritual act of worship. Practices are countless; below they are grouped by purpose — life milestones (Samskaras), daily devotion, deity festivals, astrological remedies and ancestral rites.',
    hi: 'हिंदू धर्म में पूजा उपासना का एक अनुष्ठानिक कर्म है। परंपराएँ अनगिनत हैं; नीचे उन्हें उनके उद्देश्य के अनुसार वर्गीकृत किया गया है — जीवन-संस्कार, नित्य उपासना, देव-उत्सव, ज्योतिषीय उपाय एवं पितृ-कर्म।',
  },
  'services.quickHeading': { en: 'Quick Pooja', hi: 'त्वरित पूजा' },
  'services.quickIntro': {
    en: 'Tap any ritual for instant booking.',
    hi: 'तुरंत बुकिंग के लिए किसी भी अनुष्ठान पर टैप करें।',
  },
  'services.label.history': { en: 'History', hi: 'इतिहास' },
  'services.label.purpose': { en: 'Purpose & Benefits', hi: 'उद्देश्य एवं लाभ' },
  'services.label.facts': { en: 'Key Facts', hi: 'मुख्य तथ्य' },
  'services.requestThis': { en: 'Request this Pooja', hi: 'यह पूजा अनुरोध करें' },

  // Contact / Get in Connect
  'connect.heading': { en: 'Get in Connect', hi: 'संपर्क करें' },
  'connect.subtitle': {
    en: 'Tell us what you need and Acharya Ji will reach out to you with the details.',
    hi: 'अपनी आवश्यकता बताइए, आचार्य जी विवरण सहित आपसे संपर्क करेंगे।',
  },
  'form.name': { en: 'Full Name', hi: 'पूरा नाम' },
  'form.namePlaceholder': { en: 'Your name', hi: 'आपका नाम' },
  'form.email': { en: 'Email Address', hi: 'ईमेल पता' },
  'form.emailPlaceholder': { en: 'you@example.com', hi: 'you@example.com' },
  'form.phone': { en: 'Phone Number', hi: 'फ़ोन नंबर' },
  'form.phonePlaceholder': { en: '+91 ' + '98765 43210', hi: '+91 ' + '98765 43210' },
  'form.service': { en: 'Service', hi: 'सेवा' },
  'form.selectService': { en: 'Select a service…', hi: 'सेवा चुनें…' },
  'form.serviceOther': { en: 'Other / Not sure', hi: 'अन्य / निश्चित नहीं' },
  'form.request': { en: 'Your Request', hi: 'आपका अनुरोध' },
  'form.requestPlaceholder': {
    en: 'Describe the pooja or occasion, preferred date, and any details…',
    hi: 'पूजा अथवा अवसर, संभावित तिथि एवं अन्य विवरण लिखें…',
  },
  'form.submit': { en: 'Send Request', hi: 'अनुरोध भेजें' },
  'form.sending': { en: 'Sending…', hi: 'भेजा जा रहा है…' },
  'form.success': {
    en: 'Thank you! Your request has been received. Acharya Ji will contact you soon.',
    hi: 'धन्यवाद! आपका अनुरोध प्राप्त हो गया है। आचार्य जी शीघ्र ही आपसे संपर्क करेंगे।',
  },
  'form.error.required': { en: 'This field is required.', hi: 'यह आवश्यक है।' },
  'form.error.email': { en: 'Enter a valid email address.', hi: 'मान्य ईमेल पता दर्ज करें।' },
  'form.error.phone': { en: 'Enter a valid 10-digit phone number.', hi: 'मान्य 10-अंकीय फ़ोन नंबर दर्ज करें।' },

  // Footer
  'footer.contactHeading': { en: 'Contact', hi: 'संपर्क' },
  'footer.servicesHeading': { en: 'Services', hi: 'सेवाएँ' },
  'footer.phone': { en: 'Phone', hi: 'फ़ोन' },
  'footer.email': { en: 'Email', hi: 'ईमेल' },
  'footer.about': {
    en: 'Authentic Vedic poojas, homams and samskaras performed with devotion and traditional discipline.',
    hi: 'श्रद्धा एवं पारंपरिक विधि-विधान के साथ संपन्न प्रामाणिक वैदिक पूजा, हवन एवं संस्कार।',
  },
  'footer.poweredBy': { en: 'Powered By RedAlphFox', hi: 'Powered By RedAlphFox' },
  'footer.rights': {
    en: 'utkarshacharyaji.com — All rights reserved.',
    hi: 'utkarshacharyaji.com — सर्वाधिकार सुरक्षित।',
  },
};
