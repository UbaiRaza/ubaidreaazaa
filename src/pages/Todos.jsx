import React, { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
// import { MdEdit } from "react-icons/md";
import { MdOutlineReply } from "react-icons/md";
import image from '../../images/WhatsApp Image 2024-02-11 at 02.29.10_7c729a4f.jpg'



const Todos = ({ todo, delettodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.title);

    // const handleEdit = () => {
    //     setIsEditing(true);
    // };


    const style = {
        li: `bg-slate-200 p-4 my-2  capitalize `,
        liComplet: `bg-slate-400 p-4 my-2 capitalize`,
        row: `flex`,
        textComplet: `ml-2 cursoor-pointer line-through`,
        text: `cursoor-pointer`,
        button: `cursoor-pointer  flex items-center`,

    }
    return (<>

        {/* <MdOutlineReply size={24} style={{ marginLeft: "22%", bottom: "3%" }} /> */}
        <li style={{ display: "flex", justifyContent: "space-between", marginLeft: "20%", marginRight: "10%", height: '60px' }} className={style.li}>
            <div className={style.row}>
                {/* <input type="checkbox" /> */}
                <p style={{ gap: "50%" }} className={style.text}>{todo.title}</p>
            </div>
            <button style={{ marginLeft: '50%' }} onClick={() => delettodo(todo.id)}><FaRegTrashAlt /></button>
            <div class="g0rxnol2 g9p5wyxn i0tg5vk9 aoogvgrq o2zu3hjb" style={{ height: '49px', width: '49px', }}><img src="https://pps.whatsapp.net/v/t61.24694-24/379763600_410186201427970_3457043056703015534_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AdRWq_SZqY9m7KOUkqWAan8D8sOmEOn_X_WqrOgKVTM2QA&amp;oe=65DE133F&amp;_nc_sid=e6ed6c&amp;_nc_cat=105" alt="" draggable="false" class="g0rxnol2 f804f6gw ln8gz9je ppled2lx gfz4du6o r7fjleex g9p5wyxn i0tg5vk9 aoogvgrq o2zu3hjb jpthtbts lyqpd7li bs7a17vp csshhazd _11JPr" tabindex="-1" style={{ marginLeft: '150%', visibility: 'visible', borderRadius: '50%', textAlign: 'center', alignItems: "center", marginTop: '-10px' }} />
            </div>
        </li >


    </>
    )
}

export default Todos
