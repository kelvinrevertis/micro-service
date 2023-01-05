import { Injectable } from '@nestjs/common/decorators';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface CancelNotificationRequest {
  NotificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { NotificationId } = request;

    const notification = await this.notificationsRepository.findById(
      NotificationId,
    );

    if (!notification) {
      throw new Error('Notification not found.');
    }
  }
}
