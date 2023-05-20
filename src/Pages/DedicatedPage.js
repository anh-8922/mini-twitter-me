import { useParams } from "react-router-dom";

export default function DedicationPage (){
  
    const { messageId } = useParams();
    return(
        <div>
            from dedicationpage

            <div>{messageId.username}</div>
        </div>
    )
}