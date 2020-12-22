import {StGroupAllDataInput, StUserPartialInformation} from '../../../api/customGraphql.service';

export interface GroupForm {
    name: string;
    description: string;
    imagePath: string;
    imageUrl: string;
}


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
