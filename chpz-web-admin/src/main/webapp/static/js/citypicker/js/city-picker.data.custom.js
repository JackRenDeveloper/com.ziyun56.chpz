var ChineseDistricts = {
	86 : {
		'A-G' : [ {
			code : '340000000000',
			address : '安徽省'
		}, {
			code : '110000000000',
			address : '北京市'
		}, {
			code : '500000000000',
			address : '重庆市'
		}, {
			code : '350000000000',
			address : '福建省'
		}, {
			code : '620000000000',
			address : '甘肃省'
		}, {
			code : '440000000000',
			address : '广东省'
		}, {
			code : '450000000000',
			address : '广西壮族自治区'
		}, {
			code : '520000000000',
			address : '贵州省'
		} ],
		'H-K' : [ {
			code : '460000000000',
			address : '海南省'
		}, {
			code : '130000000000',
			address : '河北省'
		}, {
			code : '230000000000',
			address : '黑龙江省'
		}, {
			code : '410000000000',
			address : '河南省'
		}, {
			code : '420000000000',
			address : '湖北省'
		}, {
			code : '430000000000',
			address : '湖南省'
		}, {
			code : '320000000000',
			address : '江苏省'
		}, {
			code : '360000000000',
			address : '江西省'
		}, {
			code : '220000000000',
			address : '吉林省'
		} ],
		'L-S' : [ {
			code : '210000000000',
			address : '辽宁省'
		}, {
			code : '150000000000',
			address : '内蒙古自治区'
		}, {
			code : '640000000000',
			address : '宁夏回族自治区'
		}, {
			code : '630000000000',
			address : '青海省'
		}, {
			code : '370000000000',
			address : '山东省'
		}, {
			code : '310000000000',
			address : '上海市'
		}, {
			code : '140000000000',
			address : '山西省'
		}, {
			code : '610000000000',
			address : '陕西省'
		}, {
			code : '510000000000',
			address : '四川省'
		} ],
		'T-Z' : [ {
			code : '120000000000',
			address : '天津市'
		}, {
			code : '650000000000',
			address : '新疆维吾尔自治区'
		}, {
			code : '540000000000',
			address : '西藏自治区'
		}, {
			code : '530000000000',
			address : '云南省'
		}, {
			code : '330000000000',
			address : '浙江省'
		} ]
	}
};

var chinaCityDB = null;
$.ajax({
	url : "/static/data/china_city_db_l4.json",
	type : "GET",
	async : false,
	dataType : "json"
}).done(function(respData, textStatus, jqXHR) {
	chinaCityDB = respData;
});

ChineseDistricts = $.extend(ChineseDistricts, chinaCityDB);
