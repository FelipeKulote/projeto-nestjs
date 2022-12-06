import { Module } from "@nestjs/common";
import { SetorController } from "./user.controller";

@Module({
    controllers: [SetorController],
    providers: [],
})

export class SetorModule {}