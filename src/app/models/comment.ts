export class Comment{
    constructor(
        public _id: string,
        public userId: string,
        public projectId: string,
        public userName: string,
        public userEmail: string,
        public comment: string,
    ){}
}
