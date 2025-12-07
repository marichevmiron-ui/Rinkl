export type Language = 'ru' | 'en' | 'es' | 'zh' | 'de';

export type PageView = 'home' | 'support' | 'details_rinkl' | 'details_telegram' | 'about';

export interface TranslationStructure {
  menu: {
    home: string;
    support: string;
    about: string;
  };
  home: {
    sq1_title: string;
    sq2_title: string;
  };
  details_rinkl: {
    title: string;
    release: string;
    content: string[]; // We will split paragraphs for easier rendering
    button: string;
  };
  details_telegram: {
    title: string;
    content: string[];
    button: string;
  };
  about: {
    title: string;
    content: string[];
    timeline: {
        t1: string;
        t2: string;
        t3: string;
    }
  };
  support: {
    title: string;
    messageType: string;
    yourMessage: string;
    sendMessage: string;
    sending: string;
    myMessages: string;
    adminResponse: string;
    waitingResponse: string;
    selectTypePlaceholder: string;
    types: {
      feedback: string;
      bug: string;
      question: string;
      suggestion: string;
      other: string;
    };
    msgSent: string;
    fillFields: string;
    noReviews: string;
  };
}