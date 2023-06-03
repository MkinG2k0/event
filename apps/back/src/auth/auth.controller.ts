import { Post, Get, Controller, Body } from '@nestjs/common'

import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('signup')
	async register(@Body() dto) {

	}
}
