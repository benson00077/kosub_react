export const API_ROOT_URL = process.env.REACT_APP_API_URL

export const ERR_MESSAGES = {
  401: `Oops 🔐 ! Access Denied. Please log in to continue.`,
  503: `Oops 🤯 ! Our servers are taking a coffee break at the moment. 
  We're working hard to get them back online and serving data as soon as possible. 
  Please bear with us!
`,
}

export const KOREAN_POS_TAG = {
  noun: 'NNG',
  verb: 'VV',
  adjective: 'VA',
}

export const KOREAN_POS = {
  noun: 'Noun',
  verb: 'Verb',
  adjective: 'Adjective',
}

export const PLACEHOLDER = {
  noun: 'e.g. 음식',
  verb: 'e.g. 먹다',
  adjective: 'e.g. 맛있다',
}

export const PLACEHOLDER_FOREIGN = {
  zh: 'e.g. 好吃',
  en: 'e.g. delicious',
}

export const LANGUAGE_LABLE = {
  ko: '국어',
  zh: '中文',
  en: 'English',
}
