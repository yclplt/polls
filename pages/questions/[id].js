import  {DetailPage} from '../../src/components';

function questionDetail({question}) {
  return (
    <div className="pl-container">
      <DetailPage data={question} />
    </div>
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