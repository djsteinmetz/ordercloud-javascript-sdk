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
    root.OrderCloud.Catalog = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Catalog model module.
   * @module model/Catalog
   * @version 1.0.56
   */

  /**
   * Constructs a new <code>Catalog</code>.
   * @alias module:model/Catalog
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Catalog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Catalog} obj Optional instance to populate.
   * @return {module:model/Catalog} The populated <code>Catalog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('Active')) {
        obj['Active'] = ApiClient.convertToType(data['Active'], 'Boolean');
      }
      if (data.hasOwnProperty('CategoryCount')) {
        obj['CategoryCount'] = ApiClient.convertToType(data['CategoryCount'], 'Number');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Boolean} Active
   */
  exports.prototype['Active'] = undefined;
  /**
   * @member {Number} CategoryCount
   */
  exports.prototype['CategoryCount'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


