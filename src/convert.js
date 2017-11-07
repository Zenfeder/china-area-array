const fs = require('fs')
const chinaData = require('./data')
let chinaDataConvert = []

const provinceList = chinaData['provinceList']

provinceList.forEach((provinceItem) => {
	// push某个省数据
	chinaDataConvert.push(provinceItem)

	cityMap = chinaData[provinceItem.value]

	for (let cityKey in cityMap) {
		let cityItem = {
			'value': cityKey,
			'name': cityMap[cityKey],
			'parent': provinceItem.value
		}
		// push某个市数据
		chinaDataConvert.push(cityItem)

		areaMap = chinaData[cityKey]

		let cityhasArea = false

		for (let areaKey in areaMap) {
			cityhasArea = true
			let areaItem = {
				'value': areaKey,
				'name': areaMap[areaKey],
				'parent': cityKey
			}
			// push某个市数据
			chinaDataConvert.push(areaItem)
		}
		if (cityhasArea) {
			let areaItemOther = {
				'value': cityKey.slice(0,4) + '99',
				'name': '其他区',
				'parent': cityKey
			}
			chinaDataConvert.push(areaItemOther)
		} else {
			let areaItemOther = {
				'value': '--',
				'name': '--',
				'parent': cityKey
			}
			chinaDataConvert.push(areaItemOther)
		}
	}
})

fs.writeFile('../dist/china-area-array.js', 'module.exports = ' + JSON.stringify(chinaDataConvert, null, 4), 'utf8', (err) => {
	if (err) {
		console.log(err)
	}
	console.log('save success')
})