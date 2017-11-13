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
    root.OrderCloud.ImpersonationConfig = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ImpersonationConfig model module.
   * @module model/ImpersonationConfig
   * @version 1.0.56
   */

  /**
   * Constructs a new <code>ImpersonationConfig</code>.
   * @alias module:model/ImpersonationConfig
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>ImpersonationConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImpersonationConfig} obj Optional instance to populate.
   * @return {module:model/ImpersonationConfig} The populated <code>ImpersonationConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('ImpersonationBuyerID')) {
        obj['ImpersonationBuyerID'] = ApiClient.convertToType(data['ImpersonationBuyerID'], 'String');
      }
      if (data.hasOwnProperty('ImpersonationGroupID')) {
        obj['ImpersonationGroupID'] = ApiClient.convertToType(data['ImpersonationGroupID'], 'String');
      }
      if (data.hasOwnProperty('ImpersonationUserID')) {
        obj['ImpersonationUserID'] = ApiClient.convertToType(data['ImpersonationUserID'], 'String');
      }
      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
      if (data.hasOwnProperty('GroupID')) {
        obj['GroupID'] = ApiClient.convertToType(data['GroupID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
      if (data.hasOwnProperty('SecurityProfileID')) {
        obj['SecurityProfileID'] = ApiClient.convertToType(data['SecurityProfileID'], 'String');
      }
      if (data.hasOwnProperty('ClientID')) {
        obj['ClientID'] = ApiClient.convertToType(data['ClientID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} ImpersonationBuyerID
   */
  exports.prototype['ImpersonationBuyerID'] = undefined;
  /**
   * @member {String} ImpersonationGroupID
   */
  exports.prototype['ImpersonationGroupID'] = undefined;
  /**
   * @member {String} ImpersonationUserID
   */
  exports.prototype['ImpersonationUserID'] = undefined;
  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;
  /**
   * @member {String} GroupID
   */
  exports.prototype['GroupID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;
  /**
   * @member {String} SecurityProfileID
   */
  exports.prototype['SecurityProfileID'] = undefined;
  /**
   * @member {String} ClientID
   */
  exports.prototype['ClientID'] = undefined;



  return exports;
}));


