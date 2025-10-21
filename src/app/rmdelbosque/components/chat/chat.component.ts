import { Component, effect, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
})
export class ChatComponent {
  isOpen = signal(false);
  userMessage = signal('');
  loading = signal(false);
  messages = signal<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: '👋 ¡Hola! Soy el asistente de Rodrigo del Bosque. ¿En qué puedo ayudarte?' },
  ]);

  // 👉 Cambia esta URL por la de tu servidor en Render
  private readonly API_URL = 'https://rmdelbosque-chat-server.onrender.com/api/chat'

  @ViewChild('messagesContainer') messagesContainer!: ElementRef<HTMLDivElement>;

  constructor() {
    // 🔄 Efecto: cada vez que cambian los mensajes o el estado de carga, bajamos el scroll
    effect(() => {
      this.messages();
      this.loading();

      setTimeout(() => {
        const el = this.messagesContainer?.nativeElement;
        if (el) el.scrollTop = el.scrollHeight;
      }, 50);
    });
  }

  toggleChat() {
    this.isOpen.update(v => !v);
  }

  async sendMessage() {
    const message = this.userMessage().trim();
    if (!message) return;

    // Añadimos mensaje del usuario al historial
    this.messages.update(m => [...m, { sender: 'user', text: message }]);
    this.userMessage.set('');
    this.loading.set(true);

    try {
      const response = await fetch('https://rmdelbosque-chat-server.onrender.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      const reply = data.reply || 'Lo siento, no he podido obtener una respuesta. 😕';

      // Añadimos respuesta del bot
      this.messages.update(m => [...m, { sender: 'bot', text: reply }]);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      this.messages.update(m => [
        ...m,
        {
          sender: 'bot',
          text: '😅 Ups, parece que hubo un problema. Puedes contactar directamente con Rodrigo en rodrigo.m.delbosque@gmail.com o al 654 85 93 87.',
        },
      ]);
    } finally {
      this.loading.set(false);
    }
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}
