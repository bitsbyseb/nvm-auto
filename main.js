import {getLastVersion} from './utils/getLastVersionTag.js';
import {installLastVersion} from './utils/installLastVersion.js';
import {switchToLastVersion} from './utils/switchToLastVersion.js'

getLastVersion()
.then(x => installLastVersion(x)
.then(y => switchToLastVersion(y)))
.catch(err => console.error(err))