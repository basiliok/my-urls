import { Component } from '@angular/core';
import { PageCardComponent } from '../../components/page-card/page-card.component';

interface PageCard {
  label: string;
  url: string;
  iconName?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  contentPageCards: PageCard[] = [
    { label: 'Cursos de Dev en PDF', url: 'https://manual-informatica.com/download-file.html' },
    { label: 'Pimsleur (Ingles)', url: 'https://learn.pimsleur.com/Learn' },
    { label: 'Cibertec', url: 'https://www.cibertec.edu.pe/' },
    { label: 'Cibertec Blackboard', url: 'https://cibertec.blackboard.com' },
    { label: 'Analytics Google', url: 'https://analytics.google.com/analytics/web', iconName: 'googleanalytics' },
    { label: 'Firebase', url: 'https://firebase.google.com/', iconName: 'firebase' },
    { label: 'Google Adsense', url: 'https://adsense.google.com/start/' },
    { label: 'Google Search Console', url: 'https://search.google.com/search-console' },
    { label: 'Office', url: 'https://www.office.com/' },
    { label: 'Editor de Imagenes PNG', url: 'http://www.online-image-editor.com' },
    { label: 'MultiEditor de Imagenes', url: 'https://pinetools.com/es/obtener-colores-imagen' },
    { label: 'Paleta de Colores', url: 'https://mycolor.space/' },
    { label: 'Deepl (Traductor)', url: 'https://www.deepl.com/translator' },
    { label: 'Translate Google', url: 'https://translate.google.com/' },
    { label: 'OneDrive', url: 'http://onedrive.live.com' },
    { label: 'Portal Azure', url: 'https://portal.azure.com/' },
    { label: 'WhatsApp Web', url: 'https://web.whatsapp.com/' },
    { label: 'Telegram Web', url: 'https://web.telegram.org/' },
    { label: 'My Github (Main)', url: 'https://github.com/paledot01', iconName: 'github' },
    { label: 'My Github (Secondary)', url: 'https://github.com/paledot02', iconName: 'github' },
    { label: 'Github icon', url: 'https://github-emoji-picker.vercel.app/' },
    { label: 'QuickType (transform JSON)', url: 'https://quicktype.io/' },
    { label: 'Transform Tools (JSON to Java)', url: 'https://transform.tools/json-to-java' },
    { label: 'Chatgpt', url: 'https://chatgpt.com/' },
    { label: 'Slack', url: 'https://slack.com/' },
    { label: 'Frontend SEO', url: 'https://frontendchecklist.io/' },
    { label: 'Roadmap Programador', url: 'https://roadmap.sh/' },
    { label: 'Ajedrez', url: 'https://lichess.org/' },
    { label: 'Create Gift', url: 'https://ezgif.com/' },
    { label: 'Font Awesome (Icons)', url: 'https://fontawesome.com/' },
    { label: 'Icons Free', url: 'https://icon-icons.com/es/' },
    { label: 'Wireframe', url: 'https://mockflow.com/' },
    { label: 'Figma', url: 'https://www.figma.com/' },
    { label: 'Pinterest', url: 'https://www.pinterest.es/' },
    { label: 'MultiConverter', url: 'https://www.online-convert.com/' },
    { label: 'Ejercicios de Frontend', url: 'https://www.frontendmentor.io/' },
    { label: 'W3Schools', url: 'https://www.w3schools.com/' },
    { label: 'Descargar Documentos gratis', url: 'https://docdownloader.com/' },
    { label: 'Torrent', url: 'https://www.1377x.to/' },
    { label: 'Torrent 2', url: 'https://kickasstorrents.to/' },
    { label: 'Torrent 3', url: 'https://www.limetorrents.lol/' },
    { label: 'Excalidraw', url: 'https://excalidraw.com/' },
    { label: 'Draw.io', url: 'https://app.diagrams.net/' },
  ];
}
