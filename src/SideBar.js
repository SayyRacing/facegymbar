import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { FiHeart} from "react-icons/fi";
import {FiFacebook} from "react-icons/fi";
import {FiAward} from "react-icons/fi";

const SideBar = () => {
    return(
        <div className="fixed top-0 left-0 h-screen w-24 m-0 flex flex-col bg-purple-500 text-white shadow-lg">
            <SideBarIcon icon={<FiHeart size="45"/>}/>
            <SideBarIcon1 icon={<FiFacebook size="45"/>}/>
            <SideBarIcon2 icon={<FiAward size="45"/>}/>
        </div>
    );
};
const SideBarIcon = ({ icon, text = 'Start' }) => (
    <div className="sidebar-icon group">
      {icon}
      <span class="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );

  const SideBarIcon1 = ({ icon, text = 'Stop' }) => (
    <div className="sidebar-icon group">
      {icon}
      <span class="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );

  const SideBarIcon2 = ({ icon, text = '1234' }) => (
    <div className="sidebar-icon group">
      {icon}
      <span class="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>    

  );


export default SideBar;