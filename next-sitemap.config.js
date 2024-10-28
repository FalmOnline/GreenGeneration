module.exports = {
    siteUrl: 'https://green-generation.info', // Your website URL
    generateRobotsTxt: true, // Generate robots.txt file
    sitemapSize: 7000, // Limit the number of URLs per sitemap file (default is 5000)
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/admin/*', '/secret-page'], // Exclude specific routes if needed
  };