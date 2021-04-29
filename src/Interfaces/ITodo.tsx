//********************************************************************/
// This is the interface for TODO objects
//********************************************************************/
export default interface ITodo {
    _id:string;
    text:string|null;
    created:Date|null;
    done:boolean;
    deleted:Date|null;
}