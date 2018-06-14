/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The MapTest model module.
* @module model/MapTest
* @version 1.0.0
*/
export default class MapTest {
    /**
    * Constructs a new <code>MapTest</code>.
    * @alias module:model/MapTest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>MapTest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MapTest} obj Optional instance to populate.
    * @return {module:model/MapTest} The populated <code>MapTest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MapTest();

            
            
            

            if (data.hasOwnProperty('map_map_of_string')) {
                obj['map_map_of_string'] = ApiClient.convertToType(data['map_map_of_string'], {'String': {'String': 'String'}});
            }
            if (data.hasOwnProperty('map_of_enum_string')) {
                obj['map_of_enum_string'] = ApiClient.convertToType(data['map_of_enum_string'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
    * @member {Object.<String, Object.<String, String>>} map_map_of_string
    */
    map_map_of_string = undefined;
    /**
    * @member {Object.<String, module:model/MapTest.InnerEnum>} map_of_enum_string
    */
    map_of_enum_string = undefined;






    /**
    * Allowed values for the <code>inner</code> property.
    * @enum {String}
    * @readonly
    */
    static InnerEnum = {
    
        /**
         * value: "UPPER"
         * @const
         */
        "UPPER": "UPPER",
    
        /**
         * value: "lower"
         * @const
         */
        "lower": "lower"    
    };



}


