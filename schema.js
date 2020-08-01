const axios = require('axios');
const BigInt = require('graphql-bigint');
const {
  GraphQLString,
  GrapQl,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  graphql
} = require('graphql');

const WeatherType = new GraphQLObjectType({
  name: 'Weather',
  fields: () => ({
    id: { type: BigInt },
    weather_state_name: { type: GraphQLString },
    weather_state_abbr: { type: GraphQLString },
    applicable_date: { type: GraphQLString },
    min_temp: { type: GraphQLFloat },
    max_temp: { type: GraphQLFloat },
    wind_speed: { type: GraphQLFloat },
    predictability: { type: GraphQLFloat },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    weather: {
      type: new GraphQLList(WeatherType),
      resolve(parent, args) {
        return axios
          .get('https://www.metaweather.com/api/location/862592')
          .then(res => res.data)
          .then(data => data.consolidated_weather)
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});