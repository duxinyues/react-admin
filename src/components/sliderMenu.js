import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { menus } from "../config/menu"
function Slider() {
    const renderSubMenu = (item) => {
        console.log("90")
        return (
            <Menu.SubMenu
                key={item.key}
                title={
                    <span>
                        <span className="nav-text">{item.title}</span>
                    </span>
                }
            >
                {item.subs.map((sub) => (sub.subs ? renderSubMenu(sub) : renderMenuItem(sub)))}
            </Menu.SubMenu>
        );
    }
    const renderMenuItem = (item) => {
        console.log("100")
        return <Menu.Item key={item.key}>
            <Link to={(item.route || item.key) + (item.query || '')}>
                <span className="nav-text">{item.title}</span>
            </Link>
        </Menu.Item>
    }
    return  <div >
                {menus.map((item) => {
                                return  <Menu mode="inline" selectable="true">
                                            {item.subs
                                                ? renderSubMenu(item)
                                                : renderMenuItem(item)}
                                        </Menu>
                            }) 
                }
            </div>
           
};

export default Slider