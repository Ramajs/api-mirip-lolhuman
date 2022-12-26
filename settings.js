const fs = require('fs')

global.creator = 'Ramaa-Gnnz' 
global.apikey = ["rama", "Ramagnnz", "reyhan"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
