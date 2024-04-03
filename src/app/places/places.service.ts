import { Injectable } from '@angular/core';
import {Place} from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  
  public places: Place[] = [ // Cambiando 'private' por 'public'

      {
        "id": "1",
        "title": "Gyeongbokgung Palace",
        "imageURL": "https://i2.wp.com/www.janegalvez.com/wp-content/uploads/2015/10/gyeongbokgung-seoul.jpg",
        "comments": ["Impresionante Arquitectura Histórica","Atmósfera Serena y Majestuosa","Importancia Cultural y Turística"]
      },
      {
        "id": "2",
        "title": "Seul Tower",
        "imageURL": "https://th.bing.com/th/id/R.f51bf92ea4f6c3c9b97d394b2ce26c04?rik=nNFX2dYJCJdUNg&pid=ImgRaw&r=0",
        "comments": ["Vistas Panorámicas Inigualables","Icono Moderno de Seúl","Ofertas de Entretenimiento y Gastronomía"]
      },
    {
      id: '3',
      title: 'La torre inclinada de Pisa',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg/800px-The_Leaning_Tower_of_Pisa_SB.jpeg',
      comments: ['¡Inclina tu perspectiva y déjate cautivar por la maravillosa Torre de Pisa!','¡Un desafío arquitectónico convertido en símbolo mundial de la extravagancia!']
    },
    {
      id: '4',
      title: 'Machu Picchu',
      imageURL: 'https://media.cntraveler.com/photos/5818a486b6f3d25e7b5c6a3e/16:9/w_1920,c_limit/GettyImages-573103543.jpg',
      comments: []
    },
    {
      id: '5',
      title: 'Gran Muralla China',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/800px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg',
      comments: ['¡Una maravilla arquitectónica! ¡Increíble historia y vistas!','¡Una de las maravillas del mundo moderno!']
    },
    {
      id: '6',
      title: 'Coliseo Romano',
      imageURL: 'https://www.laotraruta.org/wp-content/uploads/2014/08/coliseo-de-roma-noche.jpg',
      comments: ['¡Impresionante legado histórico! ¡Una experiencia única!','¡Sumérgete en la grandeza del Imperio Romano!']
    },
    {
      id: '7',
      title: 'Taj Mahal',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/800px-Taj_Mahal_%28Edited%29.jpeg',
      comments: ['¡Una joya arquitectónica! ¡Romanticismo en mármol!','¡Uno de los lugares más hermosos del mundo!']
    },
    {
      id: '8',
      title: 'Cristo Redentor',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Cristo_Redentor_-_Rio_de_Janeiro,_Brasil-crop.jpg',
      comments: ['¡Impresionantes vistas de Río de Janeiro! ¡Inspirador y majestuoso!','¡Una obra maestra de la arquitectura y la ingeniería!']
    },
    {
      id: '9',
      title: 'Opera House de Sídney',
      imageURL: 'https://th.bing.com/th/id/R.47b636f6f8198038bf6e42adb385d075?rik=la7E1IAQZwf94Q&pid=ImgRaw&r=0',
      comments: ['¡Un icono de la arquitectura moderna! ¡Espectáculos impresionantes!','¡Un símbolo cultural de Australia y del mundo!']
    },
    {
      id: '10',
      title: 'Acrópolis de Atenas',
      imageURL: 'https://th.bing.com/th/id/R.08da24aa33dfbb8de88d9b8c66b6b8f1?rik=vIM%2f5rj9PNhm6w&pid=ImgRaw&r=0',
      comments: ['¡Una maravilla histórica! ¡Vistas panorámicas impresionantes!','¡Un testimonio de la grandeza de la antigua Grecia!']
    },
    {
      id: '11',
      title: 'Pirámides de Egipto',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/800px-Kheops-Pyramid.jpg',
      comments: ['¡Un legado impresionante de la antigüedad! ¡Misterioso y fascinante!','¡Una de las maravillas del mundo antiguo que aún perdura!']
    },
    {
      id: '12',
      title: 'Estadio Maracaná',
      imageURL: 'https://th.bing.com/th/id/R.552b696b9fc5562dd509747bbfe75c82?rik=NzRrYha5fr9ZAQ&pid=ImgRaw&r=0',
      comments: ['¡Un templo del fútbol! ¡Emocionante ambiente deportivo!','¡Un lugar donde se escriben páginas de historia futbolística!']
    },
    {
      id: '13',
      title: 'Parque Nacional Yellowstone',
      imageURL: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/01/26151504/iStock-146866354.jpg',
      comments: ['¡Una maravilla natural! ¡Géiseres y paisajes impresionantes!','¡Uno de los parques más famosos y visitados del mundo!']
    },
    {
      id: '14',
      title: 'Alhambra de Granada',
      imageURL: 'https://cdn.audleytravel.com/5595/3996/79/1342712-patio-de-los-leones-alhambra-granada.jpg',
      comments: ['¡Una joya del arte islámico! ¡Arquitectura y jardines espectaculares!','¡Una visita que te transporta a la época de los sultanes!']
    }

  ];

  constructor() { }

  getPlaces(){
    return [...this.places]
  }

  getPlace(placeId: string): Place | undefined {
    const place = this.places.find(place => place.id === placeId);
    return place ? { ...place } : undefined;
  }
  

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ""

    });
  }

  deletePlace(placeId: string){
    this.places = this.places.filter(place => {return place.id !== placeId
    })
  }
  
  updatePlace(placeId: string, newTitle: string, newImageURL: string, newComments: string[]) {
    const index = this.places.findIndex(place => place.id === placeId);
    if (index !== -1) {
        this.places[index].title = newTitle;
        this.places[index].imageURL = newImageURL;
        this.places[index].comments = newComments;
    }
}


}
