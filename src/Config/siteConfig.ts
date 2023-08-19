export type SiteConfig = typeof siteConfig
export type AppConfig = typeof appConfig


export const siteConfig = {
    //business details
    siteName: 'Theo&Rose',
    siteUrl: 'https://theoandrose.com',
    description: 'Theo&Rose we provide cozy and comfortable accommodations tailored to suit the every need of our esteemed guests. Whether you’re visiting for business or pleasure, our commitment is to ensure your stay with us is nothing short of extraordinary. ',
    mobile: '07480238317',
    openingHours: 'Mon-Sat 08:00 – 19:00',
    address: '20 Wenlock Road London',

    //Pages
    pages: [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'Services',
            path: '/services',
        },
        {
            title: 'About Us',
            path: '/about',
        },
        {
            title: 'Contact Us',
            path: '/contact',
        }
    ]
}

const appConfig = {
    MobileBreakpoint: 780,
}