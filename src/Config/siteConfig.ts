

export type SiteConfig = typeof siteConfig
export type AppConfig = typeof appConfig


export const siteConfig = {
    siteName: 'Theo&Rose',
    siteUrl: 'https://theoandrose.com',

    //Pages
    pages:[
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