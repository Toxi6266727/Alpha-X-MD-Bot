function _0x2572(_0x31029d,_0x5281a9){const _0x2abb54=_0x2abb();return _0x2572=function(_0x257260,_0x38d5a4){_0x257260=_0x257260-0xee;let _0x1e218a=_0x2abb54[_0x257260];return _0x1e218a;},_0x2572(_0x31029d,_0x5281a9);}const _0x1dec48=_0x2572;(function(_0x25553e,_0xa088f){const _0x4beec8=_0x2572,_0x27d404=_0x25553e();while(!![]){try{const _0x2b7af5=-parseInt(_0x4beec8(0xfd))/0x1+-parseInt(_0x4beec8(0xef))/0x2*(-parseInt(_0x4beec8(0xfb))/0x3)+parseInt(_0x4beec8(0xf0))/0x4+parseInt(_0x4beec8(0xf9))/0x5+parseInt(_0x4beec8(0x101))/0x6+-parseInt(_0x4beec8(0xfa))/0x7*(parseInt(_0x4beec8(0xf2))/0x8)+-parseInt(_0x4beec8(0xf3))/0x9*(-parseInt(_0x4beec8(0xff))/0xa);if(_0x2b7af5===_0xa088f)break;else _0x27d404['push'](_0x27d404['shift']());}catch(_0x29b4d3){_0x27d404['push'](_0x27d404['shift']());}}}(_0x2abb,0x37159));const config=require('../config'),{DataTypes}=require(_0x1dec48(0xf1));if(process['env'][_0x1dec48(0xfc)]==!![]||process[_0x1dec48(0xf4)]['HEROKU']=='true'){const SqlDB=config[_0x1dec48(0xee)][_0x1dec48(0xfe)](_0x1dec48(0xf7),{'type':DataTypes[_0x1dec48(0xf6)],'allowNull':![]});async function get(){const _0x23f859=_0x1dec48,_0xb95147=await SqlDB[_0x23f859(0xf8)]();return _0xb95147;}async function push(_0x1e3b9c){return await SqlDB['create']({'msg':_0x1e3b9c});}async function del(){const _0x4d6f49=_0x1dec48;return await SqlDB[_0x4d6f49(0x100)]({'where':{},'truncate':!![]});}module[_0x1dec48(0xf5)]={'SqlDB':SqlDB,'get':get,'push':push,'del':del};}else{async function SqlDB(){}async function get(){}async function push(_0x5a27df){}async function del(){}module[_0x1dec48(0xf5)]={'SqlDB':SqlDB,'get':get,'push':push,'del':del};}function _0x2abb(){const _0x3c6cf3=['DATABASE','4ZAUifN','725212GLvxRa','sequelize','764488MbNcWh','2331DzZJOa','env','exports','TEXT','./alphaX','findAll','373295wvySqa','7KvOSnp','350118Lupjni','HEROKU','439265hqZKvF','define','6060cQjxmN','destroy','684738FcFYTD'];_0x2abb=function(){return _0x3c6cf3;};return _0x2abb();}
