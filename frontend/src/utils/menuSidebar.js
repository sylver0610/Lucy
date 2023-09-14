import { AiOutlineSchedule } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { MdOutlineMeetingRoom } from "react-icons/md";

const sidebarAdmin = {
    items: [
        {
            title: 'Dashboard',
            to: '',
            icon: <FiHome />
        },
        {
            title: 'Dashboard',
            to: '',
            icon: <FiHome />
        },
        {
            title: 'Appointments',
            to: 'appointments',
            icon: <MdOutlineMeetingRoom />
        },
        {
            title: 'Managers',
            to: 'managers',
            icon: <MdOutlineMeetingRoom />
        },
        {
            title: 'Schedules',
            to: 'schedules',
            icon: <AiOutlineSchedule />
        },
        {
            title: 'History',
            to: 'history',
            icon: <FiHome />
        }

    ]
}

/** <Item
                
               
                <Item
                    title=""
                    to=""
                    icon={<FaHistory />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Setting"
                    to="setting"
                    icon={<AiOutlineSetting />}
                    selected={selected}
                    setSelected={setSelected}
                /> */