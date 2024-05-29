import { Expose, Transform } from 'class-transformer'
import { IsNotEmpty } from 'class-validator'
import { BaseDTO } from 'src/common/baseDTO'
/**
 * Pipe dùng để xử lý dữ liệu đầu vào trước khi nó được chuyển đến route handler
 * Thường pipe để transform (thay đổi dữ liệu), validate (kiểm tra dữ liệu), hoặc thực hiện một số xử lý khác
 * Expose decorator được sử dụng để chỉ định các property mà bạn muốn expose (hiển thị) khi chuyển đổi từ class sang plain object
 * plain object là một object với các property là các primitive value hoặc array hoặc object
 */
export default class UserDTO extends BaseDTO {
  @IsNotEmpty()
  @Expose()
  name: string
  @IsNotEmpty()
  @Expose()
  age: number

  firstName: string
  lastName: string

  @Expose()
  @Transform(({ obj }) => `${obj.firstName} ${obj.lastName}`)
  fullName: string
}
