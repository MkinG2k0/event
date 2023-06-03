import { Body, Controller, Post } from '@nestjs/common'

import { UsersService } from './users.service'
import { UserDto } from './dto/user-create.dto'

@Controller('users')
export class UsersController {
	constructor(private readonly userService: UsersService) {
	}

	@Post()
	async create(@Body() dto: UserDto) {
		return await this.userService.create(dto)
	}
}
