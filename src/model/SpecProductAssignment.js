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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SpecProductAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SpecProductAssignment model module.
   * @module model/SpecProductAssignment
   * @version 1.0.47
   */

  /**
   * Constructs a new <code>SpecProductAssignment</code>.
   * @alias module:model/SpecProductAssignment
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SpecProductAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpecProductAssignment} obj Optional instance to populate.
   * @return {module:model/SpecProductAssignment} The populated <code>SpecProductAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('SpecID')) {
        obj['SpecID'] = ApiClient.convertToType(data['SpecID'], 'String');
      }
      if (data.hasOwnProperty('ProductID')) {
        obj['ProductID'] = ApiClient.convertToType(data['ProductID'], 'String');
      }
      if (data.hasOwnProperty('DefaultValue')) {
        obj['DefaultValue'] = ApiClient.convertToType(data['DefaultValue'], 'String');
      }
      if (data.hasOwnProperty('DefaultOptionID')) {
        obj['DefaultOptionID'] = ApiClient.convertToType(data['DefaultOptionID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} SpecID
   */
  exports.prototype['SpecID'] = undefined;
  /**
   * @member {String} ProductID
   */
  exports.prototype['ProductID'] = undefined;
  /**
   * @member {String} DefaultValue
   */
  exports.prototype['DefaultValue'] = undefined;
  /**
   * @member {String} DefaultOptionID
   */
  exports.prototype['DefaultOptionID'] = undefined;



  return exports;
}));


