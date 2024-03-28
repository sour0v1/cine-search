
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

    // setValue(title);
    // setLoading(true);
    console.log(textValue);
    setValue(textValue);
    textValue && setLoading(true);
    e.target.text.value = '';

  }
  // console.log(value)

  useEffect(() => {
    // setLoading(true)
    // console.log('hello')
    value && fetch(`https://www.omdbapi.com/?t=${value}&apikey=892d9f68`)
      .then(res => res.json())
      .then(data => { setLoading(false); setData(data) })

  }, [value])
  // console.log(data);

  return (
    <>

      <h1 className='text-2xl'>Vite + React</h1>
      <form action="" onSubmit={handleValue}>
        <input className='border-2' type="text" name='text' />
        <input className='bg-gray-200 border m-4' type="submit" />
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
      <img src={data.Poster} alt="" />
      <div>
      {
        data.Response === 'False' && <h1>Not found this movie</h1>
      }
      </div>

    </>
  )
}

export default App
