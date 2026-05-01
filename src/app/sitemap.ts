import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tlusty.dev'
    const lastModified = new Date()

    const routes = ['', '/about', '/projects', '/cv', '/contact']

    const sitemap: MetadataRoute.Sitemap = []

    routes.forEach((route) => {
        sitemap.push({
            url: `${baseUrl}${route}`,
            lastModified,
            changeFrequency: 'monthly',
            priority: route === '' ? 1.0 : 0.8,
            alternates: {
                languages: {
                    'pl-PL': `${baseUrl}${route}`,
                    'en-US': `${baseUrl}/en${route}`,
                },
            },
        })

        sitemap.push({
            url: `${baseUrl}/en${route}`,
            lastModified,
            changeFrequency: 'monthly',
            priority: route === '' ? 1.0 : 0.8,
            alternates: {
                languages: {
                    'pl-PL': `${baseUrl}${route}`,
                    'en-US': `${baseUrl}/en${route}`,
                },
            },
        })
    })

    return sitemap
}