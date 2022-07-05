fs   = require("fs");
path = require("path");

var dir = process.argv[2],
	ext = process.argv[3];

var contents = fs.readdir(dir, function(err, list){
	if (err) throw err;

	for(var i = 0; i<list.length;i++)
		if(path.extname(list[i]) === "." + ext)
			console.log(list[i]);
});