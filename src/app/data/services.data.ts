import { Bilingual, ServiceCategory } from '../core/models';

/** A quick-access pooja chip. `target` is the matching ServiceItem id, or 'other'. */
export interface QuickPooja {
  label: Bilingual;
  target: string;
}

/** Direct-access shortcuts shown above the full service list. */
export const QUICK_POOJAS: QuickPooja[] = [
  { label: { en: 'Katha', hi: 'कथा' }, target: 'satyanarayan' },
  { label: { en: 'Havan / Homam', hi: 'हवन' }, target: 'other' },
  { label: { en: 'Griha Pravesh', hi: 'गृह प्रवेश' }, target: 'griha-pravesh' },
  { label: { en: 'Ramayana Path', hi: 'रामायण पाठ' }, target: 'other' },
  { label: { en: 'Durga Saptashati Path', hi: 'दुर्गा सप्तशती पाठ' }, target: 'navaratri-durga' },
  { label: { en: 'Bhoomi Poojan', hi: 'भूमि पूजन' }, target: 'griha-pravesh' },
  { label: { en: 'Kaal Sarp Dosh Nivaran', hi: 'काल सर्प दोष निवारण' }, target: 'kaal-sarp' },
  { label: { en: 'Mangal Dosh Nivaran', hi: 'मंगल दोष निवारण' }, target: 'navagraha' },
  { label: { en: 'Mahamrityunjaya Japa', hi: 'महामृत्युंजय जप' }, target: 'mahamrityunjaya' },
  { label: { en: 'Rudrabhishek', hi: 'रुद्राभिषेक' }, target: 'rudra-abhishekam' },
  { label: { en: 'Udyapan', hi: 'उद्यापन' }, target: 'other' },
  { label: { en: 'Marriage / Vivaha', hi: 'विवाह' }, target: 'vivaha' },
];

