export default class AppValidationError extends Error {
    public code: number

    constructor(message: string, code: number = 422) {
        super(message)
        this.name = 'AppValidationError'
        this.code = code
    }
}

export class AppValidationErrorWithData<T = any> extends AppValidationError {
    public data: T

    constructor(message: string, data: T) {
        super(message)
        this.name = 'AppValidationErrorWithData'
        this.data = data
    }
}
