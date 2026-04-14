const lucide = require("lucide-react"); const keys = Object.keys(lucide).filter(k => /Git|Link|Twit|Mail|Envelope|At|Feather|Brand/i.test(k)); console.log(keys.sort().join("\n"));
