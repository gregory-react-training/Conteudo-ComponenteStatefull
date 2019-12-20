import React, {Component} from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';

export default class App extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ text: "Hello World"});
    // }, 3000);
  }

  //executa antes de montar o componente E antes de qualquer atualização -> Só usar se algum state depender diretamente de uma prop
  static getDerivedStateFromProps(nextProps, prevState) {
    return {text: nextProps.text};
  }

  //APENAS previne que a função render seja chamada! mesmo que o render n seja executado, a função continua -> no caso, continua somando
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter < 5;
  }

  componentDidUpdate(prevProps, prevState) {}

  //Utilizado mais para destruir eventListeners, para não serem mais executados em background
  componentWillUnmount() {}

  handleAddCounter = () => {
    this.setState({counter: this.state.counter + 1});
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleAddCounter} title="Add" />
        <Text>{this.state.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
