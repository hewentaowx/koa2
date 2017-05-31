/**
 * Created by Administrator on 2017/4/27.
 */


/**
 * 获取今天日期，星期几
 * @returns {string}
 */
exports.getTodayDate = () => {
    var now = new Date();
    var yy = now.getFullYear();
    var mm = now.getMonth() + 1;
    var dd = now.getDate();
    var day = new Array();
    day[0] = "星期日";
    day[1] = "星期一";
    day[2] = "星期二";
    day[3] = "星期三";
    day[4] = "星期四";
    day[5] = "星期五";
    day[6] = "星期六";
    return ( yy + '年' + mm + '月' + dd + '日 ' + day[now.getDay()]);
};

/**
 * 获取一段时间中含有的周末数量
 * @param {string} beginDate
 * @param {string} endDate
 * @returns {number}
 */
exports.getIntervalWeekends = (beginDate, endDate) => {
    var weekends = 0;
    var dateDiffDays = dateDiff("d", beginDate, endDate) + 1;
    if (dateDiffDays > 0) {
        for (var i = 0; i < dateDiffDays; i++) {
            var newDate = dateAdd("d", i, beginDate);
            if (newDate.getDay() == 0 || newDate.getDay() == 6) {
                weekends++;
            }
        }
    }
    return weekends;
};

/**
 * 时间戳转成时间
 * @param {string} time 时间戳
 * @returns {string}
 */
exports.timeStampToString = (time) => {
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
    var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
    var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
};

/**
 * 判断是否为空
 * @param val
 * @returns {boolean}
 */
exports.isNull = (val) => {
    if (val == undefined || val == null || val == "" || val == ''
        || val == "undefined" || val == "null" || val == "NULL") {
        return true;
    }
    return false;
};

/**
 * 验证身份证号是否正确
 * @param {string} num 身份证号码
 * @return {boolean}
 */
exports.isCardNo = (num) => {
    if (isNaN(num)) {
        console.log("输入的身份证号不是数字！");
        return false;
    }
    var len = num.length;
    if (len < 15 || len > 18) {
        console.log("输入的身份证号码长度不正确定！应为15位或18位");
        return false;
    }
    var re15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
    var re18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
    var res = (re15.test(num) || re18.test(num));
    if (res == false) {
        console.log("输入的身份证号格式不正确！");
        return false;
    }
    return res;
};

/**
 * 验证是否为邮编
 * @param {string} source 需要判断的邮编
 * return {boolean}
 */
exports.isZip = (source) => {
    var regex=/^[1-9]\d{5}$/;
    return regex.test(source);

};

/**
 * 验证是否为电子邮箱
 * @param {string} source 需要验证的电子邮箱
 * return {boolean}
 */
exports.isEmail = (source) => {
    // var regex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if(source.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1){
        console.log("电子邮箱格式正确");
        return true;
    }else{
        console.log("电子邮箱格式不正确");
        return false;
    }

};

/**
 * 验证字符串是否是中文
 * @param {string} source
 * return {boolean}
 */
exports.isChines = (source) => {
    var regex = /^[\u4E00-\u9FA5]+$/;
    return regex.test(source);

};

/**
 * 生成指定位数的随机整数
 * @param count
 * @returns {string}
 */
exports.getRandomNum = (count) => {
    var arr = new Array;
    var reNum = "";
    for(var i=0;i<count;i++){
        arr[i] = parseInt(Math.random()*10);
        reNum += String(arr[i]);
    }
    return reNum;
    function random(min,max){
        return Math.floor(min+Math.random()*(max-min));
    }

};

/**
 * 将毫秒转换为时长
 * @param msd
 * @returns {number}
 * @constructor
 */
exports.MillisecondToDate = (msd) => {
    var time = parseFloat(msd) / 1000;
    if (null != time && "" != time) {
        if (time > 60 && time < 60 * 60) {
            time = "00:" + parseInt(time / 60.0).FullZero() + ":" + (parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60)).FullZero();
        } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
            time = parseInt(time / 3600.0).FullZero() + ":" + (parseInt((parseFloat(time / 3600.0) -
                    parseInt(time / 3600.0)) * 60)).FullZero() + ":" +
                (parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                    parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60)).FullZero();
        } else {
            time = "00:00:" + parseInt(time).FullZero();
        }
    }
    return time;
};
Number.prototype.FullZero = function () {
    return this > 10 ? this : "0" + this;
};

/**
 * 将指定元素从数组中去除
 */
exports.removeByValue = (val,obj) => {
    for(var i = 0; i < val.length; i++) {
        if(val[i] == obj) {
            val.splice(i, 1);
            break;     
        }   
    } 
};

/**
 * 返回元素在该数组内的下标
 */
exports.elementInArrayIndex = (arr, obj) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == obj) {
            return i;
        }
    }
};



/**
 * 网宿视频剪辑 等会写
 * @constructor
 */
exports.CutVideo = (req,res) => {
    

};


/**
 * 网易云信IM即时通讯 发送普通消息
 */
exports.IMSendMsg = (from, to, body, callback) => {
	let appKey = 'c4983144089dc124cc1332cb3a3f6552';
	let appSecret = '2693cdc39066';
	let regUrl = "https://api.netease.im/nimserver/msg/sendMsg.action";
	let post_option = url.parse(regUrl);
	post_option.method = 'POST';
	let post_data = querystring.stringify({
		'from': from,
		'type': 0,
		'ope': 0,
		'to': to,
		'body': body
	});
	// 对参数进行一系列操作
	let curTime = (Math.round(Date.now() / 1000)).toString(); // 获取时间戳 单位为秒。
	let nonce = utils.randomString(32); // 获取随机数。
	let str = appSecret + "" + nonce + "" + curTime;
	let checkSum = crypto.createHash('sha1').update(str).digest('hex');
	// 请求头
	post_option.headers = {
		'Content-Type': 'application/x-www-form-urlencoded',
		'AppKey': appKey,
		'Nonce': nonce,
		'CurTime': curTime,
		'CheckSum': checkSum,
	};
	let post_req = https.request(post_option, (response) => {
		response.setEncoding("utf8");
		response.on('data', function (buffer) {
			console.log(buffer)
			if (JSON.parse(buffer.toString()).code == 200) {
				callback(null, errors.e0);
			} else {
				callback(null, '错误啦');
			}
		});
	});
	post_req.write(post_data);
	post_req.end();



}