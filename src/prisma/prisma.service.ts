import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
// export class PrismaService {}
export class PrismaService extends PrismaClient {}
