/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LineItemProduct', 'model/LineItemSpec'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LineItemProduct'), require('./LineItemSpec'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ShipmentItem = factory(root.OrderCloud.ApiClient, root.OrderCloud.LineItemProduct, root.OrderCloud.LineItemSpec);
  }
}(this, function(ApiClient, LineItemProduct, LineItemSpec) {
  'use strict';




  /**
   * The ShipmentItem model module.
   * @module model/ShipmentItem
   * @version 1.0.56
   */

  /**
   * Constructs a new <code>ShipmentItem</code>.
   * @alias module:model/ShipmentItem
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>ShipmentItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShipmentItem} obj Optional instance to populate.
   * @return {module:model/ShipmentItem} The populated <code>ShipmentItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('OrderID')) {
        obj['OrderID'] = ApiClient.convertToType(data['OrderID'], 'String');
      }
      if (data.hasOwnProperty('LineItemID')) {
        obj['LineItemID'] = ApiClient.convertToType(data['LineItemID'], 'String');
      }
      if (data.hasOwnProperty('QuantityShipped')) {
        obj['QuantityShipped'] = ApiClient.convertToType(data['QuantityShipped'], 'Number');
      }
      if (data.hasOwnProperty('UnitPrice')) {
        obj['UnitPrice'] = ApiClient.convertToType(data['UnitPrice'], 'Number');
      }
      if (data.hasOwnProperty('CostCenter')) {
        obj['CostCenter'] = ApiClient.convertToType(data['CostCenter'], 'String');
      }
      if (data.hasOwnProperty('DateNeeded')) {
        obj['DateNeeded'] = ApiClient.convertToType(data['DateNeeded'], 'String');
      }
      if (data.hasOwnProperty('Product')) {
        obj['Product'] = LineItemProduct.constructFromObject(data['Product']);
      }
      if (data.hasOwnProperty('Specs')) {
        obj['Specs'] = ApiClient.convertToType(data['Specs'], [LineItemSpec]);
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} OrderID
   */
  exports.prototype['OrderID'] = undefined;
  /**
   * @member {String} LineItemID
   */
  exports.prototype['LineItemID'] = undefined;
  /**
   * @member {Number} QuantityShipped
   */
  exports.prototype['QuantityShipped'] = undefined;
  /**
   * @member {Number} UnitPrice
   */
  exports.prototype['UnitPrice'] = undefined;
  /**
   * @member {String} CostCenter
   */
  exports.prototype['CostCenter'] = undefined;
  /**
   * @member {String} DateNeeded
   */
  exports.prototype['DateNeeded'] = undefined;
  /**
   * @member {module:model/LineItemProduct} Product
   */
  exports.prototype['Product'] = undefined;
  /**
   * @member {Array.<module:model/LineItemSpec>} Specs
   */
  exports.prototype['Specs'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


