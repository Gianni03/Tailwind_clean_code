import './App.css';
import type { VideoGame } from './models/VideoGame';
import VideoGameGrid from './videogames/VideoGameGrid';

// logica de clases de tailwinds, orden:
// layout -> display -> spacing -> border -> color -> text

function App() {
  const games: VideoGame[] = [
    {
      id: 1,
      title: 'Cyberpunk 2077',
      subtitle: 'Futuristic RPG',
      description:
        'Explora Night City, una metrópolis llena de crimen, tecnología y decisiones que afectan el futuro.',
      image:
        'https://www.clavecd.es/wp-content/uploads/Stop-Destroying-Videogames-1.webp',
    },
    {
      id: 2,
      title: 'The Legend of Zelda: Breath of the Wild',
      subtitle: 'Open World Adventure',
      description:
        'Viaja a través de Hyrule, resuelve acertijos y enfréntate a poderosos enemigos en un mundo abierto.',
      image:
        'https://www.watchmojo.com/uploads/thumbs720/VG-RP-Top10-Opening-Levels-In-VideoGames-480p30.jpg',
    },
    {
      id: 3,
      title: 'Elden Ring',
      subtitle: 'Dark Fantasy RPG',
      description:
        'Un universo creado por Hidetaka Miyazaki y George R. R. Martin, lleno de desafíos y misterio.',
      image: 'https://i.blogs.es/ddd0a8/anthem-2026/500_333.jpeg',
    },
    {
      id: 4,
      title: 'God of War: Ragnarok',
      subtitle: 'Mythological Action',
      description:
        'Acompaña a Kratos y Atreus en una aventura épica a través de la mitología nórdica.',
      image: 'https://www.gamejournal.it/wp-content/uploads/2016/10/SLOAN_nostalgiavideogames_coverimage_resize.jpg',
    },
    {
      id: 5,
      title: 'Minecraft',
      subtitle: 'Sandbox Survival',
      description:
        'Construye, explora y sobrevive en un mundo infinito lleno de bloques y creatividad.',
      image: 'https://cdn.thewirecutter.com/wp-content/uploads/2020/04/videogames-lowres-animalcrossing2-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp',
    },
    {
      id: 6,
      title: 'Fortnite',
      subtitle: 'Battle Royale',
      description:
        'Lucha en un campo de batalla dinámico con amigos y demuestra quién es el último en pie.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
    },
    {
      id: 7,
      title: 'League of Legends',
      subtitle: 'MOBA Strategy',
      description:
        'Enfréntate en batallas estratégicas 5v5 y escala posiciones en la Grieta del Invocador.',
      image: 'https://www.gamejournal.it/wp-content/uploads/2016/10/SLOAN_nostalgiavideogames_image1.jpg',
    },
    {
      id: 8,
      title: 'Red Dead Redemption 2',
      subtitle: 'Western Adventure',
      description:
        'Vive la historia de Arthur Morgan en el salvaje oeste lleno de acción, lealtad y traición.',
      image: 'https://c10.patreonusercontent.com/4/patreon-media/p/campaign/5627574/4ea3b0a8dd954ff68d8c5a88448a9add/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/6.jpg?token-hash=CnAxSaXiF-5nxvPsqb0lxi5wLb0vTXH3banH3ok84Zo%3D&token-time=1756944000',
    },
    {
      id: 9,
      title: 'Super Mario Odyssey',
      subtitle: 'Platform Adventure',
      description:
        'Acompaña a Mario en un viaje alrededor del mundo para rescatar a la princesa Peach.',
      image: 'https://www.stripes.com/incoming/128w8i-videogames-shinobi-jp6gpaumz5a2pjegseqtnxwywu.jpg/alternates/LANDSCAPE_300/videogames-shinobi-JP6GPAUMZ5A2PJEGSEQTNXWYWU.jpg',
    },
    {
      id: 10,
      title: 'Call of Duty: Warzone',
      subtitle: 'First-Person Shooter',
      description:
        'Sobrevive en intensas batallas multijugador con armas realistas y escenarios inmersivos.',
      image: 'https://www.caa.com/sites/default/files/styles/widescreen_landscape/public/2018-06/CAA-VideoGames-HeroDesktop.jpg?itok=_pV0QCwo',
    },
  ];
  return <VideoGameGrid games={games} />;
}

export default App;
