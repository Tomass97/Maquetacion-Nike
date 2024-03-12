import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Zapatillas de 
          <span className='text-coral-red'> Máxima </span>
          <span className='text-coral-red'>Calidad </span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Garantizando comodidad y estilo premium, nuestro calzado meticulosamente elaborado está diseñado para elevar tu experiencia, brindándote una calidad inigualable, innovación y un toque de elegancia.
        </p>
        <div className='mt-11'>
          <Button label='Detalles' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
