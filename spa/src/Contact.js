import React, {Component} from "react"
import { Header, Image } from 'semantic-ui-react'

class Contact extends Component{
    render(){
        return(          
            <Header as='h2'>
                <Image circular src='/react_profile_img.png' /> 
            </Header>
        );
    }
}
export default Contact; 