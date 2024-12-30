// import './Home.scss';
// import useFetch from '../../Hooks/FetchData';
// import { useContext } from 'react';
// import { DataContext } from '../../App';



// const Home = () => {
//   const {dataFilter} = useContext(DataContext)
//   const {data, isLoading, mediaUrl} = useFetch()
//   console.log(dataFilter)
//   const displayData = dataFilter && Array.isArray(dataFilter) && dataFilter.length > 0
//     ? dataFilter
//     : data;

//   if (isLoading) {
//     return <div>Загрузка данных, подождите...</div>;
//   }

//   return (
//     <div className='home'>
//       {displayData && displayData.map((item) => (
//         <div key={item.id} className='itemPhone'>
//           <div className='image'>
//             <img src={`${mediaUrl}${item.image.substring(37)}`} alt="" className='firstImage' />
//             <img src={`${mediaUrl}${item.image2.substring(37)}`} alt="" className='secondImage' />
//           </div>
//           <span>Модель {item.name}</span>
//           <span>{item.description.substring(0, 70)}</span>
//           <span>Оперативная память {item.ram}</span>
//           <span>Основная память {item.storage}</span>
//           <span>Цена {item.price}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home









import './Home.scss';
import { useContext } from 'react';
import { DataContext } from '../../App';



const Home = () => {
  const {dataFilter} = useContext(DataContext)
  const mediaUrl = "http://127.0.0.1:8000/api/media/products/"
  console.log(dataFilter)
  const displayData = dataFilter && Array.isArray(dataFilter) && dataFilter.length > 0
    ? dataFilter
    : '';

  
  return (
    <div className='home'>
      {displayData && displayData.map((item) => (
        <div key={item.id} className='itemPhone'>
          <div className='image'>
            <img src={`${mediaUrl}${item.image.substring(37)}`} alt="" className='firstImage' />
            <img src={`${mediaUrl}${item.image2.substring(37)}`} alt="" className='secondImage' />
          </div>
          <span>Модель {item.name}</span>
          <span>{item.description.substring(0, 70)}</span>
          <span>Оперативная память {item.ram}</span>
          <span>Основная память {item.storage}</span>
          <span>Цена {item.price}</span>
        </div>
      ))}
    </div>
  );
}

export default Home