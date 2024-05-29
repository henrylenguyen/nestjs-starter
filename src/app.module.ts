import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

/**
 * Module decorator là một decorator được sử dụng để đánh dấu một class là module.
 * Một module là một class với @Module
 * Module dùng để tổ chức và quản lý các controller, provider, middleware, pipe, guard, interceptor, exception filter
 * Module cũng có thể import các module khác
 * pipe là một class được sử dụng để xử lý dữ liệu đầu vào trước khi nó được chuyển đến route handler
 * guard là một class được sử dụng để kiểm tra xem một request có được xử lý hay không
 * interceptor là một class được sử dụng để thay đổi response hoặc request trước khi nó được chuyển đến route handler
 * exception filter là một class được sử dụng để xử lý các exception trong ứng dụng
 * middleware là một class được sử dụng để xử lý các request trước khi nó được chuyển đến route handler
 * provider là một class được sử dụng để cung cấp các dependency cho các controller, service, module khác
 * controller là một class được sử dụng để xử lý các request và trả về response
 * route handler là một method trong controller được sử dụng để xử lý request và trả về response
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true
    })
  ]
})
export default class AppModule {}
