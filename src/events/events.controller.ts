import { Controller, Logger } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('/events')
export class EventsController {
  private readonly logger = new Logger(EventsController.name);

  constructor(private readonly eventsService: EventsService) {}
}
