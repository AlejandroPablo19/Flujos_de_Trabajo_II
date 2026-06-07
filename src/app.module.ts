import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TurtlesModule } from './turtles/turtles.module';

@Module({
  imports: [CatsModule, TurtlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}