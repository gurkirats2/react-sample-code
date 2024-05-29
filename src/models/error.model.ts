export interface IError {
    data: {
      isSuccess: boolean;
      code: number;
      error: string;
      message: string;
    };
  }
  