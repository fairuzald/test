import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null);
  const fetchDataDailyPrice = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_ML_URL}/predict/str`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_ML_TOKEN}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          room_area_m2_str_listings: 45.0,
          first_bed_type_str_listings: 'double',
          second_bed_type_str_listings: 'single',
          has_window_str_listings: false,
          tv_str_listings: true,
          refrigerator_str_listings: false,
          has_table_str_listings: false,
          ac_str_listings: true,
          wardrobe_str_listings: false,
          balcony_str_listings: false,
          mirror_str_listings: false,
          room_service_str_listings: false,
          private_pool_str_listings: false,
          has_meals_str_listings: false,
          common_room_str_properties: false,
          lobby_str_properties: false,
          security_str_properties: false,
          gym_str_properties: false,
          cctv_str_properties: true,
          wifi_str_properties: false,
          parking_area_str_properties: true,
          motorcycle_parking_area_str_properties: true,
          car_parking_area_str_properties: true,
          pool_str_properties: true,
          star_rating_str_properties: 3.0,
          min_access_to_public_transport_str_properties: 90.0,
          ota_rating_str_properties: 27.0,
          poi_avg_distance_str_listings: 5.923333333333333,
          poi_total_str_listings: 18.0,
          rating_qty_str_properties: 90,
          name_villages: 'Caturtunggal',
          name_districts: 'Depok',
          name_provinces: 'Daerah Istimewa Yogyakarta',
          name_regencies: 'Kabupaten Sleman',
          elevator_str_properties: false,
          restaurant_str_properties: true,
          spa_str_properties: false,
          airport_transfer_str_properties: false,
          property_type_str_properties: 'hotel',
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  useEffect (() => {
    fetchDataDailyPrice();
  }
  ,[]);



  return (
    <>
    {data ? <div>{JSON.stringify(data)}</div> : <div>masih ada error...</div>}
   
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
