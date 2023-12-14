
import { SlHome } from "react-icons/sl";
import { BsFileBarGraph } from "react-icons/bs";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5"
import { HiOutlineUserGroup } from "react-icons/hi2";
import { RiMoneyDollarCircleLine } from "react-icons/ri";




export const sidebarLinks = [
    {
        label:'home',
        route:'/',
        icon:SlHome
    },
    {
        label:'graph',
        route:'/graph',
        icon:BsFileBarGraph
    },
    {
        label:'office',
        route:'/office',
        icon:HiOutlineOfficeBuilding
    },
    {
        label:'mail',
        route:'/mail',
        icon:IoMailOutline
    },
    {
        label:'chat',
        route:'/chat',
        icon:IoChatboxEllipsesOutline
    },
    {
        label:'group',
        route:'/group',
        icon:HiOutlineUserGroup
    },
    {
        label:'purchase',
        route:'/purchase',
        icon:RiMoneyDollarCircleLine
    },

]