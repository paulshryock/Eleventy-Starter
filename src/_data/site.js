const site = {
  title: 'Site title',
  shortName: 'Site short name',
  description: 'Site description',
  year: new Date().getFullYear()
}

site.copyright = `&copy; ${site.year} ${site.title}. All rights reserved.`

module.exports = site
