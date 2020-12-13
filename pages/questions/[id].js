import  {HomePage} from '../../src/components';
import axios from 'axios';

function questionDetail({question}) {
  console.log(question)
  return (
       <div>{question.question}</div>
  )
}
export async function getServerSideProps(context) {
  const {id} = context.query;
  const res = await fetch(`https://polls.apiblueprint.org/questions/${id}`)
  const data = await res.json()
  return {
    props:
      {
         question: data
      }
  };
}

export default questionDetail