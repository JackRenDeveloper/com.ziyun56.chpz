define({ "api": [
  {
    "type": "post",
    "url": "/route/addCarRoute.json",
    "title": "新增车辆关联路线",
    "name": "addCarRoute",
    "group": "CarRoute",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>车辆ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route_id",
            "description": "<p>路线ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2已经存在、-99未登录",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarRouteAction.java",
    "groupTitle": "CarRoute",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/route/addCarRoute.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/route/deleteCarRouteBy.json",
    "title": "删除车辆关联路线",
    "name": "deleteCarRouteBy",
    "group": "CarRoute",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>车辆ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route_id",
            "description": "<p>路线ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2不存在该信息、-99未登录",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarRouteAction.java",
    "groupTitle": "CarRoute",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/route/deleteCarRouteBy.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/route/selectRouteByCarId.json",
    "title": "查询该车辆关联的路线",
    "name": "selectRouteByCarId",
    "group": "CarRoute",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>车辆ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-99未登录",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarRouteAction.java",
    "groupTitle": "CarRoute",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/route/selectRouteByCarId.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/evaluate/evaluate.json",
    "title": "收货方对物流公司进行评价",
    "name": "evaluate",
    "group": "Evaluate",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Evaluate",
            "optional": false,
            "field": "evaluate",
            "description": "<p>评价对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2已经评价过，不能重复评价",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/evaluate/EvaluateAction.java",
    "groupTitle": "Evaluate",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/evaluate/evaluate.json"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/AppLocationGather",
    "title": "App实时采集数据",
    "name": "AppLocationGather",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "no",
            "description": "<p>采集编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "app_phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_number",
            "description": "<p>车牌号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "xpoint",
            "description": "<p>gps经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ypoint",
            "description": "<p>gps纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "speed",
            "description": "<p>速度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bd_xpoint",
            "description": "<p>百度经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bd_ypoint",
            "description": "<p>百度纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bd_point_name",
            "description": "<p>百度地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "gather_time",
            "description": "<p>采集时间</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/gather/AppLocationGather.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/AppLocationGather"
      }
    ]
  },
  {
    "type": "post",
    "url": "/model/Car",
    "title": "Car汽车",
    "name": "Car",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>司机用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "enterprise_id",
            "description": "<p>企业ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sensor_code",
            "description": "<p>传感器code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sensor_id",
            "description": "<p>传感器ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "car_type",
            "description": "<p>车辆类型： <code>1</code>冷藏车,<code>2</code>保温车,<code>3</code>医药冷藏车,<code>4</code>医药保温箱,<code>5</code>航空运输,<code>6</code>铁路运输,<code>7</code>海路运输\t, <code>8</code>其他车型</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "car_state",
            "description": "<p>车辆状态： <code>1</code>未审核,<code>2</code>审核通过,<code>3</code>审核不通过</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "car_number",
            "description": "<p>车牌号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "car_brand",
            "description": "<p>品牌： <code>brand0001</code>福田,<code>brand0002</code>东风</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "car_model",
            "description": "<p>型号： <code>model0001</code>福田奥铃冷藏车</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "product_date",
            "description": "<p>生产日期</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "buy_date",
            "description": "<p>购买日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "car_original_url",
            "description": "<p>车辆图片的URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "car_thumb_url",
            "description": "<p>车辆缩略图图片的URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "vehicle_licence_number",
            "description": "<p>行车证主号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "vehicle_licence_front",
            "description": "<p>行车证主图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "vehicle_licence_back",
            "description": "<p>行车证副图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "driver_license_number",
            "description": "<p>驾驶证号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "driver_license_front",
            "description": "<p>驾驶证主图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "driver_license_back",
            "description": "<p>驾驶证副图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "operation_certificate_no",
            "description": "<p>营运证号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "operation_certificate_image",
            "description": "<p>营运证主图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "operation_certificate_image_back",
            "description": "<p>营运证副图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "register_no",
            "description": "<p>登记证号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "register_certificate_image",
            "description": "<p>登记证主图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "register_certificate_image_back",
            "description": "<p>登记证副图片</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "user_life",
            "description": "<p>使用周期</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "car_volume",
            "description": "<p>容量</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "car_length",
            "description": "<p>车长</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "max_weight",
            "description": "<p>车辆最大载重</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "safe_company",
            "description": "<p>保险公司名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "safe_start_time",
            "description": "<p>保险购买时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "safe_end_time",
            "description": "<p>保险到期时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isgsp",
            "description": "<p>是否GSP认证</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gsppic",
            "description": "<p>GSP证书</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "driver_name",
            "description": "<p>司机姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "driver_phone",
            "description": "<p>司机电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "llicense_plate_type_code",
            "description": "<p>车牌类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "vehicle_class_ification_code",
            "description": "<p>车辆分类代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "price_type",
            "description": "<p>收费类型：</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "road_transport_certificate_number",
            "description": "<p>道路运输许可证 <code>1</code>立方米,<code>2</code>吨</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isopen",
            "description": "<p>是否开放： <code>1</code>是,<code>0</code>否</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remarks",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bd_xpoint",
            "description": "<p>bd_xpoint</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bd_ypoint",
            "description": "<p>bd_ypoint</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "data_origin",
            "description": "<p>数据来源<code>lenglian</code>冷链,<code>zjxl</code>中交兴路,<code>mobile_location</code>app手机定位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "car_source",
            "description": "<p>车辆来源： <code>inside</code>内部,<code>outside</code>外部</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "upload_app365_time",
            "description": "<p>上报App365的时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upload_app365_id",
            "description": "<p>上报App365的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "zjxl_isopen",
            "description": "<p>是否开放： <code>1</code>是,<code>0</code>否</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_virtual_vehicle",
            "description": "<p>是否是虚拟车辆</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/Car.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/model/Car"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/CarCalendar",
    "title": "CarCalendar车辆日程",
    "name": "CarCalendar",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "car_id",
            "description": "<p>车辆ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "jh_fc_time",
            "description": "<p>计划发车时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "jh_dc_time",
            "description": "<p>计划到车时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fc_address",
            "description": "<p>发车地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fc_address_code",
            "description": "<p>发车地代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fc_address_code_province",
            "description": "<p>发车地代码-省级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fc_address_code_city",
            "description": "<p>发车地代码-省辖市级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fc_address_code_county",
            "description": "<p>发车地代码-县级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "md_address",
            "description": "<p>目的地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "md_address_code",
            "description": "<p>目的地代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "md_address_code_province",
            "description": "<p>目的地-省级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "md_address_code_city",
            "description": "<p>目的地-省辖市级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "md_address_code_county",
            "description": "<p>目的地-县级</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "ky_volume",
            "description": "<p>可用容量</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "kl_weight",
            "description": "<p>可拉重量</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "price",
            "description": "<p>单价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "yjlz_goods_type",
            "description": "<p>预计拉载货物类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isfree",
            "description": "<p>是否闲置: <code>1</code>是,<code>0</code>否</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isReturn",
            "description": "<p>是否是返程车： <code>1</code>是,<code>0</code>否</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "create_user_id",
            "description": "<p>发布用户ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/car/CarCalendar.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/CarCalendar"
      }
    ]
  },
  {
    "type": "post",
    "url": "/model/CarCheck",
    "title": "CarCheck车辆检查",
    "name": "CarCheck",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "car_id",
            "description": "<p>车辆id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "check_date",
            "description": "<p>检查日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remarks",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarCheck.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/model/CarCheck"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/CarLogistics",
    "title": "CarLogistics车辆申请绑定物流公司",
    "name": "CarLogistics",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>标示</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>司机用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "car_id",
            "description": "<p>车辆ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "enterprise_id",
            "description": "<p>企业ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "apply_state",
            "description": "<p>申请状态: <code>1</code>申请中,<code>2</code>同意,<code>3</code>拒绝</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "apply_remark",
            "description": "<p>司机车辆申请绑定物流公司备注</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "handle_remark",
            "description": "<p>物流公司同意或者拒绝车辆绑定备注</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "update_time",
            "description": "<p>更新时间</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/car/CarLogistics.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/CarLogistics"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/CarMonitor",
    "title": "CarMonitor车辆实时信息监控",
    "name": "CarMonitor",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>标示</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "car_id",
            "description": "<p>关联：车辆id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "car_state",
            "description": "<p>车辆状态： <code>1</code>闲置中,<code>2</code>货运中,<code>3</code>闲置中(返程),<code>4</code>货运中(返程)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "car_route",
            "description": "<p>车辆路线</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "temp",
            "description": "<p>车辆温度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "humidity",
            "description": "<p>车辆湿度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "curr_address",
            "description": "<p>当前地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "curr_address_detail",
            "description": "<p>当前详细地址（百度）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "x_point",
            "description": "<p>gps经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "y_point",
            "description": "<p>gps纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bd_x_point",
            "description": "<p>百度经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bd_y_point",
            "description": "<p>百度纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "speed",
            "description": "<p>速度</p>"
          },
          {
            "group": "Parameter",
            "type": "Map",
            "optional": true,
            "field": "json_data",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "update_time",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "add_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "location_time",
            "description": "<p>定位时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "data_origin",
            "description": "<p>数据来源<code>lenglian</code>冷链,<code>zjxl</code>中交兴路,<code>mobile_location</code>app手机定位</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/car/CarMonitor.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/CarMonitor"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/CarRequirement",
    "title": "CarRequirement用车需求",
    "name": "CarRequirement",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_name",
            "description": "<p>发货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_id",
            "description": "<p>发货人id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_mobiletel",
            "description": "<p>发货人手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_company",
            "description": "<p>发货公司</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_area",
            "description": "<p>发货区域</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_area_code",
            "description": "<p>发货区域代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_company_fixedtel",
            "description": "<p>发货公司固定电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_hw_address",
            "description": "<p>发货地址(货物地址)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_hw_address_code",
            "description": "<p>发货地址编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_hw_address_code_province",
            "description": "<p>发货地址编码-省级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_hw_address_code_city",
            "description": "<p>发货地址编码-省辖市级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_hw_address_code_county",
            "description": "<p>发货地址编码-县级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_hw_address_detail",
            "description": "<p>发货详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_address",
            "description": "<p>发货人地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_address_code",
            "description": "<p>发货人地址编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_address_code_province",
            "description": "<p>发货人地址编码-省级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_address_code_city",
            "description": "<p>发货人地址编码-省辖市级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_address_code_county",
            "description": "<p>发货人地址编码-县级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_address_detail",
            "description": "<p>发货人详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_id",
            "description": "<p>收货人id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_phone",
            "description": "<p>收货人手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_company",
            "description": "<p>收货公司</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_company_fixedtel",
            "description": "<p>收货公司固定电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_address",
            "description": "<p>收货地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_address_code",
            "description": "<p>收货地址编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_address_code_province",
            "description": "<p>收货地址编码-省级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_address_code_city",
            "description": "<p>收货地址编码-省辖市级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_address_code_county",
            "description": "<p>收货地址编码-县级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_address_detail",
            "description": "<p>收货人详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_name",
            "description": "<p>货物名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_type",
            "description": "<p>货物类型 <code>fresh_fruit</code>生鲜水果,<code>meat_products</code>禽肉类产品,<code>sea_food</code>水产品,<code>low_temperature_dairy</code>低温奶制品, <code>frozen_pastry</code>速冻面点,<code>ice_food</code>冰品,<code>cold_goods</code>冷藏食品,<code>medicine</code>药品,<code>freezer_food</code>冷冻食品,<code>other</code>其它</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_weight",
            "description": "<p>货物重量（kg）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_length",
            "description": "<p>货物长（m）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_width",
            "description": "<p>货物宽（m）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_height",
            "description": "<p>货物高（m）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_volume",
            "description": "<p>货物体积（m³）</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "goods_num",
            "description": "<p>货物件数（个）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_total_weight",
            "description": "<p>货物总重量（kg）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_total_volume",
            "description": "<p>货物总体积（m³）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "temper_require_start",
            "description": "<p>温度要求（低）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "temper_require_end",
            "description": "<p>温度要求（高）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "temperature",
            "description": "<p>温度</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "humidity_require_start",
            "description": "<p>湿度要求（低）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "humidity_require_end",
            "description": "<p>湿度要求（高）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_photos",
            "description": "<p>照片</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "whether_buy_insurance",
            "description": "<p>是否购买保险</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_need_invoice",
            "description": "<p>是否需要开票:<code>true</code>需要,<code>false</code>不需要</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_need_paper_receipt",
            "description": "<p>是否需要纸质回单:<code>true</code>需要,<code>false</code>不需要</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_need_elec_receipt",
            "description": "<p>是否需要电子回单:<code>true</code>需要,<code>false</code>不需要</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tagsString",
            "description": "<p>标签</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "danjian_is_need",
            "description": "<p>是否填写单件货物信息:<code>true</code>需要,<code>false</code>不需要</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "danjian_volume_is_need",
            "description": "<p>是否直接填写体积:<code>true</code>需要,<code>false</code>不需要</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_state",
            "description": "<p>需求状态 <code>1</code>已发布,<code>2</code>已匹配,<code>3</code>已生成订单,<code>4</code>已取消订单, <code>5</code>已完成,<code>6</code>已取消需求</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "yj_fh_time",
            "description": "<p>预计发货时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "sj_fh_time",
            "description": "<p>实际发货时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "yj_dh_time",
            "description": "<p>预计到货时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "sj_dh_time",
            "description": "<p>实际到货时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "yc_type",
            "description": "<p>用车类型 :<code>0</code>整车,<code>1</code>零担</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "car_type",
            "description": "<p>所需车辆类型: <code>1</code>厢式车,<code>2</code>平板车,<code>3</code>高低板车,<code>4</code>高栏车,<code>5</code>中栏车,<code>6</code>低栏车,<code>7</code>罐式车, <code>8</code>冷藏车,<code>9</code>保温车,<code>10</code>危险品车,<code>11</code>铁笼车,<code>12</code>集装厢车,<code>13</code>自卸货车,<code>14</code>其他车型</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "car_length",
            "description": "<p>所需车长（m）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "car_height",
            "description": "<p>所需车高（m）</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "car_num",
            "description": "<p>所需车辆数量（辆）</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "carriage_is_daishou",
            "description": "<p>运费是否代收:<code>true</code>代收,<code>false</code>不代收</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carriage_pay_side_type",
            "description": "<p>运费支付方:<code>1</code>发货方付(现付),<code>2</code>收货方付(到付)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carriage_pay_time_type",
            "description": "<p>运费支付方式:<code>1</code>立即付,<code>2</code>协议付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carriage_pay_agreement_type",
            "description": "<p>运费协议支付方式:<code>1</code>周付,<code>2</code>月付</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "goods_is_daishou",
            "description": "<p>货款是否代收:<code>true</code>代收,<code>false</code>不代收</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_pay_side_type",
            "description": "<p>货款支付方:<code>1</code>收货方付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_pay_time_type",
            "description": "<p>货款支付方式:<code>1</code>立即付,<code>2</code>协议付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_pay_agreement_type",
            "description": "<p>货款协议支付方式:<code>1</code>周付,<code>2</code>月付</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_money",
            "description": "<p>货款金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "expect_carriage_price",
            "description": "<p>期望运费价格</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "cancle_time",
            "description": "<p>取消次数</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "match_time",
            "description": "<p>匹配个数</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirement.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/CarRequirement"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/CarRoute",
    "title": "CarRoute车辆和常用路线关联",
    "name": "CarRoute",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "route_id",
            "description": "<p>关联：路线id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "car_id",
            "description": "<p>关联：车辆id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "price_type",
            "description": "<p>收费类型： <code>lifangi per day</code>立方米/天,<code>lifangmi per month</code>立方米/月,<code>ton per day</code>吨/天,<code>ton per month</code>吨/月</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "price",
            "description": "<p>价格</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/car/CarRoute.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/CarRoute"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/ChatHistory",
    "title": "ChatHistory聊天记录表",
    "name": "ChatHistory",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "current_user_id",
            "description": "<p>当前用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>聊天账户</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chat_user_id",
            "description": "<p>聊天账户Id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/chathistory/ChatHistory.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/ChatHistory"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/Contacts",
    "title": "Contacts联系人",
    "name": "Contacts",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contacts_id",
            "description": "<p>联系人ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contacts_name",
            "description": "<p>联系人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "contacts_state",
            "description": "<p>联系人状态： <code>1</code>已添加,<code>2</code>已删除</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "is_allow_delete",
            "description": "<p>是否允许删除 <code>1</code>允许<code>2</code>不允许</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contacts_image",
            "description": "<p>联系人头像</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/contacts/Contacts.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/Contacts"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/DriverKpi",
    "title": "DriverKpi司机kpi",
    "name": "DriverKpi",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "driver_id",
            "description": "<p>司机id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "driver_name",
            "description": "<p>司机姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "driver_phone",
            "description": "<p>司机账户</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "delay_rate",
            "description": "<p>延误率</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loss_rate",
            "description": "<p>货损货差率</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "not_complete_rate",
            "description": "<p>回单未完成率</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "complaint_rate",
            "description": "<p>客户投诉率</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comprehensive_score",
            "description": "<p>综合分</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/driverkpi/DriverKpi.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/DriverKpi"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/Enquiry",
    "title": "Enquiry询价",
    "name": "Enquiry",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enquiry_state",
            "description": "<p>询价状态 <code>1</code>询价中,<code>2</code>已报价,<code>3</code>驳回报价,<code>4</code>同意报价, \t\t\t\t\t\t<code>5</code>已同意其他报价，该报价已结束,<code>6</code>已取消订单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_enquiry_state",
            "description": "<p>询价状态 <code>1</code>询价中,<code>2</code>已报价,<code>3</code>仓库驳回报价,<code>4</code>货主驳回报价, \t\t\t\t\t\t<code>5</code>同意报价,<code>6</code>已同意其他报价,<code>7</code>已生成订单,<code>8</code>仓库方已取消订单,<code>9</code>货主方已取消订单</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fhr_reject",
            "description": "<p>发货人驳回报价状态   true驳回, false 未驳回</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "sj_reject",
            "description": "<p>承运人驳回报价状态     true驳回, false 未驳回</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>询价编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_id",
            "description": "<p>需求ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_match_plan_id",
            "description": "<p>需求匹配方案ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>RequirementMatch中的PID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_type",
            "description": "<p>需求类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_match_id",
            "description": "<p>需求匹配ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from_user_id",
            "description": "<p>询价方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to_user_id",
            "description": "<p>报价方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_id",
            "description": "<p>资源方所属企业企业ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>车辆ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_id",
            "description": "<p>仓库ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enquiry_time",
            "description": "<p>询价时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "offer_price",
            "description": "<p>报价金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "offer_time",
            "description": "<p>报价时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refuse_price",
            "description": "<p>拒绝理由</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "refuse_time",
            "description": "<p>拒绝时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>当前登陆用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/Enquiry.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/Enquiry"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/Enterprise",
    "title": "Enterprise企业表",
    "name": "Enterprise",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_name",
            "description": "<p>企业名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_no",
            "description": "<p>企业编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_phone",
            "description": "<p>企业电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_email",
            "description": "<p>企业邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_qq",
            "description": "<p>企业QQ</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_address",
            "description": "<p>企业地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "legal_person_name",
            "description": "<p>企业法人照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_license",
            "description": "<p>企业营业执照照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprice_license_no",
            "description": "<p>企业营业执照号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "llwl_enterprise_id",
            "description": "<p>冷链物流企业ID：</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "admin_id",
            "description": "<p>超级管理员ID：</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_remark",
            "description": "<p>企业备注</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "enterprise_state",
            "description": "<p>企业审核状态 <code>1</code>未审核,<code>2</code>审核通过,<code>3</code>审核不通过</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/enterprise/Enterprise.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/Enterprise"
      }
    ]
  },
  {
    "type": "post",
    "url": "/model/Evaluate",
    "title": "Evaluate评价",
    "name": "Evaluate",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "receive_id",
            "description": "<p>收货方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "logistics_id",
            "description": "<p>物流方</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "arrival_rate",
            "description": "<p>到货及时率（40分）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "arrival_rate_remark",
            "description": "<p>到货及时率评价</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "temper_rate",
            "description": "<p>温度达标率（40分）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "temper_rate_remark",
            "description": "<p>温度达标率评价</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "attitude",
            "description": "<p>服务态度（20分）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attitude_remark",
            "description": "<p>服务态度评价</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "evaluate_time",
            "description": "<p>评价时间</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/evaluate/Evaluate.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/model/Evaluate"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/Exchange",
    "title": "Exchange商品兑换",
    "name": "Exchange",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>积分编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "point",
            "description": "<p>所需积分</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "product_num",
            "description": "<p>兑换商品数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>积分兑换者id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>兑换的商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>商品类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/exchange/Exchange.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/Exchange"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/FeedBack",
    "title": "FeedBack反馈",
    "name": "FeedBack",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>意见内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_handle",
            "description": "<p>意见是否被处理</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deal_user_id",
            "description": "<p>处理人</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/feedback/FeedBack.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/FeedBack"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/HelpFile",
    "title": "HelpFile帮助",
    "name": "HelpFile",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "create_id",
            "description": "<p>创建人</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/helpfile/HelpFile.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/HelpFile"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/Order",
    "title": "Order订单",
    "name": "Order",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_state",
            "description": "<p>订单状态:<code>order_state_create</code>已生成,<code>order_state_already_cancle</code>已取消, <code>order_state_already_cancling</code>取消中,<code>order_state_wait_transport</code>待运输/待入库,<code>order_state_in_transport</code>运输中/入库中,<code>order_state_received_end</code>已结束,<code>order_state_already_evaluate</code>已评价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform_pay_carriage_state",
            "description": "<p>平台支付运费状态: <code>wzf</code>未支付,<code>bfzf</code>部分支付,<code>yzf</code>已支付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payer_pay_carriage_state",
            "description": "<p>支付方支付运费状态: <code>wzf</code>未支付,<code>bfzf</code>部分支付,<code>yzf</code>已支付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform_pay_goods_state",
            "description": "<p>平台支付货款状态: <code>wzf</code>未支付,<code>bfzf</code>部分支付,<code>yzf</code>已支付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payer_pay_goods_state",
            "description": "<p>支付方支付货款状态: <code>wzf</code>未支付,<code>bfzf</code>部分支付,<code>yzf</code>已支付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform_pay_storage_state",
            "description": "<p>平台支付仓库状态: <code>wzf</code>未支付,<code>bfzf</code>部分支付,<code>yzf</code>已支付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payer_pay_storage_state",
            "description": "<p>支付方支付仓库状态: <code>wzf</code>未支付,<code>bfzf</code>部分支付,<code>yzf</code>已支付</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "platform_pay_carriage_money",
            "description": "<p>平台支付运费金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "payer_pay_carriage_money",
            "description": "<p>支付方支付运费金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "platform_pay_goods_money",
            "description": "<p>平台支付货款金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "payer_pay_goods_money",
            "description": "<p>支付方支付货款金额</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_id",
            "description": "<p>需求ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_name",
            "description": "<p>货物名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from_lxdh",
            "description": "<p>发货人联系电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to_lxdh",
            "description": "<p>收货人联系电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_type",
            "description": "<p>需求类别:<code>car</code>车辆, <code>warehouse</code>仓库</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_match_id",
            "description": "<p>需求匹配ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enquiry_id",
            "description": "<p>询价ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "carriage_is_daishou",
            "description": "<p>运费是否代收:<code>true</code>代收, <code>false</code>不代收</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carriage_pay_side_type",
            "description": "<p>运费支付方:<code>1</code>发货方付(现付), <code>2</code>收货方付(到付)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carriage_pay_time_type",
            "description": "<p>运费支付方式:<code>1</code>立即付, <code>2</code>协议付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carriage_pay_agreement_type",
            "description": "<p>运费协议支付方式:<code>1</code>周付, <code>2</code>月付</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "carriage_pay_money",
            "description": "<p>运费金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "goods_is_daishou",
            "description": "<p>货款是否代收:<code>true</code>代收, <code>false</code>不代收</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_pay_side_type",
            "description": "<p>货款支付方:<code>1</code>收货方付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_pay_time_type",
            "description": "<p>货款支付方式:<code>1</code>立即付, <code>2</code>协议付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_pay_agreement_type",
            "description": "<p>货款协议支付方式:<code>1</code>周付, <code>2</code>月付</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_pay_money",
            "description": "<p>货款金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "storage_is_daishou",
            "description": "<p>仓储费是否代收:<code>true</code>代收, <code>false</code>不代收</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "storage_pay_side_type",
            "description": "<p>仓储费支付方:<code>1</code>发货方付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "storage_pay_time_type",
            "description": "<p>仓储费支付方式:<code>1</code>立即付, <code>2</code>协议付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "storage_pay_agreement_type",
            "description": "<p>仓储费协议支付方式:<code>1</code>分期付</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "storage_pay_money",
            "description": "<p>仓储费金额</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "llwl_record_id",
            "description": "<p>货运记录（物流记录）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from_user_id",
            "description": "<p>发货方（需求方）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to_user_id",
            "description": "<p>资源方（车主或库主）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_user_id",
            "description": "<p>收货方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_user_id",
            "description": "<p>仓库方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "disbursement_channel",
            "description": "<p>支付渠道: <code>1</code>建行,<code>2</code>支付宝,<code>3</code>微信支付,<code>4</code>银联支付,<code>5</code>协议付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_cancle_side",
            "description": "<p>订单取消人</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "order_cancle_time",
            "description": "<p>订单取消时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "liquidated_damages",
            "description": "<p>订单取消违约金</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>当前登陆用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "insurance_price",
            "description": "<p>保险费</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "contract_price",
            "description": "<p>合同价格</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "amount_due",
            "description": "<p>应收金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "paid_amount",
            "description": "<p>实收金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "amounts_payable",
            "description": "<p>应付金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "pay_amount",
            "description": "<p>实付金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "tax_price",
            "description": "<p>税票价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "amount_remark",
            "description": "<p>收款备注</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pay_amount_remark",
            "description": "<p>付款备注</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_generate_receipt_statement",
            "description": "<p>是否生成收款对账单</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_generate_payment_statement",
            "description": "<p>是否生成付款对账单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "payment_statement_id",
            "description": "<p>付款对账单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "receipt_statement_id",
            "description": "<p>收款对账单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "receipt_statement_state",
            "description": "<p>收款对账单状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "receipt_statement_disbursement_channel",
            "description": "<p>收款对账单支付渠道: <code>1</code>建行,<code>2</code>支付宝,<code>3</code>微信支付,<code>4</code>银联支付,<code>5</code>协议付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "payment_statement_state",
            "description": "<p>付款对账单状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "payment_statement_disbursement_channel",
            "description": "<p>付款对账单支付渠道: <code>1</code>建行,<code>2</code>支付宝,<code>3</code>微信支付,<code>4</code>银联支付,<code>5</code>协议付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "invoice_number",
            "description": "<p>发票号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "invoice_state",
            "description": "<p>发票状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "invoice_file_url",
            "description": "<p>发票文件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "test_report_file_url",
            "description": "<p>检测报告文件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_receipt",
            "description": "<p>已回单</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_complaint",
            "description": "<p>投诉</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bulk_order_number",
            "description": "<p>批量订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dispatcher",
            "description": "<p>调度员</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": "<p>登录的唯一标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "match_type",
            "description": "<p>匹配类型 <code>1</code>匹配,<code>2</code>配载</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "load_money",
            "description": "<p>配载金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "driver_load_money",
            "description": "<p>承运方配载金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "driver_contract_price",
            "description": "<p>承运方合同价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "requirementLoad_id",
            "description": "<p>配载id</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/Order.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/Order"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/OrderComment",
    "title": "OrderComment订单评价",
    "name": "OrderComment",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "rate_from_user_id",
            "description": "<p>发货方id</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_from_logistics_zsjh_score",
            "description": "<p>分数评价：准时接货</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_from_logistics_fwtdscore",
            "description": "<p>分数评价：服务态度</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_from_logistics_hwwh_score",
            "description": "<p>分数评价：货物完好</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_from_pingtai_score",
            "description": "<p>分数评价：平台匹配</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_from_score",
            "description": "<p>分数评价：发货方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rate_from_msg",
            "description": "<p>文字评价：发货方</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "rate_logistics_user_id",
            "description": "<p>物流方id</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_logistics_score",
            "description": "<p>分数评价：物流方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rate_logistics_msg",
            "description": "<p>文字评价：物流方</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_goods_score",
            "description": "<p>分数评价：货物</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rate_goods_msg",
            "description": "<p>文字评价：货物</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rate_to_user_id",
            "description": "<p>收货方id</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_to_score",
            "description": "<p>分数评价：收货方</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_to_logistics_zsjh_score",
            "description": "<p>分数评价：准时到货</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_to_logistics_fwtdscore",
            "description": "<p>分数评价：服务态度</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_to_logistics_hwwh_score",
            "description": "<p>分数评价：货物完好</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_to_goods_score",
            "description": "<p>分数评价：货物评分</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rate_to_msg",
            "description": "<p>文字评价：收货方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rate_platform_user_id",
            "description": "<p>平台方id</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_platform_score",
            "description": "<p>分数评价：平台方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rate_platform_msg",
            "description": "<p>文字评价：平台方方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment_user_side",
            "description": "<p>评价方：<code>1</code>发货方,<code>2</code>资源方,<code>3</code>收货方,<code>4</code>平台方</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderComment.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/OrderComment"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/OrderContractPrice",
    "title": "OrderContractPrice合同单价",
    "name": "OrderContractPrice",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>合同单价编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>账户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprice_id",
            "description": "<p>企业账户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_address",
            "description": "<p>线路起点</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_address_code",
            "description": "<p>线路起点code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_address",
            "description": "<p>线路终点</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_address_code",
            "description": "<p>线路终点code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "yj_distance",
            "description": "<p>预估距离</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "yj_duration",
            "description": "<p>预估时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pricing_type",
            "description": "<p>计价类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "ton_square_price",
            "description": "<p>吨/方单价 <code>1</code>吨,<code>2</code>方</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "car_type_price",
            "description": "<p>车型单价</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "km_price",
            "description": "<p>公里单价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型 <code>1</code>车辆,<code>2</code>货物</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/contractprice/OrderContractPrice.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/OrderContractPrice"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/OrderContractPriceSubforms",
    "title": "OrderContractPriceSubforms合同单价子表",
    "name": "OrderContractPriceSubforms",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contract_id",
            "description": "<p>合同ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_name",
            "description": "<p>货物名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "transport_type",
            "description": "<p>运输类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "car_type_price",
            "description": "<p>车型单价</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "car_length",
            "description": "<p>车长</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "car_length_first",
            "description": "<p>车长起始</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "ton_price",
            "description": "<p>吨单价</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "ton_number",
            "description": "<p>吨数</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "ton_number_first",
            "description": "<p>吨数起始</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "square_price",
            "description": "<p>方单价</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "square_number",
            "description": "<p>方数</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "square_number_first",
            "description": "<p>方数起始</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "car_total_price",
            "description": "<p>包车价</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pricing_type",
            "description": "<p>计价类型</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/contractprice/OrderContractPriceSubforms.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/OrderContractPriceSubforms"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/OrderSigned",
    "title": "OrderSigned订单签章",
    "name": "OrderSigned",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_order",
            "description": "<p>订单文件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_order_is_signed_by_from",
            "description": "<p>发货人是否签章：<code>1</code>是,<code>0</code>否</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_order_is_signed_by_to",
            "description": "<p>收货人是否签章：<code>1</code>是,<code>0</code>否</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_order_is_signed_by_logistics",
            "description": "<p>物流公司是否签章：<code>1</code>是,<code>0</code>否</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderSigned.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/OrderSigned"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/PaymentStatement",
    "title": "PaymentStatement付款对账单",
    "name": "PaymentStatement",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>对账单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>对账单名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>操作人ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_id",
            "description": "<p>所属用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pay_state",
            "description": "<p>付款状态 <code>1</code>未支付,<code>2</code>已支付</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "total_money",
            "description": "<p>总金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "paid_total_money",
            "description": "<p>总金额</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "driver_name",
            "description": "<p>司机姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "driver_phone",
            "description": "<p>司机电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "driver_id",
            "description": "<p>司机Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_name",
            "description": "<p>开户行</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_no",
            "description": "<p>开户行卡号</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "paid_time",
            "description": "<p>付款时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "disbursement_channel",
            "description": "<p>支付渠道: <code>1</code>建行,<code>2</code>支付宝,<code>3</code>微信支付,<code>4</code>银联支付,<code>5</code>协议付,<code>6</code>余额支付</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/statement/PaymentStatement.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/PaymentStatement"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/Point",
    "title": "Point积分明细",
    "name": "Point",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>积分明细标示</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>积分类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>积分明细编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "point_id",
            "description": "<p>积分标示</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "trade_time",
            "description": "<p>交易时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "current_poit",
            "description": "<p>本次赚取（消费）积分</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>积分所有者id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>兑换的商品</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "update_time",
            "description": "<p>更新时间</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/point/Point.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/Point"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/PointUser",
    "title": "PointUser积分",
    "name": "PointUser",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>标示</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>积分编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "total_poit",
            "description": "<p>总积分</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>积分所有者id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "update_time",
            "description": "<p>更新时间</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/point/PointUser.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/PointUser"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/Product",
    "title": "Product商城商品",
    "name": "Product",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_id",
            "description": "<p>企业id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格(需要多少积分)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_image_url",
            "description": "<p>商品图片url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_detail_image_url",
            "description": "<p>商品详情图片url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>商品描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>商品分类</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brand",
            "description": "<p>商品品牌</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "produce_area",
            "description": "<p>商品产地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>商品所有者id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "colour",
            "description": "<p>商品样式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "standard",
            "description": "<p>商品规格</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "total",
            "description": "<p>商品总数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "remain",
            "description": "<p>商品剩余量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "product_state",
            "description": "<p>商品状态： <code>1</code>待审核,<code>2</code>审核未通过,<code>3</code>审核已通过</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "update_time",
            "description": "<p>更新时间</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/product/Product.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/Product"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/ProductOrder",
    "title": "ProductOrder商城订单",
    "name": "ProductOrder",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_id",
            "description": "<p>收货人id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_mobile_phone",
            "description": "<p>收货人移动电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_address",
            "description": "<p>收货人地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_brand",
            "description": "<p>商品品牌</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_colour",
            "description": "<p>商品样式</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "product_number",
            "description": "<p>商品数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "product_danjia",
            "description": "<p>商品单价</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "product_zongjia",
            "description": "<p>商品总价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "distribution_mode",
            "description": "<p>配送方式 <code>1</code>快递包邮,<code>2</code>邮政小包</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "point_id",
            "description": "<p>积分明细id</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "update_time",
            "description": "<p>更新时间</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/product/ProductOrder.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/ProductOrder"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/ReceiptStatement",
    "title": "ReceiptStatement收款对账单",
    "name": "ReceiptStatement",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>对账单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>对账单名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>操作人ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pay_id",
            "description": "<p>付款人ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_id",
            "description": "<p>所属用户企业ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receipt_state",
            "description": "<p>收款状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "disbursement_channel",
            "description": "<p>收款渠道 <code>1</code>未收款,<code>2</code>已收款</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "total_money",
            "description": "<p>总金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "receipts_total_money",
            "description": "<p>实收总金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "receipts_time",
            "description": "<p>收款时间</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/statement/ReceiptStatement.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/ReceiptStatement"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/Record",
    "title": "Record货运记录",
    "name": "Record",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_type",
            "description": "<p>记录类型:<code>1</code>货运记录,<code>2</code>仓储记录</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_state",
            "description": "<p>货运(仓储)状态:<code>record_hy_state_wdc</code>未到车,<code>record_hy_state_ydc_wfh</code>已到车，未发货,<code>record_hy_state_yfh_wdh</code>已发货，未到货,<code>record_hy_state_ydh_wjs</code>已到货，未结束,<code>record_hy_state_yjs</code>已结束,<code>record_cc_state_wdk</code>未到库,<code>record_cc_state_ydk</code>已到库</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_id",
            "description": "<p>创建人所在企业id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>创建人id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>运输车辆</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_type",
            "description": "<p>车辆类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from_fhrxm",
            "description": "<p>发货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from_fhd",
            "description": "<p>发货地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to_shrxm",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to_shd",
            "description": "<p>收货地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_number",
            "description": "<p>货物数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_weight",
            "description": "<p>货物重量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_gsfhd",
            "description": "<p>公司发货单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_gsfhd_signed",
            "description": "<p>已签章公司发货单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_fhd",
            "description": "<p>发货单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_fhd_signed",
            "description": "<p>已签章发货单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_shd",
            "description": "<p>收货单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_shd_signed",
            "description": "<p>已签章收货单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_yichang",
            "description": "<p>上传异常</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_hyjl",
            "description": "<p>货运记录</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_hyjl_signed",
            "description": "<p>已签章货运记录</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "time_jhdc",
            "description": "<p>计划到车时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "time_dc",
            "description": "<p>实际到车时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "time_zc",
            "description": "<p>装车时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "time_jhfh",
            "description": "<p>预计发货时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "time_fh",
            "description": "<p>实际发货</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "time_jhdh",
            "description": "<p>计划到达（到货）</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "time_dh",
            "description": "<p>实际到达（货）</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "time_xc",
            "description": "<p>卸车</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "time_jshy",
            "description": "<p>结束时间（结束货运）</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "time_dcwd",
            "description": "<p>到车晚点</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "time_dhwd",
            "description": "<p>到货晚点</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "time_jhdk",
            "description": "<p>计划到库时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "time_dk",
            "description": "<p>实际到库时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "time_jhck",
            "description": "<p>计划出库时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "time_ck",
            "description": "<p>实际出库时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from_user_id",
            "description": "<p>发货方（需求方）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to_user_id",
            "description": "<p>资源方（车主或库主）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_user_id",
            "description": "<p>收货方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_user_id",
            "description": "<p>仓库方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_auto",
            "description": "<p>是否自动结束货运</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": false,
            "field": "in_out_list",
            "description": "<p>货运记录（物流记录）进出信息</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": false,
            "field": "wuliuInfoList",
            "description": "<p>货运记录（物流记录）物流信息</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "upload_time",
            "description": "<p>上报时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upload_user_id",
            "description": "<p>上报人</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "upload_status",
            "description": "<p>上报状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "upload_hyperledger_time",
            "description": "<p>上报区块链的时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upload_hyperledger_id",
            "description": "<p>上报区块链的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upload_electronic_return_receipts",
            "description": "<p>上传电子回单</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "upload_electronic_return_receipts_time",
            "description": "<p>上传电子回单时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_notification",
            "description": "<p>是否通知</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_eligibility",
            "description": "<p>是否合格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "unqualified_information",
            "description": "<p>电子回单不合格信息 <code>1</code>没有生成报文,<code>2</code>没有重量,<code>3</code>入网异常,<code>4</code>驾驶证到期,<code>5</code>没有查询到车辆资质</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endrecord_code",
            "description": "<p>短信收货码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "equipment_no",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pdf_end_record",
            "description": "<p>结束货运签章pdf</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/Record.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/Record"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/RecordCheck",
    "title": "RecordCheck运输检查",
    "name": "RecordCheck",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_id",
            "description": "<p>货运记录id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "check_image",
            "description": "<p>检查照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "except_describe",
            "description": "<p>异常描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "current_address",
            "description": "<p>当前手机位置</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "xpoint",
            "description": "<p>当前手机位置经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ypoint",
            "description": "<p>当前手机位置纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "happen_time",
            "description": "<p>事故发生时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "update_time",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "abnormal_classification",
            "description": "<p>异常分类</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "abnormal_state",
            "description": "<p>异常状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "abnormal_money",
            "description": "<p>异常金额</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordCheck.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/RecordCheck"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/RequirementMatch",
    "title": "RequirementMatch需求资源匹配",
    "name": "RequirementMatch",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>父id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型 <code>plan</code>方案,<code>route</code>路线,<code>transport</code>运力,<code>storage</code>仓储,<code>plan_best_price</code>最优价格方案,<code>plan_best_time</code>最优时间方案,<code>plan_the_best</code>最优方案,<code>plan_final_selected</code>最终选择方案</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_id",
            "description": "<p>需求ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_type",
            "description": "<p>需求类别:<code>car</code>车辆,<code>warehouse</code>仓库</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from_user_id",
            "description": "<p>需求方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to_user_id",
            "description": "<p>资源方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_id",
            "description": "<p>资源方所属企业企业ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>车辆ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_id",
            "description": "<p>仓库ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route_id",
            "description": "<p>路线ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "origin",
            "description": "<p>始发地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "origin_code",
            "description": "<p>始发地代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>目的地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destination_code",
            "description": "<p>目的地代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_is_fancheng",
            "description": "<p>车辆是否返程:<code>0</code>未返程,<code>1</code>返程</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "match_state",
            "description": "<p>状态:<code>0</code>未确认,<code>1</code>已确认,<code>2</code>已取消</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "layer",
            "description": "<p>满足需求的路线层级</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "selected",
            "description": "<p>该匹配是否被选用生成订单     <code>true</code>选用,<code>false</code>为选用</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/RequirementMatch.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/RequirementMatch"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/Resource",
    "title": "Resource资源",
    "name": "Resource",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role_id",
            "description": "<p>角色ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "resource_id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/resource/Resource.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/Resource"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/Role",
    "title": "Role角色",
    "name": "Role",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "create_user_id",
            "description": "<p>创建用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "enterprise_id",
            "description": "<p>关联：企业ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "role_type",
            "description": "<p>角色类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>角色代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "info",
            "description": "<p>角色说明</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "sort_order",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_enabled",
            "description": "<p>是否启用</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_deleted",
            "description": "<p>是否删除</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/role/Role.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/Role"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/Route",
    "title": "Route路线",
    "name": "Route",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "enterprise_id",
            "description": "<p>关联：企业ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>路线名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_name",
            "description": "<p>起点名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_name_code",
            "description": "<p>起点名称代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_name_code_province",
            "description": "<p>起点名称代码-省级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_name_code_city",
            "description": "<p>起点名称代码-省辖市级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_name_code_county",
            "description": "<p>起点名称代码-县级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "end_name",
            "description": "<p>终点名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "end_name_code",
            "description": "<p>终点名称代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "end_name_code_province",
            "description": "<p>终点名称代码-省级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "end_name_code_county",
            "description": "<p>终点名称代码-县级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "distance",
            "description": "<p>总里程</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_latitude",
            "description": "<p>起点纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_longitude",
            "description": "<p>起点经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "end_longitude",
            "description": "<p>终点经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "end_latitude",
            "description": "<p>终点纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "info",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "time_length",
            "description": "<p>所需时间</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/route/Route.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/Route"
      }
    ]
  },
  {
    "type": "post",
    "url": "/model/StartCollect",
    "title": "StartCollect分账",
    "name": "StartCollect",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order_id",
            "description": "<p>订单ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "offer_platform_money",
            "description": "<p>支付平台金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "offer_driver_money",
            "description": "<p>支付司机金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "allMoney",
            "description": "<p>总金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "collect_state",
            "description": "<p>分账状态：<code>0</code>未分账,<code>1</code>已分账</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "offer_state",
            "description": "<p>支付状态：<code>1</code>已分账,<code>2</code>未分账</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/startcollect/StartCollect.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/model/StartCollect"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/User",
    "title": "User用户",
    "name": "User",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "enterprise_id",
            "description": "<p>企业账户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "enterprise_name",
            "description": "<p>企业名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mobile_phone",
            "description": "<p>移动电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "real_name",
            "description": "<p>真实姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "credit_rating_score",
            "description": "<p>信用评价分数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "QQ",
            "description": "<p>qq号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_area",
            "description": "<p>地区</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_area_detail",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "original_image_url",
            "description": "<p>原头像URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "thumb_image_url",
            "description": "<p>头像缩略图URL</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "user_type",
            "description": "<p>用户类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_no",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "register_no",
            "description": "<p>登记证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "driver_no",
            "description": "<p>行驶证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "operation_certificate_no",
            "description": "<p>营运证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "driver_license_no",
            "description": "<p>驾驶证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "invitation_code",
            "description": "<p>邀请码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_front_side",
            "description": "<p>身份证正面照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_back_side",
            "description": "<p>身份证反面照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "driver_license_front",
            "description": "<p>驾驶证证正面照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "driver_license_back",
            "description": "<p>驾驶证反面照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "operation_certificate_image",
            "description": "<p>营运证照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "travel_certificate_image",
            "description": "<p>行驶证证正面照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "register_certificate_image",
            "description": "<p>登记证正面照片</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "driver_license_endtime",
            "description": "<p>驾驶证到期日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "legal_person_name",
            "description": "<p>企业法人照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "enterprise_license",
            "description": "<p>企业营业执照照片</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "user_state",
            "description": "<p>用户状态： <code>1</code>待审核,<code>2</code>审核未通过,<code>3</code>审核已通过</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password_hash",
            "description": "<p>密码hash</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password_salt",
            "description": "<p>密码salt</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "last_login_time",
            "description": "<p>最后一次登录时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "last_login_ip",
            "description": "<p>最后一次登录iP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "create_user_id",
            "description": "<p>创建用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "password_state",
            "description": "<p>是否强制修改： <code>0</code>强制修改,<code>1</code>不强制修改</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "regist_source",
            "description": "<p>注册来源： <code>1</code>自己注册,<code>2</code>朋友推荐,<code>3</code>在线询价时添加收货人,</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent_id",
            "description": "<p>添加企业人员的父id;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sign_bjazt_seal_code",
            "description": "<p>公章特征码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sign_bjazt_seal_code_2",
            "description": "<p>个人签名特征码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sign_pfx",
            "description": "<p>签章证书密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sign_pfx_password",
            "description": "<p>签章证书密钥密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_complete",
            "description": "<p>是否完善信息</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_disturb",
            "description": "<p>是否免打扰</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_load_image",
            "description": "<p>wifi下是否读取图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "origin_address",
            "description": "<p>常用发货地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "origin_address_code",
            "description": "<p>常用发货地编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "receive_address",
            "description": "<p>常用收货地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "receive_address_code",
            "description": "<p>常用收货地编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "good_type",
            "description": "<p>货物类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tags",
            "description": "<p>用户标签</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "wx_openId",
            "description": "<p>微信的openID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pay_type",
            "description": "<p>支付方式 <code>1</code>支付宝,<code>2</code>银行卡</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alipay_account",
            "description": "<p>支付宝账户</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alipay_name",
            "description": "<p>支付宝账户名</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_upload_electronic_way_sheet",
            "description": "<p>是否允许上传电子路单</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "user_state_first_login",
            "description": "<p>审核通过后的第一次登录</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "driver_as_receiver",
            "description": "<p>指定某物流方是否可以确认收货</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "no_fixed_route",
            "description": "<p>无固定路线（司机）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nmbaUserId",
            "description": "<p>联盟网站id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/user/User.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/User"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/UserBankCard",
    "title": "userBankCard 银行卡",
    "name": "UserBankCard",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "real_name",
            "description": "<p>用户真实姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bank_card",
            "description": "<p>银行卡号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mobile_phone",
            "description": "<p>银行预留手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bank_card_name",
            "description": "<p>开户行名字</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "bank_of_deposit",
            "description": "<p>开户行标记</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bank_card_type",
            "description": "<p>银行卡类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "account_type",
            "description": "<p>收款帐户类型 <code>P</code>代表私户,<code>C</code>代表公户</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/user/UserBankCard.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/UserBankCard"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/UserPermissions",
    "title": "UserPermissions 用户操作权限",
    "name": "UserPermissions",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>用户的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mobile_phone",
            "description": "<p>用户手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "enterprise_id",
            "description": "<p>用户的企业ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "enterprise_name",
            "description": "<p>用户的企业</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "permissions_enterprise_id",
            "description": "<p>用户可以看到的企业的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "permissions_enterprise_name",
            "description": "<p>用户可以看到的企业的用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "permissions_user_id",
            "description": "<p>用户可以看到的其他用户的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "permissions_user_name",
            "description": "<p>用户可以看到的其他用户用户名</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/user/UserPermissions.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/UserPermissions"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/UserRelation",
    "title": "UserRelation通讯录",
    "name": "UserRelation",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>当前登陆用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "relation_id",
            "description": "<p>关联关系用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "relation_type",
            "description": "<p>关联类型</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/userrelation/UserRelation.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/UserRelation"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/Warehouse",
    "title": "Warehouse仓库",
    "name": "Warehouse",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "enterprise_id",
            "description": "<p>关联：企业ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "warehouse_original_url",
            "description": "<p>仓库图片URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "warehouse_thumb_url",
            "description": "<p>仓库缩略图图片URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "manager_name",
            "description": "<p>仓库管理员姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "manager_phone",
            "description": "<p>仓库管理员固话</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "warehouse_state",
            "description": "<p>仓库状态： <code>1</code>未审核,<code>2</code>审核通过,<code>3</code>审核不通过</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "manager_mobile_phone",
            "description": "<p>仓库管理员手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>仓库类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "capacity",
            "description": "<p>仓库总容量（㎡）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "remain_capacity",
            "description": "<p>仓库可用容量（㎡）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "height",
            "description": "<p>仓库高度（m）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>仓库地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_detail",
            "description": "<p>仓库详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_code",
            "description": "<p>仓库地址代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "price_type",
            "description": "<p>收费类型： <code>1</code>立方米,<code>2</code>吨</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "xpoint",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ypoint",
            "description": "<p>维度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "warehouse_name",
            "description": "<p>仓库名称</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/warehouse/Warehouse.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/Warehouse"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/WarehouseCalendar",
    "title": "WarehouseCalendar仓库日程",
    "name": "WarehouseCalendar",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "warehouse_id",
            "description": "<p>仓库ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "yj_kx_time_q",
            "description": "<p>预计空闲时间起</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "yj_kx_time_z",
            "description": "<p>预计空闲时间止</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "remain_volume",
            "description": "<p>仓库剩余容量</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "employ_volume",
            "description": "<p>仓库已使用容量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "yjcc_goods_type",
            "description": "<p>预计存储货物类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isfree",
            "description": "<p>是否闲置： <code>1</code>是,<code>0</code>否</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "price",
            "description": "<p>单价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/warehouse/WarehouseCalendar.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/WarehouseCalendar"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/WarehouseRequirement",
    "title": "WarehouseRequirement仓库需求",
    "name": "WarehouseRequirement",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "yj_ks_time",
            "description": "<p>预计开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "sj_ks_time",
            "description": "<p>实际开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "yj_js_time",
            "description": "<p>预计结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "sj_js_time",
            "description": "<p>实际结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_address",
            "description": "<p>仓库地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_address_detail",
            "description": "<p>仓库详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_address_code",
            "description": "<p>仓库地址编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_address_code_province",
            "description": "<p>仓库地址编码-省级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_address_code_city",
            "description": "<p>仓库地址编码-省辖市级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_address_code_county",
            "description": "<p>仓库地址编码-县级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_type",
            "description": "<p>所需仓库类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "warehouse_area",
            "description": "<p>所需仓库面积（㎡）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "yc_type",
            "description": "<p>用车类型 :<code>0</code>整车,<code>1</code>零担</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "storage_is_daishou",
            "description": "<p>仓储费是否代收:<code>true</code>代收,<code>false</code>不代收</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "storage_pay_side_type",
            "description": "<p>仓储费支付方:<code>1</code>发货方付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "storage_pay_time_type",
            "description": "<p>仓储费支付方式:<code>1</code>立即付,<code>2</code>协议付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "storage_pay_agreement_type",
            "description": "<p>仓储费协议支付方式:<code>1</code>分期付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>当前登录用户id</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/WarehouseRequirement.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/WarehouseRequirement"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/ZjxlLocationGather",
    "title": "中交兴路采集数据",
    "name": "ZjxlLocationGather",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "no",
            "description": "<p>采集编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_number",
            "description": "<p>车牌号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "xpoint",
            "description": "<p>gps经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ypoint",
            "description": "<p>gps纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "speed",
            "description": "<p>速度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bd_xpoint",
            "description": "<p>百度经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bd_ypoint",
            "description": "<p>百度纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bd_point_name",
            "description": "<p>百度地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "gather_time",
            "description": "<p>采集时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "app_phone",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/gather/ZjxlLocationGather.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/ZjxlLocationGather"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/chpz_recharge",
    "title": "chpz_recharge用户充值记录表",
    "name": "chpz_recharge",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "presummoney",
            "description": "<p>充值前金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "prekymoney",
            "description": "<p>充值前可用金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "recharge_money",
            "description": "<p>充值金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "endkymoney",
            "description": "<p>充值后可用金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "endsummoney",
            "description": "<p>充值后金额</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel",
            "description": "<p>充值渠道 <code>WX_NATIVE</code>微信公众号二维码支付,<code>WX_JSAPI</code>微信公众号支付,<code>ALI_WEB</code>支付宝网页支付, <code>ALI_QRCODE</code>支付宝内嵌二维码支付,<code>ALI_WAP</code>支付宝移动网页支付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "billNo",
            "description": "<p>商户订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "recharge_time",
            "description": "<p>充值时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "trade_id",
            "description": "<p>交易记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "login_id",
            "description": "<p>当前登录人ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/trade/Recharge.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/chpz_recharge"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/chpz_trade",
    "title": "chpz_trade用户资金交易记录表",
    "name": "chpz_trade",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "presummoney",
            "description": "<p>交易前金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "prekymoney",
            "description": "<p>交易前可用金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "trademoney",
            "description": "<p>交易金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "endkymoney",
            "description": "<p>交易后可用金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "endsummoney",
            "description": "<p>交易后金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "service_charge",
            "description": "<p>服务费</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "tradetime",
            "description": "<p>交易时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trade_type",
            "description": "<p>交易类型 <code>freeze</code>冻结,<code>unfreeze</code>解冻,<code>golden</code>入金, <code>withdraw</code>出金</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trade_id",
            "description": "<p>交易ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trade_mark",
            "description": "<p>交易标示 <code>recharge</code>充值,<code>withdraw</code>提现,<code>balance</code>余额,<code>order_pay</code>订单支付, <code>carriage</code>运费,<code>goods_money</code>货款,<code>handle_charge</code>手续费,<code>protocol_trade</code>协议付款</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/trade/Trade.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/chpz_trade"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/chpz_trade_order_relation",
    "title": "chpz_trade_order_relation订单交易关联",
    "name": "chpz_trade_order_relation",
    "group": "ModelDefine",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>标示</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "trade_id",
            "description": "<p>交易ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "update_time",
            "description": "<p>更新时间</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/TradeOrderRelation.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/chpz_trade_order_relation"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/chpz_trade_record",
    "title": "chpz_trade_record用户资金交易记录明细表",
    "name": "chpz_trade_record",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "tradetime",
            "description": "<p>交易时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "trade_id",
            "description": "<p>交易记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_perfect",
            "description": "<p>支付后是否完善</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trade_type",
            "description": "<p>交易类型 <code>freeze</code>冻结,<code>unfreeze</code>解冻,<code>golden</code>入金,<code>withdraw</code>出金</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "recharge_money",
            "description": "<p>交易金额</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/trade/TradeRecord.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/chpz_trade_record"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/chpz_user_pay",
    "title": "chpz_user_pay用户余额表",
    "name": "chpz_user_pay",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "balance",
            "description": "<p>用户余额</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pay_hash",
            "description": "<p>支付密码hash</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pay_salt",
            "description": "<p>支付密码salt</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/user/UserPay.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/chpz_user_pay"
      }
    ]
  },
  {
    "type": "model",
    "url": "/ModelDefine/chpz_with_draw",
    "title": "chpz_with_draw用户提现记录表",
    "name": "chpz_with_draw",
    "group": "ModelDefine",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "presummoney",
            "description": "<p>提现前总金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "prekymoney",
            "description": "<p>提现前可用金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "withdraw_money",
            "description": "<p>提现金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "endkymoney",
            "description": "<p>提现后可用金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "endsummoney",
            "description": "<p>提现后金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "service_charge",
            "description": "<p>服务费</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel",
            "description": "<p>提现渠道</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "billNo",
            "description": "<p>商户订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "with_draw_time",
            "description": "<p>提现时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trade_id",
            "description": "<p>交易记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "with_draw_state",
            "description": "<p>提现状态 <code>1</code>待处理,<code>2</code>处理中,<code>3</code>已完成,<code>4</code>已拒绝,<code>5</code>已取消</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login_id",
            "description": "<p>当前登录人ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "operate_time",
            "description": "<p>操作时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_card_id",
            "description": "<p>关联银行卡ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "with_draw_type",
            "description": "<p>提现方式 <code>1</code>支付宝,<code>2</code>银行卡</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/trade/WithDraw.java",
    "groupTitle": "ModelDefine",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/ModelDefine/chpz_with_draw"
      }
    ]
  },
  {
    "type": "post",
    "url": "/fs/uploadFile.json",
    "title": "上传图片",
    "name": "uploadFile",
    "group": "UploadFile",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "temp",
            "description": "<p>是否是临时文件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "save_file_path",
            "description": "<p>保存文件路径</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:",
          "content": "-1失败",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/action/FileSystemAction.java",
    "groupTitle": "UploadFile",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/fs/uploadFile.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/admin/nmbaDoLogin.json",
    "title": "登陆区块链",
    "name": "nmbaDoLogin",
    "group": "admin",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/action/AdminAction.java",
    "groupTitle": "admin",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/admin/nmbaDoLogin.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/app_location_gather/gatherAppLocationData.json",
    "title": "App定位实时上传数据",
    "name": "gatherAppLocationData",
    "group": "app_location_gather",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "xpoint",
            "description": "<p>gps经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ypoint",
            "description": "<p>gps纬度</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { ",
          "content": "\"code\" : 0, \n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "\"未登录或超时\": {",
          "content": "\"code\":-1\n}",
          "type": "json"
        },
        {
          "title": "gps经纬度参数不全或为空: {",
          "content": "\"code\":-2\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/gather/AppLocationGatherAction.java",
    "groupTitle": "app_location_gather",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/app_location_gather/gatherAppLocationData.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/app_location_gather/searchMyAppLocationGather.json",
    "title": "查询我的定位数据（app）",
    "name": "searchMyAppLocationGather",
    "group": "app_location_gather",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"code\": 0, \"appLocationGatherList\": [{ \"bd_xpoint\": 百度经度 String, \"xpoint\": gps经度 String, \"user_id\": 用户id",
          "content": "String, \"bd_point_name\": 百度位置 String, \"bd_ypoint\": 百度纬度 String, \"ypoint\": gsp纬度 String, ... }, .... ], \"totalCount\": 查询的结果数量\nInteger }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "\"未登录或超时\": {",
          "content": "\"code\":-1\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/gather/AppLocationGatherAction.java",
    "groupTitle": "app_location_gather",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/app_location_gather/searchMyAppLocationGather.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user_bankcard/AddUserBankCard.json",
    "title": "后台管理员给用户绑定银行卡 (添加后默认是银行卡银行卡支付、提款)",
    "name": "AddUserBankCard",
    "group": "bankCard",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UserBankCard",
            "optional": false,
            "field": "userBankCard",
            "description": "<p>银行卡实体类对象 \t\t\t\t\t{ {String} user_id:用户id, {Integer} bank_of_deposit：必须是数字1-14（分别代表不同银行的名字）, {String} bank_card:银行卡号, {String} bank_card_pro:开户行 }</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "\t\t\t\t\t{\"userBankCard_Id\":\"b9c14d2489ab4529bb4845c456cd3353\",\"code\":1}\n                 userBankCard_Id是绑定银行卡成功后返回的该银行卡的id;",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "实体类参数里面的部分字段 不能为空:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "银行卡号已经绑定,不能重复添加:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "保存失败:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "当前登陆用户不存在:",
          "content": "{\"code\":-4}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserBankCardAction.java",
    "groupTitle": "bankCard",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user_bankcard/AddUserBankCard.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user_bankcard/appTieBankCard.json",
    "title": "App用户添加银行卡",
    "name": "appTieBankCard",
    "group": "bankCard",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UserBankCard",
            "optional": false,
            "field": "userBankCard",
            "description": "<p>银行卡实体类对象 \t\t\t\t\t{ {String} user_id:用户id, {Integer} bank_of_deposit：必须是数字1-14（分别代表不同银行的名字）, {String} bank_card:银行卡号, {String} bank_card_pro:开户行 {String} mobile_phone:银行预留手机号 {String} real_name:用户真实姓名 {String} account_type:收款帐户类型 }</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "\t\t\t\t\t{\"userBankCard_Id\":\"b9c14d2489ab4529bb4845c456cd3353\",\"code\":1}\n                 userBankCard_Id是绑定银行卡成功后返回的该银行卡的id;",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "实体类参数里面的部分字段 不能为空:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "银行卡号已经绑定,不能重复添加:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "保存失败:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "当前登陆用户不存在:",
          "content": "{\"code\":-4}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserBankCardAction.java",
    "groupTitle": "bankCard",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user_bankcard/appTieBankCard.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user_bankcard/deleteBankCard.json",
    "title": "删除银行卡",
    "name": "deleteBankCard",
    "group": "bankCard",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "id",
            "description": "<p>多个银行卡id的数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "id的数组为空,删除失败:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "当前用户未登录,删除失败:",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserBankCardAction.java",
    "groupTitle": "bankCard",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user_bankcard/deleteBankCard.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user_bankcard/searchBankCards.json",
    "title": "银行名字列表",
    "name": "searchBankCards",
    "group": "bankCard",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "\t  \t{\"code\": 0,\n\t\t  \"bank_of_deposit_directoryList\":\n        [{\"code\":\"1\",\n          \"value\":\"/static/images/bank_android_logo/zg.png,/static/images/bank_ios_logo/zg_small.png,/static/images/bank_ios_logo/zg_big.png\",\n          \"name\":\"中国银行\"}\n        ]\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserBankCardAction.java",
    "groupTitle": "bankCard",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user_bankcard/searchBankCards.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user_bankcard/searchFirstUserBankCard.json",
    "title": "获取当前用户的第一个银行卡信息;",
    "name": "searchFirstUserBankCard",
    "group": "bankCard",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "\t\t\t\t\t{\"code\":0,\n                  \"userBankCard\":\n                     {\"version\":1,\n                      \"bank_card\":\"4988489481\",\n                      \"update_time\":1482470527925,\n                      \"mobile_phone\":\"18037185895\",\n                      \"create_time\":1482470527925,\n                      \"bank_card_type\":\"储蓄卡\",\n                      \"bank_of_deposit\":7,\n                      \"bank_card_name\":\"中信银行\",\n                      \"real_name\":\"ssss\",\n                      \"id\":\"59b7a356f11248b9a6d06b0daca02e17\",\n                      \"user_id\":\"b84dfccfebdc4830be2bfba9dbb16c1d\",\n                      \"bank_cards_logo\": \"/static/images/bank_android_logo/zg.png,/static/images/bank_ios_logo/zg_small.png,/static/images/bank_ios_logo/zg_big.png\"\n                      }\n                      \n                 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户还没添加银行卡:",
          "content": "{\"code\":-1 }",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserBankCardAction.java",
    "groupTitle": "bankCard",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user_bankcard/searchFirstUserBankCard.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user_bankcard/searchUserBankCards.json",
    "title": "获取我的银行卡列表信息",
    "name": "searchUserBankCards",
    "group": "bankCard",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "\t\t\t\t\t{\"code\":0,\n\t\t\t\t\t\"userBankCardList\":[\n                   {\"mobile_phone\":\"18037185895\",\n                    \"real_name\":\"EWWET\",\n                    \"bank_of_deposit\":10,\n                    \"version\":1,\"id\":\"0856e451fd7048d5948cc62dfdb07a3d\",\n                    \"bank_card\":\"968855\",\n                    \"update_time\":1482477284202,\n                    \"bank_card_name\":\"中国光大银行\",\n                    \"bank_card_type\":\"储蓄卡\",\n                    \"user_id\":\"b84dfccfebdc4830be2bfba9dbb16c1d\",\n                    \"create_time\":1482477284202,\n                    \"bank_cards_logo\": \"/static/images/bank_android_logo/zg.png,/static/images/bank_ios_logo/zg_small.png,/static/images/bank_ios_logo/zg_big.png\"\n                   },\n                   {\"real_name\":\"ssss\",\n                    \"version\":1,\n                    \"update_time\":1482470527925,\n                    \"create_time\":1482470527925,\n                    \"bank_card\":\"4988489481\",\n                    \"bank_card_name\":\"中信银行\",\n                    \"bank_of_deposit\":7,\n                    \"id\":\"59b7a356f11248b9a6d06b0daca02e17\",\n                    \"mobile_phone\":\"18037185895\",\n                    \"user_id\":\"b84dfccfebdc4830be2bfba9dbb16c1d\",\n                    \"bank_card_type\":\"储蓄卡\",\n                    \"bank_cards_logo\": \"/static/images/bank_android_logo/zg.png,/static/images/bank_ios_logo/zg_small.png,/static/images/bank_ios_logo/zg_big.png\"\n                    }\n                  ]\n                 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户还没添加银行卡:",
          "content": "{\"code\":-1 }",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserBankCardAction.java",
    "groupTitle": "bankCard",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user_bankcard/searchUserBankCards.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user_bankcard/tieBankCard.json",
    "title": "添加银行卡",
    "name": "tieBankCard",
    "group": "bankCard",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UserBankCard",
            "optional": false,
            "field": "userBankCard",
            "description": "<p>银行卡实体类对象 \t\t\t\t\t{ {String} user_id:用户id, {Integer} bank_of_deposit：必须是数字1-14（分别代表不同银行的名字）, {String} bank_card:银行卡号, {String} bank_card_pro:开户行 }</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "\t\t\t\t\t{\"userBankCard_Id\":\"b9c14d2489ab4529bb4845c456cd3353\",\"code\":1}\n                 userBankCard_Id是绑定银行卡成功后返回的该银行卡的id;",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "实体类参数里面的部分字段 不能为空:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "银行卡号已经绑定,不能重复添加:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "保存失败:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "当前登陆用户不存在:",
          "content": "{\"code\":-4}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserBankCardAction.java",
    "groupTitle": "bankCard",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user_bankcard/tieBankCard.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_calendar/addCarCalendar.json",
    "title": "发布车辆日程",
    "name": "addCarCalendar",
    "group": "car_calendar",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CarCalendar",
            "optional": false,
            "field": "carCalendar",
            "description": "<p>车辆日程对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:<br>",
          "content": "-99",
          "type": "json"
        },
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2没有权限",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarCalendarAction.java",
    "groupTitle": "car_calendar",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_calendar/addCarCalendar.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_calendar/delCarCalendar.json",
    "title": "删除车辆日程",
    "name": "delCarCalendar",
    "group": "car_calendar",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_calendar_id",
            "description": "<p>车辆日程ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2没有权限",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarCalendarAction.java",
    "groupTitle": "car_calendar",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_calendar/delCarCalendar.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_calendar/editCarCalendar.json",
    "title": "修改车辆日程",
    "name": "editCarCalendar",
    "group": "car_calendar",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CarCalendar",
            "optional": false,
            "field": "carCalendar",
            "description": "<p>车辆日程对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:<br>",
          "content": "-99",
          "type": "json"
        },
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2没有权限",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarCalendarAction.java",
    "groupTitle": "car_calendar",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_calendar/editCarCalendar.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_calendar/selectCarCalendar.json",
    "title": "车辆日程列表",
    "name": "selectCarCalendar",
    "group": "car_calendar",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CarCalendar",
            "optional": false,
            "field": "carCalendar",
            "description": "<p>车辆日程对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:<br>",
          "content": "-99",
          "type": "json"
        },
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2没有权限",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarCalendarAction.java",
    "groupTitle": "car_calendar",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_calendar/selectCarCalendar.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_calendar/selectCarCalendarDetail.json",
    "title": "查看车辆日程详情",
    "name": "selectCarCalendarDetail",
    "group": "car_calendar",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_calendar_id",
            "description": "<p>车辆日程ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:<br>",
          "content": "-99",
          "type": "json"
        },
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2没有权限",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarCalendarAction.java",
    "groupTitle": "car_calendar",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_calendar/selectCarCalendarDetail.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_check/checkCarInformation.json",
    "title": "确认检查",
    "name": "checkCarInformation",
    "group": "car_check",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CarCheck",
            "optional": false,
            "field": "carCheck",
            "description": "<p>实体</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "check_json",
            "description": "<p>json字符串</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: {",
          "content": "\t\t\t\t\t\t\"code\":0,\n\t\t\t\t\t\t\"check_result\" : true  false\n\t \t\t\t\t\t\"code\":某一项的code\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "信息不能为空:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "已经检查过车辆:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "没登录: ",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarCheckAction.java",
    "groupTitle": "car_check",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_check/checkCarInformation.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_logistics/addCarLogistics.json",
    "title": "新增车辆申请绑定物流公司",
    "name": "addCarLogistics",
    "group": "car_logistics",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CarLogistics",
            "optional": false,
            "field": "carLogistics",
            "description": "<p>申请对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:<br>",
          "content": "-99",
          "type": "json"
        },
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2没有权限、-3已经申请、-4已经同意",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarLogisticsAction.java",
    "groupTitle": "car_logistics",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_logistics/addCarLogistics.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_logistics/delCarLogistics.json",
    "title": "删除车辆绑定物流申请",
    "name": "delCarLogistics",
    "group": "car_logistics",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_logistics_id",
            "description": "<p>车辆日程ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2没有权限、-3已经绑定过",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarLogisticsAction.java",
    "groupTitle": "car_logistics",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_logistics/delCarLogistics.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_logistics/editCarLogistics.json",
    "title": "修改车辆申请绑定物流公司",
    "name": "editCarLogistics",
    "group": "car_logistics",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CarLogistics",
            "optional": false,
            "field": "carLogistics",
            "description": "<p>车辆日程对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:<br>",
          "content": "-99",
          "type": "json"
        },
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2没有权限、-3已经绑定过不能修改",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarLogisticsAction.java",
    "groupTitle": "car_logistics",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_logistics/editCarLogistics.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_logistics/selectCarLogistics.json",
    "title": "车辆绑定物流公司申请列表",
    "name": "selectCarLogistics",
    "group": "car_logistics",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>车辆ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "limit",
            "description": "<p>每页条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:<br>",
          "content": "-99",
          "type": "json"
        },
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2没有权限",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarLogisticsAction.java",
    "groupTitle": "car_logistics",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_logistics/selectCarLogistics.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_logistics/selectCarLogistics.json",
    "title": "查看车辆绑定物流公司申请详情",
    "name": "selectCarLogistics",
    "group": "car_logistics",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_logistics_id",
            "description": "<p>车辆日程ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2没有权限",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarLogisticsAction.java",
    "groupTitle": "car_logistics",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_logistics/selectCarLogistics.json"
      }
    ]
  },
  {
    "type": "cancle",
    "url": "/car_requirement/cancelCarRequirement.json",
    "title": "取消发布货源找车需求",
    "name": "cancelCarRequirement",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>待取消的发货找车需求 id数组</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>待取消的发货找车需求 id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "已生成订单:<br>",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "已完成:<br>",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "已取消需求:<br>",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "不存在该需求:<br>",
          "content": "{\"code\":-5}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/cancelCarRequirement.json"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/car_requirement/deleteCarRequirement.json",
    "title": "删除发布货源找车需求",
    "name": "deleteCarRequirement",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "id",
            "description": "<p>待删除的发货找车需求 id数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/deleteCarRequirement.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/car_requirement/publishCarRequirement.json",
    "title": "发布货源找车需求",
    "name": "publishCarRequirement",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CarRequirement",
            "optional": false,
            "field": "CarRequirement",
            "description": "<p>CarRequirement用车需求 (备注：app可以使用下面的参数进行操作)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_hw_address",
            "description": "<p>发货地址(货物地址)、发货地（省市区）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_hw_address_code",
            "description": "<p>发货地址(货物地址)、发货地（省市区）编码 类似：410000000000/411600000000/411625000000</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_hw_address_detail",
            "description": "<p>发货地详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_address",
            "description": "<p>收货地址（省市区）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_address_code",
            "description": "<p>收货地址（省市区）编码 类似：410000000000/411600000000/411625000000</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_address_detail",
            "description": "<p>收货人详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "goods_type",
            "description": "<p>货物类型 <code>fresh_fruit</code>生鲜水果, <code>meat_products</code>禽肉类产品,<code>sea_food</code>水产品, <code>low_temperature_dairy</code>低温奶制品, <code>frozen_pastry</code>速冻面点,<code>ice_food</code>冰品, <code>cold_goods</code>冷藏食品,<code>medicine</code>药品, <code>freezer_food</code>冷冻食品,<code>other</code>其它</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "goods_weight",
            "description": "<p>货物重量</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "goods_num",
            "description": "<p>货物件数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shr_name",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shr_phone",
            "description": "<p>收货人手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "yj_fh_time",
            "description": "<p>预计发货时间(货运时间)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "carriage_is_daishou",
            "description": "<p>运费是否代收:<code>true</code>代收,<code>false</code>不代收</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{ \"code\":0, \"requirement_id\":生成的发货找车需求id String, \"requirement_no\":生成的发货找车需求编号 String }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "fhr_id为空:<br>",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "没有发布权限:<br>",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "没有实名认证或没有通过审核，没有发布权限:<br>",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "收货人地址为空:<br>",
          "content": "{\"code\":-8}",
          "type": "json"
        },
        {
          "title": "发货人地址为空:<br>",
          "content": "{\"code\":-9}",
          "type": "json"
        },
        {
          "title": "未登录<br>",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "未匹配<br>",
          "content": "{\"code\":-11, \"requirement_id\":生成的发货找车需求id String, \"requirement_no\":生成的发货找车需求编号 String}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/publishCarRequirement.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/car_requirement/searchAndGeneratePackReqMatchByCarReq.json",
    "title": "根据发货找车需求生成车货合包需求匹配【此接口暂时不可用】",
    "name": "searchAndGeneratePackReqMatchByCarReq",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "id",
            "description": "<p>发货找车需求实体id数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常 :<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "无数据生成:<br>",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/searchAndGeneratePackReqMatchByCarReq.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/car_requirement/searchAndGenerateReqMatchByCarReq.json",
    "title": "根据发货找车需求生成车货需求匹配",
    "name": "searchAndGenerateReqMatchByCarReq",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "id",
            "description": "<p>发货找车需求实体id数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常: ",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "无需求匹配数据生成: ",
          "content": "{\"code\":-10}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/searchAndGenerateReqMatchByCarReq.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_requirement/searchCarMatchListByCarReq.json",
    "title": "根据发货找车需求查询匹配的车辆",
    "name": "searchCarMatchListByCarReq",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CarRequirement",
            "optional": false,
            "field": "carRequirement",
            "description": "<p>CarRequirement用车需求</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"code\" : 0, \"carMatchList\" : \"[",
          "content": "Document{{field1=value1,field2=value2,...fieldn=valuen\n}},\nDocument{{field1=value1,field2=value2,...fieldn=valuen\n}}, ...\nDocument{{field1=value1,field2=value2,...fieldn=valuen\n}} ]\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "发货人，收货人地址为空，预计发货时间为空: ",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/searchCarMatchListByCarReq.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_requirement/searchCarRequirementByCondition.json",
    "title": "根据条件查询货源(找车)需求",
    "name": "searchCarRequirementByCondition",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fhr_hw_address_code",
            "description": "<p>发货地编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shr_address_code",
            "description": "<p>收货地编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "goods_type",
            "description": "<p>货物类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "car_type",
            "description": "<p>车辆类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"carRequirementList\" : [{ \"yj_fh_time\" :",
          "content": "1473894000000, \"fhr_hw_address\" : \"河南省/郑州市/市辖区\",\n\"fhr_address_code_province\" : \"410000000000\",\n\"carriage_pay_agreement_type\" : \"周付\", \"goods_num\" :\n10, \"carriage_pay_side_type\" : \"发货方付(现付)\",\n\"goods_pay_side_type\" : \"收货方付\", \"shr_address\" :\n\"河南省/安阳市\", \"car_type\" : 1, \"goods_total_weight\" : 100,\n\"carriage_is_daishou\" : true,\n\"fhr_hw_address_code_city\" : \"410100000000\",\n\"shr_address_code_province\" : \"410000000000\",\n\"version\" : 5, \"shr_address_code_city\" :\n\"410500000000\", \"goods_volume\" : 10,\n\"fhr_hw_address_code_province\" : \"410000000000\",\n\"car_length\" : 10, \"goods_pay_agreement_type\" : \"周付\",\n\"danjian_is_need\" : \"true\", \"goods_weight\" : 10,\n\"goods_name\" : \"饺子\", \"car_height\" : 2,\n\"is_need_paper_receipt\" : true,\n\"fhr_address_code_city\" : \"410100000000\", \"fhr_name\" :\n\"1\", \"shr_phone\" : \"1\", \"is_need_invoice\" : true,\n\"fhr_mobiletel\" : \"1\", \"danjian_volume_is_need\" :\n\"true\", \"is_deleted\" : false, \"shr_name\" : \"1\",\n\"yj_dh_time\" : 1474016400000, \"yc_type\" : \"整车\",\n\"fhr_hw_address_code_county\" : \"410101000000\",\n\"fhr_address\" : \"河南省/郑州市\", \"fhr_hw_address_code\" :\n\"410000000000/410100000000/410101000000\", \"fhr_id\" :\n\"8038374a811848b4bfbb7e9c3995f6f2\", \"goods_is_daishou\"\n: true, \"car_type_name\" : \"厢式车\", \"car_num\" : 1,\n\"goods_total_volume\" : 100, \"no\" :\n\"20160914140050020\", \"is_need_elec_receipt\" : true,\n\"goods_pay_time_type\" : \"立即付\", \"create_time\" :\n1473832921374, \"is_enabled\" : true, \"shr_address_code\"\n: \"410000000000/410500000000\", \"fhr_address_code\" :\n\"410000000000/410100000000\", \"carriage_pay_time_type\"\n: \"立即付\", \"shr_company\" : \"1\", \"update_time\" :\n1473838188420, \"id\" :\n\"afe8045096ce45eaa666c633a05cf415\" } ], \"code\" : 0,\n\"totalCount\" : 17 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常: ",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/searchCarRequirementByCondition.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_requirement/searchDriverList_Car.json",
    "title": "司机或物流公司查询匹配上的需求(APP司机端货主需求)",
    "name": "searchDriverList_Car",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>每页显示条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "                  {\"code\":0}\ncarRequirementList:{ \t\"fhr_hw_address\":\"辽宁省/丹东市/凤城市\" String,\n\t\t\t\t\t\t\"shr_address\":\"辽宁省/阜新市/市辖区\" String,\n\t\t\t\t\t\t\"good_type\":\"货物类型\" String,\n\t\t\t\t\t\t\"goods_weight\":\"货物重量\" Double,\n\t\t\t\t\t\t\"goods_volume\":\"货物体积\" Double,\n\t\t\t\t\t\t\"goods_num\":\"货物件数\" Integer,\n\t\t\t\t\t\t\"yj_fh_time\":\"预计发货时间\" Date,\n\t\t\t\t\t\t\"car_type_name\":\"需求车型\" String,\n\t\t\t\t\t\t\"enquiry_num\":\"竞价人数\"  Integer,\n\t\t\t\t\t\t\"user_evaluate_score\":评价分数 Double\n\t\t\t\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没有任何匹配到的需求:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/searchDriverList_Car.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_requirement/searchDriverList_car_forweb.json",
    "title": "司机或物流公司查询匹配上的需求(APP司机端货主需求)",
    "name": "searchDriverList_car_forweb",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>每页显示条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "                  {\"code\":0}\ncarRequirementList:{ \t\"fhr_hw_address\":\"辽宁省/丹东市/凤城市\" String,\n\t\t\t\t\t\t\"shr_address\":\"辽宁省/阜新市/市辖区\" String,\n\t\t\t\t\t\t\"good_type\":\"货物类型\" String,\n\t\t\t\t\t\t\"goods_weight\":\"货物重量\" Double,\n\t\t\t\t\t\t\"goods_volume\":\"货物体积\" Double,\n\t\t\t\t\t\t\"goods_num\":\"货物件数\" Integer,\n\t\t\t\t\t\t\"yj_fh_time\":\"预计发货时间\" Date,\n\t\t\t\t\t\t\"car_type_name\":\"需求车型\" String,\n\t\t\t\t\t\t\"enquiry_num\":\"竞价人数\"  Integer,\n\t\t\t\t\t\t\"user_evaluate_score\":评价分数 Double\n\t\t\t\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没有任何匹配到的需求:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/searchDriverList_car_forweb.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_requirement/searchMyAllCarRequirement.json",
    "title": "查询我发布的所有货源(找车)需求",
    "name": "searchMyAllCarRequirement",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"carRequirementList\" : [{ \"yj_fh_time\" :",
          "content": "1473894000000, \"fhr_hw_address\" : \"河南省/郑州市/市辖区\",\n\"fhr_address_code_province\" : \"410000000000\",\n\"carriage_pay_agreement_type\" : \"周付\", \"goods_num\" :\n10, \"carriage_pay_side_type\" : \"发货方付(现付)\",\n\"goods_pay_side_type\" : \"收货方付\", \"shr_address\" :\n\"河南省/安阳市\", \"car_type\" : 1, \"goods_total_weight\" : 100,\n\"carriage_is_daishou\" : true,\n\"fhr_hw_address_code_city\" : \"410100000000\",\n\"shr_address_code_province\" : \"410000000000\",\n\"version\" : 5, \"shr_address_code_city\" :\n\"410500000000\", \"goods_volume\" : 10,\n\"fhr_hw_address_code_province\" : \"410000000000\",\n\"car_length\" : 10, \"goods_pay_agreement_type\" : \"周付\",\n\"danjian_is_need\" : \"true\", \"goods_weight\" : 10,\n\"goods_name\" : \"饺子\", \"car_height\" : 2,\n\"is_need_paper_receipt\" : true,\n\"fhr_address_code_city\" : \"410100000000\", \"fhr_name\" :\n\"1\", \"shr_phone\" : \"1\", \"is_need_invoice\" : true,\n\"fhr_mobiletel\" : \"1\", \"danjian_volume_is_need\" :\n\"true\", \"is_deleted\" : false, \"shr_name\" : \"1\",\n\"yj_dh_time\" : 1474016400000, \"yc_type\" : \"整车\",\n\"fhr_hw_address_code_county\" : \"410101000000\",\n\"fhr_address\" : \"河南省/郑州市\", \"fhr_hw_address_code\" :\n\"410000000000/410100000000/410101000000\", \"fhr_id\" :\n\"8038374a811848b4bfbb7e9c3995f6f2\", \"goods_is_daishou\"\n: true, \"car_type_name\" : \"厢式车\", \"car_num\" : 1,\n\"goods_total_volume\" : 100, \"no\" :\n\"20160914140050020\", \"is_need_elec_receipt\" : true,\n\"goods_pay_time_type\" : \"立即付\", \"create_time\" :\n1473832921374, \"is_enabled\" : true, \"shr_address_code\"\n: \"410000000000/410500000000\", \"fhr_address_code\" :\n\"410000000000/410100000000\", \"carriage_pay_time_type\"\n: \"立即付\", \"shr_company\" : \"1\", \"update_time\" :\n1473838188420, \"id\" :\n\"afe8045096ce45eaa666c633a05cf415\" } ], \"code\" : 0,\n\"totalCount\" : 17 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录: ",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "参数异常: ",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/searchMyAllCarRequirement.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_requirement/searchMyAllRequirement.json",
    "title": "查询我发布的所有货源(包括找车、找库)需求",
    "name": "searchMyAllRequirement",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"requirementList\" : [{需求列表} ], \"code\" :",
          "content": "0, \"totalCount\" : 查询到的需求数量 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常: ",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "未登录: ",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/searchMyAllRequirement.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_requirement/searchMyCarRequirement.json",
    "title": "查询我发布的货源(找车)需求",
    "name": "searchMyCarRequirement",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CarRequirement",
            "optional": true,
            "field": "CarRequirement",
            "description": "<p>CarRequirement用车需求</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"carRequirementList\" :",
          "content": "[{发货找车需求},{发货找车需求},...{发货找车需求}], \"code\" : 0,\n\"totalCount\" : 查询到的发货找车需求总数量 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆: ",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/searchMyCarRequirement.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_requirement/searchMyCarRequirementDetails.json",
    "title": "查询我发布的货源(找车)需求详情",
    "name": "searchMyCarRequirementDetails",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_id",
            "description": "<p>需求id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录: ",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "参数异常: ",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/searchMyCarRequirementDetails.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_requirement/searchMyCurrentOrHistoryRequirement.json",
    "title": "查询我发布的当前需求或历史需求",
    "name": "searchMyCurrentOrHistoryRequirement",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "requirement_tag",
            "description": "<p>需求标志<code>current</code>当前需求, <code>history</code>历史需求</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { ",
          "content": "\"requirementList\" : [{ \n\t\t\t\t\t\t\"order_no\":订单编号 String, \n\t\t\t\t\t\t\"no\":需求编号 String, \n\t\t\t\t\t\t\"enquiry_number\":竞价数量 Integer, \n\t\t\t\t\t\t\"from_address\":货运线路 始地址 String,\n                   \t\"to_address\":货运线路 终地址 String , \n                   \t\"yj_sy_time\":货运时间 Date,\n                   \t\"goods_num\": 货物件数 Integer, \n                   \t\"goods_volume\": 货物体积 Double, \n                   \t\"goods_weight\": 货物重量 Double,\n                   \t\"goods_total_weight\": 货物总重量 Double,\n                   \t\"goods_total_volume\": 货物总体积 Double,\n                   \t\"goods_type\": 货物类型 String,\n                    \t\"yj_fh_time\": 发货时间 Date,\n                    \t\"remark\": 备注 String,... },{ ...\n                   },...{ ... }], \"code\" : 0, \"totalCount\" :\n                   查询我发布的当前需求或历史需求总数量 }\n                   备注：只标注了部分由于字段，不存在表示该字段对应的值不存在，更多字段以实际返回为主",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆: ",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/searchMyCurrentOrHistoryRequirement.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_requirement/searchMyRequirementDetails.json",
    "title": "查询我发布的所有货源(包括找车、找库)需求详情",
    "name": "searchMyRequirementDetails",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_id",
            "description": "<p>需求id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_type",
            "description": "<p>需求类型<code>car</code>车辆需求, <code>warehouse</code>仓库需求</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"carRequirement\" : {车辆需求},",
          "content": "\"warehouseRequirement\" : {仓库需求},\n\"requirement_match_enquiry_list\" : [{需求对应的匹配及询价}],\n\"code\" : 0, \"jinjiashu\" : 竞价数量 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录: ",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "参数异常: ",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/searchMyRequirementDetails.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_requirement/searchRequirement_Car.json",
    "title": "发布过的发货需求列表",
    "name": "searchRequirement_Car",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CarRequirement",
            "optional": false,
            "field": "eq",
            "description": "<p>需求对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/searchRequirement_Car.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car_requirement/searchFrontRequirement.json",
    "title": "需求列表，前台展示，不进行登录人员的过滤",
    "name": "searchRequirement_Car",
    "group": "car_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CarRequirement",
            "optional": false,
            "field": "eq",
            "description": "<p>需求对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/CarRequirementAction.java",
    "groupTitle": "car_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car_requirement/searchFrontRequirement.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car/addCar.json",
    "title": "添加车辆信息",
    "name": "addCar",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Car",
            "optional": false,
            "field": "car",
            "description": "<p>车辆对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:<br>",
          "content": "-99",
          "type": "json"
        },
        {
          "title": "参数错误:<br>",
          "content": "-1失败?2车牌号不能为空?3车牌号不能重复?4不是司机或者物流公司调度员不能查看车辆信息",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/addCar.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car/addPersonalCar.json",
    "title": "APP添加车辆信息",
    "name": "addPersonalCar",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Car",
            "optional": false,
            "field": "car",
            "description": "<p>车辆对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "routes_json",
            "description": "<p>路线json字符串</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:<br>",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "参数错误:<br>",
          "content": "-1失败?-2车牌号不能为空?-3车牌号不能重复?-4不是司机或者物流公司调度员不能查看车辆信息",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/addPersonalCar.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/car/car_length.json",
    "title": "获取运输类型",
    "name": "car_length",
    "group": "car",
    "version": "1.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/car_length.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car/car_update.json",
    "title": "车辆信息修改",
    "name": "car_update",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>车辆id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>车辆类型</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/car_update.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car/deleteCarByCarId.json",
    "title": "根据id删除车辆信息",
    "name": "deleteCarByCarId",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>车辆ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败?2不是司机或者物流公司调度员不能查看车辆信息",
          "type": "json"
        },
        {
          "title": "未登录:<br>",
          "content": "-99",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/deleteCarByCarId.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car/editCarInfo.json",
    "title": "修改车辆信息",
    "name": "editCarInfo",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Car",
            "optional": false,
            "field": "car",
            "description": "<p>车辆对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:<br>",
          "content": "-99",
          "type": "json"
        },
        {
          "title": "参数错误:<br>",
          "content": "-1失败?4车辆已经审核通过不能进行修改",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/editCarInfo.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/car/getCarType.json",
    "title": "获取车辆属性?",
    "name": "getCarType",
    "group": "car",
    "version": "1.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/getCarType.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/car/getConfirmCar.json",
    "title": "APP获取认证车辆信息",
    "name": "getConfirmCar",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>页?</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>数目</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/getConfirmCar.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/car/getMyCarDetail.json",
    "title": "APP车辆详情",
    "name": "getMyCarDetail",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>车辆ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/getMyCarDetail.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/car/getMyCarList.json",
    "title": "APP车辆列表",
    "name": "getMyCarList",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>当前页?</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>每页显示条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:<br>",
          "content": "-99",
          "type": "json"
        },
        {
          "title": "参数错误:<br>",
          "content": "-1失败?2既不是司机也不是物流公司调度?",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/getMyCarList.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/car/getMyCarRouteList.json",
    "title": "APP车辆和车辆对应的路线列表",
    "name": "getMyCarRouteList",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>当前页?</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>每页显示条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\n\t\"code\": 1,\n\t\"carRouteList\": [{\n\t\t\"_id\": \"da248e2c2a1043f188a0d68e6022ebda\",\n\t\t\"no\": \"20170204104322801\", \n\t\t\"route_id\": \"905ca9ef02334a0b800fd042e5934bdf\",\n\t\t\"create_time\": 1486176202802, //车辆位置/路线左侧的时间\n\t\t\"version\": 1,\n\t\t\"update_time\": 1486176202802,\n\t\t\"id\": \"da248e2c2a1043f188a0d68e6022ebda\",\n\t\t\"car_id\": \"206552a77df64069847ffe79af0bb91f\",\n\t\t\"car\": {\n\t\t\t\"_id\": \"206552a77df64069847ffe79af0bb91f\",\n\t\t\t\"car_thumb_url\": \"/fs_root/upload/car/file/206552a77df64069847ffe79af0bb91f/f77aa70138cd4c1f88e001a059c74c05.png\", //车辆图片缩略图\n\t\t\t\"car_type\": 1,\t\t\n\t\t\t\"product_date\": 1422950400000,//出厂年份\n\t\t\t\"car_state\": 1,  //车辆审核状态  1:未审核,2:审核通过,3:审核不通过\n\t\t\t\"price\": 0,\n\t\t\t\"id\": \"206552a77df64069847ffe79af0bb91f\",\n\t\t\t\"create_time\": 1486176099802,\n\t\t\t\"car_length\": 15,  //车辆长度\n\t\t\t\"version\": 2,\n\t\t\t\"max_weight\": 15, //载重\n\t\t\t\"user_id\": \"f37c7203d9174fffa0babd8ffe5f54f1\",\n\t\t\t\"no\": \"CAR170204104139444\",\n\t\t\t\"isopen\": false,\n\t\t\t\"user_life\": 0,\n\t\t\t\"car_volume\": 0,\n\t\t\t\"update_time\": 1486187619964,\n\t\t\t\"isgsp\": false,\n\t\t\t\"car_original_url\": \"/fs_root/upload/car/file/206552a77df64069847ffe79af0bb91f/d2f163115ab0427784c57b91f1e72082.png\",\n\t\t\t\"car_number\": \"豫A222222\",  //车牌号\n\t\t\t\"register_certificate_image\": \"/fs_root/upload/temp/file/630e1d58ade04897b0541321aeb96159/u=3854481110,775362345&fm=21&gp=0.jpg\",\n\t\t\t\"driver_phone\": \"18037185895\",\n\t\t\t\"car_type_name\": \"冷藏车\",  //车辆类型\n\t\t\t\"car_length_name\": \"15.0米\", \n\t\t\t\"car_state_name\": \"未审核\"  \n\t\t\t\"car_brand_name\": \"\"   //品牌\n\t\t},\n\t\t\"route\": {\n\t\t\t\"_id\": \"905ca9ef02334a0b800fd042e5934bdf\",\n\t\t\t\"no\": \"ROT170204104322798\",\n\t\t\t\"start_name_code_county\": \"510101000000\",\n\t\t\t\"end_name_code_county\": \"130101000000\",\n\t\t\t\"end_name_code_province\": \"130000000000\",\n\t\t\t\"update_time\": 1486176202800,\n\t\t\t\"id\": \"905ca9ef02334a0b800fd042e5934bdf\",\n\t\t\t\"end_name_code\": \"130000000000/130100000000/130101000000\",\n\t\t\t\"start_name_code_province\": \"510000000000\",\n\t\t\t\"end_name_code_city\": \"130100000000\",\n\t\t\t\"create_time\": 1486176202800,\n\t\t\t\"version\": 1,\n\t\t\t\"start_name\": \"四川省/成都市/市辖区\",   //路线起始地\n\t\t\t\"start_name_code\": \"510000000000/510100000000/510101000000\",\n\t\t\t\"start_name_code_city\": \"510100000000\",\n\t\t\t\"user_id\": \"f37c7203d9174fffa0babd8ffe5f54f1\",\n\t\t\t\"end_name\": \"河北省/石家庄市/市辖区\"    //路线结束地\n\t\t}\n\t }\n],\n\"totalCount\": 1\t\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败?-2既不是司机也不是物流公司调度?",
          "type": "json"
        },
        {
          "title": "未登录:<br>",
          "content": "-99",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/getMyCarRouteList.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/car/modeifyCarISUse.json",
    "title": "APP车辆是否开放?",
    "name": "modeifyCarISUse",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>车辆ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isopen",
            "description": "<p>是否启用</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/modeifyCarISUse.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car/publicPersonalCar.json",
    "title": "APP发布车辆信息",
    "name": "publicPersonalCar",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Car",
            "optional": false,
            "field": "car",
            "description": "<p>车辆对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "routes_json",
            "description": "<p>路线json字符串</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": ":该车辆与指定路线已经绑定过<br>",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "未登录:<br>",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/publicPersonalCar.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car/qualificationCar.json",
    "title": "车辆信息认证",
    "name": "qualificationCar",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Car",
            "optional": false,
            "field": "car",
            "description": "<p>车辆对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:<br>",
          "content": "-99",
          "type": "json"
        },
        {
          "title": "参数错误:<br>",
          "content": "-1失败?-2车牌号已经存在?-3车牌号不符合规则?4既不是司机也不是物流公司调度?",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/qualificationCar.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car/selectCarByCarId.json",
    "title": "查看车辆详情",
    "name": "selectCarByCarId",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>车辆ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0,\n\"car\":{\"car_number\":\"车牌号?,\n\t\t\"driver_name\":\"司机姓名\",\n\t\t\"car_type\":车辆类型,\n\t\t\"driver_phone\":\"司机电话\",\n\t\t\"car_length\":车辆长度,\n\t\t\"enterprise_id\":\"企业id\",\n\t\t\"id\":\"9443ce04c50f429083ba7568753c77a4\",\n\t\t\"no\":\"20161101095915537\",\n\t\t\"driver_license_front\":\"驾驶证照片?,\n\t\t\"vehicle_licence_front\":\"行车证照片?,\n\t\t\"operation_certificate_image\":\"营运证照片?,\n\t\t\"register_certificate_image\":\"登记证照片?,\n\t\t\"driver_license_number\":\"驾驶证号?,\n\t\t\"vehicle_licence_number\":\"行车证号?,\n\t\t\"operation_certificate_no\":\"营运证号?,\n\t\t\"register_no\":\"登记证号?,\n\t\t\"update_time\":1477965555538,\n\t\t\"create_time\":1477965555538,\n\t\t\"user_id\":\"司机用户ID\"}}\n备注：只标注了部分由于字段，不存在或返回N/A均表示该字段对应的值不存在，更多字段以实际返回为主",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或超时:<br>",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "不是司机或者物流公司调度员不能查看车辆信息:<br>",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/selectCarByCarId.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car/selectCarEnquiryByRequirementMatchId.json",
    "title": "查看车辆详情，主要针对请求报价时使用",
    "name": "selectCarEnquiryByRequirementMatchId",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirementMatchId",
            "description": "<p>需求匹配ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0,\n \"car\":{\"car_number\":\"车牌号\" String,\n\t\t\"driver_name\":\"司机姓名\" String,\n\t\t\"original_image_url\":\"司机用户头像\"\n\t\t\"car_type\":\"车辆类型代码\" Integer,\n\t\t\"car_type_name\":\"车辆类型名称\"  String,\n\t\t\"driver_phone\":\"司机电话\" String ,\n\t\t\"car_length\":\"车辆长度（米)\" Double,\n\t\t\"update_time\":\"发布时间\"  Date,\n\t\t\"max_weight\":\"载重（吨)\" Double,\n\t\t\"car_model_name\":\"车辆型号名称\" String,\n\t\t\"car_brand_name\":\"车辆品牌名称\" String,\n\t\t\"record_num\":\"货运记录数目\" Integer,\n\t\t\"evaluate\":\"司机评价星级（目前暂不支持，默认值为5\" Integer ,\n\t\t\"routeList\":[{\n\t\t\t\"route_from_address\":\"线路始地址\" String,\n\t\t\t\"route_to_address\":\"线路终地址\" String,\n\t\t\t...\n\t\t},{...},...{...}],\n\t\t...\n\t\t\"user_id\":\"司机用户ID\" String\n\t\t\"is_enquiry\":\"是否已经发起过询价\"  Boolean\n\t}\n}\n备注：只标注了部分由于字段，不存在或返回N/A均表示该字段对应的值不存在，更多字段以实际返回为主",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登录<br>",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "参数异常，当前传入的不是运力匹配ID<br>",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/selectCarEnquiryByRequirementMatchId.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car/selectCarList.json",
    "title": "查看车辆列表",
    "name": "selectCarList",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contacts_id",
            "description": "<p>联系人ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>当前�?</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>每页显示条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "未登录:<br>",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败?2既不是司机也不是物流公司调度?",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/selectCarList.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car/selectCarWithRecordAndEvaluateByCarId.json",
    "title": "查看车辆详情(包含货运记录数和评价星级)",
    "name": "selectCarWithRecordAndEvaluateByCarId",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>车辆ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0,\n \"car\":{\"car_number\":\"车牌号? String,\n\t\t\"driver_name\":\"司机姓名\" String,\n\t\t\"car_type\":车辆类型代码  Integer,\n\t\t\"car_type_name\":车辆类型名称 String,\n\t\t\"driver_phone\":\"司机电话\" String ,\n\t\t\"car_length\":车辆长度（米?Double,\n\t\t\"update_time\":发布时间 Date,\n\t\t\"max_weight\":载重（吨?Double,\n\t\t\"car_model_name\":车辆型号名称 String,\n\t\t\"car_brand_name\":车辆品牌名称 String,\n\t\t\"record_num\":货运记录数目 Integer,\n\t\t\"evaluate\":司机评价星级（目前暂不支持，默认值为5?Integer ,\n\t\t\"routeList\":[{\n\t\t\t\"route_from_address\":线路始地址 String,\n\t\t\t\"route_to_address\":线路终地址 String,\n\t\t\t...\n\t\t},{...},...{...}],\n\t\t...\n\t\t\"user_id\":\"司机用户ID\" String\n\t}\n}\n备注：只标注了部分由于字段，不存在或返回N/A均表示该字段对应的值不存在，更多字段以实际返回为主",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登录?<br>",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/selectCarWithRecordAndEvaluateByCarId.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/car/trantport.json",
    "title": "获取运输类型",
    "name": "trantport",
    "group": "car",
    "version": "1.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/trantport.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car/updateAPPCar.json",
    "title": "车辆信息修改",
    "name": "updateAPPCar",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Car",
            "optional": false,
            "field": "car",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "要更新的车辆信息不存在:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "更新车辆信息失败:<br>",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/updateAPPCar.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car/updatePublicPersonalCar.json",
    "title": "修改APP发布车辆信息",
    "name": "updatePublicPersonalCar",
    "group": "car",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Car",
            "optional": false,
            "field": "car",
            "description": "<p>车辆对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "routes_json",
            "description": "<p>路线json字符串</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_route_id",
            "description": "<p>路线和车辆中间表id;</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": ":该车辆与指定路线已经绑定过<br>",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "未登录:<br>",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/car/CarAction.java",
    "groupTitle": "car",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/updatePublicPersonalCar.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/chat/appChat.json",
    "title": "APP端即时通讯入口",
    "name": "appChat",
    "group": "chat",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \"code\": 0, \"receiver\":42jsdifjdisfjslf083（客服id） \"receiver_name\":\"\";(客服名字) }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "客服繁忙,请稍后重试: ",
          "content": "{code:-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/chat/ChatAction.java",
    "groupTitle": "chat",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/chat/appChat.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/chat/chat.json",
    "title": "即时通讯入口",
    "name": "chat",
    "group": "chat",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>消息接收者类型（参考系统类目——消息常量——消息接收者类型）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"my_id\":YK2016103111155519310097(发送消息者id) \"my_id_hash\":4fde94e35b03c82c704e4aaa2d7db787（MD5加密过）",
          "content": "\"my_name\":YK2016103111201464895509（发送消息者名字） \"receiver\":42jsdifjdisfjslf083（接收者id） \"receiver_name\":\"系统管理员\"（接收者名字） }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误",
          "content": ": {}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/chat/ChatAction.java",
    "groupTitle": "chat",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/chat/chat.json"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/chat/deletedChatHistory.json",
    "title": "删除与某个人的所有聊天历史记录",
    "name": "deletedChatHistory",
    "group": "chat",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiver",
            "description": "<p>消息接收者(要删除的某个人的id)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误: ",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "删除失败: ",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "未登录: ",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/chat/ChatAction.java",
    "groupTitle": "chat",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/chat/deletedChatHistory.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/chat/doChatLogin.json",
    "title": "doChatLogin",
    "name": "doChatLogin",
    "group": "chat",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败:",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/chat/ChatAction.java",
    "groupTitle": "chat",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/chat/doChatLogin.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/chat/doSetUnreadMessageToRead.json",
    "title": "把历史消息中的未读消息变为已读",
    "name": "doSetUnreadMessageToRead",
    "group": "chat",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiver",
            "description": "<p>消息接收者(正在和自己对话人的id)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误: ",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/chat/ChatAction.java",
    "groupTitle": "chat",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/chat/doSetUnreadMessageToRead.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/chat/readReceivedMsg.json",
    "title": "读取消息（将未读消息改为已读）",
    "name": "readReceivedMsg",
    "group": "chat",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "msg_id",
            "description": "<p>消息id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误: ",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/chat/ChatAction.java",
    "groupTitle": "chat",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/chat/readReceivedMsg.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/chat/searchChatMessage.json",
    "title": "查询及时消息",
    "name": "searchChatMessage",
    "group": "chat",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiver",
            "description": "<p>消息接收者</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>分页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>每页条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "\t\t\t\t\t {\"code\":0, \"messageList\":[ { \"receiver\": \"14ec9c50ef3d4ae0ba47b61abb4546a4\", \"create_time\": 1483596464231,\n                   \"subject\": \"与zyddy的对话\", \"type\": \"p2p_msg\", \"content\": \"111\", \"props\": { \"receiver_name\": \"zyddy\", \"sender_name\": \"系统管理员\" },\n                   \"update_time\": 1483596464252, \"content_type\": \"text/plain\", \"sender\": \"423e75d2fa7c4ade893bb56d9206a083\", \"state\": \"sent\",\n                   \"id\": \"0e15c1d807a849628224e4bac1ef2a28\", \"send_time\": 1483596464252, \"user_image\":\n                   \"/fs_root/upload/user/file/423e75d2fa7c4ade893bb56d9206a083/f250f1e11bb246bcbb988a05f09bedf3.png\" } ] \"totalCount\":1 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误: ",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/chat/ChatAction.java",
    "groupTitle": "chat",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/chat/searchChatMessage.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/chat/searchUnreadChatMessage.json",
    "title": "查询未读消息",
    "name": "searchUnreadChatMessage",
    "group": "chat",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiver",
            "description": "<p>消息接收者(正在和自己对话的人)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>分页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>每页条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0, \"messageList\":信息列表 \"totalCount\":1 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误: ",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/chat/ChatAction.java",
    "groupTitle": "chat",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/chat/searchUnreadChatMessage.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/chat/sendMsg.json",
    "title": "发送消息",
    "name": "sendMsg",
    "group": "chat",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiver",
            "description": "<p>消息接收者</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>消息主题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>消息内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content_type",
            "description": "<p>消息内容类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "content_length",
            "description": "<p>时长，可选（发送语音或者视频的时间传）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误: ",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/chat/ChatAction.java",
    "groupTitle": "chat",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/chat/sendMsg.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/chat/uploadFile.json",
    "title": "上传文档",
    "name": "uploadFile",
    "group": "chat",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>文件类型（audio，file，video）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "suffix",
            "description": "<p>文件格式（类似txt，docx等）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: {\"code\":0 , \"fileList\":[\"/fs_root/upload/msg/YK2016110714365026795351/file/fac604fc66a6413aa9c776f5327cb65c.txt\"]",
          "content": "}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误: ",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/chat/ChatAction.java",
    "groupTitle": "chat",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/chat/uploadFile.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/chpz_message/searchMessage.json",
    "title": "查询信息",
    "name": "searchMessage",
    "group": "chpz_message",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Message",
            "optional": false,
            "field": "message",
            "description": "<p>message实体(备注：可以根据下边的字段按条件查询)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>消息类型 <code>sys_msg</code>系统消息,<code>sys_notice</code>系统通知,<code>p2p_msg</code>个人消息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": "<p>消息状态 <code>created</code>创建状态,<code>sent</code>发送状态,<code>deleted</code>删除状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "receiver",
            "description": "<p>消息接收者</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sender",
            "description": "<p>消息发送者</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\n \"messageList\":[{\n \t\t\"create_time\": \"创建时间\" Date,\n    \t\t\t\"type\": \"消息类型\" String,\n    \t\t\t\"props\": {\n        \t\t\t\"receiver_name\": \"系统管理员\" String,\n        \t\t\t\"sender_name\": \"15936230923\" String\n    \t\t\t\t},\n    \t\t\t\"id\": \"消息id\" String,\n    \t\t\t\"send_time\": \"发送时间\" Date,\n    \t\t\t\"state\": \"消息状态\" String,\n    \t\t\t\"subject\": \"消息主题\" String,\n    \t\t\t\"receiver\": \"消息接收者\" String,\n    \t\t\t\"content\": \"消息内容\" String,\n    \t\t\t\"content_type\": \"消息内容类型\" String,\n    \t\t\t\"sender\": \"消息发送者\" String,\n    \t\t\t\"update_time\": \"修改时间\" Date\n\t\t\t}\n\t\t],\n                   \"totalCount\":20}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:",
          "content": "{code:-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/message/MessageAction.java",
    "groupTitle": "chpz_message",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/chpz_message/searchMessage.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/my_message_receive/searchMyMessageReceive.json",
    "title": "查询接收到的消息列表",
    "name": "searchMyMessageReceive",
    "group": "chpz_message",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{ \"code\":0,\n \"myMessageReceiveList\":[{\n\t\t\t\t\"msg_count\": \"消息数\" Integer,\n    \t\t\t\"msg_receive_count\": \"收到的消息数\" Integer, \n    \t\t\t\"msg_receive_read_count\": \"收到的已读消息数\" Integer, \n    \t\t\t\"msg_receive_unread_count\": \"收到的未读消息数\" Integer,\n    \t\t\t\"unread_msg_count\": \"未读消息数(未读消息用这个字段)\" Integer,\n    \t\t\t\"key\": \"消息发送人id\" String, \n    \t\t\t\"has_unread_msg\": \"true/false\" Boolean\n    \t\t\t\"lastMsg\": {\n\t\t\t\t\t\t\t\"id\": 最新一条消息id String,\n\t\t\t\t\t\t\t\"content\": 最新一条消息内容 String,\n\t\t\t\t\t\t\t\"type\": 最新一条消息类型(sys_msg：系统消息，p2p_msg：个人消息) String,\n\t\t\t\t\t\t\t\"content_type\": 最新一条消息内容类型 String,\n\t\t\t\t\t\t\t\"send_time\": 最新一条消息发送时间 String\n\t\t\t\t\t\t\t},\n\t\t\t\t\"sender\": {\n\t\t\t\t\t\t\t\"id\": 发送人Id String,\n\t\t\t\t\t\t\t\"user_image\": 发送人头像 String,\n\t\t\t\t\t\t\t\"name\": 发送人姓名 String\n\t\t\t\t\t\t  }\n\t\t\t}  \n\t\t],\n \"totalCount\":20}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/message/MyMessageReceiveAction.java",
    "groupTitle": "chpz_message",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/my_message_receive/searchMyMessageReceive.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/my_message_receive/searchMyUnreadMessageReceive.json",
    "title": "查询未读消息列表",
    "name": "searchMyUnreadMessageReceive",
    "group": "chpz_message",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{  \"code\":0,\n \"myMessageReceiveList\":[{\n\t\t\t\t\"msg_count\": \"消息数\" Integer,\n    \t\t\t\"msg_receive_count\": \"收到的消息数\" Integer, \n    \t\t\t\"msg_receive_read_count\": \"收到的已读消息数\" Integer, \n    \t\t\t\"msg_receive_unread_count\": \"收到的未读消息数\" Integer,\n    \t\t\t\"unread_msg_count\": \"未读消息数(未读消息用这个字段)\" Integer,\n    \t\t\t\"key\": \"消息发送人id\" String, \n    \t\t\t\"has_unread_msg\": \"true/false\" Boolean\n    \t\t\t\"lastMsg\": {\n\t\t\t\t\t\t\t\"id\": 最新一条消息id String,\n\t\t\t\t\t\t\t\"content\": 最新一条消息内容 String,\n\t\t\t\t\t\t\t\"type\": 最新一条消息类型(sys_msg：系统消息，p2p_msg：个人消息) String,\n\t\t\t\t\t\t\t\"content_type\": 最新一条消息内容类型 String,\n\t\t\t\t\t\t\t\"send_time\": 最新一条消息发送时间 String\n\t\t\t\t\t\t\t},\n\t\t\t\t\"sender\": {\n\t\t\t\t\t\t\t\"id\": 发送人Id String,\n\t\t\t\t\t\t\t\"user_image\": 发送人头像 String,\n\t\t\t\t\t\t\t\"name\": 发送人姓名 String\n\t\t\t\t\t\t  }\n\t\t\t}  \n\t\t],\n \"totalCount\":20}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/message/MyMessageReceiveAction.java",
    "groupTitle": "chpz_message",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/my_message_receive/searchMyUnreadMessageReceive.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/contacts/addContacts.json",
    "title": "添加联系人",
    "name": "addContacts",
    "group": "contacts",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>联系人手机号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": " \t{\n \t\t\"code\" : 0\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "要添加的用户不存在:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "该用户已经是您的好友:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "添加失败:",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "您不能添加自己为联系人:",
          "content": "{\"code\":-5}",
          "type": "json"
        },
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/contacts/ContactsAction.java",
    "groupTitle": "contacts",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/contacts/addContacts.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/contacts/clearAllContactsHistory.json",
    "title": "清空聊天记录",
    "name": "clearAllContactsHistory",
    "group": "contacts",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "清空成功:",
          "content": " \t{\n \t\t\"code\" : 0\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "清空失败:",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/contacts/ContactsAction.java",
    "groupTitle": "contacts",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/contacts/clearAllContactsHistory.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/contacts/deleteContactsById.json",
    "title": "删除联系人",
    "name": "deleteContactsById",
    "group": "contacts",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ids[]",
            "description": "<p>联系人id数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": " \t{\n \t\t\"code\" : 0\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "删除失败:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "不是好友:",
          "content": "{\"code\":-3}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/contacts/ContactsAction.java",
    "groupTitle": "contacts",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/contacts/deleteContactsById.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/contacts/searchMyContacts.json",
    "title": "查询我的联系人",
    "name": "searchMyContacts",
    "group": "contacts",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\n\t\"code\" : 0,\n \"totalCount\" : 查询到的联系人数量,\n \"contactsList\":[{\n  id ID  {String},\n  user_id 用户id {String},\n  contacts_id 联系人的用户id {String}\n  contacts_name 联系人的名称   {String}\n  contacts_state 联系人状态（1：已添加；2：已删除）  {Integer}\n  contacts_image 联系人头像   {String}\n  is_allow_delete 是否允许删除（1：允许；2：不允许）  {Integer}\n} ] \n\t }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/contacts/ContactsAction.java",
    "groupTitle": "contacts",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/contacts/searchMyContacts.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/enquiry/acceptOffer.json",
    "title": "货主(发货发)同意报价",
    "name": "acceptOffer",
    "group": "enquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enquiry_id",
            "description": "<p>询价id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "1.没登陆或无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "2.询价id为空或无询价id对应的询价:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "3.无报价不能进行同意:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "4.已同意报价，不必重复同意:",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "5.已驳回的报价，不能再同意:",
          "content": "{\"code\":-5}",
          "type": "json"
        },
        {
          "title": "6.同意报价失败:",
          "content": "{\"code\":-6}",
          "type": "json"
        },
        {
          "title": "7.已同意其他报价，不能重复同意",
          "content": "{\"code\":-7}",
          "type": "json"
        },
        {
          "title": "8.已接受其他方案，不能再接受此方案",
          "content": "{\"code\":-8}",
          "type": "json"
        },
        {
          "title": "9.已接受其他报价，不能再同意",
          "content": "{\"code\":-9}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/EnquiryAction.java",
    "groupTitle": "enquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/enquiry/acceptOffer.json"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/enquiry/deleteEnquiry.json",
    "title": "删除询报价",
    "name": "deleteEnquiry",
    "group": "enquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "id",
            "description": "<p>询报价id数组</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "参数为空: ",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登陆或无权限: ",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "删除失败: ",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/EnquiryAction.java",
    "groupTitle": "enquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/enquiry/deleteEnquiry.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/enquiry/initiateEnquiry.json",
    "title": "货主发起询价",
    "name": "initiateEnquiry",
    "group": "enquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "requirement_match_id",
            "description": "<p>询价id数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "询价id为空:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "发起询价失败:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "已接受同意匹配路线下的其他报价",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "已接受其他匹配路线下的报价",
          "content": "{\"code\":-5}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/EnquiryAction.java",
    "groupTitle": "enquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/enquiry/initiateEnquiry.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/enquiry/initiateOffer.json",
    "title": "司机（仓储方）发起报价",
    "name": "initiateOffer",
    "group": "enquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enquiry_id",
            "description": "<p>询价id</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "offer_price",
            "description": "<p>报价金额</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "1.没登陆或无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "2.询价id为空或无询价id对应的询价:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "3.报价金额为空 或者不是数字:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "4.报价失败:",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "5.已同意报价，不得悔改:",
          "content": "{\"code\":-5}",
          "type": "json"
        },
        {
          "title": "6.发货方已同意其他报价:",
          "content": "{\"code\":-7}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/EnquiryAction.java",
    "groupTitle": "enquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/enquiry/initiateOffer.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/enquiry/initiateWareHouseEnquiry.json",
    "title": "货主发起询价",
    "name": "initiateWareHouseEnquiry",
    "group": "enquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "requirement_match_id",
            "description": "<p>询价id数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "询价id为空:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "发起询价失败:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "已接受同意匹配仓库下的其他报价",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "已接受其他匹配仓库下的报价",
          "content": "{\"code\":-5}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/EnquiryAction.java",
    "groupTitle": "enquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/enquiry/initiateWareHouseEnquiry.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/enquiry/refuseOffer.json",
    "title": "货主（发货方）拒绝报价",
    "name": "refuseOffer",
    "group": "enquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enquiry_id",
            "description": "<p>询价id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "1.没登陆或无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "2.询价id为空或无询价id对应的询价:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "3.无报价不得驳回:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "4.已驳回，不必重复驳回:",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "5.已同意报价，不得驳回:",
          "content": "{\"code\":-5}",
          "type": "json"
        },
        {
          "title": "6.驳回报价失败:",
          "content": "{\"code\":-6}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/EnquiryAction.java",
    "groupTitle": "enquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/enquiry/refuseOffer.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/enquiry/searchEnquiryByEnquiryState.json",
    "title": "我的竞价-参与竞价",
    "name": "searchEnquiryByEnquiryState",
    "group": "enquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "requirement_id",
            "description": "<p>需求id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "enquiry_state",
            "description": "<p>询报价（竞价）状态 <code>1</code>询价中,<code>2</code>已报价,<code>3</code>驳回报价,<code>4</code>同意报价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortBy",
            "description": "<p>排序字段  （时间排序：update_time_desc或update_time_asc 价格排序：offer_price_desc或offer_price_asc）</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": " {\n \t\"code\" : 0,\n\"enquiryList\" : [{\n\t\t\"id\" : \"e70a22fb965a4ead9e7d9cd919d580a3\",\n\t\t\"remark\" : \"安全快速\",\n\t\t\"requirement_id\" : \"a0f55523c1e345b9b42686b9680d929a\",\n\t\t\"version\" : 1,\n\t\t\"user_id\" : \"547a8384dbde41e6bcbea2ce86352fbd\",\n\t\t\"to_address\" : \"北京市\",\n\t\t\"car_number\" : \"豫A74110\",\n\t\t\"enquiry_state\" : \"1\", (1,询价中, 2,已报价, 3,驳回报价, 4,同意报价, 5,已同意其他报价，该报价已结束, 6,已取消订单),\n\t\t\"yj_fh_time\" : 1478570400000,\n\t\t\"goods_num\" : 1000,\n\t\t\"enquiry_state_name\" : \"询价中\",\n\t\t\"car_id\" : \"8f75813b7eb8453ebfad1a1c8aa647c1\",\n\t\t\"requirement_type_name\" : \"车辆\",\n\t\t\"requirement_type\" : \"car\",\n\t\t\"fhr_name\" : \"小哇\",\n\t\t\"fhr_fhr_mobiletel\" : \"电话号\",\n\t\t\"no\" : \"EQR161121100215189\",\n\t\t\"update_time\" : 1479693735191,\n\t\t\"from_user_id\" : \"547a8384dbde41e6bcbea2ce86352fbd\",\n\t\t\"requirement_match_no\" : \"RQM161111120822284\",\n\t\t\"requirement_match_id\" : \"101d26931f9f4601929e569f50eb7624\",\n\t\t\"to_user_id\" : \"dd0bd6e9a6274cbfb8293aeee3f8a1d3\",\n\t\t\"requirement_no\" : \"20161111120532076\",\n\t\t\"enquiry_time\" : 1479693735191,\n\t\t\"create_time\" : 1479693735191,\n\t\t\"goods_type\" : \"冷冻食品\",\n\t\t\"car_type_name\":\"需求车型\",\n\t\t\"from_address\" : \"重庆市\",\n\t\t\"to_user_name\" : \"xwkj\",\n\t\t\"sj_reject\" : \"true驳回, false 未驳回\" Boolean,\n\t\t\"fhr_reject\" : \"true驳回, false 未驳回\" Boolean,\n\t\t\"enquiry_num\":\"竞价人数\"  Integer,\n\t\t\"goods_total_weight\":\"货物总重量\",\n\t\t\"goods_total_volume\":\"竞价总体积\" ,\n\t\t\"user_evaluate_score:\":\"评价分数\" Double\n\t}\n],\n\"totalCount\" : 25\n }\n 备注：只标注了部分由于字段，不存在表示该字段对应的值不存在，更多字段以实际返回为主",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/EnquiryAction.java",
    "groupTitle": "enquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/enquiry/searchEnquiryByEnquiryState.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/enquiry/searchEnquiryByEnquiryStatexjz.json",
    "title": "我的竞价-货主需求",
    "name": "searchEnquiryByEnquiryStatexjz",
    "group": "enquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "requirement_id",
            "description": "<p>需求id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "enquiry_state",
            "description": "<p>询报价（竞价）状态 <code>1</code>询价中,<code>2</code>已报价,<code>3</code>驳回报价,<code>4</code>同意报价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortBy",
            "description": "<p>排序字段  （时间排序：update_time_desc或update_time_asc 价格排序：offer_price_desc或offer_price_asc）</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": " {\n \t\"code\" : 0,\n\"enquiryList\" : [{\n\t\t\"id\" : \"e70a22fb965a4ead9e7d9cd919d580a3\",\n\t\t\"remark\" : \"安全快速\",\n\t\t\"requirement_id\" : \"a0f55523c1e345b9b42686b9680d929a\",\n\t\t\"version\" : 1,\n\t\t\"user_id\" : \"547a8384dbde41e6bcbea2ce86352fbd\",\n\t\t\"to_address\" : \"北京市\",\n\t\t\"car_number\" : \"豫A74110\",\n\t\t\"enquiry_state\" : \"1\",\n\t\t\"yj_fh_time\" : 1478570400000,\n\t\t\"goods_num\" : 1000,\n\t\t\"enquiry_state_name\" : \"询价中\",\n\t\t\"car_id\" : \"8f75813b7eb8453ebfad1a1c8aa647c1\",\n\t\t\"requirement_type_name\" : \"车辆\",\n\t\t\"requirement_type\" : \"car\",\n\t\t\"fhr_name\" : \"小哇\",\n\t\t\"fhr_fhr_mobiletel\" : \"电话号\",\n\t\t\"no\" : \"EQR161121100215189\",\n\t\t\"update_time\" : 1479693735191,\n\t\t\"from_user_id\" : \"547a8384dbde41e6bcbea2ce86352fbd\",\n\t\t\"requirement_match_no\" : \"RQM161111120822284\",\n\t\t\"requirement_match_id\" : \"101d26931f9f4601929e569f50eb7624\",\n\t\t\"to_user_id\" : \"dd0bd6e9a6274cbfb8293aeee3f8a1d3\",\n\t\t\"requirement_no\" : \"20161111120532076\",\n\t\t\"enquiry_time\" : 1479693735191,\n\t\t\"create_time\" : 1479693735191,\n\t\t\"goods_type\" : \"冷冻食品\",\n\t\t\"from_address\" : \"重庆市\",\n\t\t\"to_user_name\" : \"xwkj\",\n\t\t\"enquiry_num\":\"竞价人数\"  Integer,\n\t\t\"goods_total_weight\":\"货物总重量\",\n\t\t\"goods_total_volume\":\"竞价总体积\"  \n\t}\n],\n\"totalCount\" : 25\n }\n 备注：只标注了部分由于字段，不存在表示该字段对应的值不存在，更多字段以实际返回为主",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/EnquiryAction.java",
    "groupTitle": "enquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/enquiry/searchEnquiryByEnquiryStatexjz.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/enquiry/searchMyEnquiry.json",
    "title": "查询我的询报价",
    "name": "searchMyEnquiry",
    "group": "enquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Enquiry",
            "optional": true,
            "field": "Enquiry",
            "description": "<p>Enquiry询价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortBy",
            "description": "<p>排序字段  （时间排序：update_time_desc或update_time_asc 价格排序：offer_price_desc或offer_price_asc）</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\n\t\"code\":0,\n\t\"enquiryList\":[{\n\t\t\"to_user_name\": 司机姓名\tString,\n\t\t\"siji_create_time\":司机注册时间\t\tDate,\n\t\t\"siji_authentication\":司机是否实名认证 true 已认证 false 未认证\tBoolean\n\t\t\"offer_price\":报价金额\t\tDouble,\n\t\t\"from_address\":货运线路 始地址\tString,\n\t\t\"to_address\":货运线路 终地址\tString\n\t},...{...}]\n}\n备注：只标注了部分由于字段，不存在表示该字段对应的值不存在，更多字段以实际返回为主",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/EnquiryAction.java",
    "groupTitle": "enquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/enquiry/searchMyEnquiry.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/enquiry/searchMyEnquiryBy.json",
    "title": "查询我的询报价",
    "name": "searchMyEnquiryBy",
    "group": "enquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "requirement_id",
            "description": "<p>需求id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "enquiry_state",
            "description": "<p>询报价（竞价）状态 <code>1</code>询价中,<code>2</code>已报价,<code>3</code>驳回报价,<code>4</code>同意报价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortBy",
            "description": "<p>排序字段  （时间排序：update_time_desc或update_time_asc 价格排序：offer_price_desc或offer_price_asc）</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": " {\n \t\"code\":0,\n \t\"enquiryList\":[{\n \t\t\"original_image_url\":司机头像URL  String,\n \t\t\"user_evaluate_score\":司机评价分数  Double,\n \t\t\"to_user_name\": 司机姓名\t\tString,\n \t\t\"siji_create_time\":司机注册时间\t\tDate,\n \t\t\"siji_authentication\":司机是否实名认证 true 已认证 false 未认证\tBoolean\n \t\t\"car_state\":车辆认证状态  Integer  (<code>1</code>未认证,<code>2</code>认证通过,<code>3</code>认证不通过),\n \t\t\"from_address\":货运线路 始地址\tString,\n \t\t\"to_address\":货运线路 终地址\tString,\n \t\t\"offer_price\":询价金额\t\tDouble,\n\t \t},...\n\t \t,{\n\t \t...\n\t \t}\n \t],\n \t\"totalCount\": 竞价总数 Integer,\n\t\"requirementList\": [{\n\t\t\t\"shr_address\": 收货地 String,\n\t\t\t\"car_type_name\": 车型 String,\n\t\t\t\"fhr_hw_address\": 发货地 String,\n\t\t\t\"order_no\":订单编号 \tString,\n\t\t\t\"no\":需求编号\tString,\n\t\t\t\"enquiry_number\":竞价数量 \tString,\n\t\t\t\"from_address\":货运线路 始地址 \tString,\n\t\t\t\"to_address\":货运线路 终地址\tString ,\n\t\t\t\"yj_sy_time\":货运时间\tDate,\n\t\t\t\"goods_num\": 货物件数\tInteger,\n\t\t\t\"goods_volume\": 货物体积\tDouble,\n\t\t\t\"goods_weight\": 货物重量\tDouble,\n\t\t\t\"shr_name\":收货人 String,\n\t\t\t\"shr_phone\":收货人手机号 String,\n\t\t\t\"remark\":备注 String,\n\t\t\t...\n\t\t}\n\t]\n }\n 备注：只标注了部分由于字段，不存在表示该字段对应的值不存在，更多字段以实际返回为主",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/EnquiryAction.java",
    "groupTitle": "enquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/enquiry/searchMyEnquiryBy.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/enquiry/searchMyEnquiryByEnquiryState.json",
    "title": "App  货主端--全部竞价",
    "name": "searchMyEnquiryByEnquiryState",
    "group": "enquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "requirement_id",
            "description": "<p>需求id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": " {\n \t\"code\":0,\n \t\"enquiryList\":[{\n \t\t\"original_image_url\":司机头像URL  String,\n \t\t\"to_user_name\": 司机姓名\t\tString,\n \t\t\"siji_create_time\":司机注册时间\t\tDate,\n \t\t\"siji_authentication\":司机是否实名认证 true 已认证 false 未认证\tBoolean\n \t\t\"car_state\":车辆认证状态  Integer  (<code>1</code>未认证,<code>2</code>认证通过,<code>3</code>认证不通过),\n \t\t\"from_address\":货运线路 始地址\tString,\n \t\t\"to_address\":货运线路 终地址\tString,\n \t\t\"offer_price\":询价金额\t\tDouble,\n \t\t\"carriage_pay_side_type\":运费支付方\t\tString(1,发货方付,2,收货方付)\n\t \t},...\n\t \t,{\n\t \t...\n\t \t}\n \t],\n \t\"totalCount\": 竞价总数 Integer,\n\t\"requirementList\": [{\n\t\t\t\"shr_address\": 收货地 String,\n\t\t\t\"car_type_name\": 车型 String,\n\t\t\t\"fhr_hw_address\": 发货地 String,\n\t\t\t\"order_no\":订单编号 \tString,\n\t\t\t\"no\":需求编号\tString,\n\t\t\t\"enquiry_number\":竞价数量 \tString,\n\t\t\t\"from_address\":货运线路 始地址 \tString,\n\t\t\t\"to_address\":货运线路 终地址\tString ,\n\t\t\t\"yj_sy_time\":货运时间\tDate,\n\t\t\t\"goods_num\": 货物件数\tInteger,\n\t\t\t\"goods_volume\": 货物体积\tDouble,\n\t\t\t\"goods_weight\": 货物重量\tDouble,\n\t\t\t\"shr_name\":收货人 String,\n\t\t\t\"shr_phone\":收货人手机号 String,\n\t\t\t\"remark\":备注 String,\n\t\t\t...\n\t\t}\n\t]\n }\n 备注：只标注了部分由于字段，不存在表示该字段对应的值不存在，更多字段以实际返回为主",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/EnquiryAction.java",
    "groupTitle": "enquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/enquiry/searchMyEnquiryByEnquiryState.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/enquiry/searchMyEnquiryByEnquiryStateForSiji.json",
    "title": "App  司机端--全部竞价",
    "name": "searchMyEnquiryByEnquiryStateForSiji",
    "group": "enquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "requirement_id",
            "description": "<p>需求id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": " {\n \t\"code\":0,\n \t\"enquiryList\":[{\n \t\t\"original_image_url\":司机头像URL  String,\n \t\t\"to_user_name\": 司机姓名\t\tString,\n \t\t\"siji_create_time\":司机注册时间\t\tDate,\n \t\t\"siji_authentication\":司机是否实名认证 true 已认证 false 未认证\tBoolean\n \t\t\"car_state\":车辆认证状态  Integer  (<code>1</code>未认证,<code>2</code>认证通过,<code>3</code>认证不通过),\n \t\t\"from_address\":货运线路 始地址\tString,\n \t\t\"to_address\":货运线路 终地址\tString,\n \t\t\"offer_price\":询价金额\t\tDouble,\n \t\t\"carriage_pay_side_type\":运费支付方\t\tString(1,发货方付,2,收货方付)\n\t \t},...\n\t \t,{\n\t \t...\n\t \t}\n \t],\n \t\"totalCount\": 竞价总数 Integer,\n\t\"requirementList\": [{\n\t\t\t\"shr_address\": 收货地 String,\n\t\t\t\"car_type_name\": 车型 String,\n\t\t\t\"fhr_hw_address\": 发货地 String,\n\t\t\t\"order_no\":订单编号 \tString,\n\t\t\t\"no\":需求编号\tString,\n\t\t\t\"enquiry_number\":竞价数量 \tString,\n\t\t\t\"from_address\":货运线路 始地址 \tString,\n\t\t\t\"to_address\":货运线路 终地址\tString ,\n\t\t\t\"yj_sy_time\":货运时间\tDate,\n\t\t\t\"goods_num\": 货物件数\tInteger,\n\t\t\t\"goods_volume\": 货物体积\tDouble,\n\t\t\t\"goods_weight\": 货物重量\tDouble,\n\t\t\t\"shr_name\":收货人 String,\n\t\t\t\"shr_phone\":收货人手机号 String,\n\t\t\t\"remark\":备注 String,\n\t\t\t...\n\t\t}\n\t]\n }\n 备注：只标注了部分由于字段，不存在表示该字段对应的值不存在，更多字段以实际返回为主",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/EnquiryAction.java",
    "groupTitle": "enquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/enquiry/searchMyEnquiryByEnquiryStateForSiji.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/enquiry/searchMyWarehouseEnquiryByEnquiryState.json",
    "title": "App 需求竞价",
    "name": "searchMyWarehouseEnquiryByEnquiryState",
    "group": "enquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "requirementMatch_id",
            "description": "<p>需求匹配id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": " {\n \t\"code\":0,\n \t\"enquiryList\":[{\n \t\t\"user_original_image_url\":仓库管理员头像URL  String,\n \t\t\"user_real_name\": 仓库管理员姓名\t\tString,\n \t\t\"user_state\":\t仓库管理员审核状态\tInteger (<code>1</code>待审核,<code>2</code>审核未通过,<code>3</code>审核已通过),\n \t\t\"warehouse_type\":仓库类型\n \t\t\"offer_price\":报价金额\t\tDouble,\n \t\t\"offer_time\":报价时间 Date\n\t \t},...\n\t \t,{\n\t \t...\n\t \t}\n \t],\n \t\"totalCount\": 竞价总数 Integer,\n\t\"warehouseRequirementList\": [{\n\t\t\t\"warehouse_name\": 仓库名称 String,\n\t\t\t\"type\": 仓库类型 String,\n\t\t\t\"manager_mobile_phone\": 联系电话 String,\n\t\t\t\"capacity\":仓库容量 \tDouble,\n\t\t\t\"height\":仓库高度\tDouble,\n\t\t\t\"price\":价格 \tDouble,\n\t\t\t\"address_detail\":仓库地址 \tString,\n\t\t\t\"yj_ks_time\":预计开始时间\tDate,\n\t\t\t\"yj_js_time\":预计结束时间\tDate,\n\t\t}\n\t]\n }\n 备注：只标注了部分由于字段，不存在表示该字段对应的值不存在，更多字段以实际返回为主",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数为空:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "没有匹配:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "ok:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/EnquiryAction.java",
    "groupTitle": "enquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/enquiry/searchMyWarehouseEnquiryByEnquiryState.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/enterprise/getEnterpriseInfo.json",
    "title": "获取企业信息",
    "name": "getEnterpriseInfo",
    "group": "enterprise",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_id",
            "description": "<p>企业ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户不存在,或用户未非企业用户:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "用户的企业信息不存在:<br>",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "参数错误:<br>",
          "content": "-1用户信息不存在、-99未登录",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enterprise/EnterpriseAction.java",
    "groupTitle": "enterprise",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/enterprise/getEnterpriseInfo.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/exchange/exchangeProduct.json",
    "title": "我的-积分商城-确认订单-兑换（成功/失败）",
    "name": "exchangeProduct",
    "group": "exchange",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>兑换商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "product_num",
            "description": "<p>兑换商品数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数为空: ",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "暂无积分: ",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "积分不足: ",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "添加失败: ",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "兑换商品不存在: ",
          "content": "{\"code\":-5}",
          "type": "json"
        },
        {
          "title": "未登录: ",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/exchange/ExchangeAction.java",
    "groupTitle": "exchange",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/exchange/exchangeProduct.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/exchange/searchExchangeRccord.json",
    "title": "我的-积分商城-兑换记录",
    "name": "searchExchangeRccord",
    "group": "exchange",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \n\"code\":0, \n\"totalCount\" : 查询到的订单总数量,\n\"exchangeList\":[{兑换商品},{兑换商品},...{兑换商品} ] \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录: ",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "参数异常: ",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/exchange/ExchangeAction.java",
    "groupTitle": "exchange",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/exchange/searchExchangeRccord.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/feed_back/addFeedBack.json",
    "title": "意见反馈",
    "name": "addFeedBack",
    "group": "feedBack",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": "<p>反馈内容</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \n\"code\":0, \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆: ",
          "content": "{\"code\" : -99}",
          "type": "json"
        },
        {
          "title": "失败: ",
          "content": "{\"code\" : -1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/feedback/FeedBackAction.java",
    "groupTitle": "feedBack",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/feed_back/addFeedBack.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/feed_back/searchFeedBack.json",
    "title": "建议反馈-全部问题",
    "name": "searchFeedBack",
    "group": "feedBack",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "FeedBack",
            "optional": true,
            "field": "FeedBack",
            "description": "<p>FeedBack反馈</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \n\"code\":0, \n\"totalCount\" : 查询到的反馈总数量,\n\"feedBackList\":[{反馈},{反馈},...{反馈} ] \n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/feedback/FeedBackAction.java",
    "groupTitle": "feedBack",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/feed_back/searchFeedBack.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/feed_back/searchMyFeedBackDetails.json",
    "title": "建议详情查看",
    "name": "searchMyFeedBackDetails",
    "group": "feedBack",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "no",
            "description": "<p>FeedBack反馈</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \n\"code\":0, \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆: ",
          "content": "{\"code\" : -99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/feedback/FeedBackAction.java",
    "groupTitle": "feedBack",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/feed_back/searchMyFeedBackDetails.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/goods/getGoodsType.json",
    "title": "获取货物属性",
    "name": "getGoodsType",
    "group": "goods",
    "version": "1.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/goods/GoodsAction.java",
    "groupTitle": "goods",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/goods/getGoodsType.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/help_file/app_help_file_view.json",
    "title": "帮助详情查看",
    "name": "app_help_file_view",
    "group": "helpFile",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>帮助ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \n\"code\":0, \n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/helpfile/HelpFileAction.java",
    "groupTitle": "helpFile",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/help_file/app_help_file_view.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/help_file/searchHelpFile.json",
    "title": "帮助问题列表",
    "name": "searchMyFeedBackDetails",
    "group": "helpFile",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "HelpFile",
            "optional": true,
            "field": "eq",
            "description": "<p>查询对象(APP端该参数可以不传)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \n\"code\":0, \n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/helpfile/HelpFileAction.java",
    "groupTitle": "helpFile",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/help_file/searchHelpFile.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/mobile/getapp.json",
    "title": "获取app新版本以更新",
    "name": "getapp",
    "group": "mobile",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{ \"name\":ios或安卓某个端,String,\n  \"version\":版本号,String,\n  \"code\":ios或安卓某个端,String,\n  \"download_url\":下载链接,String,\n  \"updated_instructions\":更新说明,String\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/action/MobileAction.java",
    "groupTitle": "mobile",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/mobile/getapp.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/order_comment/logisticsCommentOrder.json",
    "title": "承运方(资源方)评价订单",
    "name": "logisticsCommentOrder",
    "group": "order_comment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "rate_from_score",
            "description": "<p>分数评价：发货方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "rate_from_msg",
            "description": "<p>文字评价：发货方</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "rate_to_score",
            "description": "<p>分数评价：收货方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "rate_to_msg",
            "description": "<p>文章评价：收货方</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "rate_platform_score",
            "description": "<p>分数评价：平台方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "rate_platform_msg",
            "description": "<p>文章评价：平台方</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆: ",
          "content": "{\"code\":-99 }",
          "type": "json"
        },
        {
          "title": "无权限: ",
          "content": "{\"code\":-1 }",
          "type": "json"
        },
        {
          "title": "订单id为空或无订单id对应的订单: ",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "订单未结束不能进行评价！: ",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "承运方评价失败: ",
          "content": "{\"code\":-4}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderCommentAction.java",
    "groupTitle": "order_comment",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order_comment/logisticsCommentOrder.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/order_comment/plateformCommentOrder.json",
    "title": "平台方评价订单",
    "name": "plateformCommentOrder",
    "group": "order_comment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "rate_from_score",
            "description": "<p>分数评价：发货方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "rate_from_msg",
            "description": "<p>文字评价：发货方</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "rate_to_score",
            "description": "<p>分数评价：收货方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "rate_to_msg",
            "description": "<p>文章评价：收货方</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "rate_logistics_score",
            "description": "<p>分数评价：物流方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "rate_logistics_msg",
            "description": "<p>文章评价：物流方</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆: ",
          "content": "{\"code\":-99 }",
          "type": "json"
        },
        {
          "title": "无权限: ",
          "content": "{\"code\":-1 }",
          "type": "json"
        },
        {
          "title": "订单id为空或无订单id对应的订单: ",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "订单未结束不能进行评价！: ",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "平台方评价失败: ",
          "content": "{\"code\":-4}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderCommentAction.java",
    "groupTitle": "order_comment",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order_comment/plateformCommentOrder.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/order_comment/receiverCommentOrder.json",
    "title": "收货方评价订单",
    "name": "receiverCommentOrder",
    "group": "order_comment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_to_logistics_zsjh_score",
            "description": "<p>分数评价：准时到货</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_to_logistics_fwtdscore",
            "description": "<p>分数评价：服务态度</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_to_logistics_hwwh_score",
            "description": "<p>分数评价：货物完好</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_to_goods_score",
            "description": "<p>分数评价：物品评分</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rate_to_msg",
            "description": "<p>文字评价：发货方对资源方</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆: ",
          "content": "{\"code\":-99 }",
          "type": "json"
        },
        {
          "title": "无权限: ",
          "content": "{\"code\":-1 }",
          "type": "json"
        },
        {
          "title": "订单id为空或无订单id对应的订单: ",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "订单未结束不能进行评价！: ",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "收货方评价失败: ",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "订单已被你评价: ",
          "content": "{\"code\":-5}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderCommentAction.java",
    "groupTitle": "order_comment",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order_comment/receiverCommentOrder.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/order_comment/searchMyOrderComment.json",
    "title": "查询我的评价列表",
    "name": "searchMyOrderComment",
    "group": "order_comment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\n \"code\":0,\n \"orderCommentList\":[{订单评价},{订单评价},...{订单评价}],\n \"totalCount\" : 查询到的我的评价列表的总数量,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或超时: ",
          "content": "{\"code\":-99 }",
          "type": "json"
        },
        {
          "title": "无权限: ",
          "content": "{\"code\":-1 }",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderCommentAction.java",
    "groupTitle": "order_comment",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order_comment/searchMyOrderComment.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order_comment/selectOrderCommentByOrderIdAndUserId.json",
    "title": "司机端-我的-我的评价-查看评价/货主端-评价查看",
    "name": "selectOrderCommentByOrderIdAndUserId",
    "group": "order_comment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "\t\t\t\t\t{ \"code\":0, \n\n                    订单的内容order_map：{\n                    goods_name 货物名称  {String}\n                    no:订单编号  {String}\n                    order_state: 订单状态  {String}\n                    from_to:线路名称  {String}\n                    orderComment_dj：评价等级(orderComment_dj==0.0    代表未评价，(司机端和货主端)\n                                            orderComment_dj==1.0~~5.0 显示1-5个星（司机端）\n                                            orderComment_dj==8.0 （货主端已评价）) {Double}\n                     }\n                  }\n                 评价内容 orderComment_list：[{\n                    huozhu_shenfen 货主身份：收货方/发货方 {String}\n                    (0:发货方         1：收货方    2：发货方的评价   3：收货方的评价 ) \n                    from_zsjh  分数评价：准时接货  {Double}\n                    from_hwwh  分数评价：货物完好  {Double}\n                    from_fwtd  分数评价：服务态度  {Double}\n                    from_pt    分数评价：平台匹配  {Double}\n                    from_msg   文字评价：发货方  {String}\n                               \n                    to_zssd  分数评价：准时到货   {Double}\n                    to_hwwh  分数评价：货物完好   {Double}\n                    to_futd  分数评价：服务态度   {Double}\n                    to_hwzl  分数评价：货物评分   {Double}\n                    to_msg   rate_to_msg 文字评价：收货方   {String}\n\n                    上述所有{Double}类型中数据值==1.0~~5.0 显示1-5个星) },{评价内容}...{评价内容}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆: ",
          "content": "{\"code\" : -99}",
          "type": "json"
        },
        {
          "title": "订单id为null: ",
          "content": "{\"code\" : -2}",
          "type": "json"
        },
        {
          "title": "未评价: ",
          "content": "{\"code\" : -3}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderCommentAction.java",
    "groupTitle": "order_comment",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order_comment/selectOrderCommentByOrderIdAndUserId.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/order_comment/shipperCommentOrder.json",
    "title": "发货方评价订单",
    "name": "shipperCommentOrder",
    "group": "order_comment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_from_logistics_zsjh_score",
            "description": "<p>分数评价：准时接货</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_from_logistics_fwtdscore",
            "description": "<p>分数评价：服务态度</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_from_logistics_hwwh_score",
            "description": "<p>分数评价：货物完好</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "rate_from_pingtai_score",
            "description": "<p>分数评价：平台匹配</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rate_from_msg",
            "description": "<p>文字评价：发货方对资源方</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆: ",
          "content": "{\"code\":-99 }",
          "type": "json"
        },
        {
          "title": "无权限: ",
          "content": "{\"code\":-1 }",
          "type": "json"
        },
        {
          "title": "订单id为空或无订单id对应的订单: ",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "订单未结束不能进行评价！: ",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "发货方评价失败: ",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "订单已被你评价: ",
          "content": "{\"code\":-5}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderCommentAction.java",
    "groupTitle": "order_comment",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order_comment/shipperCommentOrder.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/order_contract/app_getContract.json",
    "title": "app签章合同获取",
    "name": "app_getContract",
    "group": "order_contract",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>货运单id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没有登录:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "用户不存在:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "id为空:",
          "content": "{\"code\":-3}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderContractAction.java",
    "groupTitle": "order_contract",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order_contract/app_getContract.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/order_contract/app_hz_getContract.json",
    "title": "货主端app签章获取合同",
    "name": "app_hz_getContract",
    "group": "order_contract",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没有登录:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没有证书密钥:",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderContractAction.java",
    "groupTitle": "order_contract",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order_contract/app_hz_getContract.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/order_contract/app_sj_getContract.json",
    "title": "司机端app签章获取合同",
    "name": "app_sj_getContract",
    "group": "order_contract",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>货运单id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没有登录:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没有证书密钥:",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderContractAction.java",
    "groupTitle": "order_contract",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order_contract/app_sj_getContract.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/order_contract/appupdateOrderContractByfile_contract_id.json",
    "title": "app保存已签章合同",
    "name": "appupdateOrderContractByfile_contract_id",
    "group": "order_contract",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_contract_id",
            "description": "<p>合同文件id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "save_file_path",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "id为空:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "生成合同文件出错:",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderContractAction.java",
    "groupTitle": "order_contract",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order_contract/appupdateOrderContractByfile_contract_id.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/order_contract/generateWaybill.json",
    "title": "app货主端收货方结束货运签章",
    "name": "generateWaybill",
    "group": "order_contract",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>货运单id(record_id)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0,\n \"sign_pfx\":签章证书密钥,\n \"file_id\":签章pdf文件id,\n \"url\":签章文件路径,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "record_id为空:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "货运记录不存在:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderContractAction.java",
    "groupTitle": "order_contract",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order_contract/generateWaybill.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/order_contract/uploadgenerateWaybill.json",
    "title": "app货主端收货方结束货运签章后保存",
    "name": "uploadgenerateWaybill",
    "group": "order_contract",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_id",
            "description": "<p>文件id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_id",
            "description": "<p>货运单id(record_id)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "file_id为空:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderContractAction.java",
    "groupTitle": "order_contract",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order_contract/uploadgenerateWaybill.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/order/addOrderByEnquiryId.json",
    "title": "根据询价id生成订单",
    "name": "addOrderByEnquiryId",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enquiry_id",
            "description": "<p>询价id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: {",
          "content": "\"code\":0\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或无权限: {",
          "content": "\"code\":-1 \n\t\t}",
          "type": "json"
        },
        {
          "title": "询价id为空或无询价id对应的询价实体: {",
          "content": "\"code\":-2\n\t\t}",
          "type": "json"
        },
        {
          "title": "对应的需求不存在: {",
          "content": "\"code\":-3}",
          "type": "json"
        },
        {
          "title": "生产订单失败: {",
          "content": "\"code\":-4}",
          "type": "json"
        },
        {
          "title": "订单已经存在: {",
          "content": "\"code\":-5}",
          "type": "json"
        },
        {
          "title": "需求匹配不存在: {",
          "content": "\"code\":-6}",
          "type": "json"
        },
        {
          "title": "未登录: {",
          "content": "\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/addOrderByEnquiryId.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/order/addOrderByEnquiryIdForLoad.json",
    "title": "根据询价id生成订单",
    "name": "addOrderByEnquiryId",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enquiry_id",
            "description": "<p>询价id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: {",
          "content": "\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或无权限: {",
          "content": "\"code\":-1 }",
          "type": "json"
        },
        {
          "title": "询价id为空或无询价id对应的询价实体: {",
          "content": "\"code\":-2}",
          "type": "json"
        },
        {
          "title": "对应的需求不存在: {",
          "content": "\"code\":-3}",
          "type": "json"
        },
        {
          "title": "生产订单失败: {\t",
          "content": "\"code\":-4}",
          "type": "json"
        },
        {
          "title": "订单已经存在: {",
          "content": "\"code\":-5}",
          "type": "json"
        },
        {
          "title": "需求匹配不存在: {",
          "content": "\"code\":-6}",
          "type": "json"
        },
        {
          "title": "未登录: {",
          "content": "\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/addOrderByEnquiryIdForLoad.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/applyCancleOrder.json",
    "title": "申请取消订单",
    "name": "applyCancleOrder",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order_no",
            "description": "<p>（与订单id二选一即可）订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "申请取消订单成功: { ",
          "content": "\"code\":0 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数为空: {",
          "content": "\"code\":-1}",
          "type": "json"
        },
        {
          "title": "无对应的订单存在: {",
          "content": "\"code\":-2}",
          "type": "json"
        },
        {
          "title": "录入的订单id和订单编号不匹配: {",
          "content": "\"code\":-3}",
          "type": "json"
        },
        {
          "title": "申请取消订单失败: {",
          "content": "\"code\":-4}",
          "type": "json"
        },
        {
          "title": "没登陆或无权限: {",
          "content": "\"code\":-5}",
          "type": "json"
        },
        {
          "title": "没登陆录: {",
          "content": "\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/applyCancleOrder.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/confirmAgreementToPay.json",
    "title": "APP协议付",
    "name": "confirmAgreementToPay",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { ",
          "content": "\"code\":0, }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常: {",
          "content": "\"code\" : -1}",
          "type": "json"
        },
        {
          "title": "没有该订单: {",
          "content": "\"code\" : -2}",
          "type": "json"
        },
        {
          "title": "未登录: {",
          "content": "\"code\" : -99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/confirmAgreementToPay.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/confirmAlreadyStartOffer.json",
    "title": "确认支付",
    "name": "confirmAlreadyStartOffer",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { ",
          "content": "\"code\":0 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "订单id为空或不存在该订单: {",
          "content": "\"code\":-1}",
          "type": "json"
        },
        {
          "title": "确认支付失败，已检测到您在其它途径发起了支付交易，但是尚未完成，请在对应渠道继续操作，或者重新发起支付: {",
          "content": "\"code\":-2}",
          "type": "json"
        },
        {
          "title": "没登录: {",
          "content": "\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/confirmAlreadyStartOffer.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/confirmCancleOrder.json",
    "title": "订单违约方支付违约金后，订单相关方确认订单取消",
    "name": "confirmCancleOrder",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order_no",
            "description": "<p>（与订单id二选一即可）订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "确认成功: { ",
          "content": "\"code\":0 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数为空: {\t",
          "content": "\"code\":-1}",
          "type": "json"
        },
        {
          "title": "无对应的订单存在: {",
          "content": "\"code\":-2}",
          "type": "json"
        },
        {
          "title": "录入的订单id和订单编号不匹配: {",
          "content": "\"code\":-3}",
          "type": "json"
        },
        {
          "title": "确认失败: {",
          "content": "\"code\":-4}",
          "type": "json"
        },
        {
          "title": "没登陆或无权限: {",
          "content": "\"code\":-5}",
          "type": "json"
        },
        {
          "title": "没登录: {",
          "content": "\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/confirmCancleOrder.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/confirmStartOffer.json",
    "title": "验证开始支付",
    "name": "confirmStartOffer",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { ",
          "content": "\"code\":0 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "订单id为空: {",
          "content": "\"code\":-1}",
          "type": "json"
        },
        {
          "title": "保存失败: {",
          "content": "\"code\":-2}",
          "type": "json"
        },
        {
          "title": "没登录: {",
          "content": "\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/confirmStartOffer.json"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/order/deleteOrder.json",
    "title": "删除订单",
    "name": "deleteOrder",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "id",
            "description": "<p>待删除的发货找车需求 id数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { ",
          "content": "\"code\":0 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数为空: { ",
          "content": "\"code\":-1 }",
          "type": "json"
        },
        {
          "title": "没登陆或无权限: { ",
          "content": "\"code\":-2 }",
          "type": "json"
        },
        {
          "title": "删除失败: { ",
          "content": "\"code\":-3 }",
          "type": "json"
        },
        {
          "title": "未登录: { ",
          "content": "\"code\":-99 }",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/deleteOrder.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/fillOrderCancleLiquidatedDamages.json",
    "title": "订单取消方填写订单相关方协议后的违约金",
    "name": "fillOrderCancleLiquidatedDamages",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order_no",
            "description": "<p>（与订单id二选一即可）订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "liquidated_damages",
            "description": "<p>违约金</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "填写成功: {",
          "content": "\"code\":0 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数为空: {",
          "content": "\"code\":-1}",
          "type": "json"
        },
        {
          "title": "无对应的订单存在: {",
          "content": "\"code\":-2}",
          "type": "json"
        },
        {
          "title": "录入的订单id和订单编号不匹配: {",
          "content": "\"code\":-3}",
          "type": "json"
        },
        {
          "title": "填写失败: {",
          "content": "\"code\":-4}",
          "type": "json"
        },
        {
          "title": "没登陆或无权限: {",
          "content": "\"code\":-5}",
          "type": "json"
        },
        {
          "title": "没登录: {",
          "content": "\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/fillOrderCancleLiquidatedDamages.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/finishOrder.json",
    "title": "完成订单",
    "name": "finishOrder",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order_no",
            "description": "<p>（与订单id二选一即可）订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "完成订单成功: { ",
          "content": "\"code\":0 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数为空: {",
          "content": "\"code\":-1}",
          "type": "json"
        },
        {
          "title": "无对应的订单存在: {",
          "content": "\"code\":-2}",
          "type": "json"
        },
        {
          "title": "录入的订单id和订单编号不匹配: {",
          "content": "\"code\":-3}",
          "type": "json"
        },
        {
          "title": "完成订单失败: {",
          "content": "\"code\":-4}",
          "type": "json"
        },
        {
          "title": "没登陆或无权限: {",
          "content": "\"code\":-5}",
          "type": "json"
        },
        {
          "title": "订单未付款: {",
          "content": "\"code\":-6}",
          "type": "json"
        },
        {
          "title": "订单已完成，无需重复完成: {",
          "content": "\"code\":-7}",
          "type": "json"
        },
        {
          "title": "未登录: {",
          "content": "\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/finishOrder.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/order/generateOrder.json",
    "title": "生成或更新订单",
    "name": "generateOrder",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Order",
            "optional": false,
            "field": "Order",
            "description": "<p>Order订单</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: {",
          "content": "\"code\":0\n\t }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或无权限: {",
          "content": "\"code\":-1 \n\t}",
          "type": "json"
        },
        {
          "title": "询价id为空或无询价id对应的询价实体: {",
          "content": "\"code\":-2\n\t\t}",
          "type": "json"
        },
        {
          "title": "对应的需求不存在: {",
          "content": "\"code\":-3\n}",
          "type": "json"
        },
        {
          "title": "生产或更新订单失败: {",
          "content": "\"code\":-4\n\t}",
          "type": "json"
        },
        {
          "title": "没登录: {",
          "content": "\t\t\t\t\t\t\t\t\"code\":-99\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/generateOrder.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/order/getOfferInformation.json",
    "title": "获取支付信息",
    "name": "getOfferInformation",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: {\"code\" : 1,\"order\":{\"requirement_id\":\"504b1a138f994745afc8000c4f7f1e06\",",
          "content": "\"requirement_match_id\":\"507a809d6aaa4eb5951b717093779eb9\", \"goods_pay_agreement_type\":\"\", \"from_lxdh\":\"zyqyhz\",\n\"goods_pay_money\":0, \"record_no\":\"RCD161128130422856\", \"user_id\":\"41b8d8b94f114e2eb767aef47a6adf95\", \"to_lxdh\":\"zyqyhz\",\n\"enquiry_id\":\"cd3eb0367dc44cb191aae6aa2cd64f55\", \"id\":\"5193123c37d448778ee61a94d63d5d4e\", \"goods_pay_side_type\":\"1\",\n\"to_user_id\":\"11ad542561674fe9b8dbe61498e9b70f\", \"to_user_no\":\"20161101152934127\", \"enquiry_no\":\"EQR161128130311447\",\n\"from_user_no\":\"20161101152739808\", \"goods_is_daishou\":true, \"goods_pay_time_type\":\"1\",\n\"version\":1,\"no\":\"ORD161128130418278\", \"totalMoney\":0.03, \"llwl_record_id\":\"621b3e6114c34d35babdbfecf5bd3415\",\n\"update_time\":1480309458283, \"requirement_match_no\":\"RQM161128130204142\", \"carriage_is_daishou\":true,\n\"shr_user_id\":\"41b8d8b94f114e2eb767aef47a6adf95\", \"from_user_id\":\"41b8d8b94f114e2eb767aef47a6adf95\",\n\"shr_user_no\":\"20161101152739808\", \"order_state\":\"order_state_in_transport\", \"create_time\":1480309458283,\n\"carriage_pay_money\":0.03, \"requirement_type\":\"car\"}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常: {",
          "content": "\"code\" : -1}",
          "type": "json"
        },
        {
          "title": "订单为空: {",
          "content": "\"code\" : -2}",
          "type": "json"
        },
        {
          "title": "已支付: {",
          "content": "\"code\" : -3}",
          "type": "json"
        },
        {
          "title": "未登录: {",
          "content": "\"code\" : -99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/getOfferInformation.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/order/getWarehouseOfferInformation.json",
    "title": "获取仓库支付信息",
    "name": "getWarehouseOfferInformation",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: {\"code\" : 1,\"order\":{ \"totalMoney\":支付总费用 Double, \"user_state\":用户状态 Integer, \"user_image\":头像 String, \"no\":订单编号",
          "content": "String, \"user_real_name\":仓库管理员姓名 String, \"to_user_id\":仓库管理员id, \"storage_pay_money\":仓储费, \"user_mobile_phone\":电话}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常: {",
          "content": "\"code\" : -1}",
          "type": "json"
        },
        {
          "title": "订单为空: {",
          "content": "\"code\" : -2}",
          "type": "json"
        },
        {
          "title": "已支付: {",
          "content": "\"code\" : -3}",
          "type": "json"
        },
        {
          "title": "未登录: {",
          "content": "\"code\" : -99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/getWarehouseOfferInformation.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/orderpay/xieyifu_state.json",
    "title": "协议付状态修改",
    "name": "xieyifu_state",
    "group": "orderpay",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "orderpay",
            "optional": true,
            "field": "Order",
            "description": "<p>orderpay订单支付</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: 协议付成功",
          "content": "{ \"code\":0, }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "order_id为空: ",
          "content": "{\"code\" : -1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderPayAction.java",
    "groupTitle": "orderpay",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/orderpay/xieyifu_state.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/searchHistoryOrder.json",
    "title": "查询历史订单",
    "name": "searchHistoryOrder",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Order",
            "optional": true,
            "field": "Order",
            "description": "<p>Order订单</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "查询成功: { \"code\":0, ",
          "content": "\"totalCount\" : 查询到的订单总数量, \"orderList\":[{订单},{订单},...{订单} ] }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或无权限: {",
          "content": "\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录: {",
          "content": "\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/searchHistoryOrder.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/searchMyAllOrder.json",
    "title": "查询我的所有订单",
    "name": "searchMyAllOrder",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order_state",
            "description": "<p>订单状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"code\":0, ",
          "content": "\"totalCount\" : 查询到的订单总数量,\n\"orderList\":[{订单},{订单},...{订单} ] }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录: {",
          "content": "\"code\":-99\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/searchMyAllOrder.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/searchMyOrder.json",
    "title": "查询我的订单",
    "name": "searchMyOrder",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Order",
            "optional": true,
            "field": "Order",
            "description": "<p>Order订单</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"code\":0, ",
          "content": "\"totalCount\" : 查询到的订单总数量, \n\"orderList\":[{订单},{订单},...{订单} ] \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆: {",
          "content": "\"code\" : -99\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/searchMyOrder.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/searchMyOrderByOrderState.json",
    "title": "根据订单状态查询我的订单",
    "name": "searchMyOrderByOrderState",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order_state",
            "description": "<p>订单状态：<code>1</code>未付款,<code>2</code> 已付款(待发货),<code>3</code>已取消,<code>31</code>取消中,<code>4</code> 已结束(已收货),<code>5</code>已发货(待收货),<code>6</code>已结束(已评价)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: {\"code\":0,\"orderList\":[{\"order_state_name\":\"已生成\", \"from_user_id\":\"41b8d8b94f114e2eb767aef47a6adf95\" 发货人id,",
          "content": "\"goods_pay_side_type\":\"货物付款方\", \"from_lxdh\":\"zyqyhz\"发货人姓名, \"create_time\":1480127924092, \"goods_pay_time_type_name\":\"N/A\",\n\"goods_pay_time_type\":\"\", \"version\":1, \"id\":\"094a60b12f7f4210a95a253851260025\",\n\"user_id\":\"41b8d8b94f114e2eb767aef47a6adf95\"用户id, \"goods_pay_agreement_type_name\":\"N/A\", \"carriage_pay_side_type\":\"1\"运费支付方,\n\"requirement_match_id\":\"7671bff3bde14dce967fd21df96407aa\"匹配id, \"requirement_type\":\"car\"需求类型,\n\"requirement_no\":\"CRQ161126103729687\"需求编号, \"requirement_match_no\":\"RQM161126103729902\"匹配编号,\n\"goods_pay_side_type_name\":\"N/A\", \"carriage_is_daishou\":true 运费代收, \"to_user_no\":\"20161101152934127\"承运人编号,\n\"goods_pay_money\":100货物价格, \"goods_is_daishou\":false货物是否代收, \"from_user_no\":\"20161101152739808\"发货人编号,\n\"shr_user_id\":\"11ad542561674fe9b8dbe61498e9b70f\"收货人id, \"requirement_id\":\"58dcf1f1c0924be684cc8db4d90ce5c0\"需求id,\n\"to_user_id\":\"11ad542561674fe9b8dbe61498e9b70f\"承运方id, \"requirement_type_name\":\"车辆\", \"order_state\":\"order_state_create\"订单状态,\n\"carriage_pay_money\":0.02运费金额, \"carriage_pay_side_type_name\":\"发货方付(现付)\", \"enquiry_no\":\"EQR161126103816384\"询价编号,\n\"no\":\"ORD161126103844085\"订单编号, \"to_lxdh\":\"zyqywl\"承运方姓名, \"goods_pay_agreement_type\":\"\",\n\"shr_user_no\":\"20161101152934127\"收货人编号, \"update_time\":1480127924092, \"enquiry_id\":\"50316db927614db6b6420597ca39a712\"询价id,\n\"goods_name\":\"橘子\"货物名称, \"total_offer_money\":\"总金额\" 对于货主端加的字段 Double}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常: {",
          "content": "\"code\" : -1}",
          "type": "json"
        },
        {
          "title": "未登录: {",
          "content": "\"code\" : -99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/searchMyOrderByOrderState.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/searchMyOrderDetails.json",
    "title": "查询我的订单详情",
    "name": "searchMyOrderDetails",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"code\":0, ",
          "content": "   \"order\" : { \n\t\t\"uniqueIDList\": [{uniqueID}, {uniqueID}, ..... ], ...... } }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "订单id为空或无订单id对应的订单存在: {",
          "content": "\"code\":-1\n\t}",
          "type": "json"
        },
        {
          "title": "没登陆或无权限: {",
          "content": "\"code\":-2\n\t}",
          "type": "json"
        },
        {
          "title": "没登录: {",
          "content": "\"code\":-99\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/searchMyOrderDetails.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/searchMyWarehouseOrderByOrderState.json",
    "title": "根据订单状态查询我的仓库订单",
    "name": "searchMyWarehouseOrderByOrderState",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order_state",
            "description": "<p>订单状态：<code>order_not_in_library</code>未到库,<code>order_in_storage</code> 贮存中,<code>order_state_finish</code>已完成</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: {\"code\":0 \"no\":订单编号 String \"create_time\":订单时间 Date \"goods_name\":货物名称 String \"storage_pay_money\":仓库价格 Double",
          "content": "\"warehouse_name\":仓库名称 String \"warehouse_address\":仓库地址 String }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没有权限: {",
          "content": "\"code\" : -1}",
          "type": "json"
        },
        {
          "title": "未登录: {",
          "content": "\"code\" : -99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/searchMyWarehouseOrderByOrderState.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/searchMyWarehouseOrderDetails.json",
    "title": "查询我的仓库订单详情",
    "name": "searchMyWarehouseOrderDetails",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"code\":0, \"order\" : { \"no\":订单编号 String \"order_state\":订单状态 String \"storage_pay_time_type\":仓库支付方式 String",
          "content": "\"storage_pay_money\":仓储金额 Double \"disbursement_channel\":支付渠道 String \"manager_name\":管理员姓名 String \"manager_mobile_phone\":电话\nString \"warehouse_name\":仓库名字 String \"warehouse_type\":仓库类型 String \"warehouse_address\":地址 String \"warehouse_capacity\":容量\nDouble \"goods_name\":物品名 String \"goods_volume\":体积 Double \"goods_weight\":重量 Double \"goods_type\":类型 String \"goods_num\":数目\nInteger } }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "订单id为空或无订单id对应的订单存在: {",
          "content": "\"code\":-1}",
          "type": "json"
        },
        {
          "title": "无权限: {",
          "content": "\"code\":-2}",
          "type": "json"
        },
        {
          "title": "没登录: {",
          "content": "\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/searchMyWarehouseOrderDetails.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/searchOrderInfoComment.json",
    "title": "司机端/货主端-我的-我的评价",
    "name": "searchOrderInfoComment",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"code\":0, goods_name 货物名称 {String} no:订单编号 {String} order_state: 订单状态 {String} from_to:线路名称 {String}",
          "content": "orderComment_dj：评价等级(orderComment_dj==0.0 代表未评价，(司机端和货主端) orderComment_dj==1.0~~5.0 显示1-5个星（司机端） orderComment_dj==8.0\n（货主端已评价）) {Double}\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆: { ",
          "content": "\"code\" : -99\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/searchOrderInfoComment.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/searchToUserByOrderId.json",
    "title": "查询我的订单中司机信息",
    "name": "searchToUserByOrderId",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"code\":0, {Double} credit_rating_score:信用评价分数 {String} real_name:真实姓名 {String} mobile_phone:移动电话 {String}",
          "content": "original_image_url：头像原图 {String} thumb_image_url：头像缩略图 {Boolean} si_ji_smrz：司机实名认证 {Boolean} che_smrz：车实名认证 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆: {",
          "content": "\"code\" : -99\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/searchToUserByOrderId.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/warehouseapplyCancleOrder.json",
    "title": "申请取消订单",
    "name": "warehouseapplyCancleOrder",
    "group": "order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order_no",
            "description": "<p>（与订单id二选一即可）订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "申请取消订单成功: { ",
          "content": "\"code\":0 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数为空: {",
          "content": "\"code\":-1}",
          "type": "json"
        },
        {
          "title": "无对应的订单存在: {",
          "content": "\"code\":-2}",
          "type": "json"
        },
        {
          "title": "录入的订单id和订单编号不匹配: {",
          "content": "\"code\":-3}",
          "type": "json"
        },
        {
          "title": "申请取消订单失败: {",
          "content": "\"code\":-4}",
          "type": "json"
        },
        {
          "title": "没登陆或无权限: {",
          "content": "\"code\":-5}",
          "type": "json"
        },
        {
          "title": "没登陆录: {",
          "content": "\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/order/OrderAction.java",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/order/warehouseapplyCancleOrder.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/personal/getAccountInfo.json",
    "title": "APP获取账户信息",
    "name": "getAccountInfo",
    "group": "personal",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/PersonalAction.java",
    "groupTitle": "personal",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/personal/getAccountInfo.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/personal/getLBTPicture.json",
    "title": "获取首页轮播图",
    "name": "getLBTPicture",
    "group": "personal",
    "version": "1.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/user/PersonalAction.java",
    "groupTitle": "personal",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/personal/getLBTPicture.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/personal/getMyOnReadMessageCount.json",
    "title": "查询未读消息的总个数",
    "name": "getMyOnReadMessageCount",
    "group": "personal",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{ \"code\":0,\n\ttotalCount : \"123\"  未读消息的总个数 (Integer)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/PersonalAction.java",
    "groupTitle": "personal",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/personal/getMyOnReadMessageCount.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/point/searchPointRccord.json",
    "title": "我的-积分商城-积分明细",
    "name": "searchPointRccord",
    "group": "point___",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \n\"code\":0, \n\"totalCount\" : 查询到的积分变更的总数量,\n\"pointList\":[{\n  type 积分获取类型  {String},\n  current_poit 本次赚得积分 {Integer},\n  create_time 本次积分变动时间 {Date}\n},{积分},...{积分} ] \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录: ",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "参数异常，用户ID异常: ",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/point/PointAction.java",
    "groupTitle": "point___",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/point/searchPointRccord.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/point_user/selectPointUserTotalPoitByUserId.json",
    "title": "我的-积分商城-积分/我的--个人积分（依据user_id查询积分总数）",
    "name": "selectPointUserTotalPoitByUserId",
    "group": "point_user",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": " {\n\t\"code\" : 0\n\t total_poit ：积分总分数 {Integer}\n\t\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/point/PointUserAction.java",
    "groupTitle": "point_user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/point_user/selectPointUserTotalPoitByUserId.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/point/achievePoint.json",
    "title": "获取积分",
    "name": "achievePoint",
    "group": "point",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "current_point",
            "description": "<p>获取积分</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>获取积分类型</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": " {\n\t\"code\" : 0,\n\t\"totalCount\" : 1\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/point/PointAction.java",
    "groupTitle": "point",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/point/achievePoint.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/point/consumePoint.json",
    "title": "消费积分",
    "name": "consumePoint",
    "group": "point",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "current_point",
            "description": "<p>消费积分</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>消费积分类型</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": " {\n\t\"code\" : 0,\n\t\"totalCount\" : 1\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "参数异常:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "积分余额不足:",
          "content": "{\"code\":-3}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/point/PointAction.java",
    "groupTitle": "point",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/point/consumePoint.json"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/point/deletePoint.json",
    "title": "删除订单",
    "name": "deletePoint",
    "group": "point",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "id",
            "description": "<p>待删除的 id数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/point/PointAction.java",
    "groupTitle": "point",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/point/deletePoint.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/point/recordUserPointsByType.json",
    "title": "根据不同积分类型获取积分",
    "name": "recordUserPointsByType",
    "group": "point",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>积分类型</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": " {\n\t\"code\" : 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/point/PointAction.java",
    "groupTitle": "point",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/point/recordUserPointsByType.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/point/searchMyPoint.json",
    "title": "查询我的积分",
    "name": "searchMyPoint",
    "group": "point",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Point",
            "optional": false,
            "field": "Point",
            "description": "<p>实体</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": " {\n\t\"code\" : 0,\n\t\"totalCount\" : 1\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/point/PointAction.java",
    "groupTitle": "point",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/point/searchMyPoint.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/product_order/addProductOrder.json",
    "title": "我的-积分商城-确认订单(带配送地址的)",
    "name": "addProductOrder",
    "group": "productOrder",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ProductOrder",
            "optional": true,
            "field": "ProductOrder",
            "description": "<p>ProductOrder商品订单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "product_number",
            "description": "<p>购买数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "distribution_mode",
            "description": "<p>配送方式 <code>1</code>快递包邮,<code>2</code>邮政小包</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \n\"code\":0\n  shr_name: 收货人姓名 {String},\n  shr_mobile_phone: 收货人联系方式 {String},\n\t product_id: 收货人地址 {String},\n  product_image_url:商品图片{String},\n  product_danjia:商品单价{Double},  \n  product_zongjia:商品总价{Double},\n  product_number:商品数量{Integer},\n  distribution_mode:配送方式{String},\n  create_time:创建日期{Date},\n  no:订单号{String}\n }",
          "type": "json"
        },
        {
          "title": "未登录: ",
          "content": "{ \n\"code\":-99\n }",
          "type": "json"
        },
        {
          "title": "参数异常: ",
          "content": "{ \n\"code\":-2\n}",
          "type": "json"
        },
        {
          "title": "积分不足: ",
          "content": "{ \n\"code\":-3\n}",
          "type": "json"
        },
        {
          "title": "更新失败: ",
          "content": "{ \n\"code\":-4\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/product/ProductOrderAction.java",
    "groupTitle": "productOrder",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/product_order/addProductOrder.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/product_order/selectProductOrder.json",
    "title": "我的-积分商城-兑换记录",
    "name": "selectProductOrder",
    "group": "productOrder",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \n\"code\":0, \n\"totalCount\" : 查询到的商品订单总数量,\n   \"productOrder_list\":[{\n    name: 商品名称 {String},\n    image_url:商品图片URL{String},\n    product_zongjia:商品总价{Double},\n    create_time 本次订单完成时间 {Date}\n   },{商品订单},...{商品订单} ] \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常，用户ID异常: ",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/product/ProductOrderAction.java",
    "groupTitle": "productOrder",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/product_order/selectProductOrder.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/product/getLBTPicture.json",
    "title": "获取积分商城轮播图",
    "name": "getLBTPicture",
    "group": "product",
    "version": "1.0.0",
    "filename": "src/main/java/com/ziyun56/chpz/product/ProductAction.java",
    "groupTitle": "product",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/product/getLBTPicture.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/product/getProductDetail.json",
    "title": "我的-积分商城-商品详情",
    "name": "product_detail",
    "group": "product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Product",
            "optional": true,
            "field": "Product",
            "description": "<p>Product商品</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \n\"code\":0\n\n     goods_id:商品Id {String},\n     goods_name：商品名称 {String},\n     goods_price：商品价格 {Double},\n     goods_file_image_url:商品图片地址（存在多张图片）{String},\n     goods_detail_file_image_url:商品详情图片地址（存在多张图片）{String},\n     goods_description:商品描述{String},\n     goods_remain:商品剩余数量{Integer}，\n     goods_total:商品总量{Integer}\n     tz_id:兑换按钮跳转页面标记 {String}\n       {tz_id = \"-1\":跳转到带有完善信息的（确认订单）页面\n     \n        tz_id =\"0\":跳转到带有收货地址信息的（确认订单）页面}\n     \n }",
          "type": "json"
        },
        {
          "title": "未登录: ",
          "content": "{ \n\"code\":-99\n }",
          "type": "json"
        },
        {
          "title": "参数异常: ",
          "content": "{ \n\"code\":-2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/product/ProductAction.java",
    "groupTitle": "product",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/product/getProductDetail.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/product/searchAppHotProduct.json",
    "title": "积分商城--商品列表(热门推荐--依据兑换数量)",
    "name": "searchAppHotProduct",
    "group": "product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Product",
            "optional": true,
            "field": "Product",
            "description": "<p>Product商品</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \n\"code\":0\n\n     product_lists:[{\n     goods_id:商品Id {String},\n     goods_name：商品名称 {String},\n     goods_price：商品价格 {Double},\n     goods_file_image_url:商品图片地址（存在多张图片）{String},\n     goods_description:商品描述{String}\n     }{商品}...{商品}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "无权限访问: ",
          "content": "{\"code\" : -1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/product/ProductAction.java",
    "groupTitle": "product",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/product/searchAppHotProduct.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/product/searchAppNewProduct.json",
    "title": "积分商城--商品列表(新品推荐--依据创建时间排序)",
    "name": "searchAppNewProduct",
    "group": "product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Product",
            "optional": true,
            "field": "Product",
            "description": "<p>Product商品</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \n\"code\":0\n\n     new_product_lists:[{\n     goods_id:商品Id {String},\n     goods_name：商品名称 {String},\n     goods_price：商品价格 {Double},\n     goods_file_image_url:商品图片地址（存在多张图片）{String},\n     goods_description:商品描述{String}\n     }{商品}...{商品}]\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录: ",
          "content": "{\"code\" : -99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/product/ProductAction.java",
    "groupTitle": "product",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/product/searchAppNewProduct.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/product/searchAppProduct.json",
    "title": "积分商城--商品列表(所有)",
    "name": "searchAppProduct",
    "group": "product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Product",
            "optional": true,
            "field": "Product",
            "description": "<p>Product商品</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \n\"code\":0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "无权限访问: ",
          "content": "{\"code\" : -1}",
          "type": "json"
        },
        {
          "title": "未登录: ",
          "content": "{\"code\" : -99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/product/ProductAction.java",
    "groupTitle": "product",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/product/searchAppProduct.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/product/searchProduct.json",
    "title": "商品列表",
    "name": "searchProduct",
    "group": "product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Product",
            "optional": true,
            "field": "Product",
            "description": "<p>Product商品</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \n\"code\":0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录: ",
          "content": "{\"code\" : -99}",
          "type": "json"
        },
        {
          "title": "无权限访问: ",
          "content": "{\"code\" : -1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/product/ProductAction.java",
    "groupTitle": "product",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/product/searchProduct.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/product/updateProduct.json",
    "title": "添加商品商品",
    "name": "searchProduct",
    "group": "product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Product",
            "optional": true,
            "field": "Product",
            "description": "<p>Product商品、</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \n\"code\":0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "无权限访问: ",
          "content": "{\"code\" : -1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/product/ProductAction.java",
    "groupTitle": "product",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/product/updateProduct.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/record/affirmantSMS.json",
    "title": "短信收货功能——发送收货码短信给收货人",
    "name": "AffirmantSMS",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "record_id",
            "description": "<p>货运单ID</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "成功: ",
          "content": "{\"code\":0}",
          "type": "json"
        },
        {
          "title": "没登陆或超时: ",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "货运单ID为空: ",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "收货人手机号码为空: ",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "收货人不存在 : ",
          "content": "{\"code\":-3}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/affirmantSMS.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/record/AppRelevanceGoodsTraceList.json",
    "title": "App货运单补录追溯码",
    "name": "AppRelevanceGoodsTraceList",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_id",
            "description": "<p>货运单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uniqueIDs",
            "description": "<p>追溯码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0,}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "货运记录id为空:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "追溯码为空:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "补录追溯码失败:",
          "content": "{\"code\":-3}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/AppRelevanceGoodsTraceList.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/record/AppSearchElectronicReceipt.json",
    "title": "App查看电子回单",
    "name": "AppSearchElectronicReceipt",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_id",
            "description": "<p>货运单id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0,\n \"upload_electronic_return_receipts\": \"/gfs/22e80ba4d6a04e87b2ed2722a287ce5e,...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "货运记录id为空:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "货运记录不存在:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "未上传电子回单:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "没有登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/AppSearchElectronicReceipt.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/record/addElectronicReceipt.json",
    "title": "上传电子回单",
    "name": "addElectronicReceipt",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "electronic_receipt_photos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_id",
            "description": "<p>货运单id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "货运记录id为空:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "货运记录不存在:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "上传失败:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "没有登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/addElectronicReceipt.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/record/addRecordInOut.json",
    "title": "申请换车—添加新车信息",
    "name": "addRecordInOut",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_id",
            "description": "<p>货运单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>车辆id</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "in_time",
            "description": "<p>入时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "in_info",
            "description": "<p>入信息</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "out_time",
            "description": "<p>出时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "out_info",
            "description": "<p>出信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "in_address",
            "description": "<p>入地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "in_address_xpoint",
            "description": "<p>入地址X坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "in_address_ypoint",
            "description": "<p>入地址Y坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "out_address",
            "description": "<p>出地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "out_address_xpoint",
            "description": "<p>出地址X坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "out_address_ypoint",
            "description": "<p>出地址X坐标</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:<br>",
          "content": "{\"code\":-1 货运记录不存在或添加失败}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/addRecordInOut.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/record/affirmantSMSEndRecord.json",
    "title": "短信收货功能—填写收货码结束货运",
    "name": "affirmantSMSEndRecord",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "record_id",
            "description": "<p>货运单ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endrecord_code",
            "description": "<p>收货码</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "成功: ",
          "content": "{\"code\":0}",
          "type": "json"
        },
        {
          "title": "没登陆或超时: ",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "货运单不存在: ",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "收货码为空: ",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/affirmantSMSEndRecord.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/record/applicationForTransfer.json",
    "title": "承运方（物流方）申请换车",
    "name": "applicationForTransfer",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_number",
            "description": "<p>车牌号</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "in_time",
            "description": "<p>车辆开始时间（格式：yyyy-MM-dd HH:mm）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "in_info",
            "description": "<p>车辆开始信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "in_address",
            "description": "<p>车辆开始地址 \t//\t * @apiParam {Date} [out_time] 车辆结束时间 \t//\t * @apiParam {String} [out_info] 车辆结束信息 \t//\t * @apiParam {String} [out_address] 车辆结束地址</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": " { \n\t\"code\" : 0, \n\t\"record\":{货运记录},\n\t\"appLocationGatherList\":[{app手机定位数据},{app手机定位数据},...{app手机定位数据}],\n\t\"gatherMapList\":[{冷链轨迹温湿度数据},{冷链轨迹温湿度数据},...{冷链轨迹温湿度数据}]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登录 ",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "订单id为空或无此id对应的订单或货运记录: ",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/applicationForTransfer.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/record/assembleLogisticsMap.json",
    "title": "组装物流地图",
    "name": "assembleLogisticsMap",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\n\t\"code\":0,\n\t\"warehouseList\":[{仓库信息},{仓库信息},...{仓库信息}],\n\t\"carList\":[{车辆信息},{车辆信息},...{车辆信息}],\n\t\"carRequirementList\":[{发货找车需求},{发货找车需求},...{发货找车需求}],\n\t\"warehouseRequirementList\":[{发货找库需求},{发货找库需求},...{发货找库需求}],\n\t\"routeList\":[{线路},{线路},...{线路}],\n\t\"orderList\":[{订单},{订单},...{订单}],\n\t\"order_total_number\":订单总数,\n\t\"car_total_number\":车辆总数,\n\t......\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或超时: ",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/assembleLogisticsMap.json"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/record/deleteRecord.json",
    "title": "删除货运记录",
    "name": "deleteRecord",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>待删除的货运记录 id数组</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>待删除的货运记录 id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常: ",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/deleteRecord.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/record/endRecord.json",
    "title": "结束货运记录",
    "name": "endRecord",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_id",
            "description": "<p>货运记录id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "结束货运记录成功: ",
          "content": "{ \"code\":0 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数为空:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "无对应的货运记录存在: ",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "结束货运记录失败: ",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "没登陆或无权限",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/endRecord.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/record/loading_inspection.json",
    "title": "装车检查类目部分获取",
    "name": "loading_inspection",
    "group": "record",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "OK: { ",
          "content": "\"loading_inspection_directorie\":[\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\"code\"=\"\",\n\t\t\t\t\t\t\t\t\"value\"=\"检查内容\",\n\t\t\t\t\t\t\t\t\"name\"=\"检查项目\"\n\t\t\t\t\t\t\t\t},...\n\t\t\t\t\t\t\t\t] }",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/loading_inspection.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/record/operLoadRecord.json",
    "title": "配载操作货运记录",
    "name": "operLoadRecord",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "id",
            "description": "<p>货运记录id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>车辆id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_state",
            "description": "<p>货运记录状态</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "操作成功: ",
          "content": "{ \"code\":0 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "操作失败:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/operLoadRecord.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/record/operRecord.json",
    "title": "操作货运记录",
    "name": "operRecord",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>货运记录id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>车辆id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_state",
            "description": "<p>货运记录状态</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "操作成功: ",
          "content": "{ \"code\":0 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "操作失败:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/operRecord.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/record/publishRecord.json",
    "title": "发布我的货运(仓储)记录",
    "name": "publishRecord",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Record",
            "optional": false,
            "field": "Record",
            "description": "<p>实体</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:<br>",
          "content": "{\"code\":-1 插入或更新失败} {\"code\":-2 参数异常} {\"code\":-99未登录}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/publishRecord.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/record/searchMyRecord.json",
    "title": "查询我的货运记录（物流信息）",
    "name": "searchMyRecord",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order_no",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "record_no",
            "description": "<p>货运记录编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "car_number",
            "description": "<p>车牌号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "from_fhrxm",
            "description": "<p>发货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "from_fhd",
            "description": "<p>发货地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "to_shrxm",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "to_shd",
            "description": "<p>收货地</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "record_time_start",
            "description": "<p>货运时间起</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "record_time_end",
            "description": "<p>货运时间止</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": " { \n\t \"code\" : 0, \n\t \"totalCount\" : 查询到的货运记录总数量\n\t \"recordList\":[{货运记录},{货运记录},...{货运记录}] \n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登录 ",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/searchMyRecord.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/record/searchMyRecordDetails.json",
    "title": "查询我的货运记录（物流信息）详情",
    "name": "searchMyRecordDetails",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_id",
            "description": "<p>货运记录id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": " { \n\t\"code\" : 0, \n\t\"record\":{货运记录},\n\t\"appLocationGatherList\":[{app手机定位数据},{app手机定位数据},...{app手机定位数据}],\n\t\"gatherMapList\":[{冷链轨迹温湿度数据},{冷链轨迹温湿度数据},...{冷链轨迹温湿度数据}]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登录 ",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "暂无货运记录",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/searchMyRecordDetails.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/record/searchRecord.json",
    "title": "查询货运记录",
    "name": "searchRecord",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Record",
            "optional": false,
            "field": "Record",
            "description": "<p>Record货运记录</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_state",
            "description": "<p>货运状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\n\t\"recordList\":[{货运记录},{货运记录},...{货运记录}],\n\t\"totalCount\":52,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或超时: ",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/searchRecord.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/record/searchRecordGatherMapList.json",
    "title": "查询我的货运记录温湿度和地图数据",
    "name": "searchRecordGatherMapList",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_id",
            "description": "<p>货运记录id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": " { \n\t\"code\" : 0, \n\t\"_id\": \"61aa6d524c7e4edb80eddee431757979\",\n        \"_last_update_time\": \"最后更新时间\",\n        \"bd_point_name\": \"河南省郑州市二七区陇海中路14号\",\n        \"bd_xpoint\": \"113.66373799999993\",\n        \"bd_ypoint\": \"34.74381097307244\",\n        \"electric\": \"4000\" 电流,\n        \"enclosure_name\": \"N/A\"附件名,\n        \"enterprise_id\": \"00000000000000000000000000000000\",\n        \"equip_id\": \"efe34de029ec4700a309b01ad27f4a9c\" 设备id,\n        \"equip_name\": \"豫A55555\"设备名称,\n        \"gather_time\": \"采集时间\",\n        \"humidity\": \"20.0,29.8,0.0,0.0\" 湿度,\n        \"humidityStr\": \"29.8\" 湿度,\n        \"id\": \"61aa6d524c7e4edb80eddee431757979\",\n        \"ispower\": \"1\" 是否断电,\n        \"json_data\": \"{\"server_time\":1484717306599 服务器时间,\"type\":\"20\",\"licheng\":\"2348.6914383977332\",\"_ret\":\"ok2017-01-18 13:28:26.580\\r\\n\",\"pre_gather_id\":\"0669c0cccb294e32b12b8f04b8b3704a\",\"id\":\"豫A55555\",\"is_stop_temp\":false,\"h\":\"1\",\"i\":\"4000\",\"g1\":\"A\",\"j\":\"1\",\"g2\":\"bd:34.743811\",\"k\":\"0\",\"is_stop\":false,\"g3\":\"bd:113.663738\",\"g4\":\"40.70\",\"gather_time\":1484705425000,\"s\":\"1\",\"t\":\"2017-01-18 10:10:25\",\"u\":\"1|1|1|1\",\"w\":\"1|1|1|1\",\"v1\":\"-122|-122|0000|0000\",\"v2\":\"200|298|0000|0000\"}\",\n        \"last_update_time\": 1484717306871,\n        \"probe_num\": 1探针号,\n        \"probe_position_value\": \"0,1,0,0\"探测值,\n        \"sensor_brand\": \"sensor_njgj_brand\" 传感器品牌,\n        \"sensor_code\": \"豫A55555\" 传感器编码,\n        \"sensor_factory\": \"sensor_factory_njgj\"传感器厂商,\n        \"sensor_model\": \"GTT100MG\"传感器型号,\n        \"sensor_name\": \"豫A55555\" 传感器名称,\n        \"speed\": \"75.38\"速度,\n        \"stay_enclosure\": \"N/A\"保持封闭,\n        \"temper\": \"-12.2,-12.2,0.0,0.0\" 温度,\n        \"temperStr\": \"-12.2\" 温度,\n        \"ttdyStr\": \"正常\",\n        \"wxztStr\": \"正常\",\n        \"xpoint\": \"bd:113.663738\",\n        \"ypoint\": \"bd:34.743811\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登录 ",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "暂无货运记录",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/searchRecordGatherMapList.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/record/searchRecordTimeLine.json",
    "title": "查询我的货运记录（物流信息）操作时间",
    "name": "searchRecordTimeLine",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_id",
            "description": "<p>货运记录id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": " { \n\t\"code\" : 0,\n\t\"no\" : \"RCD170116164314134\",(该字段表示物流编号)\n\t\"car_id\" : \"549870db4776468b8efa90e36cc2e8f1\",(该字段车辆ID)\n\t\"record_state\" : \"record_hy_state_yjs\",(该字段表示物流状态，物流状态如下)\n\t\t\t\t\trecord_hy_state_wdc未到车,\n\t\t\t\t\trecord_hy_state_ydc_wfh已到车，未发货,\n\t\t\t\t\trecord_hy_state_yfh_wdh已发货，未到货,\n\t\t\t\t\trecord_hy_state_ydh_wjs已到货，未结束,\n\t\t\t\t\trecord_hy_state_yjs已结束\n\t\"wuliuInfoList\" : [{\n\t\t\t\"msg\" : \"确认到车\",\n\t\t\t\"time\" : \"2017-01-16 16:53:46\",(该字段表示实际时间)\n\t\t\t\"car_number\" : \"豫A55555\"(该字段表示车牌号)\n\t\t}, {\n\t\t\t\"msg\" : \"开始货运\",\n\t\t\t\"time\" : \"2017-01-16 16:54:25\",\n\t\t\t\"car_number\" : \"豫A55555\",\n\t\t\t\"yj_time\" : \"2017-01-16 16:54:25\"(该字段表示预计时间)\n\t\t}, {\n\t\t\t\"msg\" : \"到达目的地\",\n\t\t\t\"time\" : \"2017-01-16 16:54:28\",\n\t\t\t\"car_number\" : \"豫A55555\",\n\t\t\t\"yj_time\" : \"2017-01-16 16:54:28\"\n\t\t}, {\n\t\t\t\"msg\" : \"结束货运\",\n\t\t\t\"time\" : \"2017-01-16 16:55:37\",\n\t\t\t\"car_number\" : \"豫A55555\"\n\t\t}\n\t],\n\t\"uniqueIDList\":[{\n\t\t\t\t\"uniqueID\": \"\"(追溯码)\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\"uniqueID\": \"\"\n\t\t\t\t}]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登录 ",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "暂无货运记录",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/searchRecordTimeLine.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/record/updateRecordInOut.json",
    "title": "申请换车—添加新车信息",
    "name": "updateRecordInOut",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_id",
            "description": "<p>货运单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "in_out_json",
            "description": "<p>进出信息</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:<br>",
          "content": "{\"code\":-1 货运记录不存在或添加失败}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/updateRecordInOut.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/record/uploadFile.json",
    "title": "上传回单",
    "name": "uploadFile",
    "group": "record",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "temp",
            "description": "<p>是否是临时文件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "save_file_path",
            "description": "<p>保存文件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "suffix",
            "description": "<p>文件格式（类似jpg,png等）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/record/RecordAction.java",
    "groupTitle": "record",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/record/uploadFile.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/requirement_load/getMenualLoadInfo.json",
    "title": "获取配载信息",
    "name": "getMenualLoadInfo",
    "group": "requirement_load",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>页码大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0,\"requirementLoadList\":{ \"no\":订单编号 String \"driver_name\":司机姓名 String \"car_number\":车牌号 String \"humidity_require\":湿度\nString \"jh_end_time\":结束时间 Date \"money_total\":金额总计 Double \"goods_name\":货物名称 String \"temperature_require\":温度 String\n\"goods_total_weight\":总重量 Double \"jh_start_time\":开始时间 Date \"fee_loading\":提货费 Double \"fee_unloading\":送货费 Double\n\"offer_type\":支付方式 String \"start_name\":起点 String \"end_name\":起点 String \"goods_num\":件数 Integer \"goods_total_volume\":总体积 Double\n}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没有登录:<br>",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/load/RequirementLoadAction.java",
    "groupTitle": "requirement_load",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/requirement_load/getMenualLoadInfo.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/requirement_load/getSubRequirementLoadListForDriver.json",
    "title": "获取配载流程信息",
    "name": "getSubRequirementLoadListForDriver",
    "group": "requirement_load",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "root_id",
            "description": "<p>配载id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0,\"requirementLoadList\":{ 装货： \"goods_name\":货物名称 String \"goods_total_weight\":重量 Double \"goods_num\":件数 Integer\n\"goods_total_volume\":体积 Double \"start_name\":装货地 String 运输中： \"start_name\":起始地 String \"end_name\":目的地 String \"yj_time\":预计时间\nInteger \"distance\":预计距离 Double 卸货： \"goods_name\":货物名称 String \"goods_num\":件数 Integer \"end_name\":卸货地 String }}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没有登录:<br>",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/load/RequirementLoadAction.java",
    "groupTitle": "requirement_load",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/requirement_load/getSubRequirementLoadListForDriver.json"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/requirement_match/deleteRequirementMatch.json",
    "title": "删除需求匹配",
    "name": "deleteRequirementMatch",
    "group": "requirement_match",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "id",
            "description": "<p>待删除的需求匹配 id</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>待删除的需求匹配 id数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常: ",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/RequirementMatchAction.java",
    "groupTitle": "requirement_match",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/requirement_match/deleteRequirementMatch.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/requirement_match/deleteRequirementMatchBy.json",
    "title": "删除需求匹配(将该记录做个删除标志，置为不可用)",
    "name": "deleteRequirementMatchBy",
    "group": "requirement_match",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "id",
            "description": "<p>待删除的需求匹配 id</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>待删除的需求匹配 id数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常: ",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/RequirementMatchAction.java",
    "groupTitle": "requirement_match",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/requirement_match/deleteRequirementMatchBy.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/requirement_match/frontCarRequirementMatch.json",
    "title": "根据需求id查询车辆线路匹配",
    "name": "frontCarRequirementMatch",
    "group": "requirement_match",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_id",
            "description": "<p>需求id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{ \"code\":0, \"matchs\":{\n\"third\":[{三段线路1},{三段线路2},...{三段线路n}],\n\"first\":[{直达线路1},{直达线路2},...{直达线路n}],\n\"second\":[{二段线路1},{二段线路2},...{二段线路n}] } } 说明：\n1.first：完成该项需求，不需要换车即可达到 second：完成该项需求，需要换一次车到达\nthird：完成该项需求，需要换二次车到达\n2.各段线路的每组线路的第一个的pid为需求id(requirement_id),\n第二个的pid为第一个匹配的id，依次类推",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆:<br>",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "requirement_id参数不存在或为空:<br>",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/RequirementMatchAction.java",
    "groupTitle": "requirement_match",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/requirement_match/frontCarRequirementMatch.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/requirement_match/carRequirementMatch.json",
    "title": "根据需求id查询车辆线路匹配",
    "name": "frontCarRequirementMatch",
    "group": "requirement_match",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_id",
            "description": "<p>需求id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{ \"code\":0, \"matchs\":{\n\"third\":[{三段线路1},{三段线路2},...{三段线路n}],\n\"first\":[{直达线路1},{直达线路2},...{直达线路n}],\n\"second\":[{二段线路1},{二段线路2},...{二段线路n}] } } 说明：\n1.first：完成该项需求，不需要换车即可达到 second：完成该项需求，需要换一次车到达\nthird：完成该项需求，需要换二次车到达\n2.各段线路的每组线路的第一个的pid为需求id(requirement_id),\n第二个的pid为第一个匹配的id，依次类推",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆:<br>",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "requirement_id参数不存在或为空:<br>",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/RequirementMatchAction.java",
    "groupTitle": "requirement_match",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/requirement_match/carRequirementMatch.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/requirement_match/publishRequirementMatch.json",
    "title": "发布需求匹配",
    "name": "publishRequirementMatch",
    "group": "requirement_match",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "RequirementMatch",
            "optional": false,
            "field": "RequirementMatch",
            "description": "<p>实体</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或超时或无权限:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/RequirementMatchAction.java",
    "groupTitle": "requirement_match",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/requirement_match/publishRequirementMatch.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/requirement_match/searchMyRequirementMatch.json",
    "title": "查询我的需求匹配",
    "name": "searchRequirementMatch",
    "group": "requirement_match",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "RequirementMatch",
            "optional": false,
            "field": "RequirementMatch",
            "description": "<p>实体</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"code\" : 0, \"totalCount\" : 15,",
          "content": "\"requirementMatchList\" : [{ \n\"version\" : 1, \"layer\" :\n1, \"no\" : \"20160914132734400\", \n\"from_mobile_phone\" : \"zywlgs\", \n\"id\" : \"a58a0f8bc13140139246010bfe6ee70e\",\n\"is_enabled\" : true, \n\"requirement_id\" : \"b38f71981e5349bf974335b6dc7f5031\",\n\"create_time\" : 1473830854400, \n\"match_state\" : \"未确认\", \n\"update_time\" : 1473830854400, \n\"from_user_id\" : \"d7534cdc7c7648728fe17d2c9a7d20de\", \n\"destination\" : \"广西壮族自治区/柳州市\", \n\"is_deleted\" : false, \n\"car_is_fancheng\" : \"N/A\", \n\"car_id\" : \"3006e0fd18114d55a3e1537797a81512\", \n\"car_number\" : \"广西来宾怡毅运输有限公司\", \n\"origin\" : \"广西壮族自治区/来宾市\", \n\"pid\" : \"b38f71981e5349bf974335b6dc7f5031\", \n\"requirement_type\" : \"车辆\" } ] }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或超时或无权限: ",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/RequirementMatchAction.java",
    "groupTitle": "requirement_match",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/requirement_match/searchMyRequirementMatch.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/requirement_match/searchRequirementMathPlanByRequirementId.json",
    "title": "根据需求id查询匹配的方案",
    "name": "searchRequirementMathPlanByRequirementId",
    "group": "requirement_match",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_id",
            "description": "<p>需求id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"code\": 0, \"requirementMatchList\": [{",
          "content": "\"desc\": 方案名称（线路名称） String, \"id\":方案id String, ... },\n... ,{ ... } ] }\n备注：只标注了部分由于字段，不存在表示该字段对应的值不存在，更多字段以实际返回为主",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录: ",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "requirement_id参数缺少或为空: ",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/RequirementMatchAction.java",
    "groupTitle": "requirement_match",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/requirement_match/searchRequirementMathPlanByRequirementId.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/requirement_match/searchRequirementMathRouteByRequirementId.json",
    "title": "根据需求匹配方案id查询匹配的线路",
    "name": "searchRequirementMathRouteByRequirementId",
    "group": "requirement_match",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirementMatchPlan_id",
            "description": "<p>需求匹配方案id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"code\": 0, \"requirementMatchList\": [{",
          "content": "\"id\": 匹配线路id String, \"from_address\": 路线始地址 String,\n\"to_address\": 路线终地址 String, ... }, ... ,{ ... } ] }\n备注：只标注了部分由于字段，不存在表示该字段对应的值不存在，更多字段以实际返回为主",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录: ",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "requirementMatchPlan_id参数缺少或为空: ",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/RequirementMatchAction.java",
    "groupTitle": "requirement_match",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/requirement_match/searchRequirementMathRouteByRequirementId.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/requirement_match/searchRequirementMathTransportByRequirementId.json",
    "title": "根据需求匹配路线id查询匹配的车辆",
    "name": "searchRequirementMathTransportByRequirementId",
    "group": "requirement_match",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirementMatchRoute_id",
            "description": "<p>需求匹配路线id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { \"code\": 0, ",
          "content": "\t\"requirementMatchList\": [{\n\t\t\t\t\t\t\t\"driver_name\":\"司机姓名\",\n\t\t\t\t\t\t\t\"original_image_url\":\"用户头像\",\n                   \t\t\"car_number\": 车牌号 String, \n                   \t\t\"vehicle_distance\": 车辆距离  Double, \n                   \t\t\"id\": 车辆匹配id String,\n                   \t\t\"requirement_type_name\": 需求匹配名称 String,\n                   \t\t\"from_address\": 车辆线路始地址 String, \n                   \t\t\"to_address\": 车辆线路终地址  String, \n                   \t\t\"origin\": 车辆线路始地址详情 String, \n                   \t\t\"destination\": 车辆线路终地址详情 String, \n                   \t\t\"route_name\": 路线名称 String,\n                   \t\t\"siji_authentication\": 司机是否认证 Boolean false或空为未认证,true 已认证, \n                   \t\t\"car_original_url\":\"车辆图片url\",\n                   \t\t\"update_time\": 更新时间 Date, \n                  \t\t\"match_state_name\": 匹配状态 String, \n                   \t\t\"car_typ_name\": 车辆类型 String, ... }, ...\n                  \t\t ,{ ... } ] }\n                   备注：只标注了部分由于字段，不存在表示该字段对应的值不存在，更多字段以实际返回为主",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录: ",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "requirementMatchRoute_id参数缺少或为空: ",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/RequirementMatchAction.java",
    "groupTitle": "requirement_match",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/requirement_match/searchRequirementMathTransportByRequirementId.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/requirement_match/warehouseRequirementMatch.json",
    "title": "根据需求id查询仓库匹配",
    "name": "warehouseRequirementMatch",
    "group": "requirement_match",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_id",
            "description": "<p>需求id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{ \"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆:<br>",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "requirement_id参数不存在或为空:<br>",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/RequirementMatchAction.java",
    "groupTitle": "requirement_match",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/requirement_match/warehouseRequirementMatch.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/route/addRoute.json",
    "title": "司机或物流公司调度员新增车辆长跑路线",
    "name": "addRoute",
    "group": "route",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Route",
            "optional": false,
            "field": "route",
            "description": "<p>路线对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2该账户下已经存在该路线、-99未登录",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/route/RouteAction.java",
    "groupTitle": "route",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/route/addRoute.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/route/deleteRouteById.json",
    "title": "司机或物流公司调度员删除车辆长跑路线",
    "name": "deleteRouteById",
    "group": "route",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route_id",
            "description": "<p>路线ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2该账户下没有修改权限、-99未登录",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/route/RouteAction.java",
    "groupTitle": "route",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/route/deleteRouteById.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/route/editRoute.json",
    "title": "司机或物流公司调度员修改车辆长跑路线",
    "name": "editRoute",
    "group": "route",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Route",
            "optional": false,
            "field": "route",
            "description": "<p>路线对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2没有该路线、-99未登录",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/route/RouteAction.java",
    "groupTitle": "route",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/route/editRoute.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/route/selectRouteBy.json",
    "title": "司机或物流公司调度员查询该账户下路线条数",
    "name": "selectRouteBy",
    "group": "route",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contacts_id",
            "description": "<p>联系人ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>每页显示条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2该账户下已经存在该路线、-99未登录",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/route/RouteAction.java",
    "groupTitle": "route",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/route/selectRouteBy.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/route/selectRouteById.json",
    "title": "司机或物流公司调度员查看车辆常跑路线详情",
    "name": "selectRouteById",
    "group": "route",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "route_id",
            "description": "<p>路线ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2该账户下没有修改权限、-99未登录",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/route/RouteAction.java",
    "groupTitle": "route",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/route/selectRouteById.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/sms/onsendSMS.json",
    "title": "发送短信验证码",
    "name": "sendSMS",
    "group": "sms",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "60秒之内不能发送2次:<br>",
          "content": "-2",
          "type": "json"
        },
        {
          "title": "参数错误:<br>",
          "content": "-1失败",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/sms/SmsAction.java",
    "groupTitle": "sms",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/sms/onsendSMS.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/sms/sendSMS.json",
    "title": "发送短信验证码",
    "name": "sendSMS",
    "group": "sms",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "60秒之内不能发送2次:<br>",
          "content": "-2",
          "type": "json"
        },
        {
          "title": "参数错误:<br>",
          "content": "-1失败",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/sms/SmsAction.java",
    "groupTitle": "sms",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/sms/sendSMS.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/trade_record/doRecharge.json",
    "title": "充值",
    "name": "doRecharge",
    "group": "trade",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "recharge_money",
            "description": "<p>充值金额</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "调用失败:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/trade/TradeRecordAction.java",
    "groupTitle": "trade",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/trade_record/doRecharge.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/trade/searchTrade.json",
    "title": "查询交易明细列表",
    "name": "searchTrade",
    "group": "trade",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Trade",
            "optional": false,
            "field": "trade",
            "description": "<p>交易明细实体</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0\n \"tradeList\":[{\n\t\t\t\t\"trade_type\": \"withdraw\",\n    \t\t\t\"prekymoney\": 7956,\n    \t\t\t\"mobile_phone\": \"zyqyhz\",\n    \t\t\t\"presummoney\": 7956,\n    \t\t\t\"trademoney\": 22,\n    \t\t\t\"tradetime\": 1478568861587,\n    \t\t\t\"create_time\": 1478568861589,\n    \t\t\t\"update_time\": 1478568909930,\n    \t\t\t\"trade_mark\": \"order_pay\",\n    \t\t\t\"version\": 2,\n    \t\t\t\"trade_id\": \"fe977caa02514cbf9e396cdf14697de1\",\n    \t\t\t\"user_id\": \"41b8d8b94f114e2eb767aef47a6adf95\",\n    \t\t\t\"no\": \"TRA161108093421587\",\n    \t\t\t\"id\": \"424fadbdd06540a49669adf5d29c6228\",\n    \t\t\t\"endsummoney\": 7934,\n    \t\t\t\"endkymoney\": 7934\n\t\t\t}\n\t\t],\n                   \"totalCount\":20}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常 :",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/trade/TradeAction.java",
    "groupTitle": "trade",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/trade/searchTrade.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/with_draw/toApplicationToCash.json",
    "title": "提现",
    "name": "toApplicationToCash",
    "group": "trade",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "withdraw_money",
            "description": "<p>提现金额</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_card_id",
            "description": "<p>关联银行卡ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "调用失败:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "用户ID不能为空:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "提现金额不能非法:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "用户ID不合法:",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "银行卡不存在:",
          "content": "{\"code\":-5}",
          "type": "json"
        },
        {
          "title": "账户余额不足或提现金额大于可用金额:",
          "content": "{\"code\":-6}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/trade/WithDrawAction.java",
    "groupTitle": "trade",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/with_draw/toApplicationToCash.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/applyBindCompanyByDriver.json",
    "title": "司机端企业认证",
    "name": "applyBindCompanyByDriver",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_name",
            "description": "<p>企业名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_license",
            "description": "<p>营业执照</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数为空:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "不存在该企业:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "你还没有车辆，无法提交审核:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "不是司机用户，请核查:",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "已经绑定企业，不能再次绑定:",
          "content": "{\"code\":-5}",
          "type": "json"
        },
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/applyBindCompanyByDriver.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/user/deleteUserSign.json",
    "title": "删除证书",
    "name": "deleteUserSign",
    "group": "user",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没有登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/deleteUserSign.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/user/distubTimeAndLoadImage.json",
    "title": "设置免打扰和wifi加载图片",
    "name": "distubTimeAndLoadImage",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_disturb",
            "description": "<p>是否免打扰</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_load_image",
            "description": "<p>是否wifi下读取图片</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没有登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "设置参数不能为空:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "不存在该用户:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "设置失败:",
          "content": "{\"code\":-4}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/distubTimeAndLoadImage.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/doLogin.json",
    "title": "APP用户登录功能",
    "name": "doLogin",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2手机号或密码错误、-3手机号或密码错误",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/doLogin.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/doLogin.json",
    "title": "登陆",
    "name": "doLogin",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "手机号不正确:",
          "content": "{\"code\":-3}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/LoginAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/doLogin.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/doRegister.json",
    "title": "注册",
    "name": "doRegister",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "invitation_code",
            "description": "<p>邀请码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_type",
            "description": "<p>用户类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_no",
            "description": "<p>车辆编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "driver_name",
            "description": "<p>司机姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_license",
            "description": "<p>企业执照</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operation_certificate_image",
            "description": "<p>营运证照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "register_certificate_image",
            "description": "<p>登记证正面照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "travel_certificate_image",
            "description": "<p>行驶证证正面照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "driver_license_front",
            "description": "<p>驾驶证证正面照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprice_no",
            "description": "<p>企业执照号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "register_no",
            "description": "<p>登记证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "driver_no",
            "description": "<p>行驶证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operation_certificate_no",
            "description": "<p>营运证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "driver_license_no",
            "description": "<p>驾驶证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ent_id",
            "description": "<p>企业ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_name",
            "description": "<p>企业名称</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "该用户已经存在、无需注册:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "已经存在该车辆、车牌号不能重复:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "车牌号不能为空:",
          "content": "{\"code\":-4}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/LoginAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/doRegister.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/findPasswd.json",
    "title": "找回密码",
    "name": "findPasswd",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verification_code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/findPasswd.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/user/forgotPassword.json",
    "title": "忘记密码找回",
    "name": "forgotPassword",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功[短信已发送]",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "短信发送失败",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "60秒之内不能发送2次",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "账户不存在",
          "content": "{\"code\":-3}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/forgotPassword.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/getMyBusinessCard.json",
    "title": "APP我的名片",
    "name": "getMyBusinessCard",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contacts_id",
            "description": "<p>联系人ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "  {\"code\":0,\n\t\"sign_bjazt_seal_code_2\":\"test005\",\n\t\t\"version\":802,\n\t\t\"routeCount\":\"路线个数\",\n\t\t\"enterprise_name\":\"无\",\n\t\t\"thumb_image_url\":\"/fs_root/upload/user/file/41b8d8b94f114e2eb767aef47a6adf95/cbb236bc72804830a02254ebbb6429a3.png\",\n\t\t\"create_time\":1477985345427,\n\t\t\"credit_rating_score\":430.2272803,\n\t\t\"recordCount\":\"交易次数\",\n\t\t\"enterprise_id\":\"12241b0ed6bb4035a12bf4cbe24e36fa\",\n\t\t\"user_name\":\"紫云企业货主\",\n\t\t\"sign_bjazt_seal_code\":\"00000001004001\",\n\t\t\"user_type\":501,\n\t\t\"create_user_id\":\"423e75d2fa7c4ade893bb56d9206a083\",\n\t\t\"no\":\"20161101152739808\",\n\t\t\"id\":\"41b8d8b94f114e2eb767aef47a6adf95\",\n\t\t\"update_time\":1481770331728,\n\t\t\"real_name\":\"紫云企业货主\",\n\t\t\"user_state\":3,\n\t\t\"address\":\"放第三十四\",\n\t\t\"original_image_url\":\"/fs_root/upload/user/file/41b8d8b94f114e2eb767aef47a6adf95/ad7126ee065f4aa2b777f3ed65ed155d.png\",\n\t\t\"mobile_phone\":\"zyqyhz\",\n\t\t\"QQ\":\"9052225\",\n\t\t\"start_address\":\"常用发货地\",\n\t\t\"end_address\":\"常用收货地\",\n\t\t\"good_type\":\"常发货物\",\n\t\t\"carCount\":\"车辆个数\",\n\t\t\"recordCount\":\"货运记录\",\n\t\t\"car_state\":\"车辆认证\",\n\t\t\"credit_rating_score\":\"信用分数\"\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没有登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/getMyBusinessCard.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/user/getMyPFX.json",
    "title": "app签章获取证书密钥",
    "name": "getMyPFX",
    "group": "user",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没有登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "没有证书密钥:",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/getMyPFX.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/user/getMyUsersList.json",
    "title": "获取我的用户列表",
    "name": "getMyUsersList",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没有登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "不存在该用户:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "未实名认证:",
          "content": "{\"code\":-3}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/getMyUsersList.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/user/getUserConfirmState.json",
    "title": "app获取用户认证信息",
    "name": "getUserConfirmState",
    "group": "user",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没有登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "请进行认证，否则无法发布需求:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "正在审核认证，请耐心等待:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "审核未通过",
          "content": "{\"code\":-3}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/getUserConfirmState.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/getUserDetail.json",
    "title": "获取用户信息",
    "name": "getUserDetail",
    "group": "user",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "  {\n\t\"code\":1,\n\t\"user_name\" : \"用户名\",\n\t\"省略\" : \"ps(省略处为用户基本信息，相关字段参考用户对象，此处不在一一陈述)\",\n\t\"enterprise_state\":\"企业审核状态：1、未审核,2、审核通过,3、审核不通过(新增20170224)\",\n\t\"enterprise_license\":\"企业营业执照照片(新增20170224)\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户不存在:<br>",
          "content": "-1",
          "type": "json"
        },
        {
          "title": "用户未登录:<br>",
          "content": "-99",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/getUserDetail.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/getUserPersonalDetail.json",
    "title": "APP获取个人信息",
    "name": "getUserPersonalDetail",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-99未登录",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/getUserPersonalDetail.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/user/isExistMobile.json",
    "title": "手机号是否注册",
    "name": "isExistMobile",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "没有注册:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "已经注册:",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/isExistMobile.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/modifyEnterpriceConfirm.json",
    "title": "企业认证",
    "name": "modifyEnterpriceConfirm",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_name",
            "description": "<p>企业名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprise_license",
            "description": "<p>营业执照</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/modifyEnterpriceConfirm.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/modifyMobilePhone.json",
    "title": "换绑手机号",
    "name": "modifyMobilePhone",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>新绑定的手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verification_code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/modifyMobilePhone.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/modifyPasswd.json",
    "title": "修改密码",
    "name": "modifyPasswd",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "original_password",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "旧密码错误:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "旧密码新密码相同:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/modifyPasswd.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/modifyPersonalConfirm.json",
    "title": "实名认证",
    "name": "modifyPersonalConfirm",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "real_name",
            "description": "<p>用户真实姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_no",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_front_side",
            "description": "<p>身份证正面照</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "已认证:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/modifyPersonalConfirm.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/modifyPersonalInfo.json",
    "title": "完善用户信息",
    "name": "modifyPersonalInfo",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>用户对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/modifyPersonalInfo.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/user/no_fixed_route_update.json",
    "title": "司机是否选择无固定路线",
    "name": "no_fixed_route_update",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "no_fixed_route",
            "description": "<p>: { \t\t\t\t\t\t\t\t&quot;user_id&quot; : user_id \t\t\t\t\t\t\t\t&quot;true&quot; : 选择无固定路线, \t\t\t\t\t\t\t\t&quot;false&quot; : 取消无固定路线, \t\t\t\t\t\t\t  }</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        },
        {
          "title": "用户ID为空:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "修改失败:",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/no_fixed_route_update.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/perfectDriverAndDispatchPersonalInfo.json",
    "title": "APP完善个人信息(司机调度端)",
    "name": "perfectDriverAndDispatchPersonalInfo",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "real_name",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprice_name",
            "description": "<p>企业名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enterprice_id",
            "description": "<p>企业ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "car_type",
            "description": "<p>车辆类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_type",
            "description": "<p>用户类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "routes_json",
            "description": "<p>路线的json字符串</p>"
          },
          {
            "group": "Parameter",
            "type": "Car",
            "optional": false,
            "field": "car",
            "description": "<p>车辆对象</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "no_fixed_route",
            "description": "<p>有无固定路线</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "用户类型不对:",
          "content": "{\"code\":-4}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/perfectDriverAndDispatchPersonalInfo.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/perfectPersonalInfo.json",
    "title": "APP完善个人信息(货主端)",
    "name": "perfectPersonalInfo",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "Route",
            "optional": false,
            "field": "route",
            "description": "<p>路线对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/perfectPersonalInfo.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/register.json",
    "title": "APP用户注册功能",
    "name": "register",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verification_code",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_type",
            "description": "<p>用户类型:</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2已经存在该用户、-3验证码不正确",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/register.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/resetPassword.json",
    "title": "APP用户重置密码功能",
    "name": "resetPassword",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verification_code",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2不存在该用户、-3验证码不正确",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/resetPassword.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/user/searchUser.json",
    "title": "搜索用户",
    "name": "searchUser",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "账户不能为空:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "未登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/searchUser.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/user/updateDriverAsReceiver.json",
    "title": "给物流账户开通确认到车权限",
    "name": "updateDriverAsReceiver",
    "group": "user",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        },
        {
          "title": "用户ID为空:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "修改失败:",
          "content": "{\"code\":-2}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/updateDriverAsReceiver.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/updateGetPerfectPersonalInfo.json",
    "title": "APP获取完善的个人信息(货主端)",
    "name": "updateGetPerfectPersonalInfo",
    "group": "user",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "  {\"code\":0\n\t\"real_name\":姓名,\n\t\"mobile_phone\":手机号,\n\t\"card_no\":身份证号,\n\t\"card_front_side\":身份证正面照片,\n\t\"origin_address\":常用发货地,\n\t\"origin_address_code\":常用发货地编码,\n\t\"receive_address\":常用收货地,\n\t\"receive_address_code\":常用收货地编码,\n\t\"good_type\":货物类型,\n\t\"review_fail_reason\":审核失败原因,\n\t\"route\":路线实体,\n\t\"is_real_name\":bool 姓名,\n\t\"is_card_no\":bool 身份证号,\n\t\"is_card_front_side\":bool 身份证照片,\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "参数异常:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/updateGetPerfectPersonalInfo.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/updateMyPFXPassword.json",
    "title": "更换密码（为App签章动态获取密码准备）",
    "name": "updateMyPFXPassword",
    "group": "user",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        },
        {
          "title": "更改密码失败:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "查询用户不存在:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "用户暂未获得签章权限，请联系紫云客服获取签章权限:",
          "content": "{\"code\":-3}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没有登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/updateMyPFXPassword.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/updateUserInfo.json",
    "title": "补充用户信息",
    "name": "updateUserInfo",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>用户对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败、-2icon_url失效、-99未登录",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/updateUserInfo.json"
      }
    ]
  },
  {
    "type": "",
    "url": "/user/updateUserStateFirst.json",
    "title": "用户审核成功后第一次登录",
    "name": "updateUserStateFirst",
    "group": "user",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        },
        {
          "title": "失败:",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/updateUserStateFirst.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/uploadFile.json",
    "title": "上传头像",
    "name": "uploadFile",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "temp",
            "description": "<p>是否是临时文件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "save_file_path",
            "description": "<p>保存文件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "suffix",
            "description": "<p>文件格式（类似jpg,png等）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/user/UserAction.java",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/user/uploadFile.json"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/warehouse_requirement/cancelWarehouseRequirement.json",
    "title": "取消发布货源找库需求",
    "name": "cancelWarehouseRequirement",
    "group": "warehouse_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>待取消的发货找库需求 id数组</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>待取消的发货找库需求 id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "已生成订单:<br>",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "已完成:<br>",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "已取消需求:<br>",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "不存在该需求:<br>",
          "content": "{\"code\":-5}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/WarehouseRequirementAction.java",
    "groupTitle": "warehouse_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse_requirement/cancelWarehouseRequirement.json"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/warehouse_requirement/deleteWarehouseRequirementBy.json",
    "title": "删除发布货源找库需求(将该记录做个删除标志，置为不可用)",
    "name": "deleteWarehouseRequirementBy",
    "group": "warehouse_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>待删除的发货找库需求 id数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/WarehouseRequirementAction.java",
    "groupTitle": "warehouse_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse_requirement/deleteWarehouseRequirementBy.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/warehouse_requirement/publishFrontWarehouseRequirement.json",
    "title": "发布仓储需求",
    "name": "publishFrontWarehouseRequirement",
    "group": "warehouse_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "WarehouseRequirement",
            "optional": false,
            "field": "WarehouseRequirement",
            "description": "<p>WarehouseRequirement发货仓储需求 (备注：app可以使用下面的参数进行操作)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_address",
            "description": "<p>仓库地址（省市区）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_address_detail",
            "description": "<p>仓库详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_address_code",
            "description": "<p>仓库地址（省市区）编码 类似：410000000000/411600000000/411625000000</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "goods_type",
            "description": "<p>货物类型 <code>fresh_fruit</code>生鲜水果,<code>meat_products</code>禽肉类产品,<code>sea_food</code>水产品,<code>low_temperature_dairy</code>低温奶制品, <code>frozen_pastry</code>速冻面点,<code>ice_food</code>冰品,<code>cold_goods</code>冷藏食品,<code>medicine</code>药品,<code>freezer_food</code>冷冻食品,<code>other</code>其它</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "goods_weight",
            "description": "<p>货物重量</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "goods_num",
            "description": "<p>货物件数</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_length",
            "description": "<p>货物长（m）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_width",
            "description": "<p>货物宽（m）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_height",
            "description": "<p>货物高（m）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_volume",
            "description": "<p>货物体积（m³）</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "yj_ks_time",
            "description": "<p>到达时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "sj_ks_time",
            "description": "<p>到达时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "storage_pay_time_type",
            "description": "<p>仓储费支付方式:<code>1</code>立即付,<code>2</code>协议付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0\n\t\"requirement_id\":生成的发货找库需求id String\n\t\"requirement_no\":需求编号 String\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "fhr_hw_address或fhr_mobiletel为空:",
          "content": "{\"code\":-9}",
          "type": "json"
        },
        {
          "title": "暂无匹配:",
          "content": "{\"code\":-10}",
          "type": "json"
        },
        {
          "title": "发布失败:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没有实名认证或没有通过审核，没有发布权限:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/WarehouseRequirementAction.java",
    "groupTitle": "warehouse_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse_requirement/publishFrontWarehouseRequirement.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/warehouse_requirement/publishWarehouseRequirement.json",
    "title": "发布货源找库需求",
    "name": "publishWarehouseRequirement",
    "group": "warehouse_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "WarehouseRequirement",
            "optional": false,
            "field": "WarehouseRequirement",
            "description": "<p>WarehouseRequirement发货找库需求 (备注：app可以使用下面的参数进行操作)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_address",
            "description": "<p>仓库地址（省市区）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_address_code",
            "description": "<p>仓库地址（省市区）编码 类似：410000000000/411600000000/411625000000</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "goods_type",
            "description": "<p>货物类型 <code>fresh_fruit</code>生鲜水果,<code>meat_products</code>禽肉类产品,<code>sea_food</code>水产品,<code>low_temperature_dairy</code>低温奶制品, <code>frozen_pastry</code>速冻面点,<code>ice_food</code>冰品,<code>cold_goods</code>冷藏食品,<code>medicine</code>药品,<code>freezer_food</code>冷冻食品,<code>other</code>其它</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "goods_weight",
            "description": "<p>货物重量</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "goods_num",
            "description": "<p>货物件数</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_length",
            "description": "<p>货物长（m）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_width",
            "description": "<p>货物宽（m）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_height",
            "description": "<p>货物高（m）</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "goods_volume",
            "description": "<p>货物体积（m³）</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "yj_dh_time",
            "description": "<p>预计到货时间（到达时间）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "storage_pay_time_type",
            "description": "<p>仓储费支付方式:<code>1</code>立即付,<code>2</code>协议付</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0\n \"requirement_id\":生成的发货找库需求id String\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "fhr_hw_address或fhr_mobiletel为空:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "发布失败:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "没有实名认证或没有通过审核，没有发布权限:",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/WarehouseRequirementAction.java",
    "groupTitle": "warehouse_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse_requirement/publishWarehouseRequirement.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/warehouse_requirement/searchCarRequirement.json",
    "title": "根据条件查询货源(找库)需求",
    "name": "searchCarRequirement",
    "group": "warehouse_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fhr_hw_address_code",
            "description": "<p>发货地编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shr_address_code",
            "description": "<p>收货地编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_type",
            "description": "<p>货物类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_type",
            "description": "<p>仓库类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/WarehouseRequirementAction.java",
    "groupTitle": "warehouse_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse_requirement/searchCarRequirement.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/warehouse_requirement/searchMyWarehouseCurrentOrHistoryRequirement.json",
    "title": "查询我发布的仓库的当前需求或历史需求",
    "name": "searchMyWarehouseCurrentOrHistoryRequirement",
    "group": "warehouse_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "requirement_tag",
            "description": "<p>需求标志<code>current</code>当前需求, <code>history</code>历史需求</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: { ",
          "content": "\"requirementList\" : [{ \n\t\t\t\t\t\t\"no\":需求编号 String, \n\t\t\t\t\t\t\"enquiry_number\":竞价数量 Integer, \n\t\t\t\t\t\t\"warehouse_address\":存货地 String,\n                   \t\"yj_ks_time\":到达时间 String,\n                   \t\"goods_num\": 货物件数 Integer, \n                   \t\"goods_volume\": 货物体积 Double, \n                   \t\"goods_weight\": 货物重量 Double,\n                   \t\"goods_type\": 货物类型 String,\n                    \t\"sj_ks_time\": 仓储时间 String,\n                    \t\"remark\": 备注 String,... },{ ...\n                   },...{ ... }], \"code\" : 0, \"totalCount\" :\n                   查询我发布的当前需求或历史需求总数量 }\n                   备注：只标注了部分由于字段，不存在表示该字段对应的值不存在，更多字段以实际返回为主",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆: ",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/WarehouseRequirementAction.java",
    "groupTitle": "warehouse_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse_requirement/searchMyWarehouseCurrentOrHistoryRequirement.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/warehouse_requirement/searchMyWarehouseRequirement.json",
    "title": "查询我的货源(找库)需求",
    "name": "searchMyWarehouseRequirement",
    "group": "warehouse_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "WarehouseRequirement",
            "optional": true,
            "field": "WarehouseRequirement",
            "description": "<p>WarehouseRequirement仓库需求</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": " {\n\t\"carRequirementList\" : [{发货找库需求},{发货找库需求},...{发货找库需求}],\n\t\"code\" : 0,\n\t\"totalCount\" : 查询到的发货找库需求总数量\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/WarehouseRequirementAction.java",
    "groupTitle": "warehouse_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse_requirement/searchMyWarehouseRequirement.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/warehouse_requirement/searchMyWarehouseRequirementDetails.json",
    "title": "查询我的发货找库需求详情",
    "name": "searchMyWarehouseRequirementDetails",
    "group": "warehouse_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirement_id",
            "description": "<p>需求id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>页面大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\n     \"code\":0,\n     \"warehouseRequirement\":{发货找库需求}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "需求id为空或无需求id对应的需求:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "没登陆或无权限:<br>",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "没登录:<br>",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/WarehouseRequirementAction.java",
    "groupTitle": "warehouse_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse_requirement/searchMyWarehouseRequirementDetails.json"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/warehouse_requirement/searchRequirement_Warehouse.json",
    "title": "前台登录人发布过的仓库需求列表",
    "name": "searchRequirement_Warehouse",
    "group": "warehouse_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "WarehouseRequirement",
            "optional": false,
            "field": "eq",
            "description": "<p>仓库需求实体类</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>数目</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/WarehouseRequirementAction.java",
    "groupTitle": "warehouse_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse_requirement/searchRequirement_Warehouse.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/warehouse_requirement/searchWareHouseMatchListByWareHRe.json",
    "title": "根据发货找库需求进行货库匹配",
    "name": "searchWareHouseMatchListByWareHRe",
    "group": "warehouse_requirement",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>(与String id二选一) 发货找车需求实体id数组</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>(可选) 发货找车需求实体id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "无数据生成:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "没登陆或无权限:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/requirement/WarehouseRequirementAction.java",
    "groupTitle": "warehouse_requirement",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse_requirement/searchWareHouseMatchListByWareHRe.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/car/deleteWarehouseByWarehouseId.json",
    "title": "根据id删除仓库信息",
    "name": "deleteWarehouseByWarehouseId",
    "group": "warehouse",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_id",
            "description": "<p>仓库ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0}",
          "type": "json"
        },
        {
          "title": "Config[TODO]:<br>",
          "content": "{\"code\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数错误:<br>",
          "content": "-1失败",
          "type": "json"
        },
        {
          "title": "未登录:<br>",
          "content": "-99",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/warehouse/WarehouseAction.java",
    "groupTitle": "warehouse",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/car/deleteWarehouseByWarehouseId.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/warehouseenquiry/acceptWarehouseOffer.json",
    "title": "货主同意报价",
    "name": "acceptWarehouseOffer",
    "group": "warehouseenquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enquiry_id",
            "description": "<p>询价id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "1.没登陆或无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "2.询价id为空或无询价id对应的询价:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "3.无报价不能进行同意:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "4.已同意报价，不必重复同意:",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "5.已驳回的报价，不能再同意:",
          "content": "{\"code\":-5}",
          "type": "json"
        },
        {
          "title": "6.同意报价失败:",
          "content": "{\"code\":-6}",
          "type": "json"
        },
        {
          "title": "7.已同意其他报价，不能重复同意",
          "content": "{\"code\":-7}",
          "type": "json"
        },
        {
          "title": "8.已接受其他方案，不能再接受此方案",
          "content": "{\"code\":-8}",
          "type": "json"
        },
        {
          "title": "9.已接受其他报价，不能再同意",
          "content": "{\"code\":-9}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/WarehouseEnquiryAction.java",
    "groupTitle": "warehouseenquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouseenquiry/acceptWarehouseOffer.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/warehouseenquiry/initiateWarehouseEnquiry.json",
    "title": "货主发起询价",
    "name": "initiateWarehouseEnquiry",
    "group": "warehouseenquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "requirement_match_id",
            "description": "<p>询价id数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆或无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "询价id为空:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "发起询价失败:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "已接受同意匹配路线下的其他报价",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "已接受其他匹配路线下的报价",
          "content": "{\"code\":-5}",
          "type": "json"
        },
        {
          "title": "匹配不存在",
          "content": "{\"code\":-6}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/WarehouseEnquiryAction.java",
    "groupTitle": "warehouseenquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouseenquiry/initiateWarehouseEnquiry.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/warehouseenquiry/initiateWarehouseOffer.json",
    "title": "仓储方发起报价",
    "name": "initiateWarehouseOffer",
    "group": "warehouseenquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enquiry_id",
            "description": "<p>询价id</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "offer_price",
            "description": "<p>报价金额</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "1.没登陆或无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "2.询价id为空或无询价id对应的询价:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "3.报价金额为空 或者不是数字:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "4.报价失败:",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "5.已同意报价，不得悔改:",
          "content": "{\"code\":-5}",
          "type": "json"
        },
        {
          "title": "6.发货方已同意其他报价:",
          "content": "{\"code\":-7}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/WarehouseEnquiryAction.java",
    "groupTitle": "warehouseenquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouseenquiry/initiateWarehouseOffer.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/warehouseenquiry/refuseWarehouseOffer.json",
    "title": "货主（发货方）拒绝报价",
    "name": "refuseWarehouseOffer",
    "group": "warehouseenquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enquiry_id",
            "description": "<p>询价id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "1.没登陆或无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "2.询价id为空或无询价id对应的询价:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "3.无报价不得驳回:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "4.已驳回，不必重复驳回:",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "5.已同意报价，不得驳回:",
          "content": "{\"code\":-5}",
          "type": "json"
        },
        {
          "title": "6.驳回报价失败:",
          "content": "{\"code\":-6}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/WarehouseEnquiryAction.java",
    "groupTitle": "warehouseenquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouseenquiry/refuseWarehouseOffer.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/warehouseenquiry/refuseWarehouseReason.json",
    "title": "仓库库主拒绝报价",
    "name": "refuseWarehouseOffer",
    "group": "warehouseenquiry",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enquiry_id",
            "description": "<p>询价id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refuse_price",
            "description": "<p>货主拒绝理由</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "1.没登陆或无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "2.询价id为空或无询价id对应的询价:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "3.无报价不得驳回:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "4.已驳回，不必重复驳回:",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "5.已同意报价，不得驳回:",
          "content": "{\"code\":-5}",
          "type": "json"
        },
        {
          "title": "6.驳回报价失败:",
          "content": "{\"code\":-6}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/enquiry/WarehouseEnquiryAction.java",
    "groupTitle": "warehouseenquiry",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouseenquiry/refuseWarehouseReason.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/warehouse/initiateEnquiry.json",
    "title": "货主发起询价",
    "name": "initiateEnquiry",
    "group": "warehouse",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "requirement_match_id",
            "description": "<p>询价id数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆:",
          "content": "{\"code\":-99}",
          "type": "json"
        },
        {
          "title": "无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "询价id为空:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "发起询价失败:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "已接受同意匹配路线下的其他报价",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "已接受其他匹配路线下的报价",
          "content": "{\"code\":-5}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/warehouse/WarehouseAction.java",
    "groupTitle": "warehouse",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse/initiateEnquiry.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/warehouse/initiateOffer.json",
    "title": "司机（仓储方）发起报价",
    "name": "initiateOffer",
    "group": "warehouse",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enquiry_id",
            "description": "<p>询价id</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "offer_price",
            "description": "<p>报价金额</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "1.没登陆或无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "2.询价id为空或无询价id对应的询价:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "3.报价金额为空 或者不是数字:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "4.报价失败:",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "5.已同意报价，不得悔改:",
          "content": "{\"code\":-5}",
          "type": "json"
        },
        {
          "title": "6.发货方已同意其他报价:",
          "content": "{\"code\":-7}",
          "type": "json"
        },
        {
          "title": "没登录:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/warehouse/WarehouseAction.java",
    "groupTitle": "warehouse",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse/initiateOffer.json"
      }
    ]
  },
  {
    "type": "put",
    "url": "/warehouse/refuseReason.json",
    "title": "仓储方拒绝报价",
    "name": "initiateOffer",
    "group": "warehouse",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enquiry_id",
            "description": "<p>询价id</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "offer_price",
            "description": "<p>报价金额</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:",
          "content": "{\"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "1.无权限:",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "2.询价id为空或无询价id对应的询价:",
          "content": "{\"code\":-2}",
          "type": "json"
        },
        {
          "title": "3.报价金额为空 或者不是数字:",
          "content": "{\"code\":-3}",
          "type": "json"
        },
        {
          "title": "4.报价失败:",
          "content": "{\"code\":-4}",
          "type": "json"
        },
        {
          "title": "5.已同意报价，不得悔改:",
          "content": "{\"code\":-5}",
          "type": "json"
        },
        {
          "title": "6.发货方已同意其他报价:",
          "content": "{\"code\":-7}",
          "type": "json"
        },
        {
          "title": "7.没登陆:",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/warehouse/WarehouseAction.java",
    "groupTitle": "warehouse",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse/refuseReason.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/warehouse/searchWareHouseListBy.json",
    "title": "根据仓库属性查找仓库",
    "name": "searchWareHouseListBy",
    "group": "warehouse",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_type",
            "description": "<p>仓库类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "warehouse_area",
            "description": "<p>仓库面积</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "warehouse_height",
            "description": "<p>仓库高度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_address",
            "description": "<p>仓库地址</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0,\"msg\":OK,\"data\":仓库列表}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/warehouse/WarehouseAction.java",
    "groupTitle": "warehouse",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse/searchWareHouseListBy.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/warehouse/searchWarehouse.json",
    "title": "根据仓库属性查找仓库",
    "name": "searchWarehouse",
    "group": "warehouse",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_type",
            "description": "<p>仓库类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "warehouse_area",
            "description": "<p>仓库面积</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "warehouse_height",
            "description": "<p>仓库高度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_address",
            "description": "<p>仓库地址</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0,\"msg\":OK,\"data\":仓库列表}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        },
        {
          "title": "未登录:<br>",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/warehouse/WarehouseAction.java",
    "groupTitle": "warehouse",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse/searchWarehouse.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/warehouse/searchWarehouseByConfigation.json",
    "title": "根据条件查询仓库信息",
    "name": "searchWarehouseByConfigation",
    "group": "warehouse",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_type",
            "description": "<p>仓库类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_type",
            "description": "<p>仓库面积</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warehouse_address",
            "description": "<p>仓库地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>每页显示条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0,\"msg\":OK,\"data\":仓库列表}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "未登录:<br>",
          "content": "{\"code\":-99}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/warehouse/WarehouseAction.java",
    "groupTitle": "warehouse",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse/searchWarehouseByConfigation.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/warehouse/selectwarehouseByRequirementMatchid.json",
    "title": "根据匹配id查找仓库详细信息",
    "name": "selectwarehouseByRequirementMatchid",
    "group": "warehouse",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>匹配id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0,\"msg\":OK,\"warehouse\":仓库详细信息}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/warehouse/WarehouseAction.java",
    "groupTitle": "warehouse",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse/selectwarehouseByRequirementMatchid.json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/warehouse/selectwarehouseByid.json",
    "title": "根据仓库id查找仓库详细信息",
    "name": "selectwarehouseByid",
    "group": "warehouse",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>仓库id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK:<br>",
          "content": "{\"code\":0,\"msg\":OK,\"data\":仓库详细信息}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "参数异常:<br>",
          "content": "{\"code\":-1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/warehouse/WarehouseAction.java",
    "groupTitle": "warehouse",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/warehouse/selectwarehouseByid.json"
      }
    ]
  },
  {
    "type": "post",
    "url": "/zjxlDataExchangeAction/queryVclByMulFs.json",
    "title": "本接口提供按照车型、车长、载重、起始地、多维度查询指定经纬度坐标点为中心查询指定公里范围内的前50辆在线车辆",
    "name": "queryVclByMulFs",
    "group": "zjxlDataExchangeAction",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lon",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>lat</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "OK: ",
          "content": "{ \"code\":0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没登陆: ",
          "content": "{\"code\" : -1}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/ziyun56/chpz/ddx/zjxl/ZjxlDataExchangeAction.java",
    "groupTitle": "zjxlDataExchangeAction",
    "sampleRequest": [
      {
        "url": "https://dev.ziyun56.com:56282/zjxlDataExchangeAction/queryVclByMulFs.json"
      }
    ]
  }
] });
