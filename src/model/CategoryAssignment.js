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
    root.OrderCloud.CategoryAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CategoryAssignment model module.
   * @module model/CategoryAssignment
   * @version 1.0.59
   */

  /**
   * Constructs a new <code>CategoryAssignment</code>.
   * @alias module:model/CategoryAssignment
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CategoryAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CategoryAssignment} obj Optional instance to populate.
   * @return {module:model/CategoryAssignment} The populated <code>CategoryAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CategoryID')) {
        obj['CategoryID'] = ApiClient.convertToType(data['CategoryID'], 'String');
      }
      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
      if (data.hasOwnProperty('Visible')) {
        obj['Visible'] = ApiClient.convertToType(data['Visible'], 'Boolean');
      }
      if (data.hasOwnProperty('ViewAllProducts')) {
        obj['ViewAllProducts'] = ApiClient.convertToType(data['ViewAllProducts'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} CategoryID
   */
  exports.prototype['CategoryID'] = undefined;
  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;
  /**
   * @member {Boolean} Visible
   */
  exports.prototype['Visible'] = undefined;
  /**
   * @member {Boolean} ViewAllProducts
   */
  exports.prototype['ViewAllProducts'] = undefined;



  return exports;
}));