/**
 * Full bilingual catalogue of poojas, homams and ceremonies.
 * Grouped by purpose, mirroring the structure of traditional Hindu practice.
 */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  // ───────────────────────────── 1. SAMSKARAS ─────────────────────────────
  {
    id: 'samskaras',
    icon: '🕉️',
    title: { en: '1. Life-Cycle Rituals (Samskaras)', hi: '१. जीवन-संस्कार' },
    intro: {
      en: 'The sixteen essential sacraments performed from before birth until death, sanctifying every major milestone of human life.',
      hi: 'जन्म से पूर्व से लेकर मृत्यु तक किए जाने वाले सोलह आवश्यक संस्कार, जो मानव जीवन के प्रत्येक प्रमुख पड़ाव को पवित्र करते हैं।',
    },
    items: [
      {
        id: 'garbhadhana',
        name: { en: 'Garbhadhana', hi: 'गर्भाधान संस्कार' },
        history: {
          en: 'The first of the sixteen samskaras, prescribed in the Grihya Sutras as the ritual that consecrates the moment of conception itself.',
          hi: 'सोलह संस्कारों में प्रथम, गृह्यसूत्रों में वर्णित यह संस्कार गर्भधारण के क्षण को ही पवित्र करता है।',
        },
        purpose: {
          en: 'Performed prior to conception to invoke a healthy, virtuous progeny and to approach parenthood with purity of intent.',
          hi: 'गर्भधारण से पूर्व किया जाने वाला यह संस्कार स्वस्थ एवं सुसंस्कृत संतान की कामना तथा शुद्ध भाव से मातृत्व-पितृत्व की ओर बढ़ने हेतु किया जाता है।',
        },
        keyFacts: [
          { en: 'It is the very first samskara of human life.', hi: 'यह मानव जीवन का सर्वप्रथम संस्कार है।' },
          { en: 'Emphasises mental and physical purity of both parents.', hi: 'माता-पिता दोनों की मानसिक एवं शारीरिक शुद्धता पर बल देता है।' },
          { en: 'Accompanied by specific Vedic mantras and prayers.', hi: 'विशिष्ट वैदिक मंत्रों एवं प्रार्थनाओं के साथ संपन्न होता है।' },
        ],
      },
      {
        id: 'pumsavana',
        name: { en: 'Pumsavana', hi: 'पुंसवन संस्कार' },
        history: {
          en: 'An ancient prenatal rite mentioned across the Grihya Sutras, traditionally observed in the third month of pregnancy.',
          hi: 'गृह्यसूत्रों में वर्णित एक प्राचीन गर्भकालीन संस्कार, परंपरागत रूप से गर्भावस्था के तीसरे माह में किया जाता है।',
        },
        purpose: {
          en: 'Performed for the health and proper development of the foetus and the well-being of the mother.',
          hi: 'गर्भस्थ शिशु के स्वस्थ एवं समुचित विकास तथा माता के कल्याण हेतु किया जाता है।',
        },
        keyFacts: [
          { en: 'Usually performed in the 3rd month of pregnancy.', hi: 'सामान्यतः गर्भावस्था के तीसरे माह में किया जाता है।' },
          { en: 'Focuses on protection of mother and child.', hi: 'माता एवं शिशु की रक्षा पर केंद्रित है।' },
          { en: 'Includes herbal and mantra-based observances.', hi: 'औषधीय एवं मंत्र-आधारित विधियाँ सम्मिलित हैं।' },
        ],
      },
      {
        id: 'simantonayana',
        name: { en: 'Simantonayana', hi: 'सीमंतोन्नयन संस्कार' },
        history: {
          en: 'A prenatal ceremony — the scriptural equivalent of a "baby shower" — observed in the seventh or eighth month.',
          hi: 'एक गर्भकालीन संस्कार — जो "गोद-भराई" के समान है — सातवें अथवा आठवें माह में किया जाता है।',
        },
        purpose: {
          en: 'Performed to bless the expectant mother, ensure a smooth pregnancy and bring mental peace.',
          hi: 'गर्भवती माता को आशीर्वाद देने, सुखद प्रसव एवं मानसिक शांति हेतु किया जाता है।',
        },
        keyFacts: [
          { en: 'Observed in the 7th or 8th month of pregnancy.', hi: 'गर्भावस्था के सातवें या आठवें माह में किया जाता है।' },
          { en: 'Celebrates and protects the mother-to-be.', hi: 'होने वाली माता का सम्मान एवं रक्षा करता है।' },
          { en: 'A joyous family gathering with prayers.', hi: 'प्रार्थनाओं सहित एक आनंदमय पारिवारिक आयोजन।' },
        ],
      },
      {
        id: 'jatakarma',
        name: { en: 'Jatakarma', hi: 'जातकर्म संस्कार' },
        history: {
          en: 'The rite performed at the very moment of a child’s birth, among the oldest recorded samskaras.',
          hi: 'शिशु के जन्म के क्षण पर किया जाने वाला संस्कार, जो सर्वाधिक प्राचीन संस्कारों में से एक है।',
        },
        purpose: {
          en: 'Welcomes the newborn into the world with blessings for intellect, strength and long life.',
          hi: 'नवजात शिशु का बुद्धि, बल एवं दीर्घायु के आशीर्वाद के साथ संसार में स्वागत करता है।',
        },
        keyFacts: [
          { en: 'Performed at the time of birth.', hi: 'जन्म के समय किया जाता है।' },
          { en: 'Traditionally includes feeding honey and ghee with mantras.', hi: 'परंपरागत रूप से मंत्रोच्चार सहित मधु एवं घृत चटाया जाता है।' },
          { en: 'Blessings for the child’s intellect and vitality.', hi: 'शिशु की बुद्धि एवं जीवनशक्ति हेतु आशीर्वाद।' },
        ],
      },
      {
        id: 'namakarana',
        name: { en: 'Namakarana', hi: 'नामकरण संस्कार' },
        history: {
          en: 'The formal naming ceremony, generally held on the eleventh or twelfth day after birth.',
          hi: 'विधिवत नामकरण संस्कार, सामान्यतः जन्म के ग्यारहवें या बारहवें दिन किया जाता है।',
        },
        purpose: {
          en: 'Bestows the child’s name, often chosen in harmony with the birth star (nakshatra).',
          hi: 'शिशु को नाम प्रदान करता है, जो प्रायः जन्म-नक्षत्र के अनुरूप चुना जाता है।',
        },
        keyFacts: [
          { en: 'Usually on the 11th or 12th day after birth.', hi: 'सामान्यतः जन्म के 11वें या 12वें दिन।' },
          { en: 'Name often aligned with the birth nakshatra.', hi: 'नाम प्रायः जन्म-नक्षत्र के अनुसार रखा जाता है।' },
          { en: 'A cherished family and community celebration.', hi: 'परिवार एवं समाज का प्रिय उत्सव।' },
        ],
      },
      {
        id: 'nishkramana',
        name: { en: 'Nishkramana', hi: 'निष्क्रमण संस्कार' },
        history: {
          en: 'The ceremony marking the infant’s first outing from the home, typically in the fourth month.',
          hi: 'शिशु के पहली बार घर से बाहर निकलने का संस्कार, सामान्यतः चौथे माह में।',
        },
        purpose: {
          en: 'Introduces the baby to the Sun, the elements and the wider world with prayers for protection.',
          hi: 'शिशु का सूर्य, प्रकृति के तत्वों एवं बाह्य संसार से रक्षा की प्रार्थना सहित परिचय कराता है।',
        },
        keyFacts: [
          { en: 'The baby’s first journey outside the home.', hi: 'शिशु की घर से बाहर पहली यात्रा।' },
          { en: 'Often performed in the 4th month.', hi: 'प्रायः चौथे माह में किया जाता है।' },
          { en: 'Prayers to Sun and deities for protection.', hi: 'सूर्य एवं देवताओं से रक्षा की प्रार्थना।' },
        ],
      },
      {
        id: 'annaprashana',
        name: { en: 'Annaprashana', hi: 'अन्नप्राशन संस्कार' },
        history: {
          en: 'The first feeding of solid food, generally around the sixth month, described in the Grihya Sutras.',
          hi: 'पहली बार अन्न ग्रहण कराने का संस्कार, सामान्यतः छठे माह में, गृह्यसूत्रों में वर्णित।',
        },
        purpose: {
          en: 'Marks the child’s transition to solid nourishment with prayers for health and good digestion.',
          hi: 'शिशु के ठोस आहार की ओर संक्रमण को स्वास्थ्य एवं उत्तम पाचन की प्रार्थना सहित चिह्नित करता है।',
        },
        keyFacts: [
          { en: 'Usually performed around the 6th month.', hi: 'सामान्यतः छठे माह के आसपास किया जाता है।' },
          { en: 'First taste of cooked grain, often sweet rice.', hi: 'पका अन्न, प्रायः खीर, पहली बार चटाया जाता है।' },
          { en: 'Blessings for nourishment and health.', hi: 'पोषण एवं स्वास्थ्य हेतु आशीर्वाद।' },
        ],
      },
      {
        id: 'chudakarma',
        name: { en: 'Mundan / Chudakarma', hi: 'मुंडन / चूड़ाकर्म संस्कार' },
        history: {
          en: 'The first ceremonial shaving of the child’s head, an ancient rite of purification.',
          hi: 'शिशु के सिर के बालों का प्रथम विधिवत मुंडन, शुद्धि का एक प्राचीन संस्कार।',
        },
        purpose: {
          en: 'Believed to purify the child, promote healthy growth and remove negativity carried from birth.',
          hi: 'माना जाता है कि यह शिशु को शुद्ध करता है, स्वस्थ विकास को बढ़ावा देता है एवं जन्मजात नकारात्मकता दूर करता है।',
        },
        keyFacts: [
          { en: 'Often performed in the 1st or 3rd year.', hi: 'प्रायः पहले या तीसरे वर्ष में किया जाता है।' },
          { en: 'First removal of birth hair.', hi: 'जन्म के बालों का प्रथम निष्कासन।' },
          { en: 'Frequently done at a temple or sacred site.', hi: 'प्रायः मंदिर अथवा तीर्थस्थल पर किया जाता है।' },
        ],
      },
      {
        id: 'karnavedha',
        name: { en: 'Karnavedha', hi: 'कर्णवेध संस्कार' },
        history: {
          en: 'The ear-piercing ceremony, mentioned in Ayurvedic and Dharmic texts for both health and adornment.',
          hi: 'कर्णवेध संस्कार, जिसका उल्लेख आयुर्वेदिक एवं धार्मिक ग्रंथों में स्वास्थ्य एवं श्रृंगार दोनों हेतु मिलता है।',
        },
        purpose: {
          en: 'Performed for well-being; tradition holds that ear-piercing carries health and protective benefits.',
          hi: 'कल्याण हेतु किया जाता है; परंपरा के अनुसार कर्णवेध स्वास्थ्य एवं रक्षात्मक लाभ देता है।',
        },
        keyFacts: [
          { en: 'Both ears are ceremonially pierced.', hi: 'दोनों कानों का विधिवत वेधन किया जाता है।' },
          { en: 'Believed to have Ayurvedic significance.', hi: 'इसका आयुर्वेदिक महत्व माना जाता है।' },
          { en: 'Performed on an auspicious day.', hi: 'शुभ दिन पर किया जाता है।' },
        ],
      },
      {
        id: 'vidyarambha',
        name: { en: 'Vidyarambha / Aksharabhyasa', hi: 'विद्यारंभ / अक्षराभ्यास संस्कार' },
        history: {
          en: 'The rite commencing formal education, when a child first writes letters, often invoking Goddess Saraswati.',
          hi: 'औपचारिक शिक्षा के आरंभ का संस्कार, जब शिशु पहली बार अक्षर लिखता है, प्रायः देवी सरस्वती का आह्वान करते हुए।',
        },
        purpose: {
          en: 'Initiates the child into learning with blessings for wisdom, memory and scholarly success.',
          hi: 'ज्ञान, स्मरणशक्ति एवं विद्या में सफलता के आशीर्वाद सहित शिशु को शिक्षा में दीक्षित करता है।',
        },
        keyFacts: [
          { en: 'Marks the start of formal learning.', hi: 'औपचारिक शिक्षा के प्रारंभ का प्रतीक।' },
          { en: 'Dedicated to Goddess Saraswati.', hi: 'देवी सरस्वती को समर्पित।' },
          { en: 'Child writes first letters on rice or a slate.', hi: 'शिशु चावल या पट्टी पर पहले अक्षर लिखता है।' },
        ],
      },
      {
        id: 'upanayana',
        name: { en: 'Upanayana (Sacred Thread)', hi: 'उपनयन (यज्ञोपवीत) संस्कार' },
        history: {
          en: 'The sacred-thread ceremony marking spiritual initiation and the start of Vedic study, one of the most significant samskaras.',
          hi: 'यज्ञोपवीत संस्कार, जो आध्यात्मिक दीक्षा एवं वैदिक अध्ययन के आरंभ का प्रतीक है, सर्वाधिक महत्वपूर्ण संस्कारों में से एक।',
        },
        purpose: {
          en: 'Initiates the child into disciplined spiritual life and the study of scripture under a guru.',
          hi: 'शिशु को अनुशासित आध्यात्मिक जीवन एवं गुरु के सान्निध्य में शास्त्र-अध्ययन हेतु दीक्षित करता है।',
        },
        keyFacts: [
          { en: 'The sacred thread (yajnopavita) is conferred.', hi: 'यज्ञोपवीत (जनेऊ) प्रदान किया जाता है।' },
          { en: 'Initiation into the Gayatri Mantra.', hi: 'गायत्री मंत्र में दीक्षा दी जाती है।' },
          { en: 'Considered a "second birth" of the soul.', hi: 'इसे आत्मा का "द्वितीय जन्म" माना जाता है।' },
        ],
      },
      {
        id: 'samavartana',
        name: { en: 'Samavartana', hi: 'समावर्तन संस्कार' },
        history: {
          en: 'The ceremony marking the completion of Vedic studies and the student’s return to worldly life.',
          hi: 'वैदिक अध्ययन की पूर्णता एवं विद्यार्थी के गृहस्थ जीवन में लौटने का संस्कार।',
        },
        purpose: {
          en: 'Marks graduation from the student stage (brahmacharya), preparing one for householder responsibilities.',
          hi: 'ब्रह्मचर्य आश्रम की समाप्ति को चिह्नित करता है एवं गृहस्थ जीवन के दायित्वों हेतु तैयार करता है।',
        },
        keyFacts: [
          { en: 'A ceremonial "convocation" of Vedic learning.', hi: 'वैदिक शिक्षा का विधिवत "दीक्षांत"।' },
          { en: 'Includes a ritual bath (snana).', hi: 'विधिवत स्नान सम्मिलित है।' },
          { en: 'Transition from student to householder.', hi: 'विद्यार्थी से गृहस्थ की ओर संक्रमण।' },
        ],
      },
      {
        id: 'vivaha',
        name: { en: 'Vivaha (Wedding)', hi: 'विवाह संस्कार' },
        history: {
          en: 'The Hindu marriage ceremony, the most elaborate samskara, uniting two souls before the sacred fire (Agni).',
          hi: 'हिंदू विवाह संस्कार, सबसे विस्तृत संस्कार, जो अग्नि की साक्षी में दो आत्माओं को जोड़ता है।',
        },
        purpose: {
          en: 'Sanctifies the union of bride and groom for a shared life of dharma, companionship and family.',
          hi: 'वर एवं वधू के धर्म, सहचर्य एवं परिवार के साझा जीवन हेतु मिलन को पवित्र करता है।',
        },
        keyFacts: [
          { en: 'Centred on the seven steps (Saptapadi) around Agni.', hi: 'अग्नि के समक्ष सात फेरों (सप्तपदी) पर केंद्रित।' },
          { en: 'Vows (vachan) taken before fire and elders.', hi: 'अग्नि एवं बड़ों के समक्ष वचन लिए जाते हैं।' },
          { en: 'Muhurta is chosen by careful astrological matching.', hi: 'मुहूर्त ज्योतिषीय गणना से निश्चित किया जाता है।' },
        ],
      },
      {
        id: 'vanaprastha-sannyasa',
        name: { en: 'Vanaprastha & Sannyasa', hi: 'वानप्रस्थ एवं संन्यास संस्कार' },
        history: {
          en: 'Rituals marking the transition into the forest-dweller and renunciant stages of life, the final ashramas.',
          hi: 'वानप्रस्थ एवं संन्यास आश्रम में प्रवेश के संस्कार, जो जीवन के अंतिम आश्रम हैं।',
        },
        purpose: {
          en: 'Consecrate the turn from worldly duties toward detachment, contemplation and the pursuit of liberation (moksha).',
          hi: 'सांसारिक कर्तव्यों से वैराग्य, चिंतन एवं मोक्ष की साधना की ओर मुड़ने को पवित्र करते हैं।',
        },
        keyFacts: [
          { en: 'Mark the third and fourth stages of life.', hi: 'जीवन के तृतीय एवं चतुर्थ आश्रम को चिह्नित करते हैं।' },
          { en: 'Emphasise detachment and spiritual focus.', hi: 'वैराग्य एवं आध्यात्मिक एकाग्रता पर बल।' },
          { en: 'Goal is the pursuit of moksha.', hi: 'लक्ष्य मोक्ष की प्राप्ति है।' },
        ],
      },
      {
        id: 'antyeshti',
        name: { en: 'Antyeshti (Final Rites)', hi: 'अंत्येष्टि संस्कार' },
        history: {
          en: 'The last of the sixteen samskaras — the funeral rites that honour the departed and aid the soul’s onward journey.',
          hi: 'सोलह संस्कारों में अंतिम — अंतिम संस्कार जो दिवंगत का सम्मान करता है एवं आत्मा की आगे की यात्रा में सहायक होता है।',
        },
        purpose: {
          en: 'Performed with reverence to release the soul, comfort the bereaved and fulfil the final duty toward the departed.',
          hi: 'श्रद्धा सहित आत्मा की मुक्ति, शोकाकुल परिजनों को सांत्वना एवं दिवंगत के प्रति अंतिम कर्तव्य के निर्वहन हेतु किया जाता है।',
        },
        keyFacts: [
          { en: 'The concluding samskara of human life.', hi: 'मानव जीवन का समापन संस्कार।' },
          { en: 'Performed with Vedic mantras and offerings.', hi: 'वैदिक मंत्रों एवं आहुतियों सहित किया जाता है।' },
          { en: 'Followed by shraddha rites for the soul’s peace.', hi: 'आत्मा की शांति हेतु श्राद्ध कर्म इसके पश्चात किए जाते हैं।' },
        ],
      },
    ],
  },

  // ─────────────────────── 2. DAILY & HOUSEHOLD POOJAS ───────────────────────
  {
    id: 'daily',
    icon: '🪔',
    title: { en: '2. Daily & Household Poojas', hi: '२. नित्य एवं गृह पूजा' },
    intro: {
      en: 'Regular or occasional ceremonies for general well-being, peace and domestic harmony.',
      hi: 'सामान्य कल्याण, शांति एवं गृह-समृद्धि हेतु नियमित अथवा सामयिक अनुष्ठान।',
    },
    items: [
      {
        id: 'griha-pravesh',
        name: { en: 'Griha Pravesh Puja', hi: 'गृह प्रवेश पूजा' },
        history: {
          en: 'The traditional housewarming ceremony performed before occupying a new home, rooted in Vastu and Vedic practice.',
          hi: 'नए घर में प्रवेश से पूर्व किया जाने वाला परंपरागत गृह प्रवेश अनुष्ठान, जो वास्तु एवं वैदिक परंपरा पर आधारित है।',
        },
        purpose: {
          en: 'Purifies the new dwelling, removes negative energies and invokes prosperity, health and harmony for the family.',
          hi: 'नए निवास को शुद्ध करता है, नकारात्मक ऊर्जा दूर करता है एवं परिवार हेतु समृद्धि, स्वास्थ्य एवं सुख की कामना करता है।',
        },
        keyFacts: [
          { en: 'Performed on an auspicious Vastu muhurta.', hi: 'शुभ वास्तु मुहूर्त में किया जाता है।' },
          { en: 'Often includes a Vastu Shanti homam.', hi: 'प्रायः वास्तु शांति हवन सम्मिलित होता है।' },
          { en: 'Boiling milk to overflow symbolises abundance.', hi: 'दूध उबालकर उफनाना समृद्धि का प्रतीक है।' },
        ],
      },
      {
        id: 'satyanarayan',
        name: { en: 'Satyanarayan Puja', hi: 'सत्यनारायण पूजा' },
        history: {
          en: 'A widely beloved puja dedicated to Lord Vishnu as Satyanarayana, narrated in the Skanda Purana.',
          hi: 'भगवान विष्णु के सत्यनारायण स्वरूप को समर्पित अत्यंत लोकप्रिय पूजा, जिसका वर्णन स्कंद पुराण में है।',
        },
        purpose: {
          en: 'Performed for success, gratitude and family harmony — commonly on full-moon days and after auspicious events.',
          hi: 'सफलता, कृतज्ञता एवं पारिवारिक सुख हेतु किया जाता है — प्रायः पूर्णिमा एवं शुभ अवसरों के पश्चात।',
        },
        keyFacts: [
          { en: 'Usually performed on Purnima (full moon).', hi: 'सामान्यतः पूर्णिमा को किया जाता है।' },
          { en: 'Includes the reading of the Satyanarayan Katha.', hi: 'सत्यनारायण कथा का वाचन सम्मिलित है।' },
          { en: 'Prasad of sheera/panchamrit is distributed.', hi: 'शीरा/पंचामृत का प्रसाद वितरित किया जाता है।' },
        ],
      },
      {
        id: 'rudra-abhishekam',
        name: { en: 'Rudra Abhishekam', hi: 'रुद्राभिषेक' },
        history: {
          en: 'An elaborate ceremonial bathing of the Shiva Lingam accompanied by chanting of the Rudram from the Yajurveda.',
          hi: 'शिवलिंग का विस्तृत अभिषेक, जो यजुर्वेद के रुद्रम के पाठ सहित संपन्न होता है।',
        },
        purpose: {
          en: 'Believed to eliminate sins and afflictions and to bestow health, peace and spiritual upliftment.',
          hi: 'माना जाता है कि यह पापों एवं कष्टों का नाश करता है तथा स्वास्थ्य, शांति एवं आध्यात्मिक उन्नति प्रदान करता है।',
        },
        keyFacts: [
          { en: 'Lingam is bathed with milk, honey, water and more.', hi: 'शिवलिंग का दूध, मधु, जल आदि से अभिषेक किया जाता है।' },
          { en: 'Accompanied by Rudra mantras.', hi: 'रुद्र मंत्रों सहित संपन्न होता है।' },
          { en: 'Especially powerful on Mondays and Shivaratri.', hi: 'सोमवार एवं शिवरात्रि पर विशेष फलदायी।' },
        ],
      },
      {
        id: 'nitya-puja',
        name: { en: 'Daily Nitya Puja', hi: 'नित्य पूजा' },
        history: {
          en: 'The regular daily worship conducted in home shrines, the everyday backbone of Hindu devotional life.',
          hi: 'घर के पूजा स्थल में प्रतिदिन की जाने वाली उपासना, जो हिंदू भक्ति-जीवन का आधार है।',
        },
        purpose: {
          en: 'Maintains a daily connection with the divine, cultivating discipline, gratitude and inner peace.',
          hi: 'ईश्वर से नित्य संबंध बनाए रखती है तथा अनुशासन, कृतज्ञता एवं आंतरिक शांति का विकास करती है।',
        },
        keyFacts: [
          { en: 'Performed every day in the home shrine.', hi: 'प्रतिदिन घर के पूजा स्थल में की जाती है।' },
          { en: 'Includes lamp, incense, flowers and aarti.', hi: 'दीप, धूप, पुष्प एवं आरती सम्मिलित।' },
          { en: 'Acharya Ji can guide a correct daily routine.', hi: 'आचार्य जी उचित नित्य विधि का मार्गदर्शन देते हैं।' },
        ],
      },
    ],
  },

  // ──────────────────── 3. DEITY-SPECIFIC POOJAS & FESTIVALS ────────────────────
  {
    id: 'deity',
    icon: '🌺',
    title: { en: '3. Deity-Specific Poojas & Festivals', hi: '३. देव-विशेष पूजा एवं उत्सव' },
    intro: {
      en: 'Worship of the many manifestations of the divine, celebrated through major festivals and devotions.',
      hi: 'ईश्वर के विविध स्वरूपों की उपासना, प्रमुख उत्सवों एवं भक्ति के माध्यम से।',
    },
    items: [
      {
        id: 'ganesh',
        name: { en: 'Ganesh Chaturthi / Puja', hi: 'गणेश चतुर्थी / पूजा' },
        history: {
          en: 'Worship of Lord Ganesha, the remover of obstacles, celebrated grandly on Ganesh Chaturthi.',
          hi: 'विघ्नहर्ता भगवान गणेश की उपासना, जो गणेश चतुर्थी पर भव्यता से मनाई जाती है।',
        },
        purpose: {
          en: 'Invoked at the start of any venture to remove obstacles and bestow wisdom and success.',
          hi: 'किसी भी कार्य के आरंभ में विघ्न-नाश तथा बुद्धि एवं सफलता हेतु आह्वान किया जाता है।',
        },
        keyFacts: [
          { en: 'Ganesha is worshipped first in every ritual.', hi: 'प्रत्येक अनुष्ठान में सर्वप्रथम गणेश पूजन होता है।' },
          { en: 'Modak is the favoured offering.', hi: 'मोदक प्रिय भोग है।' },
          { en: 'Ideal before new beginnings and ventures.', hi: 'नए कार्यों एवं आरंभ हेतु आदर्श।' },
        ],
      },
      {
        id: 'navaratri-durga',
        name: { en: 'Navaratri / Durga Puja', hi: 'नवरात्रि / दुर्गा पूजा' },
        history: {
          en: 'Nine sacred nights dedicated to the Goddess in her forms as Durga, Lakshmi and Saraswati.',
          hi: 'देवी के दुर्गा, लक्ष्मी एवं सरस्वती स्वरूपों को समर्पित नौ पवित्र रात्रियाँ।',
        },
        purpose: {
          en: 'Worship of Shakti for strength, protection, prosperity and the triumph of good over evil.',
          hi: 'शक्ति, रक्षा, समृद्धि एवं असत्य पर सत्य की विजय हेतु आदिशक्ति की उपासना।',
        },
        keyFacts: [
          { en: 'Celebrated over nine nights (Navaratri).', hi: 'नौ रात्रियों (नवरात्रि) तक मनाई जाती है।' },
          { en: 'Each night honours a form of the Goddess.', hi: 'प्रत्येक रात्रि देवी के एक स्वरूप को समर्पित।' },
          { en: 'Concludes with Vijayadashami.', hi: 'विजयादशमी के साथ संपन्न होती है।' },
        ],
      },
      {
        id: 'lakshmi',
        name: { en: 'Lakshmi Puja', hi: 'लक्ष्मी पूजा' },
        history: {
          en: 'Worship of Goddess Lakshmi, performed most prominently during Diwali.',
          hi: 'देवी लक्ष्मी की उपासना, जो दीपावली पर सर्वाधिक प्रमुखता से की जाती है।',
        },
        purpose: {
          en: 'Invokes wealth, prosperity, abundance and auspiciousness for the home and business.',
          hi: 'घर एवं व्यवसाय हेतु धन, समृद्धि, ऐश्वर्य एवं मंगल का आह्वान करती है।',
        },
        keyFacts: [
          { en: 'Central ritual of Diwali night.', hi: 'दीपावली रात्रि का प्रमुख अनुष्ठान।' },
          { en: 'Home is cleaned and lit with lamps.', hi: 'घर स्वच्छ कर दीपों से सजाया जाता है।' },
          { en: 'Often performed with Ganesha and Kubera.', hi: 'प्रायः गणेश एवं कुबेर सहित की जाती है।' },
        ],
      },
      {
        id: 'maha-shivaratri',
        name: { en: 'Maha Shivaratri', hi: 'महाशिवरात्रि' },
        history: {
          en: 'The "Great Night of Shiva" — a night-long vigil and worship dedicated to Lord Shiva.',
          hi: '"शिव की महान रात्रि" — भगवान शिव को समर्पित रात्रिभर की उपासना एवं जागरण।',
        },
        purpose: {
          en: 'Observed for spiritual awakening, the dissolution of negativity and the grace of Lord Shiva.',
          hi: 'आध्यात्मिक जागरण, नकारात्मकता के नाश एवं भगवान शिव की कृपा हेतु मनाई जाती है।',
        },
        keyFacts: [
          { en: 'Devotees keep a night-long vigil (jagran).', hi: 'भक्त रात्रिभर जागरण करते हैं।' },
          { en: 'Fasting and abhishekam are observed.', hi: 'व्रत एवं अभिषेक किया जाता है।' },
          { en: '"Om Namah Shivaya" is chanted through the night.', hi: 'रात्रिभर "ॐ नमः शिवाय" का जप होता है।' },
        ],
      },
      {
        id: 'hanuman',
        name: { en: 'Hanuman Puja', hi: 'हनुमान पूजा' },
        history: {
          en: 'Devotion to Lord Hanuman through chanting and offerings, traditionally on Tuesdays and Saturdays.',
          hi: 'जप एवं अर्पण के माध्यम से भगवान हनुमान की भक्ति, परंपरागत रूप से मंगलवार एवं शनिवार को।',
        },
        purpose: {
          en: 'Performed to overcome fear, difficulties and obstacles, and to gain courage and protection.',
          hi: 'भय, कठिनाइयों एवं बाधाओं पर विजय तथा साहस एवं रक्षा हेतु किया जाता है।',
        },
        keyFacts: [
          { en: 'Best observed on Tuesdays and Saturdays.', hi: 'मंगलवार एवं शनिवार को विशेष फलदायी।' },
          { en: 'Hanuman Chalisa is commonly recited.', hi: 'हनुमान चालीसा का पाठ प्रचलित है।' },
          { en: 'Offerings of sindoor and boondi laddu.', hi: 'सिंदूर एवं बूँदी लड्डू अर्पित किए जाते हैं।' },
        ],
      },
    ],
  },

  // ─────────────── 4. ASTROLOGICAL & REMEDIAL HOMAMS ───────────────
  {
    id: 'astrological',
    icon: '🔥',
    title: { en: '4. Astrological & Remedial Homams', hi: '४. ज्योतिषीय एवं उपचारात्मक हवन' },
    intro: {
      en: 'Vedic fire ceremonies (homas) used to remedy astrological challenges and seek specific boons.',
      hi: 'वैदिक हवन (होम) जो ज्योतिषीय बाधाओं के निवारण एवं विशिष्ट वरदान की प्राप्ति हेतु किए जाते हैं।',
    },
    items: [
      {
        id: 'navagraha',
        name: { en: 'Navagraha Puja', hi: 'नवग्रह पूजा' },
        history: {
          en: 'Worship of the nine planetary deities (Navagraha) that influence destiny and daily life.',
          hi: 'नौ ग्रह-देवताओं (नवग्रह) की उपासना, जो भाग्य एवं दैनिक जीवन को प्रभावित करते हैं।',
        },
        purpose: {
          en: 'Balances planetary energies and mitigates hardships indicated in one’s horoscope.',
          hi: 'ग्रहों की ऊर्जा को संतुलित करती है एवं कुंडली में दर्शाए गए कष्टों का निवारण करती है।',
        },
        keyFacts: [
          { en: 'Addresses doshas of the nine planets.', hi: 'नौ ग्रहों के दोषों का निवारण करती है।' },
          { en: 'Often recommended after horoscope analysis.', hi: 'प्रायः कुंडली विश्लेषण के पश्चात अनुशंसित।' },
          { en: 'Can be combined with graha-specific homams.', hi: 'ग्रह-विशेष हवन के साथ की जा सकती है।' },
        ],
      },
      {
        id: 'mahamrityunjaya',
        name: { en: 'Mahamrityunjaya Puja', hi: 'महामृत्युंजय पूजा' },
        history: {
          en: 'A powerful ritual centred on the Mahamrityunjaya Mantra from the Rigveda, addressed to Lord Shiva.',
          hi: 'ऋग्वेद के महामृत्युंजय मंत्र पर केंद्रित एक शक्तिशाली अनुष्ठान, जो भगवान शिव को समर्पित है।',
        },
        purpose: {
          en: 'Performed for healing, health, longevity and overcoming the fear of death and serious illness.',
          hi: 'आरोग्य, स्वास्थ्य, दीर्घायु तथा मृत्यु एवं गंभीर रोग के भय पर विजय हेतु किया जाता है।',
        },
        keyFacts: [
          { en: 'Centres on the Mahamrityunjaya Mantra.', hi: 'महामृत्युंजय मंत्र पर केंद्रित।' },
          { en: 'Recited a fixed number of times (japa).', hi: 'निश्चित संख्या में जप किया जाता है।' },
          { en: 'Sought during illness or crisis.', hi: 'रोग अथवा संकट के समय किया जाता है।' },
        ],
      },
      {
        id: 'kaal-sarp',
        name: { en: 'Kaal Sarp Dosha Puja', hi: 'काल सर्प दोष पूजा' },
        history: {
          en: 'A remedial ritual for the Kaal Sarp Dosha, an astrological configuration of Rahu and Ketu.',
          hi: 'काल सर्प दोष हेतु उपचारात्मक अनुष्ठान, जो राहु एवं केतु की एक ज्योतिषीय स्थिति है।',
        },
        purpose: {
          en: 'Performed to neutralise negative configurations and bring stability, progress and relief from obstacles.',
          hi: 'नकारात्मक योगों को शांत करने तथा स्थिरता, उन्नति एवं बाधाओं से मुक्ति हेतु किया जाता है।',
        },
        keyFacts: [
          { en: 'Addresses the Rahu-Ketu axis in the chart.', hi: 'कुंडली में राहु-केतु अक्ष का निवारण करती है।' },
          { en: 'Often performed at Trimbakeshwar and similar sites.', hi: 'प्रायः त्र्यंबकेश्वर आदि स्थलों पर की जाती है।' },
          { en: 'Recommended after astrological confirmation.', hi: 'ज्योतिषीय पुष्टि के पश्चात अनुशंसित।' },
        ],
      },
      {
        id: 'dhanvantari',
        name: { en: 'Dhanvantari Homa', hi: 'धन्वंतरि होम' },
        history: {
          en: 'A fire ceremony dedicated to Lord Dhanvantari, the divine physician and incarnation of Vishnu.',
          hi: 'भगवान धन्वंतरि को समर्पित हवन, जो आयुर्वेद के देव एवं विष्णु के अवतार हैं।',
        },
        purpose: {
          en: 'Performed for healing, recovery from illness and overall good health and vitality.',
          hi: 'आरोग्य, रोग से मुक्ति एवं संपूर्ण स्वास्थ्य एवं जीवनशक्ति हेतु किया जाता है।',
        },
        keyFacts: [
          { en: 'Dedicated to the god of Ayurveda.', hi: 'आयुर्वेद के देव को समर्पित।' },
          { en: 'Sought for health and recovery.', hi: 'स्वास्थ्य एवं स्वस्थ होने हेतु किया जाता है।' },
          { en: 'Often observed on Dhanteras.', hi: 'प्रायः धनतेरस पर किया जाता है।' },
        ],
      },
    ],
  },

  // ─────────────────── 5. ANCESTRAL RITUALS (SHRADDHA) ───────────────────
  {
    id: 'ancestral',
    icon: '🙏',
    title: { en: '5. Ancestral Rituals (Shraddha)', hi: '५. पितृ कर्म (श्राद्ध)' },
    intro: {
      en: 'Rituals honouring forefathers and ensuring the peace of departed souls.',
      hi: 'पूर्वजों के सम्मान एवं दिवंगत आत्माओं की शांति हेतु किए जाने वाले अनुष्ठान।',
    },
    items: [
      {
        id: 'pitru-paksha',
        name: { en: 'Pitru Paksha Shraddha / Tarpan', hi: 'पितृ पक्ष श्राद्ध / तर्पण' },
        history: {
          en: 'Rites performed during Pitru Paksha to honour ancestors, with roots in the Garuda Purana and Dharmic tradition.',
          hi: 'पितृ पक्ष में पूर्वजों के सम्मान हेतु किए जाने वाले अनुष्ठान, जिनका मूल गरुड़ पुराण एवं धार्मिक परंपरा में है।',
        },
        purpose: {
          en: 'Offered to repay the debt to forefathers, ensure peace of departed souls and seek their blessings.',
          hi: 'पितृ-ऋण के निवारण, दिवंगत आत्माओं की शांति एवं उनके आशीर्वाद हेतु किए जाते हैं।',
        },
        keyFacts: [
          { en: 'Observed mainly during Pitru Paksha.', hi: 'मुख्यतः पितृ पक्ष में किए जाते हैं।' },
          { en: 'Includes tarpan (water offerings) and pind daan.', hi: 'तर्पण एवं पिंडदान सम्मिलित हैं।' },
          { en: 'Brahmin bhoj and charity are part of the rite.', hi: 'ब्राह्मण भोज एवं दान इसका अंग हैं।' },
        ],
      },
    ],
  },

  // ───────────────────────────── 6. OTHERS ─────────────────────────────
  {
    id: 'others',
    icon: '✨',
    title: { en: '6. Others', hi: '६. अन्य' },
    intro: {
      en: 'Custom poojas, homams, vrat-kathas and ceremonies as per your specific needs and traditions.',
      hi: 'आपकी विशिष्ट आवश्यकताओं एवं परंपराओं के अनुसार विशेष पूजा, हवन, व्रत-कथा एवं अनुष्ठान।',
    },
    items: [
      {
        id: 'custom',
        name: { en: 'Custom Pooja / Consultation', hi: 'विशेष पूजा / परामर्श' },
        history: {
          en: 'Hindu tradition holds countless regional and family-specific observances beyond any fixed list.',
          hi: 'हिंदू परंपरा में किसी निश्चित सूची से परे अनगिनत क्षेत्रीय एवं पारिवारिक अनुष्ठान हैं।',
        },
        purpose: {
          en: 'Tell Acharya Ji your need — a specific vrat, homam, muhurta, or guidance — and it will be arranged with full authenticity.',
          hi: 'आचार्य जी को अपनी आवश्यकता बताइए — कोई विशेष व्रत, हवन, मुहूर्त अथवा मार्गदर्शन — जो पूर्ण प्रामाणिकता से संपन्न कराया जाएगा।',
        },
        keyFacts: [
          { en: 'Tailored to your tradition and occasion.', hi: 'आपकी परंपरा एवं अवसर के अनुरूप।' },
          { en: 'Available at home or online.', hi: 'घर पर अथवा ऑनलाइन उपलब्ध।' },
          { en: 'Muhurta and guidance included.', hi: 'मुहूर्त एवं मार्गदर्शन सम्मिलित।' },
        ],
      },
    ],
  },
];
