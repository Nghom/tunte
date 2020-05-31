# tunte [![npm version](https://badge.fury.io/js/tunte.svg)](https://badge.fury.io/js/tunte) [![GitHub version](https://badge.fury.io/gh/nghom%2Ftunte.svg)](https://badge.fury.io/gh/nghom%2Ftunte)

Install with `npm`:

```sh
npm install tunte
```

## API

### Numbers (converting figures to letters)

```js
const { byv } = require('tunte');

byv.figure2words.convert(77); // returns 'ncòbsɑ̀mmbɑhɑ ŋâmsɑ̀mmbɑhɑ'
byv.figure2words.convert(10); // returns 'gham'
```

### Time (converting time to letters)

#### Specification:
function ngelan (hour : Number, minute : Number = 0, second : Number = 0, millisecond : Number 0) : String  
function le (day : Number) : String  
function nwu (month : Number) : String  

#### Example
```js
const { byv } = require('tunte');

let day = byv.getDay(6); // Ntα̂nndʉb
let month = byv.getMonth(5); //  Nsônὰ
```

### Currency (converting figures to currencies)

#### Specification


```js
const { byv } = require('tunte');

byv.ngelan(1); // 'Tàʼ ŋàm'
byv.ngelan(1, 5); // 'Tàʼ ŋàm ngʉ̂ mfî nyàm bαhα'
```

### Language modules
Standard: ISO 639-3fmp

#### Languages
| Medumba | byv |  
| Nufi    | fmp |  
| Ghomala | bbj |

Reference: https://www.ethnologue.com/country/cm/languages

## Contributing

If you wish to report a bug, please feel free to open an issue  

Want to request a feature? Open an issue too 

Want to contribute code? Join us on [our chat server](http://chat.nghom.com)

Want to support us financially? Please leave your details so we contact you at [info@nghom.com](mailto:info@nghom.com)

If you want faster feedback or wish a custom development, please kindly email me at nyopa@ngadou.me
