import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import {Link} from 'react-router-dom'

import './Categories.scss'



import FetchCategories from '../../Hooks/FetchCategories';

function Categories() {

  
  
  const {dataCat} = FetchCategories();

  return (
    <>
      <Link to="/" className="link">
          <div className="catItem">
              <PhoneIphoneOutlinedIcon />
              <span>Все телефоны</span>
          </div>
        </Link>
      {dataCat.map((category) => (
        <Link to={`/products/${category.slug}`} key={category.id} className="link">
          <div className="catItem">
              <PhoneIphoneOutlinedIcon />
              <span>{category.name}</span>
          </div>
        </Link>
      ))}
    </>
  )
}

export default Categories