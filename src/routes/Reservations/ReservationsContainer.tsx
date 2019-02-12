{
  /*
import { connect } from 'react-redux'
import Reservations from './Reservations'

const mapStateToProps = state => {
  const { deviceToken } = state

  return {
    deviceToken: deviceToken.deviceToken
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

---
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";
import Reservations from "./Reservations";

const ExchangeRates = () => (
  .query({
     query: gql`
       {
         rates(currency: "USD") {
           currency
         }
       }
     `
   })
   .then(result => console.log(result)
)

const withOne = graphql(ExchangeRates, {
  props: ({ data }) => ({
    loadingOne: data.loading,
    rates: data.rates
  })
});

export default compose(withOne)(Reservations);

*/
}
