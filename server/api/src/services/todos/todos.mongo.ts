
/* tslint:disable:quotemark */
// Defines the MongoDB $jsonSchema for service `todos`. (Can be re-generated.)
import merge from 'lodash.merge';
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    bsonType: "object",
    additionalProperties: false,
    properties: {
      _id: {
        bsonType: "objectId"
      },
      title: {
        faker: "commerce.productName",
        bsonType: "string"
      },
      notes: {
        faker: "company.catchPhrase",
        bsonType: "string"
      },
      userId: {
        faker: {
          fk: "users:random"
        },
        bsonType: "objectId"
      }
    },
    required: [
      "title"
    ]
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
