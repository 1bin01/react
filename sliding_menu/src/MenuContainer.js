import React, {Component} from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

class MenuContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            visible : false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }
    toggleMenu(){
        this.setState({
            visible: !this.visible
        });
    }
    handleMouseDown(e){
        this.toggleMenu();

        console.log("마우스다운!~!!");
        e.stopPropagation();
    }


    render(){
        return (
            <div>
                <MenuButton handleMouseDown = {this.handleMouseDown}/>
                <Menu handleMouseDown = {this.handleMouseDown}
                    menuVisibility = {this.state.visible}></Menu>
                <div>
                    <p> 할 일 리스트</p>
                    <ol type="I">
                        <li> unodered</li>
                        <li> list </li>
                    </ol>
                    <dl>
                        <dt> 지금은 몇시</dt>
                        <dd>
                            1시
                        </dd>
                        <dd>
                            50분
                        </dd>
                        <dt> 여기는 어디</dt>
                        <dd>
                            서울시
                        </dd>
                        <dd>
                            서초구
                        </dd>
                        <dd>
                            신반포로
                        </dd>
                    </dl>
                </div>
            </div>
        );
    }
}
export default MenuContainer