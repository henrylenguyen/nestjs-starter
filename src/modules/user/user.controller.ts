import { Body, Controller, Get, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import UserDTO from 'src/modules/user/user.dto'
import UserService from 'src/modules/user/user.service'

/**
 * Controller decorator là một decorator được sử dụng để đánh dấu một class là controller.
 * Một controller là một class với @Controller
 * Controller dùng để xử lý các request và trả về response
 * Controller cũng có thể sử dụng các decorator khác như @Get, @Post, @Put, @Delete, @Patch, @Options, @Head, @All
 * @Controller nhận một path là một string
 *
 */
@Controller('user')
export default class userController {
  /* // Cách 1: dùng moduleRef có sẵn của nestjs
   * constructor(private readonly moduleRef : ModuleRef) {}
   * this.userSevice = this.moduleRef.get('USER_SERVICE', { strict: false })
   */
  /*
   * // Cách 2: dùng @Inject decorator
   * Inject là một decorator được sử dụng để inject một key (một token) vào một class
   *
   */
  constructor(@Inject('USER_SERVICE') private readonly userSevice: UserService) {}
  @Get()
  getAllUser() {
    return [
      {
        id: 1,
        name: 'John Doe',
        age: 25
      },
      {
        id: 2,
        name: 'Jane Doe',
        age: 24
      }
    ]
  }
  /**
   * UsePipes decorator được sử dụng để áp dụng một pipe cho một route handler hoặc một controller
   * Pipe là một class được sử dụng để xử lý dữ liệu đầu vào trước khi nó được chuyển đến route handler
   * ValidationPipe là một pipe được sử dụng để validate dữ liệu đầu vào, nó sẽ tự động kiểm tra dữ liệu đầu vào dựa trên các decorator như @Body, @Query, @Param, @Headers, @Session, @Cookie (Và các dữ liệu này được định nghĩa trong class DTO)
   * @Body decorator được sử dụng để lấy dữ liệu từ request body
   * @param user dùng để validate dữ liệu đầu vào
   * @returns
   * plainToClass dùng để chuyển một plain object sang một class object
   * plainToClass nhận 3 tham số: DTO class, dữ liệu được gửi đến từ client, options excludeExtraneousValues: true để loại bỏ các property không được định nghĩa trong DTO class
   */
  @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: UserDTO): UserDTO {
    return this.userSevice.createUser(user)
  }
}
