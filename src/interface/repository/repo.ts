export default interface API {
  get(id: string, params?: any): any;
  post(params: any): any;
  put(params: any): any;
  delete(id: string): any;
}
