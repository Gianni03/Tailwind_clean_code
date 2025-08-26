import './App.css';
import { VideoGame } from './types/VideoGame';
import VideoGameGrid from './videogames/VideoGameGrid';

// logica de clases de tailwinds, orden:
// layout -> display -> spacing -> border -> color -> text

function App() {
    const games: VideoGame[] = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    subtitle: "Futuristic RPG",
    description: "Explora Night City, una metrópolis llena de crimen, tecnología y decisiones que afectan el futuro.",
    image: "https://images.unsplash.com/photo-1607082349566-18734248d89c"
  },
  {
    id: 2,
    title: "The Legend of Zelda: Breath of the Wild",
    subtitle: "Open World Adventure",
    description: "Viaja a través de Hyrule, resuelve acertijos y enfréntate a poderosos enemigos en un mundo abierto.",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1"
  },
  {
    id: 3,
    title: "Elden Ring",
    subtitle: "Dark Fantasy RPG",
    description: "Un universo creado por Hidetaka Miyazaki y George R. R. Martin, lleno de desafíos y misterio.",
    image: "https://images.unsplash.com/photo-1611606063064-d7a4fa3d43e6"
  },
  {
    id: 4,
    title: "God of War: Ragnarok",
    subtitle: "Mythological Action",
    description: "Acompaña a Kratos y Atreus en una aventura épica a través de la mitología nórdica.",
    image: "https://images.unsplash.com/photo-1622495891370-84b35d6b5f3f"
  },
  {
    id: 5,
    title: "Minecraft",
    subtitle: "Sandbox Survival",
    description: "Construye, explora y sobrevive en un mundo infinito lleno de bloques y creatividad.",
    image: "https://images.unsplash.com/photo-1611605698323-b1e1f342a6d2"
  },
  {
    id: 6,
    title: "Fortnite",
    subtitle: "Battle Royale",
    description: "Lucha en un campo de batalla dinámico con amigos y demuestra quién es el último en pie.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f"
  },
  {
    id: 7,
    title: "League of Legends",
    subtitle: "MOBA Strategy",
    description: "Enfréntate en batallas estratégicas 5v5 y escala posiciones en la Grieta del Invocador.",
    image: "https://images.unsplash.com/photo-1598515213692-5f6c145fcf8a"
  },
  {
    id: 8,
    title: "Red Dead Redemption 2",
    subtitle: "Western Adventure",
    description: "Vive la historia de Arthur Morgan en el salvaje oeste lleno de acción, lealtad y traición.",
    image: "https://images.unsplash.com/photo-1620331311520-739d6e0b9d3b"
  },
  {
    id: 9,
    title: "Super Mario Odyssey",
    subtitle: "Platform Adventure",
    description: "Acompaña a Mario en un viaje alrededor del mundo para rescatar a la princesa Peach.",
    image: "https://images.unsplash.com/photo-1557777586-cd524f0db6e8"
  },
  {
    id: 10,
    title: "Call of Duty: Warzone",
    subtitle: "First-Person Shooter",
    description: "Sobrevive en intensas batallas multijugador con armas realistas y escenarios inmersivos.",
    image: "https://images.unsplash.com/photo-1589244163305-67d5a1a67d63"
  }
];
  return (
    <VideoGameGrid games={games} />
  );
}

export default App;
