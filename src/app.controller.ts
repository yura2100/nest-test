import { Controller, Post, UseGuards } from '@nestjs/common'
import { LocalAuthGuard } from './auth/local-auth.guard'
import { AuthService } from './auth/auth.service'
import { ApiTags } from '@nestjs/swagger'
import { User } from './user.decorator'

@ApiTags('/')
@Controller()
export class AppController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@User() user) {
        return this.authService.login(user)
    }
}
