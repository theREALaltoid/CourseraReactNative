import React, { Component } from "react";

import { Text, ScrollView, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import * as Animatable from "react-native-animatable";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us"
  };

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Card title="Contact Information">
            <View>
              <Text>121, Clear Water Bay Road {" \n"}</Text>
              <Text>Clear Water Bay, Kowloon {"\n"}</Text>
              <Text>HONG KONG {"\n"}</Text>
              <Text>Tel: +852 1234 5678 {"\n"}</Text>
              <Text>Fax: +852 8765 4321 {"\n"}</Text>
              <Text>Email:confusion@food.net</Text>
            </View>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;
