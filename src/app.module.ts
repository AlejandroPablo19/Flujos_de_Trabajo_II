import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TurtlesModule } from './turtles/turtles.module';

@Module({
  imports: [TurtlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
