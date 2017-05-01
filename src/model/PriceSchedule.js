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
    define(['ApiClient', 'model/PriceBreak'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PriceBreak'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PriceSchedule = factory(root.OrderCloud.ApiClient, root.OrderCloud.PriceBreak);
  }
}(this, function(ApiClient, PriceBreak) {
  'use strict';




  /**
   * The PriceSchedule model module.
   * @module model/PriceSchedule
   * @version 1.0.48
   */

  /**
   * Constructs a new <code>PriceSchedule</code>.
   * @alias module:model/PriceSchedule
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>PriceSchedule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PriceSchedule} obj Optional instance to populate.
   * @return {module:model/PriceSchedule} The populated <code>PriceSchedule</code> instance.
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
      if (data.hasOwnProperty('ApplyTax')) {
        obj['ApplyTax'] = ApiClient.convertToType(data['ApplyTax'], 'Boolean');
      }
      if (data.hasOwnProperty('ApplyShipping')) {
        obj['ApplyShipping'] = ApiClient.convertToType(data['ApplyShipping'], 'Boolean');
      }
      if (data.hasOwnProperty('MinQuantity')) {
        obj['MinQuantity'] = ApiClient.convertToType(data['MinQuantity'], 'Number');
      }
      if (data.hasOwnProperty('MaxQuantity')) {
        obj['MaxQuantity'] = ApiClient.convertToType(data['MaxQuantity'], 'Number');
      }
      if (data.hasOwnProperty('UseCumulativeQuantity')) {
        obj['UseCumulativeQuantity'] = ApiClient.convertToType(data['UseCumulativeQuantity'], 'Boolean');
      }
      if (data.hasOwnProperty('RestrictedQuantity')) {
        obj['RestrictedQuantity'] = ApiClient.convertToType(data['RestrictedQuantity'], 'Boolean');
      }
      if (data.hasOwnProperty('PriceBreaks')) {
        obj['PriceBreaks'] = ApiClient.convertToType(data['PriceBreaks'], [PriceBreak]);
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
   * @member {Boolean} ApplyTax
   */
  exports.prototype['ApplyTax'] = undefined;
  /**
   * @member {Boolean} ApplyShipping
   */
  exports.prototype['ApplyShipping'] = undefined;
  /**
   * @member {Number} MinQuantity
   */
  exports.prototype['MinQuantity'] = undefined;
  /**
   * @member {Number} MaxQuantity
   */
  exports.prototype['MaxQuantity'] = undefined;
  /**
   * @member {Boolean} UseCumulativeQuantity
   */
  exports.prototype['UseCumulativeQuantity'] = undefined;
  /**
   * @member {Boolean} RestrictedQuantity
   */
  exports.prototype['RestrictedQuantity'] = undefined;
  /**
   * @member {Array.<module:model/PriceBreak>} PriceBreaks
   */
  exports.prototype['PriceBreaks'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


