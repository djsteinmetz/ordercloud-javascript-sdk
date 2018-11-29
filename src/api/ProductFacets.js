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
    define(['ApiClient', 'model/ListProductFacet', 'model/ProductFacet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListProductFacet'), require('../model/ProductFacet'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ProductFacets = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListProductFacet, root.OrderCloud.ProductFacet);
  }
}(this, function(ApiClient, ListProductFacet, ProductFacet) {
  'use strict';

  /**
   * ProductFacet service.
   * @module api/ProductFacets
   */

  /**
   * Constructs a new ProductFacets. 
   * @alias module:api/ProductFacets
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} productFacetID ID of the product facet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.callDelete = function(productFacetID) {
      var postBody = null;

      // verify the required parameter 'productFacetID' is set
      if (productFacetID == undefined || productFacetID == null) {
        throw new Error("Missing the required parameter 'productFacetID' when calling callDelete");
      }


      var pathParams = {
        'productFacetID': productFacetID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/productfacets/{productFacetID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/ProductFacet} productFacet 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductFacet}
     */
    this.create = function(productFacet) {
      var postBody = productFacet;

      // verify the required parameter 'productFacet' is set
      if (productFacet == undefined || productFacet == null) {
        throw new Error("Missing the required parameter 'productFacet' when calling create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ProductFacet;

      return this.apiClient.callApi(
        '/productfacets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productFacetID ID of the product facet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductFacet}
     */
    this.get = function(productFacetID) {
      var postBody = null;

      // verify the required parameter 'productFacetID' is set
      if (productFacetID == undefined || productFacetID == null) {
        throw new Error("Missing the required parameter 'productFacetID' when calling get");
      }


      var pathParams = {
        'productFacetID': productFacetID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ProductFacet;

      return this.apiClient.callApi(
        '/productfacets/{productFacetID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListProductFacet}
     */
    this.list = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListProductFacet;

      return this.apiClient.callApi(
        '/productfacets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productFacetID ID of the product facet.
     * @param {module:model/ProductFacet} partialProductFacet 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductFacet}
     */
    this.patch = function(productFacetID, partialProductFacet) {
      var postBody = partialProductFacet;

      // verify the required parameter 'productFacetID' is set
      if (productFacetID == undefined || productFacetID == null) {
        throw new Error("Missing the required parameter 'productFacetID' when calling patch");
      }

      // verify the required parameter 'partialProductFacet' is set
      if (partialProductFacet == undefined || partialProductFacet == null) {
        throw new Error("Missing the required parameter 'partialProductFacet' when calling patch");
      }


      var pathParams = {
        'productFacetID': productFacetID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ProductFacet;

      return this.apiClient.callApi(
        '/productfacets/{productFacetID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productFacetID ID of the product facet.
     * @param {module:model/ProductFacet} productFacet 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductFacet}
     */
    this.save = function(productFacetID, productFacet) {
      var postBody = productFacet;

      // verify the required parameter 'productFacetID' is set
      if (productFacetID == undefined || productFacetID == null) {
        throw new Error("Missing the required parameter 'productFacetID' when calling save");
      }

      // verify the required parameter 'productFacet' is set
      if (productFacet == undefined || productFacet == null) {
        throw new Error("Missing the required parameter 'productFacet' when calling save");
      }


      var pathParams = {
        'productFacetID': productFacetID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ProductFacet;

      return this.apiClient.callApi(
        '/productfacets/{productFacetID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
