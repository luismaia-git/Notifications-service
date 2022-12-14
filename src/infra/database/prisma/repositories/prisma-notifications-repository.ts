import { Injectable } from '@nestjs/common';
import { Notification } from 'src/application/entities/notification/notification';
import { NotificationRepository } from 'src/application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private PrismaService: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    await this.PrismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
