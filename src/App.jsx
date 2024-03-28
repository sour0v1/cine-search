
import { useEffect, useState } from 'react'
import './App.css'
import { ThreeDots } from 'react-loader-spinner';
function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleValue = (e) => {
    e.preventDefault();
    let textValue = e.target.text.value;
    console.log(textValue);
    setValue(textValue);
    textValue && setLoading(true);
    e.target.text.value = '';

  }
  useEffect(() => {
    value && fetch(`https://www.omdbapi.com/?t=${value}&apikey=892d9f68`)
      .then(res => res.json())
      .then(data => { setLoading(false); setData(data) })
  }, [value])

  console.log(data);

  return (
    <>
      <form onSubmit={handleValue}>
        <div className='flex gap-2 items-center justify-center'>
          <input className='bg-gray-100 outline-none rounded-full px-6 py-2 w-1/2' type="text" placeholder='Type movie name here...' name='text' />
          <input className='bg-gray-200 px-3 py-2 rounded-xl font-medium hover:bg-gray-50 hover:border-2' type="submit" value={'Search'} />
        </div>
      </form>
      <div className='flex justify-center items-center'>
        {
          loading && <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        }
      </div>
      <div className='flex justify-center items-center mt-9'>
        <div>
        <img src={data.Poster} alt="" />
        </div>
        <div>
          <h1>{data.title}</h1>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        {
          data.Response === 'False' && <h1>Not found this movie</h1>
        }
      </div>

    </>
  )
}

export default App
