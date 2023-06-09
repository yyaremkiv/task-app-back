import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Task, TaskSchema } from '../schema/task.schema';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  providers: [TaskService],
  controllers: [TaskController],
  exports: [TaskService],
})
export class TaskModule {}
