const fs = require("fs")
const gitSemverTags = require('git-semver-tags');

gitSemverTags(function(err, tags) {
  const tag = tags[0]
  fs.writeFileSync("src/assets/git-version.json", '{"tag":"' + tag + '"}')
  //=> [ 'v2.0.0', 'v1.0.0' ]
});