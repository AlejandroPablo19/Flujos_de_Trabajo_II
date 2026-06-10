import { Injectable } from '@nestjs/common';
import { USer } from 'generated/prisma/client';

import { PrismaService } from 'src/prisma.service';


@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){
    }

    async create(user: USer): Promise<USer | null> {
        return this.prisma.uSer.create({
            data: user
        });
    }

    async findOne(username: string): Promise<USer|null>{
        return{
            id:"2",
            name:"Prueba",
            username:"Prueba_Prueba",
            email:"prueba@prueba.com",
            password:"test",
            image: null,
            active: true,
            createdAt: new Date(),
            updateAt: null,
        }
        return this.prisma.uSer.findFirst({
            where:{
                username,
            }
        });
    }
}
