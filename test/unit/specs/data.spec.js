import { matchers } from 'jest-json-schema';
expect.extend(matchers);
const data = require('../../../data.json')

describe('data.json', () => {
  it('is a json object with a beers property and an array value', () => {
    const schema = {
        properties: {
            beers: {
                type: "array",
            }
        },
        required: ['beers']
    }
    expect(data).toMatchSchema(schema)
  })
  it('contains an array of beers objects and each object matches the schema', () => {
    const data = require('../../../data.json')
    const schema = {
        properties: {
            name: {
                type: "string"
            },
            city: {
                type: "string"
            },
            county: {
                type: "string"
            },
            abv: {
                type: "number"
            },
            ibu: {
                type: "number"
            },
            style: {
                type: "string"
            },
            description: {
                type: "string"
            }
        },
        required: ['name', "abv", "ibu", "style", "description"]
    }
    for (const beer of data.beers) {
        expect(beer).toMatchSchema(schema)
    }
  })
})
