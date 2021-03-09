import {
    CallHandler,
    ExecutionContext,
    Logger,
    NestInterceptor
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

export class LoggingInterceptor implements NestInterceptor {
    private readonly logger = new Logger()

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const { method, originalUrl } = context.switchToHttp().getRequest()
        const className = context.getClass().name

        const now = Date.now()

        return next
            .handle()
            .pipe(
                tap(() =>
                    this.logger.debug(
                        `Request ${originalUrl} ${method} +${Date.now() - now}ms`,
                        className
                    )
                )
            )
    }
}
