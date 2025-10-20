import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
})
export class ChatComponent {
  // Estado del chat (visible u oculto)
  isOpen = signal(false);

  // Historial de mensajes
  messages = signal<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: '👋 ¡Hola! Soy el asistente de Rodrigo del Bosque. ¿En qué puedo ayudarte?' },
  ]);

  // Mensaje actual del usuario
  userMessage = signal('');

  // Cargando respuesta
  loading = signal(false);

  // 👉 Cambia esta URL por la de tu servidor en Render
  private readonly API_URL = 'https://rmdelbosque-chat-server.onrender.com/';

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
          text: '😅 Ups, parece que hubo un problema. Puedes contactar directamente con Rodrigo en rodrigo@rmdelbosque.com o por WhatsApp.',
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
