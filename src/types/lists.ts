export interface List {
    id: number;
    order?: any;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    boardId: number;
    cards: Card[];
}
export interface Card {
    id: number;
    title: string;
    description?: any;
    duedate?: any;
    createdAt: Date;
    updatedAt: Date;
    listId: number;
    labels: Label[];
    checklists: CheckList[];
    comments: Comment[];
}
export interface Comment {
    cardId: number;
    message: StringConstructor;
}
export interface Label {
    cardId: number;
    labelId: number;
}
export interface CheckList {
    title: string;
    cardId: number;
}
