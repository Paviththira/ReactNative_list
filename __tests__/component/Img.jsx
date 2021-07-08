import React, { Component } from 'react'
import { View, Image} from 'react-native'

export class Img extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
      }
    

  render() {
    return (
      <View>
          <Image styel ={{width:300,height:200}}
          source ={this.props.countryFlag}>
           </Image>
        <Image style ={{width:250,height:100
        ,borderRadius :10,marginTop :10}}
        source ={this.props.countryFlag}>

        </Image>

      </View>
    )
  }
}

export default Img
