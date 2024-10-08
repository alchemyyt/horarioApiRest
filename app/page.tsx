
import AnimeCard from "./components/AnimeCard";
export default async function Home() {
  return (
    <main className="flex flex-col lg:flex-row overflow-x-scroll lg:w-min lg:m-auto">
      <AnimeCard endPoint="es/schedule/monday" title="Lunes"/>
      <AnimeCard endPoint="es/schedule/tuesday" title="Martes"/>
      <AnimeCard endPoint="es/schedule/wednesday" title="Miercoles"/>
      <AnimeCard endPoint="es/schedule/thursday" title="Jueves"/>
      <AnimeCard endPoint="es/schedule/friday" title="Viernes"/>
      <AnimeCard endPoint="es/schedule/saturday" title="Sabado"/>
      <AnimeCard endPoint="es/schedule/sunday" title="Domingo"/>
    </main>
  );
}
