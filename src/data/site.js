// Contenuti del sito Dixie & Co. — estratti dal vecchio sito + nuovi.

export const band = {
  name: 'Dixie & Co.',
  tagline: 'Jazz · Swing · Dixieland',
  city: 'Salerno',
  founded: '2013',
};

export const contacts = {
  phones: [
    { name: 'Paolo', number: '+39 340 305 5091', href: 'tel:+393403055091' },
    { name: 'Diego', number: '+39 329 657 4498', href: 'tel:+393296574498' },
  ],
  email: 'dixieco@libero.it',
  emailHref: 'mailto:dixieco@libero.it',
  place: 'Piazza XXIV Maggio, Salerno',
  facebook: 'https://www.facebook.com/dixieco',
};

// 9 video YouTube (id estratti dal vecchio sito)
export const videos = [
  { id: '1CjaodGJ91E', title: 'Dixie & Co. — Live' },
  { id: '2kAiLqkfpuo', title: 'Dixie & Co. — Swing' },
  { id: '35mGUnQ6DB8', title: 'Dixie & Co. — Dixieland' },
  { id: '4SkqBozPYgU', title: 'Dixie & Co. — In concerto' },
  { id: '9U24YBll-sU', title: 'Dixie & Co. — Live session' },
  { id: 'cYzD_Rcm9qU', title: 'Dixie & Co. — Jazz' },
  { id: 'I1oi47-MU0w', title: 'Dixie & Co. — On stage' },
  { id: 'jn8KSYheOoI', title: 'Dixie & Co. — New Orleans' },
  { id: 'Q6L663zhpa8', title: 'Dixie & Co. — Esibizione' },
];

// foto curate e ottimizzate in /public/foto — le "nove" (nuove) prima.
export const photos = [
  { src: '/foto/nove-01.jpg', alt: 'La band in posa, bretelle rosse', tall: true },
  { src: '/foto/nove-02.jpg', alt: 'In marcia con la tuba' },
  { src: '/foto/nove-04.jpg', alt: 'Trombettista all’aperto', tall: true },
  { src: '/foto/nove-05.jpg', alt: 'Contrabbasso e occhiali da sole', tall: true },
  { src: '/foto/nove-10.jpg', alt: 'Tutta la band tra le righe' },
  { src: '/foto/nove-06.jpg', alt: 'Cornetta al tramonto', tall: true },
  { src: '/foto/nove-07.jpg', alt: 'Fiati e bretelle rosse', tall: true },
  { src: '/foto/nove-03.jpg', alt: 'Festa in pieno swing' },
  { src: '/foto/nove-08.jpg', alt: 'Sassofono solista', tall: true },
  { src: '/foto/nove-09.jpg', alt: 'Contrabbasso, luci calde', tall: true },

  { src: '/foto/band-bianco.jpg',   alt: 'Dixie & Co. in giacca bianca', tall: true },
  { src: '/foto/live-rosso-1.jpg',  alt: 'Esibizione dal vivo, luci rosse', tall: true },
  { src: '/foto/tromba-solo.jpg',   alt: 'Assolo di tromba' },
  { src: '/foto/band-scalinata.jpg',alt: 'La band sulla scalinata' },
  { src: '/foto/live-2.jpg',        alt: 'Concerto dal vivo' },
  { src: '/foto/tromba-basso.jpg',  alt: 'Tromba e contrabbasso' },
  { src: '/foto/venue.jpg',         alt: 'Serata in locale' },
  { src: '/foto/scarpe.jpg',        alt: 'Dettaglio: scarpe e palco' },
  { src: '/foto/teatro.jpg',        alt: 'Concerto in teatro', tall: true },
  { src: '/foto/bn-1.jpg',          alt: 'Scatto in bianco e nero' },
];

export const nav = [
  { label: 'Band',      href: '#band' },
  { label: 'Video',     href: '#video' },
  { label: 'Foto',      href: '#foto' },
  { label: 'Cerimonia', href: '#cerimonia' },
  { label: 'Contatti',  href: '#contatti' },
];
