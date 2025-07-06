
const CountryCard = ({ png, name, population, region, capital }) => {
  return (
    <div className='rounded-md  flex flex-col items-start shadow-lg p-4 mt-6 w-full xs:w-[75%] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[22%] bg-element text-foreground card'>
       <img
          src={png}
          alt={name}
          className="w-full h-56 sm:h-60 md:h-56 lg:h-48 object-cover"
        />
      <div className='px-4'>
        <h2 className='text-xl lg:text-2xl font-[600] py-5 tracking-wider'>{name}</h2>
        <p className='font-[500]'>
          Population:{' '}
          <span className='font-normal '>{population}</span>
        </p>
        <p className='font-[500]'>
          Region:{' '}
          <span className='font-normal '>{region}</span>
        </p>
        <p className='font-[500]'>
          Capital:{' '}
          <span className='font-normal '>{capital}</span>
        </p>
      </div>

    </div>
  )
}

export default CountryCard
