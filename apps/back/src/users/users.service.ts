import { Injectable } from '@nestjs/common'
import { User } from 'db'

import { PrismaService } from '../database/prisma.service'

import { UserDto } from './dto/user-create.dto'

@Injectable()
export class UsersService {
	constructor(private readonly prisma: PrismaService) {}

	async create(dto: UserDto): Promise<User> {
		return this.prisma.user.create({ data: { ...dto } })
	}

	async findByEmail(email: string) {
		this.prisma.user.findFirst({ where: { email } })
	}

	async findById(id: number): Promise<User> {
		return this.prisma.user.findFirst({ where: { id } })
	}
}
