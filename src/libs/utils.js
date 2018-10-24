import axios from 'axios'

let util = {};
/*iview 的
https://www.easy-mock.com/mock/5b962af7e0d1a17c279c8870/iview
*/

util.ajax = axios.create({
   baseURL: 'https://www.easy-mock.com/mock/5bc527578dab123bdd200d25/iview',
    timeout:3000
});

export default util;
