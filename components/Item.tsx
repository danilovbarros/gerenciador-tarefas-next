import { NextPage } from "next";
import { Task } from "../types/Task";

type ItemProps = {
    task : Task
    setTaskAndShow(task:Task) : void
}

const Item: NextPage<ItemProps> = ({
    task,
    setTaskAndShow
}) => {

    const getDateText = (finishDate : any, finishPrevisionDate : any) => {
        if(finishDate){
            const fd = new Date(finishDate)
            return `Concluído em: ${fd.getDate() + '/' + (fd.getMonth()+1) + '/' + fd.getFullYear()}`;
        }
        
        const fpd = new Date(finishPrevisionDate)
        return `Previsão de conclusão em : ${fpd.getDate() + '/' + (fpd.getMonth()+1) + '/' + fpd.getFullYear()}`;
    }

    return (
        <div className={"container-item" + (task.finishDate? '' : ' ativo')}
            onClick={() => task.finishDate ? null : setTaskAndShow(task)}>
            <img src={task.finishDate? '/checked.svg' : '/not-checked.svg'} 
                alt={task.finishDate? 'Tarefa concluída' : 'Tarefa em aberto'}/>
            <div>
                <p className={task.finishDate? 'concluído' : ''}>{task.name}</p>
                <span>{getDateText(task.finishDate, task.finishPrevisionDate)}</span>
            </div>
        </div>
    );
}

export { Item }