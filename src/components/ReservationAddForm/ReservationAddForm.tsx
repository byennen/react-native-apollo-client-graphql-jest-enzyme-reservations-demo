import { Formik } from "formik";
import React from "react";
import { Mutation } from "react-apollo";
import { Button, Text, View } from "react-native";
import { handleTextInput } from "react-native-formik";
import { TextField } from "react-native-material-textfield";
import * as Yup from "yup";
import { ReservationCreateMutation } from "./../../graphql";

const Input = handleTextInput(TextField);

const validationSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  hotelName: Yup.string().required("hotel name is required"),
  arrivalDate: Yup.date().required("arrival date is required"),
  departureDate: Yup.date().required("departure date is required")
});

interface Props {
  navigation: any;
}

class ReservationAddForm extends React.PureComponent<Props> {
  public render() {
    return (
      <Mutation mutation={ReservationCreateMutation}>
        {addReservationMutation => (
          <Formik
            initialValues={{
              name: "",
              hotelName: "",
              arrivalDate: "",
              departureDate: ""
            }}
            onSubmit={values => {
              addReservationMutation({
                variables: {
                  name: values.name,
                  hotelName: values.hotelName,
                  arrivalDate: values.arrivalDate,
                  departureDate: values.departureDate
                }
              })
                .then(res => {
                  console.log(res);
                  // this.props.navigation.navigate("Reservations");
                })
                .catch((err: any) => <Text>{err}</Text>);
            }}
            validationSchema={validationSchema}
            render={props => {
              return (
                <View>
                  <Input name="name" type="name" label="Name" />
                  <Input name="hotelName" type="hotelName" label="Hotel Name" />
                  <Input
                    name="arrivalDate"
                    type="arrivalDate"
                    label="Arrival Date"
                  />
                  <Input
                    name="departureDate"
                    type="departureDate"
                    label="Departure Date"
                  />
                  <Button onPress={props.handleSubmit} title="SUBMIT" />
                </View>
              );
            }}
          />
        )}
      </Mutation>
    );
  }
}

export default ReservationAddForm;
