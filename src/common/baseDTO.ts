import { Expose, plainToClass } from 'class-transformer'

/**
 * Base DTO dùng để định nghĩa các property chung cho các DTO khác
 * abstract class là một class không thể khởi tạo, nó chỉ được sử dụng để kế thừa
 * Khi một class kế thừa từ một abstract class, nó phải implement tất cả các method và property của abstract class
 * Ví dụ: class UserDTO extends BaseDTO thì UserDTO phải có các property như id, createdAt, updatedAt, deletedAt, createdBy, updatedBy, deletedBy, isDeleted, isArchived, version
 * Nếu trường nào không cần thiết thì có thể để null hoặc undefined
 */
export abstract class BaseDTO {
  @Expose()
  id: number
  @Expose()
  createdAt: Date
  @Expose()
  updatedAt: Date
  @Expose()
  deletedAt?: Date
  @Expose()
  createdBy?: string
  @Expose()
  updatedBy?: string
  @Expose()
  deletedBy?: string
  @Expose()
  isDeleted?: boolean
  @Expose()
  isArchived?: boolean
  @Expose()
  version?: number
  constructor() {
    this.id = 0
    this.createdAt = new Date()
    this.updatedAt = new Date()
    this.deletedAt = new Date()
    this.createdBy = null
    this.updatedBy = null
    this.deletedBy = null
    this.isDeleted = false
    this.isArchived = false
    this.version = null
  }
  /**
   * <T> dùng để định nghĩa kiểu dữ liệu cho một biến hoặc một function, nó là dạng generic type. Nghĩa là nó có thể nhận bất kỳ kiểu dữ liệu nào từ bên ngoài truyền vào khi sử dụng nó (ví dụ: T có thể là string, number, boolean, object, array, function, promise, observable, ...) - T là một kiểu dữ liệu động (dynamic type) và nó sẽ được xác định khi sử dụng nó (ví dụ: T sẽ là string khi truyền vào một string, T sẽ là number khi truyền vào một number, ...) - Giống any nhưng nó sẽ giữ nguyên kiểu dữ liệu của biến hoặc function đó còn any sẽ mất đi kiểu dữ liệu
   * @param this dùng để trỏ tới class hiện tại
   * @param plain dùng để chuyển một plain object sang một class object
   * @returns dữ liệu sau khi chuyển đổi
   * <Record<string, any>> dùng để định nghĩa kiểu dữ liệu cho một object, nó là một object với các property là string và giá trị của các property có thể là bất kỳ kiểu dữ liệu nào. Ví dụ: { name: 'John Doe', age: 25 } hoặc { id: 1, name: 'John Doe', age: 25 }
   */
  static plainToClass<T>(this: new () => T, obj: Record<string, any>): T {
    return plainToClass(this, obj, { excludeExtraneousValues: true })
  }
}
