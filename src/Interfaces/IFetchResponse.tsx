//********************************************************************/
// This is the interface fot the reponse of each call
//********************************************************************/
export default interface IFetchResponse {
    success:Boolean;
    message:string;
    results:Array<any>;
}