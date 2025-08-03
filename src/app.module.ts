import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Attempts,
  AttemptsSchema,
} from './schemas/attempts.schema';
import { PhishingSimulationController } from './controllers/phishing-simulation.controller';
import { PhishingSimulationService } from './services/phishing-simulation.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://adi:LqZ1TJxfjSebxCFN@cluster0.qt0gywj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ),
    MongooseModule.forFeature([
      { name: Attempts.name, schema: AttemptsSchema }
    ])
  ],
  controllers: [PhishingSimulationController],
  providers: [PhishingSimulationService]
})
export class AppModule {}
