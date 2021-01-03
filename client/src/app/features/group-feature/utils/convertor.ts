import {StGroupAllData, StGroupAllDataInput, StGroupPartialData, StUserPartialInformation} from '../../../api/customGraphql.service';
import {GroupForm} from '../model/group.model';

export const convertStGroupAllDataToStGroupPartialData = (data: StGroupAllData): StGroupPartialData => {
    const result: StGroupPartialData = {
        __typename: 'STGroupPartialData',
        groupId: data.groupId,
        imageUrl: data.imageUrl,
        imagePath: data.imagePath,
        createdDate: data.createdDate,
        name: data.name,
        currentAchievedRanks: data.currentAchievedRanks,
        description: data.description,
        lastEditedDate: data.lastEditedDate,
        lastUpdateDate: data.lastUpdateDate,
        owner: data.owner,
        portfolio: data.portfolio
    };

    return result;
};

export const createSTGroupAllDataInput = (ownerId: string,
                                          form: GroupForm,
                                          invitationSent: StUserPartialInformation[] = [],
                                          invitationReceived: StUserPartialInformation[] = [],
                                          managers: StUserPartialInformation[] = [],
                                          members: StUserPartialInformation[] = []) => {
    const result: StGroupAllDataInput = {
        name: form.name,
        description: form.description,
        imagePath: form.imagePath,
        imageUrl: form.imageUrl,
        owner: ownerId,
        invitationReceived: [...invitationReceived.map(x => x.uid)],
        managers: [...managers.map(x => x.uid)],
        members: [...members.map(x => x.uid)],
        invitationSent: [...invitationSent.map(x => x.uid)]
    };
    return result;
};
