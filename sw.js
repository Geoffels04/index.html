self.addEventListener('push', event => {
  const data = event.data?.json() || {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'FanatIQ', {
      body: data.body || 'New tip published',
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      tag: 'fanatiq-tip',
      requireInteraction: false,
      data: { url: data.url || 'https://fanatiq.tips' }
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data?.url || 'https://fanatiq.tips'));
});
