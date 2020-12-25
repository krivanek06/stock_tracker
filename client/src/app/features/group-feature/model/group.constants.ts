import {GroupMemberPosition} from './group.model';
import {GroupMemberPositionChangeEnum} from './group.enum';

export const GROUP_PROMOTE_RECEIVED_INVITATION: GroupMemberPosition[] = [
    {label: 'Accept user', values: GroupMemberPositionChangeEnum.ACCEPT_RECEIVED_INVITATION},
    {label: 'Decline user', values: GroupMemberPositionChangeEnum.REMOVE_RECEIVED_INVITATION}
];

export const GROUP_PROMOTE_SENT_INVITATION: GroupMemberPosition[] = [
    {label: 'Remove invitation', values: GroupMemberPositionChangeEnum.REMOVE_SENT_INVITATION}
];

export const GROUP_PROMOTE_MEMBER: GroupMemberPosition[] = [
    {label: 'Promote to manager', values: GroupMemberPositionChangeEnum.SET_AS_MANAGER},
    {label: 'Remove from group', values: GroupMemberPositionChangeEnum.REMOVE_MEMBER}
];

export const GROUP_PROMOTE_MANAGER: GroupMemberPosition[] = [
    {label: 'Set as owner', values: GroupMemberPositionChangeEnum.SET_AS_OWNER},
    {label: 'Remove as manager', values: GroupMemberPositionChangeEnum.REMOVE_MANAGER}
];
