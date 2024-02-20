import React, { useEffect, useState } from 'react';
// import { BsFillSendFill } from "react-icons/bs";
import Todos from './Todos';

import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import Input_Field from '../components/Input_Field';

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');


    console.log(todos.id)






    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTodos(data);
        });

        return () => unsubscribe();
    }, []);

    const addTodo = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        try {
            await addDoc(collection(db, 'todos'), { title: inputValue });
            setInputValue('');
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }
    const delettodo = async (id) => {
        await deleteDoc(doc(db, 'todos', id))
    };

    const style = {
        bg: `h-screen w-screen p-4 bg-gradient-to-r  from-[#2F80ED] to-[#1Cb5E0]`,
        container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
        heading: `text-3xl font-bold text-center text-gray-800 p-2`,
        button: `border p-4 ml-2  `,
        input: `border p-2 w-full  text-xl`,
        count: `text-center p-2`
    };

    return (
        <div className={style.bg}>
            <div className={style.container} style={{ height: "100%" }}>
                <ul>
                    {/* <p className={style.count}>You Have {todos.length} todos</p> */}
                    <h3 className={style.heading}>Chat</h3>
                    {todos.map((todo, index) => {
                        return (
                            <Todos
                                key={index}
                                todo={todo}
                                delettodo={delettodo}
                            // onEdit={editTodo}
                            />
                        )
                    })}
                </ul>
                <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 'auto', }}  >
                    <Input_Field
                        // style={{ borderRadius: "10%" }}
                        type="text"
                        className={style.input}
                        placeholder='Enter Your Masege...'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button style={{ color: "white", backgroundColor: "green", borderRadius: "50%" }} onClick={addTodo} type="button" className={style.button}><svg style={{ color: "white" }} viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>send</title><path fill="currentColor" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg></button>

                </div>

            </div>
        </div>
    )
}

export default Todo;
