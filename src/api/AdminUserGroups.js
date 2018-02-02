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
    define(['ApiClient', 'model/ListUserGroup', 'model/ListUserGroupAssignment', 'model/UserGroup', 'model/UserGroupAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListUserGroup'), require('../model/ListUserGroupAssignment'), require('../model/UserGroup'), require('../model/UserGroupAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.AdminUserGroups = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListUserGroup, root.OrderCloud.ListUserGroupAssignment, root.OrderCloud.UserGroup, root.OrderCloud.UserGroupAssignment);
  }
}(this, function(ApiClient, ListUserGroup, ListUserGroupAssignment, UserGroup, UserGroupAssignment) {
  'use strict';

  /**
   * AdminUserGroup service.
   * @module api/AdminUserGroups
   * @version 1.0.59
   */

  /**
   * Constructs a new AdminUserGroups. 
   * @alias module:api/AdminUserGroups
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/UserGroup} group 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserGroup}
     */
    this.Create = function(group) {
      var postBody = group;

      // verify the required parameter 'group' is set
      if (group == undefined || group == null) {
        throw new Error("Missing the required parameter 'group' when calling Create");
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
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/usergroups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(userGroupID) {
      var postBody = null;

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling Delete");
      }


      var pathParams = {
        'userGroupID': userGroupID
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
        '/usergroups/{userGroupID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userGroupID ID of the user group.
     * @param {String} userID ID of the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteUserAssignment = function(userGroupID, userID) {
      var postBody = null;

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling DeleteUserAssignment");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling DeleteUserAssignment");
      }


      var pathParams = {
        'userGroupID': userGroupID,
        'userID': userID
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
        '/usergroups/{userGroupID}/assignments/{userID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserGroup}
     */
    this.Get = function(userGroupID) {
      var postBody = null;

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling Get");
      }


      var pathParams = {
        'userGroupID': userGroupID
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
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/usergroups/{userGroupID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Search of the admin user group.
     * @param {Array.<String>} opts.searchOn Search on of the admin user group.
     * @param {Array.<String>} opts.sortBy Sort by of the admin user group.
     * @param {Number} opts.page Page of the admin user group.
     * @param {Number} opts.pageSize Page size of the admin user group.
     * @param {Object.<String, {String: String}>} opts.filters Filters of the admin user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUserGroup}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': this.apiClient.buildCollectionParam(opts['searchOn'], 'csv'),
        'sortBy': this.apiClient.buildCollectionParam(opts['sortBy'], 'csv'),
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
      var returnType = ListUserGroup;

      return this.apiClient.callApi(
        '/usergroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.userID ID of the user.
     * @param {Number} opts.page Page of the admin user group.
     * @param {Number} opts.pageSize Page size of the admin user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUserGroupAssignment}
     */
    this.ListUserAssignments = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'userGroupID': opts['userGroupID'],
        'userID': opts['userID'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListUserGroupAssignment;

      return this.apiClient.callApi(
        '/usergroups/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userGroupID ID of the user group.
     * @param {module:model/UserGroup} group 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserGroup}
     */
    this.Patch = function(userGroupID, group) {
      var postBody = group;

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling Patch");
      }

      // verify the required parameter 'group' is set
      if (group == undefined || group == null) {
        throw new Error("Missing the required parameter 'group' when calling Patch");
      }


      var pathParams = {
        'userGroupID': userGroupID
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
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/usergroups/{userGroupID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/UserGroupAssignment} userGroupAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveUserAssignment = function(userGroupAssignment) {
      var postBody = userGroupAssignment;

      // verify the required parameter 'userGroupAssignment' is set
      if (userGroupAssignment == undefined || userGroupAssignment == null) {
        throw new Error("Missing the required parameter 'userGroupAssignment' when calling SaveUserAssignment");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/usergroups/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userGroupID ID of the user group.
     * @param {module:model/UserGroup} group 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserGroup}
     */
    this.Update = function(userGroupID, group) {
      var postBody = group;

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling Update");
      }

      // verify the required parameter 'group' is set
      if (group == undefined || group == null) {
        throw new Error("Missing the required parameter 'group' when calling Update");
      }


      var pathParams = {
        'userGroupID': userGroupID
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
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/usergroups/{userGroupID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
