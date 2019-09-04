var dvs = dvs || {};

dvs.getAttributeValueByCategoryCodeAndAttributeCode_cache = {};

dvs.getAttributeValueByCategoryCodeAndAttributeCode = function(category_code, attribute_code) {
	var key = category_code + "/" + attribute_code;
	if (dvs.getAttributeValueByCategoryCodeAndAttributeCode_cache[key]) {
		return dvs.getAttributeValueByCategoryCodeAndAttributeCode_cache[key];
	}

	dvs.ajax({
		url : "/attribute/getAttributeValueByCategoryCodeAndAttributeCode.json",
		async : false,
		param : {
			category_code : category_code,
			attribute_code : attribute_code
		},
		callback : function(json) {
			if (json.attributeValueList && json.attributeValueList.length > 0) {
				var map = {};
				for (var i = 0; i < json.attributeValueList.length; i++) {
					var attributeValue = json.attributeValueList[i];
					map[attributeValue.id] = attributeValue.attribute_value;
				}
				dvs.getAttributeValueByCategoryCodeAndAttributeCode_cache[key] = map;
			}
		}
	});

	return dvs.getAttributeValueByCategoryCodeAndAttributeCode_cache[key];
};

dvs.convertValueByAttributeValue = function(category_code, attribute_code, theValue) {
	var map = dvs.getAttributeValueByCategoryCodeAndAttributeCode(category_code, attribute_code);
	return map[theValue];
};

dvs.buildSelectByAttributeValue = function(category_code, attribute_code, $select, selectValue) {
	var map = dvs.getAttributeValueByCategoryCodeAndAttributeCode(category_code, attribute_code);

	var html = '';
	for ( var k in map) {
		html += '<option value="' + k + '"';
		if (k == selectValue) {
			html += ' selected';
		}
		html += '>' + map[k] + '</option>';
	}
	$select.append(html);
};

dvs.buildRadioByAttributeValue = function(category_code, attribute_code, $wrapper, name, selectValue) {
	var map = dvs.getAttributeValueByCategoryCodeAndAttributeCode(category_code, attribute_code);
	for ( var k in map) {
		var html = '';
		html += '<input type="radio" name="' + name + '" value="' + k + '"';
		if (k == selectValue) {
			html += ' checked';
		}
		html += '/>' + map[k];
		html += '&nbsp;&nbsp;';
		$wrapper.append(html);
	}
};

dvs.buildCheckboxByAttributeValue = function(category_code, attribute_code, $wrapper, name, selectValue) {
	var map = dvs.getAttributeValueByCategoryCodeAndAttributeCode(category_code, attribute_code);
	for ( var k in map) {
		var html = '';
		html += '<input type="checkbox" name="' + name + '" value="' + k + '"';
		if (selectValue.indexOf(k) >= 0) {
			html += ' checked';
		}
		html += '/>' + map[k];
		html += '&nbsp;&nbsp;';
		$wrapper.append(html);
	}
};

dvs.getSubCategoryByCategoryCode_cache = {};

dvs.getSubCategoryByCategoryCode = function(category_code) {
	var key = category_code;
	if (dvs.getSubCategoryByCategoryCode_cache[key]) {
		return dvs.getSubCategoryByCategoryCode_cache[key];
	}

	var url = "";
	var param = {};
	if (category_code.length == 32) {
		url = "/directory/getCategoryListByPid.json";
		param.pid = category_code;
	} else {
		url = "/directory/getAllSubDirectory.json";
		param.p_code = category_code;
	}

	dvs.ajax({
		url : url,
		async : false,
		param : param,
		callback : function(json) {
			if (json.directoryList && json.directoryList.length > 0) {
				var map = {};
				for (var i = 0; i < json.directoryList.length; i++) {
					var category = json.directoryList[i];
					map[category.code] = category.name;
				}
				dvs.getSubCategoryByCategoryCode_cache[key] = map;
			}
		}
	});

	return dvs.getSubCategoryByCategoryCode_cache[key];
};

dvs.convertValueByCategory = function(category_code, theValue) {
	var map = dvs.getSubCategoryByCategoryCode(category_code);
	return map[theValue];
};

dvs.buildSelectByCategory = function(category_code, $select, selectValue) {
	var map = dvs.getSubCategoryByCategoryCode(category_code);

	var html = '';
	for ( var k in map) {
		html += '<option value="' + k + '"';
		if (k == selectValue) {
			html += ' selected';
		}
		html += '>' + map[k] + '</option>';
	}
	$select.append(html);
};

dvs.buildRadioByCategory = function(category_code, $wrapper, name, selectValue) {
	var map = dvs.getSubCategoryByCategoryCode(category_code);
	for ( var k in map) {
		var html = '';
		html += '<input type="radio" name="' + name + '" value="' + k + '"';
		if (k == selectValue) {
			html += ' checked';
		}
		html += '/>' + map[k];
		html += '&nbsp;&nbsp;';
		$wrapper.append(html);
	}
};

dvs.buildCheckboxByCategory = function(category_code, $wrapper, name, selectValue) {
	var map = dvs.getSubCategoryByCategoryCode(category_code);
	for ( var k in map) {
		var html = '';
		html += '<input type="checkbox" name="' + name + '" value="' + k + '"';
		if (selectValue.indexOf(k) >= 0) {
			html += ' checked';
		}
		html += '/>' + map[k];
		html += '&nbsp;&nbsp;';
		$wrapper.append(html);
	}
};
