import {GroupMemberPositionChangeEnum} from './group.enum';

export interface GroupMemberPosition {
    label: string;
    values: GroupMemberPositionChangeEnum;
}

export interface GroupForm {
    name: string;
    description: string;
    imagePath: string;
    imageUrl: string;
}
