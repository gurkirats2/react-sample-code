import { IError } from "./error.model";

export interface ResponseData<TModel> {
  data: TModel;
  error: IError;
}
