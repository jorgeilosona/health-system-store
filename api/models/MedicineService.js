/**
 * MedicineService.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    migrate: 'safe',
    attributes: {
        name: 'string',
        presentation: 'string',
        cod: 'string',
        subcategory: 'string',
        observation: 'string',
        way: 'string',
        administrationWay: 'string',
        unitOfMeasurement: 'string',
        drugCategory: 'string',
        deleted: {
            type      : 'boolean',
            defaultsTo: false
        }
    }
};