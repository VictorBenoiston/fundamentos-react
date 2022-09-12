import React from "react";
import First from './components/basic/first'
import Second from './components/basic/Second'
import TestProps from './components/basic/TestProps'
import ComponentChild from './components/basic/ComponentChild'
import Card from './components/layout/Card'
import './App.css'
import Repetition from "./components/basic/Repetition";
import Conditional from "./components/basic/Conditional";
import Pictureframe from "./components/PictureFrame/Picture.jsx";
import Father from "./components/comunication/Father"
import Super from "./components/comunication/unstraight/Super"
import Input from './components/form/Input'
import Counter from "./components/Counter/Counter"
import Lotery from "./components/Lotery/Lotery"


export default props => (

    <div className="App">

        <h4>React essentials</h4>

        <div className="App-Header">
            <Card title='1st component!' color='#FA6900'>
                <First></First>
            </Card>
            <Card title='2nd component' color='#E94C6F'>
                <TestProps title='This is the 1st title'
                    subtitle='But this, is the 1st subtitle.' />
            </Card>
            <Card title='3rd component' color='#E8B71A'>
                <TestProps title='This is the 2nd title'
                    subtitle='This is not the first title.' />
            </Card>
            <Card title='4th component' color='#F2AE72'>
                <ComponentChild title='The children:'>
                    <ul>
                        <li>Carl</li>
                        <li>Mariah</li>
                        <li>John</li>
                        <li>Clark</li>
                    </ul>
                </ComponentChild>
            </Card>
            <Card title='5th component' color='#28ABE3'>
                <Repetition />
            </Card>
            <Card title='6th component' color='#D7AAC9 '>
                <Conditional number={11} colorCondition='red' />
            </Card>
            <Card title='7th component' color='#A2EAE9'>
                <Father surename='Jales'></Father>
            </Card>
            <Card title='8th component' color='#8C4646'>
                <Super></Super>
            </Card>
            <Card title='9th component' color='#008BBA '>
                <Input></Input>
            </Card>
            <Card title='10th component' color='#59C4C5 '>
                <Counter  value={12}></Counter>
            </Card>
            <Card title='11th component' color=' #DE593A'>
                <Lotery></Lotery>
            </Card>
        </div>



    </div>
)

// opt+shift+up/down = copy and paste up/down
