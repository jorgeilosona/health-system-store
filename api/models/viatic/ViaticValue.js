/**
 * ViaticValue.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    migrate: 'safe',
    attributes: {
        level: 'integer',
        valueTotal: 'integer',
        valuePartial: 'integer',
        year: 'integer'
    }
};
