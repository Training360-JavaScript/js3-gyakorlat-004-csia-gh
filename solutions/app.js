import checkIP from './ip.js'
import checkMac from './mac.js'
import checkVisa from './visa.js'

const checker = {
  rules: {
    ip: checkIP,
    mac: checkMac,
    visa: checkVisa
  },
  validate(text, rule) {
    return this.rules[rule](text);
  }
};

export default checker;