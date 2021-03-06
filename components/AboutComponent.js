import React, { Component } from "react";
import { Loading } from "./LoadingComponent";

import { ListItem } from "react-native-elements";
import { Text, ScrollView, View, StyleSheet, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import * as Animatable from "react-native-animatable";

const mapStateToProps = state => {
  return {
    leaders: state.leaders
  };
};

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: LEADERS
    };
  }

  static navigationOptions = {
    title: "About Us"
  };

  render() {
    const history = this.props.leaders.leaders.map(data => {
      return (
        <View>
          <ListItem
            title={data.name}
            subtitle={data.description}
            hideChevron={true}
            leftAvatar={{ source: { uri: baseUrl + data.image } }}
          />
        </View>
      );
    });

    if (this.props.leaders.isLoading) {
      return (
        <ScrollView>
          <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
            <History />
            <Card title="Corporate Leadership">
              <Loading />
            </Card>
          </Animatable.View>
        </ScrollView>
      );
    } else if (this.props.leaders.errMess) {
      return (
        <ScrollView>
          <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
            <History />
            <Card title="Corporate Leadership">
              <Text>{this.props.leaders.errMess}</Text>
            </Card>
          </Animatable.View>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
          <View>
            <Card title="Our History">
              <View>
                <Text>
                  Started in 2010, Ristorante con Fusion quickly established
                  itself as a culinary icon par excellence in Hong Kong. With
                  its unique brand of world fusion cuisine that can be found
                  nowhere else, it enjoys patronage from the A-list clientele in
                  Hong Kong. Featuring four of the best three-star Michelin
                  chefs in the world, you never know what will arrive on your
                  plate the next time you visit us.
                  {" \n"}
                </Text>
                <Text>
                  The restaurant traces its humble beginnings to The Frying Pan,
                  a successful chain started by our CEO, Mr. Peter Pan, that
                  featured for the first time the world's best cuisines in a
                  pan.
                </Text>
              </View>
            </Card>
            <Animatable.View
              animation="fadeInDown"
              duration={2000}
              delay={1000}
            >
              <Card title="Corporate Leadership">
                <View>{history}</View>
              </Card>
            </Animatable.View>
          </View>
        </ScrollView>
      );
    }
  }
}

export default connect(mapStateToProps)(About);
