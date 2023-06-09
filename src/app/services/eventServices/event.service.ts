import { Injectable } from '@angular/core';
import { Observable, Subject, from } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  listeners: any;
  eventsSubject: any;
  events;

  constructor() {
    this.listeners = {};
    this.eventsSubject = new Subject();

    this.events = from(this.eventsSubject);

    this.events.subscribe(({ name, args }) => {
      if (this.listeners[name]) {
        for (const listener of this.listeners[name]) {
          listener(...args);
        }
      }
    });
  }

  on(name, listener) {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
      this.listeners[name].push(listener);
    }
    if (this.listeners[name]) {
      this.listeners[name][0] = listener;
    }
  }

  broadcast(name, ...args) {
    // console.log('name=', name);
    this.eventsSubject.next({
      name,
      args,
    });
  }
}
