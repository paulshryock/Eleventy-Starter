const Eleventy = require('@11ty/eleventy')

async function buildHtml (cb) {
  const ssg = new Eleventy()

  await ssg.init()
  await ssg.write()

  return cb()
}

buildHtml(function() { console.log(`Ran Eleventy in ${process.env.NODE_ENV}`) })