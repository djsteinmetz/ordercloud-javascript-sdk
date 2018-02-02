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
    root.OrderCloud.CatalogAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CatalogAssignment model module.
   * @module model/CatalogAssignment
   * @version 1.0.59
   */

  /**
   * Constructs a new <code>CatalogAssignment</code>.
   * @alias module:model/CatalogAssignment
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CatalogAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogAssignment} obj Optional instance to populate.
   * @return {module:model/CatalogAssignment} The populated <code>CatalogAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CatalogID')) {
        obj['CatalogID'] = ApiClient.convertToType(data['CatalogID'], 'String');
      }
      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
      if (data.hasOwnProperty('ViewAllCategories')) {
        obj['ViewAllCategories'] = ApiClient.convertToType(data['ViewAllCategories'], 'Boolean');
      }
      if (data.hasOwnProperty('ViewAllProducts')) {
        obj['ViewAllProducts'] = ApiClient.convertToType(data['ViewAllProducts'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} CatalogID
   */
  exports.prototype['CatalogID'] = undefined;
  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;
  /**
   * @member {Boolean} ViewAllCategories
   */
  exports.prototype['ViewAllCategories'] = undefined;
  /**
   * @member {Boolean} ViewAllProducts
   */
  exports.prototype['ViewAllProducts'] = undefined;



  return exports;
}));


