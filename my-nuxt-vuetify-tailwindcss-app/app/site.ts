// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: 'Plumbly',
  description: 'Plumbly - the help you need to find help!',
  logo: 'i-fluent-emoji:hammer-and-wrench',
  author: 'Pinegrow',
  url: 'https://pg-nuxt-vuetify-tailwindcss.netlify.app',
  github: 'https://github.com/pinegrow/pg-nuxt-vuetify-tailwindcss',
  ogImageUrl: 'og-image2.png', // absolute url (or) from public folder
  generator: 'https://vuedesigner.com',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default

  navs: {
    primary: [
      { 
        title: 'Home', 
        to: '/' 
      },
      { 
        title: 'Plumbing', 
        to: '/women' 
      },
      { 
        title: 'Electrical', 
        to: '/men', 
      },
      {
        title: 'Construction',
        to: '/jewellery',
      },
      {
        title: 'Painting',
        to: '/electronics',
      },
      {
        title: 'Hygiene',
        to: '/quick-start',
      },
    ],
    secondary: [
      {
        title: 'Track Order',
        to: '/track-order',
        icon: 'i-ic-outline-my-location',
      },
      {
        title: 'Order History',
        to: '/order-history',
        icon: 'i-ic-baseline-history',
      },
      {
        title: 'Returns',
        to: '/returns',
        icon: 'i-material-symbols-assignment-return-outline-rounded',
      },
      {
        title: 'Delivery Policy',
        to: '/delivery-policy',
        icon: 'i-tabler-truck-return',
      },
      {
        title: 'Contact Us',
        to: '/contact-us',
        icon: 'i-material-symbols-add-call',
      },
      {
        title: 'Help & FAQs',
        to: '/help-faqs',
        icon: 'i-material-symbols-contact-support-outline',
      },
    ],
  },
}
