import { Component } from '@angular/core';
import { PageCardComponent } from '../../components/page-card/page-card.component';

interface PageCard {
  label: string;
  url: string;
  animatedIcon?: string;
  staticIcon?: string;
}

interface Section {
  title: string;
  pageCards: PageCard[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  sections: Section[] = [
    {
      title: 'PROCRASTINACIÓN',
      pageCards: [
        { label: 'YouTube', url: 'https://www.youtube.com/', animatedIcon: 'youtube' },
        { label: 'Ajedrez', url: 'https://lichess.org/' },
      ],
    },
    {
      title: 'INGLES',
      pageCards: [{ label: 'Wordz', url: 'https://wordz.my/' }],
    },
    {
      title: 'DESARROLLO',
      pageCards: [
        { label: 'My Github (Main)', url: 'https://github.com/paledot01', animatedIcon: 'github' },
        { label: 'My Github (Secondary)', url: 'https://github.com/paledot02', animatedIcon: 'github' },
        { label: 'Chatgpt', url: 'https://chatgpt.com/', staticIcon: 'chatgpt' },
        { label: 'Firebase', url: 'https://firebase.google.com/', animatedIcon: 'firebase' },
        {
          label: 'Analytics Google',
          url: 'https://analytics.google.com/analytics/web',
          animatedIcon: 'googleanalytics',
        },
        {
          label: 'Google Search Console',
          url: 'https://search.google.com/search-console',
          staticIcon: 'googlesearchconsole',
        },
        { label: 'Google Adsense', url: 'https://adsense.google.com/start/', staticIcon: 'googleadsense' },
        { label: 'Namecheap', url: 'https://www.namecheap.com/', staticIcon: 'namecheap' },
      ],
    },
    {
      title: 'TRABAJO',
      pageCards: [
        { label: 'Linkedin', url: 'https://www.linkedin.com/', staticIcon: 'linkedin' },
        { label: 'Jira', url: 'https://id.atlassian.com/login', staticIcon: 'jira' },
        { label: 'Slack', url: 'https://slack.com/', staticIcon: 'slack' },
        { label: 'Portal Azure', url: 'https://portal.azure.com/', staticIcon: 'azureportal' },
      ],
    },
    {
      title: 'CORREO - MENSAJES',
      pageCards: [
        { label: 'WhatsApp Web', url: 'https://web.whatsapp.com/', staticIcon: 'whatsapp' },
        { label: 'Telegram Web', url: 'https://web.telegram.org/', staticIcon: 'telegram' },
        { label: 'Gmail', url: 'https://accounts.google.com/ServiceLogin?service=mail', staticIcon: 'gmail' },
        { label: 'Outlook', url: 'https://go.microsoft.com/fwlink/?linkid=2185828', staticIcon: 'outlook' },
      ],
    },
    {
      title: 'HERRAMIENTAS',
      pageCards: [
        { label: 'BsCounter', url: 'https://bscounter.com/' },
        { label: 'Figma', url: 'https://www.figma.com/' },
        { label: 'Translate Google', url: 'https://translate.google.com/', staticIcon: 'googletranslate' },
        { label: 'Deepl (Traductor)', url: 'https://www.deepl.com/translator' },
        { label: 'Wireframe', url: 'https://mockflow.com/' },
        { label: 'MultiConverter', url: 'https://www.online-convert.com/' },
        { label: 'QuickType (transform JSON)', url: 'https://quicktype.io/' },
        { label: 'Transform Tools (JSON to Java)', url: 'https://transform.tools/json-to-java' },
        { label: 'Editor de Imagenes PNG', url: 'http://www.online-image-editor.com' },
        { label: 'MultiEditor de Imagenes', url: 'https://pinetools.com/es/obtener-colores-imagen' },
        { label: 'Paleta de Colores', url: 'https://mycolor.space/' },
        { label: 'Excalidraw', url: 'https://excalidraw.com/' },
        { label: 'Draw.io', url: 'https://app.diagrams.net/' },
        { label: 'Create Gift', url: 'https://ezgif.com/' },
      ],
    },
    {
      title: 'UTILIDADES',
      pageCards: [
        { label: 'Pinterest', url: 'https://www.pinterest.es/' },
        { label: 'Font Awesome (Icons)', url: 'https://fontawesome.com/' },
        { label: 'Github icon', url: 'https://github-emoji-picker.vercel.app/' },
        { label: 'Icons Free', url: 'https://icon-icons.com/es/' },
        { label: 'Vector Logo', url: 'https://worldvectorlogo.com/' },
      ],
    },
    {
      title: 'LEARNING',
      pageCards: [
        { label: 'W3Schools', url: 'https://www.w3schools.com/' },
        { label: 'Roadmap Programador', url: 'https://roadmap.sh/' },
        { label: 'Ejercicios de Frontend', url: 'https://www.frontendmentor.io/' },
        { label: 'Frontend SEO', url: 'https://frontendchecklist.io/' },
        { label: 'Descargar Documentos gratis', url: 'https://docdownloader.com/' },
        { label: 'Cursos de Dev en PDF', url: 'https://manual-informatica.com/download-file.html' },
        { label: 'Pimsleur (Ingles)', url: 'https://learn.pimsleur.com/Learn' },
        { label: 'Cibertec', url: 'https://www.cibertec.edu.pe/' },
        { label: 'Cibertec Blackboard', url: 'https://cibertec.blackboard.com' },
        { label: 'Office', url: 'https://www.office.com/' },
        { label: 'OneDrive', url: 'http://onedrive.live.com' },
      ],
    },
    {
      title: 'EXTRA',
      pageCards: [
        { label: 'Torrent', url: 'https://www.1377x.to/' },
        { label: 'Torrent 2', url: 'https://kickasstorrents.to/' },
        { label: 'Torrent 3', url: 'https://www.limetorrents.lol/' },
      ],
    },
  ];
}
