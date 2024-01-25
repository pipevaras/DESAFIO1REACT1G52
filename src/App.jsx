import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header title="Adopta un perrito" />
      <div className="cuadro">
        <MyCard
          image="https://images.pexels.com/photos/15794935/pexels-photo-15794935/free-photo-of-retrato-de-un-chiahuahua-negro-mayor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Benardo"
          description="El es Benardo, un perrito muy cariñoso y juguetón, con solo mirarlo sabrás que él es el indicado."
          bg="warning"
          text="Ternura"
        />
        <MyCard
          image="https://images.pexels.com/photos/19086868/pexels-photo-19086868/free-photo-of-hombre-perro-mascota-mono.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Chomitan"
          description="El es Chomitan, el perrito mas fiel que encontrarás, es capaz de estar a tu lado toda la eternidad comiendo pollito."
          bg="success"
          text="Amigable"
        />
        <MyCard
          image="https://images.pexels.com/photos/19698742/pexels-photo-19698742/free-photo-of-cumpleanos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Griseldita"
          description="Ella es Griseldita, una perrita muy tranquila, es amiga de todos los niños y de todas las mascotas, es tan adorable que todos querrán acariciarla."
          bg="danger"
          text="Tranquilidad"
        />
        <MyCard
          image="https://images.pexels.com/photos/15794775/pexels-photo-15794775/free-photo-of-hermoso-border-collie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Vaquita"
          description="Ella es Vaquita, una perrita muy educada y aventurera, si tu casa está ubicada fuera de la ciudad, Vaquita se convertiría en tu peludita ideal!."
          bg="primary"
          text="Aventurera"
        />
      </div>
      <Footer footerText="Revisa toda nuestra galería de perritos para que encuentres un compañer@ peludito para poder jugar y dar mucho amor!!. Uno de estos perritos puede que te escoja a ti primero :)" />
    </>
  )
}

export default App
