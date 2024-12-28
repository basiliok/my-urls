import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { getBlob, ref, Storage } from '@angular/fire/storage';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-urls';

  private cacheName = 'cache-storage-image';
  private readonly storage = inject(Storage);

  imageUrl = '';

  async ngOnInit() {
    this.imageUrl = await this.getCachedImageUrl();
    if (!this.imageUrl) {
      await this.downloadImageOfStorage();
    }
  }

  async downloadImageOfStorage(): Promise<void> {
    const pathReference = ref(this.storage, 'LyKTuqo.jpg');
    const blobOfStorage = await getBlob(pathReference);
    this.imageUrl = URL.createObjectURL(blobOfStorage);
    this.setImageInCacheStorage(blobOfStorage, 'LyKTuqo.jpg');
  }

  /* ============================ CACHE ============================ */
  async setImageInCacheStorage(blob: Blob, key: string): Promise<void> {
    const cache = await caches.open(this.cacheName);
    const response = new Response(blob);
    cache.put(key, response);
  }

  async getCachedImageUrl(): Promise<string> {
    const cache = await caches.open(this.cacheName);
    const cachedResponse = await cache.match('LyKTuqo.jpg');
    if (cachedResponse) {
      return URL.createObjectURL(await cachedResponse.blob());
    }
    return '';
  }
}
