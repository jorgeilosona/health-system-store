/**
 * Derivation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    migrate: 'safe',
    attributes: {
        name: 'string',
        unit: { model: 'unit' },
        bedList: {
            collection: 'bed',
            via: 'room'
        },
        deleted: {
            type: 'boolean',
            defaultsTo: false
        }
    }
};

