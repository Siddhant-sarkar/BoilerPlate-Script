const fs = require("fs");
const FldrName = process.argv[2] || "defaultDir";
const template = `
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
  <script src="script.js"></script> 
</body>
</html>
`
try {
   fs.mkdirSync(FldrName);
   fs.writeFileSync(`${FldrName}/index.html`,template,'utf-8');
   fs.writeFileSync(`${FldrName}/style.css`,'');
   fs.writeFileSync(`${FldrName}/app.js`,'');
} catch (error) {
   console.log("Something bad happened ", error);
}
