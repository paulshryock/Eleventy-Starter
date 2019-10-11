const Eleventy = require('@11ty/eleventy')
const ssg = new Eleventy()

async function buildHtml (cb) {
  await ssg.init()
  await ssg.write()

  return cb()
}

buildHtml(function() { console.log(`Ran Eleventy in ${process.env.NODE_ENV}`) })