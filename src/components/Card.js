const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const actualDate = day + "/" + month + "/" + year;

function Card(props){
  const {title, desc} = props;
  return <>
    <div className='card'>
      <h3 className='cardTitle'>{title}</h3>
      <p className='cardDesc'>{desc}</p>
      <p className='cardFooter'>{actualDate}</p>
    </div>
  </>
}

export default Card;