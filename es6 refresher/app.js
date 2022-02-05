//using export only
import {x as data,hello as nameCall} from './customer.js';
nameCall('anurag')
console.log(data)

//we can use bundle to use all that is present
import * as bundle from './customer.js'
bundle.hello('anurag')
console.log(bundle.x)

//using export default
//we can only give obj/function as default in particular js and can be used in other file using any name/or giving its actual name either way is fine
import student from './customer.js'
import objectStudent from './customer.js'
console.log(student)
console.log(objectStudent)


