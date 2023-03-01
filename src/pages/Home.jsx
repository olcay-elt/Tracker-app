import GorevEkle from '../components/GorevEkle'
import GorevleriGoster from '../components/GorevleriGoster'
import { useState } from "react";
import mockTasks from "../helper/Data"
import Header from '../components/Header';

const Home = () => {
    const [tasks, setTasks] = useState(mockTasks)
    const [displaying, setDisplaying] = useState(true)

    return (
        <div>
            <Header
                displaying={displaying}
                setDisplaying={setDisplaying}
            />
            {
                displaying ? (
                    <>
                        <GorevEkle
                            tasks={tasks}
                            setTasks={setTasks}
                        />

                        <GorevleriGoster
                            tasks={tasks}
                            setTasks={setTasks}
                        />
                    </>
                ) : ''
            }

        </div>
    );
}

export default Home;