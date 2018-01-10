var _ = require('lodash')
const cheerio = require('cheerio')

let urlPrefix = ''

var quote = function(input) {
	const $ = cheerio.load(input)
	let items = []
	let id = 100
	let output = ''
	
	$('img').each(function(i, el) {
		let src = $(this).attr('src')
		if(src) {
			if(src.indexOf(urlPrefix) != 0) {
				src = urlPrefix + src
			}
			output += src + '\n'
		}
		let srcset = $(this).attr('srcset')
		if(srcset) {
			let filePattern = /[^\s]+\.[^\s]+/g
			let matches = srcset.match(filePattern)
			for(let match of matches) {
				if(match.indexOf(urlPrefix) != 0) {
					match = urlPrefix + match
				}
				output += match + '\n'
			}
		}
	})

	
	return output
}

module.exports = quote