import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'

import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'

class Main extends Component {

  state = {
    value: {
      first: null,
      second: null,
    },
    result: []
  }

  handleButton = (first, second) => {

    let result = []
    let i;

    if(parseInt(first) >= parseInt(second)){
      Alert.alert(
        'Gagal!',
        'Bilangan awal harus lebih kecil dari bilangan akhir'
      )
    } else {
      for(i = first; i <= second; i++){

        let a = 0;
        let b;
        for(b = 0; b <= i; b++){

          if(i % b == 0){

            a++;

          }

        }

        if(a == 2){

          result.push(i)

        }

      }

      this.setState({ result })

    }

  }

  render() {
    return (
      <View style={styles.container}>
        {/* Title Application */}
        <Text style={styles.title}> Cari Bilangan Prima </Text>

        {/* Using Component for TextInput */}
        <CustomTextInput
          type="numeric"
          placeholder="Bilangan Awal"
          onChange={(text) => this.setState({ value : {...this.state.value, first: text} })}
        />
        <CustomTextInput
          type="numeric"
          placeholder="Bilangan Akhir"
          onChange={(text) => this.setState({ value : {...this.state.value, second: text} })}
        />

        {/* Using Component for Button */}
        <CustomButton
          handle={() => this.handleButton(this.state.value.first, this.state.value.second)}
        />

        <View
          style={styles.results}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {
              /* If Result not Null, Show Result */
              this.state.result.length > 0 ?

              this.state.result.map((data, index) => {
                return <Text key={index} style={styles.resultItem}>{data}</Text>
              })
              :
              <Text style={styles.resultTitle}>Hasil Bilangan Prima </Text>
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: 'monospace',
    letterSpacing: .5,
    marginVertical: 10,
  },
  resultTitle: {
    fontSize: 18,
  },
  results: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 6,
    paddingVertical: 10,
    width: '85%',
    minHeight: 50,
    borderRadius: 4,
    borderWidth: .6,
    borderColor: '#ffffff',
    backgroundColor: '#d4fad1'
  },
  resultItem: {
    minWidth: 30,
    padding: 6,
    textAlign: 'center',
    marginHorizontal: 4,
    backgroundColor: 'rgb(17, 72, 167)',
    color: '#ffffff',
    borderRadius: 3,
  }
})
