import { useState ,useEffect} from "react"
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { menus } from "../config/menu"
function Slider() {
  
    const renderSubMenu = (item) => {
        console.log(item)
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
        return <Menu.Item key={item.key}>
            <Link to={(item.route || item.key) + (item.query || '')}>
                <span className="nav-text">{item.title}</span>
            </Link>
        </Menu.Item>
    }
    return (<DragDropContext>
        <Droppable droppableId="droppable">
            {(provided) => {
                return <div ref={provided.innerRef} {...provided.droppableProps}>
                    {menus.map((item, index) => (
                        <Draggable key={item.key} draggableId={item.key} index={index}>
                            {(provided) => {
                                console.log()
                                return (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        onDragStart={(e) =>
                                            provided.dragHandleProps &&
                                            provided.dragHandleProps.onDragStart(e)
                                        }
                                    >
                                        <Menu   mode="inline">
                                            {item.subs
                                                ? renderSubMenu(item)
                                                : renderMenuItem(item)}
                                        </Menu>
                                    </div>
                                )
                            }}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>

            }
            }
        </Droppable>
    </DragDropContext>







        // <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} >
        //     {menus.map((item, key) => {
        //         return <SubMenu key={item.key} icon={<MailOutlined />} title={item.title}>
        //             {item.subs && renderMenu(item.subs)}
        //         </SubMenu>
        //     })}
        //     <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        //         <Menu.Item key="1">Option 1</Menu.Item>
        //         <Menu.Item key="2">Option 2</Menu.Item>
        //         <Menu.Item key="3">Option 3</Menu.Item>
        //         <Menu.Item key="4">Option 4</Menu.Item>
        //     </SubMenu>
        //     <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        //         <Menu.Item key="5">Option 5</Menu.Item>
        //         <Menu.Item key="6">Option 6</Menu.Item>
        //         <SubMenu key="sub3" title="Submenu">
        //             <Menu.Item key="7">Option 7</Menu.Item>
        //             <Menu.Item key="8">Option 8</Menu.Item>
        //         </SubMenu>
        //     </SubMenu>
        //     <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
        //         <Menu.Item key="9">Option 9</Menu.Item>
        //         <Menu.Item key="10">Option 10</Menu.Item>
        //         <Menu.Item key="11">Option 11</Menu.Item>
        //         <Menu.Item key="12">Option 12</Menu.Item>
        //     </SubMenu>
        // </Menu>
    );
};

export default Slider